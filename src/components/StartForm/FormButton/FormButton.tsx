import React from "react";

import "./_FormButton.css";

interface Props {
    toggleStarted: () => void;
}

export const FormButton = ({toggleStarted}:Props) => {
    return (
        <button className={"FormButton"} onClick={toggleStarted}>
            <p className={"FormButton_p"}>start</p>
        </button>
    )
}