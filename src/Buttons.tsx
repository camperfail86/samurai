import {Button} from "./components/Button.styled";
import "./App.css";

function Buttons(props: any) {
  return (
    <div className="buttons">
      <Button backgroundColor={props.colors.blue}>See more</Button>
      <Button color={props.colors.blue}>Save</Button>
    </div>
  )
}

export default Buttons;