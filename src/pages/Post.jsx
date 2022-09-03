import React, { useEffect } from 'react';
import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CatFactsContext } from '../context/CatFacts/catFactsContext';

function POSTS() {
  let { factId } = useParams();
  // todo check fact id because we increment +1

  // const { catFacts, setCatFacts } = useContext(CatFactsContext);

  // console.log(catFacts);
  // useEffect(() => {}, []);

  return (
    <div className=''>
      <h1>Checking for quote nr {factId}</h1>
    </div>
  );
}

export default POSTS;
