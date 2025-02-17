import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchJoke } from '../redux/jokeSlice';

const Joke = () => {
  const dispatch = useDispatch();
  const { data, isLoading, error } = useSelector((state) => state.joke);

  return (
    <div>
      <button onClick={() => dispatch(fetchJoke())} disabled={isLoading}>
        {isLoading ? 'Loading...' : 'Get a Joke'}
      </button>
      {error && <p>Error: {error}</p>}
      {data && <p>{data.setup} - {data.punchline}</p>}
    </div>
  );
};

export default Joke;