import { useState, useEffect, useContext } from 'react';
import { fetchCatFacts } from '../api/axios';

const useCatFacts = (pageNr, perPage = 20) => {
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)
    const [error, setError] = useState(null)
    const [total, setTotal] = useState(null)
    const [hasNextPage, setHasNextPage] = useState(false)
    const [catFacts, setCatFacts] = useState([]);

    useEffect(() => {
        setIsLoading(true)
        setIsError(false)
        setError(null)

        const controller = new AbortController()
        const { signal } = controller

        fetchCatFacts(pageNr, { signal })
            .then((data) => {
                setIsLoading(false)
                setTotal(data.total)
                setCatFacts(prev => [...prev, ...data.data])
                setHasNextPage(Boolean(data.data.length))
            })
            .catch((error) => {
                setIsLoading(false)
                console.log(error);
                if (signal.aborted) return
                setIsError(true)
                setError(error.message)
            })

        return () => controller.abort()

    }, [pageNr])


    return { isLoading, isError, error, catFacts, hasNextPage, total }
}

export default useCatFacts