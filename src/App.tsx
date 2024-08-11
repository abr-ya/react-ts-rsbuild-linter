import "./App.css";
import Test from "@components/Test/Test";
import { ButtonGrey } from "@components/Button/Button.styles";
import { Button } from "./components";

const App = () => {
  return (
    <div className="content">
      <h1>Rsbuild with React!</h1>
      <Test text="Текст через проп!" />
      <Button design="green" ml={3}>
        Я кнопка
      </Button>
      <ButtonGrey ml={3} my={3}>
        Я серая кнопка
      </ButtonGrey>
      <Button design="grey" ml={3}>
        Я тоже серая кнопка
      </Button>
    </div>
  );
};

export default App;
