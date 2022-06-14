import { useState } from "react";

function ToDossform({addTask}) {

  const [userInput, setUserInput] = useState("");


  const onSubmit = (event) => {
    event.preventDefault();
    addTask(userInput);
    setUserInput("");
  }

  const onChange = (event) => {
    setUserInput(event.currentTarget.value);
  }

  return ( 
    <>
      <form onSubmit={onSubmit}>
        <input type="text" value={userInput} onChange={onChange}/>
        <button >Send</button>
      </form>
    </>
  );
}

export default ToDossform;