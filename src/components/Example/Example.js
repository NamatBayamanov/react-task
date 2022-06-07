import React, { useState } from "react";
import classes from "./Example.module.scss";


function Example() {

  const styles = {
    width: "10px",
  };
  // const ref = useRef(null);


  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    setInput(event.target.value);
  }

  function handleClick() {
    setItems([...items, input]);
    setInput("");
    // ref.current.focus();
  }



  function deleteElement(event) {
    setItems(
        items.map(item => {
          {}
        }
      )
    );
  };

  return ( 

    <>
      <div className={classes.Example}>
        <label>
          <input onChange={handleChange}  value={input} />
        </label>

        <button onClick={handleClick}> 
          Add
        </button>


        <ul className={classes.list}>
          {items.map(item =>  <><li>{item}</li><button style={styles} onClick={deleteElement}>-</button> </>)}

        </ul>
      </div>
    </>
  );
}

export default Example;