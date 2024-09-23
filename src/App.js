import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {

 let [score, setScore] = useState(0);
 let [balls, setBalls]   = useState(0)

 console.log("score");


  return (
    <div className="App">
      <h1>Score:{score}</h1>
      <h1>Balls:{balls}</h1>
      <button onClick={()=>{
        setScore(score+1);
        setBalls(balls+1);
      }}>Increment Score </button>

<button onClick={()=>{
        setScore(score+4);
        setBalls(balls+4);
      }}>Increment Score </button>

<button onClick={()=>{
        setScore(score-1);
        setBalls(balls-1);
      }}>Decrement Score </button>

<button onClick={()=>{
        setScore(score-4);
        setBalls(balls-4);
      }}>Decrement Score </button>


    </div>
  );
}

export default App;
