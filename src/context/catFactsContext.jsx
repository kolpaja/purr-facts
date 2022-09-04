import React, { createContext, useState } from 'react';
import { fetchCatFacts } from '../api/axios';

export const CatFactsContext = createContext();

export const CatFactsContextProvider = ({ children }) => {
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem('facts')) || []
  );
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [hasNextPage, setHasNextPage] = useState(true);
  const [lastPage, setLastPage] = useState(null);
  const [total, setTotal] = useState(
    JSON.parse(localStorage.getItem('total')) || 0
  );

  const fetchFacts = async (pageNr) => {
    setIsLoading(true);
    let preData = [];

    try {
      const response = await fetchCatFacts(pageNr);
      setLastPage(response.last_page);
      setTotal(response.total);
      setHasNextPage(Boolean(response.data));

      if (response.current_page > 1) {
        preData = [...data, ...response.data];
      } else {
        preData = [...response.data];
      }

      const mutateData = preData.map((item, idx) => {
        return { ...item, id: `fact-${idx + 1}` };
      });

      setIsLoading(false);
      localStorage.setItem('facts', JSON.stringify(mutateData));
      localStorage.setItem('total', JSON.stringify(response.total));
      setData(mutateData);
    } catch (error) {
      console.log(error);
      setIsError(true);
    }
  };

  const deleteFact = (factId) => {
    localStorage.setItem(
      'facts',
      JSON.stringify(data.filter((item) => item.id !== factId))
    );
    setData(JSON.parse(localStorage.getItem('facts')));
    return { message: 'Cat Fact deleted' };
  };

  return (
    <CatFactsContext.Provider
      value={{
        catFacts: data,
        isLoading,
        isError,
        lastPage,
        hasNextPage,
        total,
        fetchFacts,
        deleteFact,
      }}
    >
      {children}
    </CatFactsContext.Provider>
  );
};
