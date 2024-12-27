import Button from "../Components/Button/Button";
import TextInput from "../Components/TextInput/TextInput";


function TextInputForm({inputType , handleFormSubmit , handleTextInputChange , handleShowHideClick}){

return (
  <form onSubmit={handleFormSubmit}>
    <div>
      <TextInput 
         type={inputType} 
         label = {"Enter your input"}
         placeholder={"Hii there write your input!...."}
         onChangeHandler={handleTextInputChange}
         
      />
    </div>

    <div>
      <Button 
        styleType={"warning"}
        text={inputType=='password'?'show':'Hide'}
        onClickHandler={handleShowHideClick}
      />
    </div>

    <div>
      <Button 
      type="submit"
      styleType={"success"}
      text="Submit"
      />
    </div>

  </form>
  )
}

export default TextInputForm;