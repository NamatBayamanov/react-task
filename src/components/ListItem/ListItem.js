import axios from "axios";
import { useEffect, useState } from "react";
import Items from "./Items";

function  ListItem(params) {

  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/todos")
    .then(({data}) => setItems(data))
  }, []);



  return (

    <ul>
      {items.map(item => <Items {...item} />)}
    </ul>
  );
}


export default ListItem;