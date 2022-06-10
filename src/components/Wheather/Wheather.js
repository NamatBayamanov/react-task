import { useEffect, useState } from "react";

function Wheather() {
  const [name, setName] = useState("");

  useEffect(() => {
    setName(localStorage.getItem("name"));
  }, []);

  console.log();

  function onNameChange({ target }) {
    // Create / Update
    localStorage.setItem("name", target.value);
    setName(target.value);
  }

  function onNameClear(params) {
    // Delete

    localStorage.removeItem("name");
    setName("");
  }

  return (
    <>
      <div className="Wheather">
        <input
          type="text"
          value={name}
          placeholder="Your name"
          onChange={onNameChange}
        />

        <spane>Your name is {name}</spane>

        <button onClick={onNameClear}>clear</button>
      </div>
    </>
  );
}

export default Wheather;
