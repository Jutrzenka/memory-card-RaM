import React from "react";
import {Link} from "react-router-dom";

import "./_FormButton.css";

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