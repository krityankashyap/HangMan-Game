import { Link } from "react-router-dom";
import TextInputFormContainer from "../TextInputForm/TextInputFormContainer";

function StartGame() {

  return (
    <>
      <TextInputFormContainer />
      <Link to = '/play' className={"text-green-700"}>PlayGame</Link>
    </>
  )
}

export default StartGame;