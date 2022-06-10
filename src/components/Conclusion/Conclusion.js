import { useEffect, useState } from "react";

function Conclusion() {
  const [count, setCount] = useState();

  function onIncrement(params) {
    setCount(count + 1);
  }

  useEffect(() => {
    setCount(+localStorage.getItem("onDec"));
  });

  function onDecrement(event) {
    setCount(count - 1);
    // localStorage.setItem("onDec", event.target);
    setCount(localStorage.setItem("count", count));
  }

  


  console.log(setCount);

  return (
    <>
      <button onClick={onIncrement}>Increment</button>

      <button onClick={onDecrement}>Decrement</button>

      <div>
        <span>{count}</span>
      </div>
    </>
  );
}

export default Conclusion;
