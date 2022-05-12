import {Dispatch, useEffect, useState} from "react";
import { CardInterface } from "../components/Card/CardInterface";
import {useToggle} from "./useToggle";

export const useHandleChoice = ():[CardInterface | null, CardInterface | null, Dispatch<CardInterface | null>, Dispatch<void>, Dispatch<void>] => {
    const [card, handleCard] = useState<CardInterface | null>(null);
    const [reset, toggleReset] = useToggle();
    const [choiceOne, setChoiceOne] = useState<CardInterface | null>(null);
    const [choiceTwo, setChoiceTwo] = useState<CardInterface | null>(null);
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