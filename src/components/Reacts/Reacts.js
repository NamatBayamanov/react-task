import React from "react";

function Reacts() {
  const app = React.createElement(
    "div",
    { className: "div", className: "classNamediv" },
    React.createElement("h1", { className: "h1" }, "hello world!")
  );

  return (
    <>
      <div>
        {app}
      </div>
    </>
  );
}

export default Reacts;
