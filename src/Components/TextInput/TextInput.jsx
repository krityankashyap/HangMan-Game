function TextInput({label , type='text' , placeholder , onChangeHandler}){

  return (
    <>
    <label>
      <span className="text-gray-500">{label}</span>
      </label>
      <input 
         className="px-2 py-1 border border-black-500 round-md w-full"
         type = {type}
         placeholder= {placeholder}
         onChange={onChangeHandler}/>
    
    </>
  )
}
export default TextInput;