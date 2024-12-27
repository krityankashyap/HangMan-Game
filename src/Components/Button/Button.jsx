import getButtonStyling from "./getButtonStyling.js";
function Button({text , onClickHandler , styleType='primary' , type='button'}){
  
 return (
    <button
    onClick = {onClickHandler}
    type={type}
    className={`px-4 py-2 border-gray-500 ${getButtonStyling(styleType)}`}
    >
      {text}
    </button>
 );

}
export default Button;