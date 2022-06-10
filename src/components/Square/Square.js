import { useEffect, useState } from "react";

function Square() {

  const [angle, setAngle] = useState();

  const styles = {
    width: "200px",
    height: "200px",
    backgroundColor: "tomato",
    transform: `rotate(${angle}deg)`,
    transition: "all .3s",
  }

  useEffect(() => {
    setAngle(localStorage.getItem("angle"));
  }, []);

  function  Rotate(event) {
    setAngle(event.target.value);
    localStorage.setItem("angle", angle);
  }


  return ( 
    <div>
      <div className="App">
        <input type="range" min="0" max="360" onChange={Rotate} value={angle}/>
      </div>
      <div style={styles}></div>
    </div>
  );
}

export default Square;