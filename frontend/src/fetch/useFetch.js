import { useEffect } from "react";
import { useState } from "react"


const useFetch = (url, option, dependencies = []) => {

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {

        const fetchData = async () => {
            try {
                const response = option ? await fetch(url, option) : await fetch(url);
                if (!response.ok) throw new Error(result.mesagge || "The fetch request faiied :(")
                const result = await response.json();

                setData(result);

            } catch (error) {
                if (!(error instanceof (Error))) console.log(error);
                setError(error)
            } finally {
                setIsLoading(false)
            }
        }
        fetchData()
    }, dependencies);
    return { data, error, isLoading };
};