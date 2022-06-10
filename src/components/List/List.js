import { useEffect, useState } from "react";

function List() {
  const [Arrays, setArrays] = useState([]);

  const [Arrayss, setArrayss] = useState({ count: 0, count2: 2 });

  

  function addLI(params) {
    setArrayss((prev) => ({ ...prev, count: Arrayss.count + 1 }));
  }

  useEffect(() => {
    setArrays([...Arrays]);
  }, [Arrayss]); 

  function addLI2(params) {
    setArrayss({ ...Arrayss, count2: Arrayss.count2 + 2 });
  }
  const output = () => {
    {Arrays.map(arr => {
      <li>{arr}</li>
    })}
  }

  console.log(Arrays);
  return (
    <>
      <div>
        <input type="text" value="" onChange="" />
        <button onClick={addLI}>+</button>
        <button onClick={addLI2}>++</button>
      </div>

      <ul>
        <div>{Arrayss.count}</div>

        <h2>{Arrayss.count2}</h2>

        <ul>Total click: {output} </ul>
      </ul>
    </>
  );
}

export default List;
