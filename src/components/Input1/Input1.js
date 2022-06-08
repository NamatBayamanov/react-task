function Input1({ act, state }) {
  return (
    <>
      <div>
        <input type="text" onInput={act} value={state} />
      </div>
    </>
  );
}

export default Input1;
