import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import NotFound from '../pages/NotFound';
import CardFact from './CardFact';
import { CatFactsContext } from '../context/catFactsContext';
import Loading from './Loading';

const ListFacts = () => {
  const [pageNr, setPageNr] = useState(1);
  const [hasReachEnd, setHasReachEnd] = useState(false);
  const intObserverRef = useRef();

  const {
    catFacts,
    isLoading,
    isError,
    lastPage,
    total,
    fetchFacts,
    hasNextPage,
  } = useContext(CatFactsContext);

  useEffect(() => {
    if (!catFacts || catFacts.length === 0) fetchFacts(1);
  }, [catFacts, isLoading]);

  const lastFactRef = useCallback(
    (fact) => {
      if (isLoading) return;

      // stop looking if the fact is intersecting
      if (intObserverRef.current) intObserverRef.current.disconnect();

      intObserverRef.current = new IntersectionObserver((catFacts) => {
        if (catFacts[0].isIntersecting && hasNextPage) {
          console.log('we are near the last element');
          setPageNr((prev) => prev + 1);
          if (lastPage > pageNr) {
            fetchFacts(pageNr);
          } else {
            setHasReachEnd(true);
          }
        }
      });

      if (fact) intObserverRef.current.observe(fact);
    },
    [isLoading, hasNextPage]
  );

  const listContent =
    catFacts &&
    catFacts.map((fact, idx) => {
      if (catFacts.length === idx + 1) {
        return (
          <CardFact key={fact.id} fact={fact} idx={idx} ref={lastFactRef} />
        );
      }
      return <CardFact key={fact.id} fact={fact} idx={idx} />;
    });

  if (catFacts.length === 0) return <NotFound />;

  if (isError) return <div>{error}</div>;

  return (
    <section id='facts' className='relative'>
      <h1 className='text-center text-xl font-bold mb-10'>
        Well now we explore... purrfect
      </h1>
      <div className='min-h-screen  grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3'>
        {/* rendering catFacts */}
        {listContent}
        {isLoading && (
          <div>
            <Loading />
            <h1>Loading more purr facts...</h1>
          </div>
        )}
      </div>
    </section>
  );
};

export default ListFacts;
