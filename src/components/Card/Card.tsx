import React from "react";
import {Vortex} from "../Vortex/Vortex";
import "./_Card.css"

interface Props {
    pictures: string;
    handleChoice: () => void;
    flipped: boolean;
}

export interface CardInterface {
    index: number,
    key: string,
    pictures: string,
    matched: boolean,
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
            <div className={"Card"}>
                <div className={"Card_Background"}
                     onClick={handleChoice}
                >
                    <div className={flipped ? "flipped" : ""}>
                        {flipped ? cardFront : cardBack}
                    </div>
                </div>
            </div>
    )
}