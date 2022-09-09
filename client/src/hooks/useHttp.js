import {useCallback, useState} from "react";

export const useHttp = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const request = useCallback( async (url, method = "GET", body = null, headers = {'Content-Type':'application/json'} )=> {
        setLoading(true);

        try{
            const responce = await fetch(url, {method, body, headers});

            if (!responce.ok) {
                throw new Error(responce.status);
            }

            const data = await responce.json();
            setLoading(false);
            return data;
        }catch (err) {
            setLoading(false);
            setError(err);
            throw err;
        }

    },[]);

    const cleanError = useCallback(() => {
        setError(null)
    }, [])

    return {loading, error, request, cleanError};
}