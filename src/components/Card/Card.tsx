import React, {useState} from "react";
import "./_Card.css"
import {Vortex} from "../Vortex/Vortex";
import {useToggle} from "../../utils/useToggle";

interface Props {
    title: string;
    pictures: string;
    setKey: any;
    id: string;
    isSame: boolean;
}

export const Card = ({title, pictures, isSame, setKey, id}:Props) => {
    const [isFocus, setIsFocus] = useState(false);
    const [isClick, setIsClick] = useToggle();

    const cardBack = (
        <>
            <h3 className={"Card_Title"}>{title}</h3>
            <div className={"Card_Image"}>
                <div className={"Card_Vortex"}>
                    <Vortex/>
                </div>
            </div>
        </>
    )

    const cardFront = (
        <>
            <h3 className={"Card_Title"}>{title}</h3>
            <div className={"Card_Image"}>
                <img className={"Card_Pictures"} src={pictures} alt={"Rick and Morty Card"}/>
            </div>
        </>
    )

    return (
        <div className={`Card${isFocus ? " Card_focus" : ""}`}
             id={id}
             onMouseEnter={() => setIsFocus(true)}
             onMouseLeave={() => setIsFocus(false)}
             onClick={(e) => {
                 setKey(e.currentTarget.id)
             }
        }
        >
            {isSame ? cardFront : cardBack}
        </div>
    )
}