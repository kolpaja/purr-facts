import React, { createContext, useEffect, useReducer } from 'react';
import { fetchCatFacts } from '../../api/axios';
import catFactsReducer from './catFactsReducer';

export const CatFactsContext = createContext();

export const CatFactsContextProvider = ({ children }) => {
  const initialState = {
    isLoading: false,
    catFacts: [],
    isError: false,
    hasNextPage: false,
    pageNr: 1,
  };

  const [state, dispatch] = useReducer(catFactsReducer, initialState);

  const fetchFacts = async () => {
    setLoading();

    const response = await fetchCatFacts(state.pageNr);
  };

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    // fetchCatFacts(pageNr, { signal })
    fetchFacts();

    return () => controller.abort();
  }, []);

  const setLoading = () => dispatch({ type: 'SET_LOADING' });
  return (
    <CatFactsContext.Provider value={{}}>{children}</CatFactsContext.Provider>
  );
};
