import { Link, useLocation } from "react-router-dom";
import MaskedText from "../Components/MaskingLetters/MaskedText";
import LetterButtons from "../LettersButtons/LettersButtons";
import { useState } from "react";
import HangMan from "../HangMan/HangMan";
function PlayGame(){

  const { state } = useLocation();
  const [guessedLetters , setguessedLetters] = useState([]);
  const [steps , setSteps] = useState(0);



  function handleLetterClick(letters){
    if(state.toUpperCase().includes(letters)){
      console.log("correct");
       }  else {
        setSteps(steps +1);
        console.log("wrong");
       }
    setguessedLetters([...guessedLetters , letters]);
  }
  
  return (
    <>
      <h1>PlayGame </h1>
      <MaskedText text={state} guessedLetters={guessedLetters}/>
      <div>
           
      <LetterButtons text={state} guessedLetters={guessedLetters } onLetterClick={handleLetterClick} />
      </div>

      <div>
        <HangMan steps={steps} />
      </div>
     
      <Link to = '/start' className = {"text-blue-700"}>StartGame </Link>

     </>
  )
}

export default PlayGame;