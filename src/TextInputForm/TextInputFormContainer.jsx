import { useState } from "react";
import TextInputForm from "./TextInputForm";
import { useNavigate } from "react-router-dom";

function TextInputFormContainer(){

   const [inputType , setInputType] = useState('password')
   const [value , setValue] = useState("");
   const navigate = useNavigate("");

    function handleFormSubmit(event){
      console.log(event)
      event.preventDefault();
      console.log("form submitted " , value);
      if(value){
        navigate('/play' , { state : `${value}`});
      }
    }

    function handleTextInputChange(event){
      console.log("text input change");
      console.log(event.target.value);
      setValue(event.target.value);
      
    }

    function handleShowHideClick(){
      console.log("Show/Hide click");
      if(inputType=='password'){
        setInputType('text');
      } else {
        setInputType('password')
      }
    }

    return (
      <TextInputForm
      inputType={inputType}
      handleFormSubmit={handleFormSubmit}
      handleTextInputChange={handleTextInputChange}
      handleShowHideClick={handleShowHideClick}
      />
    )
}
export default TextInputFormContainer;