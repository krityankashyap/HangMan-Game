/**
 * 
 * @param {word that thas been given as i/p and expected to be gussed} originalWord 
 * @param {Letters which as has been gussed} guessedWord 
 */

export function getMaskedString(originalWord , guessedLetters){
  guessedLetters = guessedLetters.map(letters => letters.toUpperCase());

    const guessedWordset = new Set(guessedLetters);

    const result = originalWord.toUpperCase().split('').map(char =>{
      if(guessedWordset.has(char)){
        return char;
      } else {
        return '_' 
      }
    })
        return result;
}
export default getMaskedString;