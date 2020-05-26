import React from "react";
import { createPortal } from "react-dom";

function Portals() {
  return createPortal(<Message />, document.getElementById("touchMe"));
}
const Message = () => "Jus touched it!";

function App() {
  return (
    <>
      <Portals />
    </>
  );
}

export default App;
