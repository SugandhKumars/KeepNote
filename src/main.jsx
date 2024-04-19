import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Note } from "./Context/NoteContext.jsx";
// import { NoteContext } from "./Context/NoteContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Note>
      <App />
    </Note>
  </React.StrictMode>
);
