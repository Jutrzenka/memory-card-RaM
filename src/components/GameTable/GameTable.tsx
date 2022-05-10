import React, {ReactNode, useEffect, useState} from "react";
import { Card } from "../Card/Card";

import "./_GameTable.css"
import {useFetch} from "../../utils/useFetch";
import {FetchComponent} from "../FetchComponent/FetchComponent";
import {shuffleArray} from "../../utils/shuffleArray";
import {randomNumber} from "../../utils/randomNumber";
import {useChangeTwo} from "../../utils/useChangeTwo";

interface Props {
    amountCard: number;
    isStarted: boolean;
}

export const GameTable = ({amountCard, isStarted}:Props) => {
    const [isSame, setKey] = useChangeTwo();
    const [page] = useState(randomNumber(1, 40));
    const [cardArray, setCardArray] = useState<ReactNode[]>([]);
    const [data, loading, error] = useFetch(`https://rickandmortyapi.com/api/character?page=${page}`);
    useEffect(() => {
        let array = [];
        if (data !== null) {
            for (let i=0; i < amountCard; i++) {
                if (!isSame) {
                    array.push(<Card key={`${i}A`} isSame={isSame} id={`${i}A`} setKey={setKey} pictures={data.results[i].image} title={"Rick and Morty"}/>);
                    array.push(<Card key={`${i}B`} isSame={isSame}  id={`${i}B`} setKey={setKey} pictures={data.results[i].image} title={"Rick and Morty"}/>);
                } else {
                    array.push(<Card key={`${i}A`} isSame={isSame} id={`${i}A`} setKey={setKey} pictures={data.results[i].image} title={"Morty and Rick"}/>);
                    array.push(<Card key={`${i}B`} isSame={isSame} id={`${i}B`} setKey={setKey} pictures={data.results[i].image} title={"Morty and Rick"}/>);
                }
            }
            if (!isSame) {
                const shuffleCardArray = shuffleArray(array);
                setCardArray(shuffleCardArray);
            }
        }
    },[isSame])

    return (
        <FetchComponent data={data} loading={loading} error={error}>
            <div className={"GameTable"}>
                <div className={"GameTable_Container"}>
                    {cardArray}
                </div>
            </div>
        </FetchComponent>
    )
}