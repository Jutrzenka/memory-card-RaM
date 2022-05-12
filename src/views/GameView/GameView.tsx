import React, {useState} from "react";
import {Navigate, useParams} from "react-router-dom";

import "./_GameView.css"
import {GameTable} from "../../components/GameTable/GameTable";

const isCorrectAmount = (value:string | undefined) => {
    if (value !== undefined) {
        if (/\d/g.test(value)){
            if (Number(value) >= 6 && Number(value) <= 10) {
                return true;
            }
        }
    }
    return false;
}

export const GameView = () => {
    const {amount} = useParams();
    const [turns, increaseTurn] = useState<number>(0);

    // catch wrong amount
    if (!isCorrectAmount(amount)) return (<Navigate to={"/error/wrong-amount"}/>)
    // GameView
    return (
        <div className={"GameView"}>
            <h1 className={"GameView_ErrorMessage"}>Sorry, your device is too narrow</h1>
            <GameTable turns={turns} amountCard={Number(amount)} increaseTurn={increaseTurn}/>
        </div>
    )
}