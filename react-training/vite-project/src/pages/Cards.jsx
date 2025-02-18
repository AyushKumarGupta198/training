import {useState} from 'react'
import Card from '../components/Card';
import axios from 'axios';
import useCardStore from '../store/useCardStore';
import { useEffect } from 'react';

function Cards() {
  const [cards, setCards] = useState([]);
  const {currentPage,setPage}=useCardStore();

  const cards_per_page=5;
  
  const lastidx = currentPage * cards_per_page;
  const firstidx = lastidx - cards_per_page;
  const currentCards = cards.slice(firstidx, lastidx);

  const fetchJoke=async()=>{
    try {
        const response = await axios.get('https://official-joke-api.appspot.com/random_joke');
        return `${response.data.setup} - ${response.data.punchline}`;
    } catch (error) {
      console.error('Error fetching joke:', error);
      return 'Failed to fetch a joke. Please try again!';
    }
  }

  const addCard = async () => {
    const newJoke = await fetchJoke();
    setCards([...cards, newJoke]);
    const totalPages = Math.ceil((cards.length+1)/cards_per_page);
    setPage(totalPages)
  };
  return (
    <div className=" p-8 ">
      <h1 className="text-2xl font-bold mb-4 text-center">Joke Cards Page</h1>
      <div className='flex justify-center'>
      <button
        onClick={addCard}
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4 hover:bg-blue-600"
      >
        Add Card
      </button>
      </div>
      <div className="grid grid-cols-1 gap-4 max-w-md mx-auto">
        {currentCards.map((joke, index) => (
          <Card key={index} joke={joke}/>
        ))}
      </div>

      
      <div className="fixed bottom-0 left-100 right-100 bg-white p-1 shadow-lg flex justify-between mt-6">
        <button
          onClick={() => setPage(currentPage - 1)}
          disabled={currentPage === 1}
          className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400 disabled:opacity-50"
        >
          Previous
        </button>
        <span className="text-lg font-bold">Page {currentPage}</span>
        <button
          onClick={() => setPage(currentPage + 1)}
          disabled={lastidx >= cards.length}
          className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400 disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default Cards