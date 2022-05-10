import {useEffect, useState} from "react";

export const useChangeTwo = ([newKey, oldKey]:[string, string] = ["YYY", "ZZZ"]):[boolean, (key:string) => void] => {
    const [prevKey, setPrevKey] = useState(oldKey);
    const [actuallyKey, setActuallyKey] = useState(newKey);

    const [isSame, setSame] = useState<boolean>(false);

    useEffect(() => {
        if (prevKey[0] === actuallyKey[0]) setSame(true);
        if (prevKey[0] !== actuallyKey[0]) setSame(false);
        setPrevKey(actuallyKey);
    }, [actuallyKey, prevKey])
    return [isSame, setActuallyKey];
}