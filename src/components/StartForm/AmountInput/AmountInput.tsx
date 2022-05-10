import React from "react";
import {Actions, verifyAmount} from "../../../utils/verifyAmount";

import "./AmountInput.css";

interface Props {
    amount: number;
    setAmount: any;
}

export const AmountInput = ({amount, setAmount}:Props) => {
    return (
        <div className={"AmountInput"}>
            <button className={"AmountInput_button-left"}
                    onClick={() => setAmount((prev:number) => verifyAmount(prev, Actions.SUBTRACT))}
            />
            <h2 className={"AmountInput_amount"}>
                {amount === 5 ? "Standard" : `${amount} pair of cards`}
            </h2>
            <button className={"AmountInput_button-right"}
                    onClick={() => setAmount((prev:number) => verifyAmount(prev, Actions.ADD))}
            />
        </div>
    )
}