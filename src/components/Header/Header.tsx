import React from "react";

import "./_Header.css"

interface Props {
    title:string;
}

export const Header = ({title}:Props) => {
    return (
        <div className={"Header"}>
            <h1 className={"Header_title"}>{title}</h1>
        </div>
    )
}