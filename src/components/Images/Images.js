import axios from "axios";
import { useEffect, useState } from "react";
import Image from "./Image";
import "./Images.scss";
function Images() {

  const [images, setImages] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/photos')
    .then(({data}) => {setImages(data)})
  }, []);

  return ( 
    <div className="Images">
      {images.slice(0, 9).map((image) => <Image {...image}/>)}
    </div>
  );
}

export default Images;