import { useState, useEffect } from 'react';

export const useFetch = (url:string) => {
    const [data, setData] = useState<any>(null);
    const [loading, setLoading] = useState<null | boolean>(null);
    const [error, setError] = useState<boolean>(false);

    useEffect(() => {
        setLoading(true);
        setData(null);
        setError(false);
        (async()=> {
            try {
                const promise = await fetch(url);
                const data = await promise.json();
                setData(data);
                setLoading(false);
            } catch (err) {
                console.error(err);
                setError(true);
                setLoading(false);
            }
        })();
    }, [url])

    return [data, loading, error];
}