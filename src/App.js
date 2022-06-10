import React, { useEffect, useState } from "react";
import Conclusion from "./components/Conclusion/Conclusion";
import { getCurs } from "./components/data/data";
import Example from "./components/Example/Example";
import ExchangeRate from "./components/ExchangeRate/ExchangeRate";
// import ExchangeRate from "./components/ExchangeRate/ExchangeRate";
import Input1 from "./components/Input1/Input1";
import Input2 from "./components/Input2/Input2";
import List from "./components/List/List";
import Square from "./components/Square/Square";
import UseEffects from "./components/UseEffects/UseEffects";
import UseEffects2 from "./components/UseEffects/UseEffects2/UseEffects2";
import Wheather from "./components/Wheather/Wheather";
// import Reacts from "./components/Reacts/Reacts";

// import Example2 from "./components/Example2/Example2";

function App() {
  // const styles = {
  //   border: "2px solid red",
  //   width: "75%",
  // };

  // const [input, setInput] = useState();

  // function change(event) {
  //   setInput(
  //     event.target.value
  //   );
  // }

  // const [firstName, setFirstName] = useState([]);
  // const [lastName, setLastName] = useState();
  // const [grade, setGrade] = useState();

  // function addList(event) {
  //   // alert(`${firstName} ${lastName} ${grade}`);
  //   alert(firstName + " " + lastName + " " + grade);

  //   const newFirstName = {
  //     name: "",
  //   }

  // setFirstName([...firstName], newFirstName);

  // }

  // function FirstName(event) {
  //   setFirstName(event.target.value);
  // }

  // function LastName(event) {
  //   setLastName(event.target.value);
  // }

  // function showGrade(event) {
  //   setGrade(event.target.value);
  // }

  // const [exchangeRates, setExchangeRates] = useState([]);

  // const [baseCurrency, setBaseCurrency] = useState("KGS");


  // const fetchData = () => {
  //   fetch(`http://www.floatrates.com/daily/${baseCurrency}.json`) // make http request
  //     .then((response) => response.json())
  //     .then((data) => setExchangeRates(data));
  // }


  // useEffect(() => fetchData, [setExchangeRates]);

  // const output = Object.values(exchangeRates).map(currency => (
  //   <ExchangeRate
  //     from={baseCurrency}
  //     to={currency.code}
  //     rate={currency.inverseRate}
  //   />
  // ));



  // function UpdateFunc() {
  //    fetch(`http://www.floatrates.com/daily/${baseCurrency}.json`) // make http request
  //     .then((response) => response.json())
  //     .then((data) => setExchangeRates(data));
  // }

  

  // function changeValueCurs(event) {
    
  
  // }

  // const CURS = (event) => {
  //   setBaseCurrency(event.target.value);
  // }
  
  
  return (
    <div className="App">

    {/* <button onClick={fetchData}>Update</button>
    <div >
    <input type="text" value={baseCurrency} onChange={CURS}/>
        </div>
        {output} */}

      

      {/* <Example/> */}
      {/* <Reacts/> */}
      {/* <Example2/> */}

      {/* <ExchangeRate from="EUR" to="KGS"/>
        <ExchangeRate from="N" to="L"/>
        <Input1 act={change} state={input}/>
        <Input2 act={change} state={input}/>  */}

      {/* <input type="text" value={firstName} onInput={FirstName} />

      <input type="text" value={lastName} onInput={LastName} />

      <input type="number" value={grade} onInput={showGrade} />

      <button onClick={addList}>+</button>

      <table style={styles}>
        <tr>
          {firstName.map(oneNeme => <th>{oneNeme}</th>)} */}
      {/* {items2.map(item2 => <th>{item2}</th>)}
          {items3.map(item3 => <th>{item3}</th>)} */}
      {/* </tr>
      </table>  */}

      {/* <UseEffects/>
      <UseEffects2/> */}

      {/* <ExchangeRate from="USD" to="KGS" rate={}/> */}
        {/* <List/> */}

        {/* <Wheather/> */}

        {/* <Conclusion/> */}

        <Square/>
    </div>
  );
}

export default App;
