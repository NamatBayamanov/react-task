import axios from "axios";
import { useEffect, useState } from "react";
import Article from "./Article";

function Articles() {

  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then(({data}) => setItems(data))
  }, []);


  return ( 
    <article>
      {items.slice(0, 10).map(item => <Article {...item}/>)}
    </article>
);
}

export default Articles;