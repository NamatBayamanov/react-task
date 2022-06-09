import { useEffect, useState } from "react";

function UseEffects2() {


    const [number, setNumber] = useState(0)

    const [color, setColor] = useState({
        red: 0, green: 0, blue: 0
    })

    

    useEffect(() => {
        

        // const color = {
        //     red: Math.floor(Math.random() * 255),
        //     green: Math.floor(Math.random() * 255),
        //     blue: Math.floor(Math.random() * 255),
        // }

        setInterval(() => {
          setColor({
            red: Math.floor(Math.random() * 255),
            green: Math.floor(Math.random() * 255),
            blue: Math.floor(Math.random() * 255),
        })
        }, 1000);

    }, [])

    // sede effect: 
    // - alert()
    // - localStorage
    // - fetch - AJAX
    // - setInterval, setTimeout

    const styles = {
        color: ` rgb(${color.red}, ${color.green},${color.blue} )`
    }

    return ( 
        <div >
            <h1 style={styles}>Hello world</h1>
            <p>
                <span>{number}</span>
                <button onClick={() => setNumber(number + 1)}>+</button>
            </p>
        </div>
    );
}

export default UseEffects2;