
import { useState } from 'react';
import './App.css';
import Footer from './components/Footer/Footer';

function App() {
  const [counter,setCounter]=useState(0);

  const incrementvalue=()=>(
    setCounter(counter+1)
  )
  const decrementvalue=()=>(
    setCounter(counter-1)
  )
  return (
    <>
    <div className="App">
      <h1>Counter</h1>
      <h2>value : {counter}</h2>
      <button onClick={incrementvalue}>increment</button>
      <br/>
      <button onClick={decrementvalue}>decrement</button>
    </div>
    <Footer companyName="demo"/>
    </>
    
  );
}

export default App;
