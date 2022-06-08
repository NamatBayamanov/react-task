import { useState } from "react";
import { getCurs } from "./components/data/data";
import Example from "./components/Example/Example";
import ExchangeRate from "./components/ExchangeRate/ExchangeRate";
import Input1 from "./components/Input1/Input1";
import Input2 from "./components/Input2/Input2";
// import Reacts from "./components/Reacts/Reacts";

// import Example2 from "./components/Example2/Example2";

function App() {

  const [input, setInput] = useState();

  function change(event) {
    setInput(
      event.target.value
    );
  }

  return (
    <div className="App">
        <Example/>
        {/* <Reacts/> */}
        {/* <Example2/> */}

        <ExchangeRate from="USD" to="KGS"/>
        <ExchangeRate from="EUR" to="KGS"/>


        <Input1 act={change} state={input}/>
        <Input2 act={change} state={input}/>
    </div>
  );
}

export default App;
