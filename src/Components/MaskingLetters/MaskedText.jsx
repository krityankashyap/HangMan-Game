import getMaskedString from "./MaskingUtility";

function MaskedText({ text , guessedLetters}){

  const MaskedString = getMaskedString(text , guessedLetters);

  return (
    <>
        {MaskedString.map((letters , index)=>{
          return (
            <span key = {index} className="mx-2"> {letters} </span>
          )
        })}
    
    </>
  )
}
export default MaskedText;