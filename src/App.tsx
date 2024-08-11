import "./App.css";
import Test from "@components/Test/Test";
import { Button, ButtonGrey } from "@components/index";

const App = () => {
  return (
    <div className="content">
      <h1>Rsbuild with React!</h1>
      <Test />
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
