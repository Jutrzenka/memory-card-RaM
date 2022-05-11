import React from "react";

import "./_FormButton.css";
import {Link} from "react-router-dom";

interface Props {
    urlStarted: string;
}

export const FormButton = ({urlStarted}:Props) => {
    return (
        <button className={"FormButton"}>
            <Link to={urlStarted} className={"FormButton_Link"}>start</Link>
        </button>
    )
}