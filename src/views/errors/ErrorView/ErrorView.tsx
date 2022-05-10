import React from "react";
import {useParams} from "react-router-dom";
import {WrongPath} from "../error/WrongPath";
import {WrongAmount} from "../error/WrongAmount";
import {ThisErrorIsNotExist} from "../error/ThisErrorIsNotExist";

import "./_ErrorView.css";

export const ErrorView = () => {
    const params = useParams();
    let select;
    switch (params.description) {
        case "wrong-path":
            select = <WrongPath/>; break;
        case "wrong-amount":
            select = <WrongAmount/>; break;
        default:
            select = <ThisErrorIsNotExist/>
    }
    return (
        <div className={"ErrorView"}>
            {select}
        </div>
    )
}