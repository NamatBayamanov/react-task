import { useEffect, useState } from "react";
import ToDoss from "./ToDoss/ToDoss";
import ToDossform from "./ToDossform/ToDossform";

function List() {

  const [todoss, setTodoss] = useState([]);

  const addTask = (userInput) => {
    if(userInput) {
      const newItem = {
        id: Math.random().toString(36).substr(2,9),
        task: userInput,
        complete: false,
      }

      setTodoss([...todoss, newItem]);
    }
  }
  


  const onRemove = (id) => {
    setTodoss([...todoss.filter((currentValue, index, arr) => { 
        return(
          currentValue.id !== id
        );
      })]);
  }

  console.log([...todoss])

  

  const onToggle = (id) => {
    setTodoss(
      [...todoss.map((currentValue, index, arr) => {
        return (
          currentValue.id === id ? {...currentValue, complete: !currentValue.complete} : {...currentValue}
        );
      })]
    );
  }
  
  
  return (
    <>
      <h2>List of Tasks: {todoss.length}</h2>
      <ToDossform addTask={addTask}/>
      {todoss.map((currentValue, index, arr) => {
        return (
          <ToDoss currentValue={currentValue} key={currentValue.id} toggle={onToggle} onRemove={onRemove} />
        );
      })}
    </>

  );
}

export default List;
