import React from "react";
import "./_Card.css"
import {Vortex} from "../Vortex/Vortex";
import {useToggle} from "../../utils/useToggle";
import {log} from "util";

interface Props {
    pictures: string;
    handleChoice: any;
    flipped: boolean;
}

export const Card = ({pictures, handleChoice, flipped}:Props) => {

    const cardBack = (
        <>
            <div className={"Card_Back"}>
                <div className={"Card_Vortex"}>
                    <Vortex/>
                </div>
            </div>
        </>
    )

    const cardFront = (
        <>
            <div className={"Card_Front"}>
                <div className={"Card_Images"}>
                    <div className={"Card_Pictures"}>
                        <img className={"Pictures"} src={pictures} alt={"Rick and Morty Card"}/>
                    </div>
                </div>
            </div>
        </>
    )

    return (
        <div className={"CardWrapper"}>
            <div className={"Card"}
                 onClick={handleChoice}
            >
                <div className={flipped ? "flipped" : ""}>
                    {flipped ? cardFront : cardBack}
                </div>
            </div>
        </div>
    )
}