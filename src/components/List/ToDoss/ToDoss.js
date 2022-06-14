import "./ToDoss.css";


function ToDoss({currentValue, onRemove, toggle}) {
  return ( 
    <div className="Todoss" key={currentValue.id}>
      <div className={currentValue.complete ? "item-text strike" : "item-text"} onClick={() => toggle(currentValue.id)}>
        {currentValue.task}
      </div>
      <button onClick={() => onRemove(currentValue.id)}>X</button>
    </div>
  );
}

export default ToDoss;