import React from "react";
import { createRoot } from "react-dom/client";

const App = () => {
  return (
    <div>
      <h1>Todo List</h1>
      <h2>Things to do:</h2>
    </div>
  )
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />)