import React, {useEffect, useState} from "react";
import { Card, CardInterface } from "../Card/Card";
import {useFetch} from "../../utils/useFetch";
import {FetchComponent} from "../FetchComponent/FetchComponent";
import {shuffleArray} from "../../utils/shuffleArray";
import {randomNumber} from "../../utils/randomNumber";
import {useHandleChoice } from "../../utils/useHandleChoice";
import {useNavigate} from "react-router-dom";
import { v4 as uuid } from 'uuid';

import "./_GameTable.css"

interface Props {
    amountCard: number;
    increaseTurn: (value: (prevTurns:number) => number) => void;
    turns: number;
}

export const GameTable = ({amountCard, increaseTurn, turns}:Props) => {
    // Set array cards
    const [page] = useState<number>(randomNumber(1, 38));
    const [cardArray, setCardArray] = useState<CardInterface[]>([]);
    const [data, loading, error] = useFetch(`https://rickandmortyapi.com/api/character?page=${page}`);
    useEffect(() => {
        let array = [];
        if (data !== null) {
            for (let i=1; i <= amountCard; i++) {
                array.push({index: i, key: uuid(), pictures:data.results[i].image, matched:false} as CardInterface);
                array.push({index: i, key: uuid(), pictures:data.results[i].image, matched:false}  as CardInterface);
            }
            const shuffleCardArray = shuffleArray(array);
            setCardArray(shuffleCardArray);
        }
    },[data])

    // Compare two cards
    const [cardOne, cardTwo, setHandle, pairReset, timeReset] = useHandleChoice();

    const [pairAmount, setPairAmount] = useState<number>(0);

    useEffect(() => {
        if (cardOne && cardTwo) {
            timeReset();
            // When pair
            if (cardOne.index === cardTwo.index) {
                setCardArray((prevCards) => {
                    return prevCards.map(card => {
                        if (cardOne.index === card.index) {
                            setPairAmount(prev => prev + 1);
                            return {...card, matched:true}
                        } else {
                            return card;
                        }
                    })
                })
                // Reset
                pairReset();
                timeReset();
                increaseTurn(prevTurns => prevTurns + 1);
            } else {
                // Reset when card is not a pair
                const timer = setTimeout(() => {
                    pairReset();
                    timeReset();
                    increaseTurn((prevTurns:number) => prevTurns + 1);
                }, 500);
                return () => clearTimeout(timer);
            }
        }
    },[cardOne, cardTwo])

    // Redirect when player is winner
    const navigate = useNavigate()
    if (amountCard * 2 === pairAmount) navigate(`/win/${turns}`);

    return (
        <FetchComponent data={data} loading={loading} error={error}>
            <div className={"GameTable"}>
                <div className={"GameTable_Container"}>
                    {cardArray.map(card => <Card
                        key={card.key}
                        flipped={card.matched || card === cardOne || card === cardTwo}
                        handleChoice={() => setHandle(card)}
                        pictures={data.results[card.index].image}
                    />)}
                </div>
            </div>
        </FetchComponent>
    )
}