import React, { useCallback, useRef, useState } from 'react';
import NotFound from '../pages/NotFound';
import useCatFacts from '../hooks/useCatFacts';
import CardFact from './CardFact';

const ListFacts = () => {
  const [pageNr, setPageNr] = useState(1);
  const intObserverRef = useRef();
  let catFacts = [];

  const lastFactRef = useCallback((fact) => {
    if (isLoading) return;

    // stop looking if the fact is intersecting
    if (intObserverRef.current) intObserverRef.current.disconnect();

    intObserverRef.current = new IntersectionObserver((catFacts) => {
      if (catFacts[0].isIntersecting && hasNextPage) {
        console.log('we are near the last element');
        setPageNr((prev) => prev + 1);
      }
    });

    if (fact) intObserverRef.current.observe(fact);
  }, []);

  const listContent = catFacts.map((fact, idx) => {
    if (catFacts.length === idx + 1) {
      return (
        <CardFact
          key={fact.fact + idx}
          fact={fact}
          idx={idx}
          ref={lastFactRef}
        />
      );
    }
    return <CardFact key={fact.fact + idx} fact={fact} idx={idx} />;
  });

  if (catFacts.length === 0) return <NotFound />;

  // if (isError) return <div>{error}</div>;

  return (
    <div className='min-h-screen grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3'>
      {/* rendering catFacts */}
      {listContent}
      {/* {isLoading && <h1>Loading more purr facts...</h1>} */}
    </div>
  );
};

export default ListFacts;
