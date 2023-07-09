import { useState, useEffect } from "react";
import axios from "axios";
// import {RAPID_API_KEY} from '@env';

// const rapidAPiKey = RAPID_API_KEY;

const useFetch = (endpoint, query) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        params: {...query},
        headers: {
            'X-RapidAPI-Key': '0d65aba57amsh01289a66c1b4e20p1a2690jsn8d9f25363b8b',
            'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        }
    };

    const fetchData = async () => {
        setIsLoading(true);
        try {
            const res = await axios.request(options);
            setData(res.data.data);
            setIsLoading(false);
        } catch(error) {
            setError(error);
            alert('There is an error');
        } finally {
            setIsLoading(false);
        }
    }
    useEffect(() => {
        fetchData();
    }, []);
    const refetch = () => {
        setIsLoading(true);
        fetchData();
    };
    return {data, isLoading, error, refetch};
}

export default useFetch;