import React from "react";
import {Navigate, useParams} from "react-router-dom";

import "./GameView.css"

const isCorrectAmount = (value:string | undefined) => {
    if (value !== undefined) {
        if (/\d/g.test(value)){
            if (Number(value) >= 2 && Number(value) <= 10) {
                return true;
            }
        }
    }
    return false;
}

export const GameView = () => {
    const {amount} = useParams();
    // catch wrong amount
    if (!isCorrectAmount(amount)) return (<Navigate to={"/error/wrong-amount"}/>)
    // GameView
    return (
        <div className={"GameView"}>
            <h1>GAME VIEW</h1>
        </div>
    )
}