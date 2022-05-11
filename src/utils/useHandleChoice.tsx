import {useEffect, useState} from "react";
import {useToggle} from "./useToggle";

export const useHandleChoice = () => {
    const [card, handleCard] = useState<any>(null);
    const [reset, toggleReset] = useToggle();
    const [choiceOne, setChoiceOne] = useState(null);
    const [choiceTwo, setChoiceTwo] = useState(null);
    const [timeReset, toggleTimeReset] = useToggle(true);

    useEffect(() => {
        if (timeReset) {
            choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
        }
    },[card]);
    useEffect(() => {
        setChoiceOne(null);
        setChoiceTwo(null);
    },[reset])
    return [choiceOne, choiceTwo, handleCard, toggleReset, toggleTimeReset]
}