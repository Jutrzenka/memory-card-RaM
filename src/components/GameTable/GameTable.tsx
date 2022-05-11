import React, {useEffect, useState} from "react";
import { Card } from "../Card/Card";

import "./_GameTable.css"
import {useFetch} from "../../utils/useFetch";
import {FetchComponent} from "../FetchComponent/FetchComponent";
import {shuffleArray} from "../../utils/shuffleArray";
import {randomNumber} from "../../utils/randomNumber";
import { useHandleChoice } from "../../utils/useHandleChoice";
import {Navigate} from "react-router-dom";

interface Props {
    amountCard: number;
    increaseTurn: any;
    turns: number;
}

export const GameTable = ({amountCard, increaseTurn, turns}:Props) => {
    // Set array cards
    const [page] = useState(randomNumber(1, 38));
    const [cardArray, setCardArray] = useState<any[]>([]);
    const [data, loading, error] = useFetch(`https://rickandmortyapi.com/api/character?page=${page}`);
    useEffect(() => {
        let array = [];
        if (data !== null) {
            for (let i=1; i <= amountCard; i++) {
                array.push({index:`${i}A`, pictures:data.results[i].image, matched:false});
                array.push({index:`${i}B`, pictures:data.results[i].image, matched:false});
            }
            const shuffleCardArray = shuffleArray(array);
            setCardArray(shuffleCardArray);
        }
    },[data])

    // Compare two cards
    const [cardOne, cardTwo, setHandle, pairReset, timeReset]:any = useHandleChoice();
    const [pairAmount, setPairAmount] = useState(0);

    useEffect(() => {
        if (cardOne && cardTwo) {
            timeReset();
            // When pair
            if (cardOne.index[0] === cardTwo.index[0]) {
                setCardArray((prevCards) => {
                    return prevCards.map(card => {
                        if (cardOne.index[0] === card.index[0]) {
                            setPairAmount(prev => prev + 1);
                            return {...card, matched:true}
                        } else {
                            return card;
                        }
                    })
                })
            }
            // Reset
            const timer = setTimeout(() => {
                pairReset();
                timeReset();
                increaseTurn((prevTurns:number) => prevTurns + 1);
            }, 500);
            return () => clearTimeout(timer);
        }
    },[cardOne, cardTwo])

    if (amountCard * 4 === pairAmount) {return (<Navigate to={`/win/${turns}`}/>)}

    return (
        <FetchComponent data={data} loading={loading} error={error}>
            <div className={"GameTable"}>
                <div className={"GameTable_Container"}>
                    {cardArray.map(card => <Card
                        key={card.index}
                        flipped={card.matched || card === cardOne || card === cardTwo}
                        handleChoice={() => setHandle(card)}
                        pictures={data.results[card.index[0]].image}
                    />)}
                </div>
            </div>
        </FetchComponent>
    )
}