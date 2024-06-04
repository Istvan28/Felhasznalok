// ReactDOM.render(
//   React.createElement("input", {
//     placeholder: "Help text",
//     onClick: () => console.log("Clicked"),
//     onMouseEnter: () => console.log("Mouse Over"),
//   }),
//   document.getElementById("app")
// );

// const helpText = "Help Text!!!";

// const elements = (
//   <div className="Main">
//     <h1>{helpText}</h1>
//     <input
//       placeholder={helpText}
//       onClick={inputClick}
//       onMouseEnter={mouseOver}
//     />
//     <p>{helpText === "Help Text!!!" ? "yes" : "no"}</p>
//   </div>
// );

import React from "react";
import * as ReactDOMClient from "react-dom/client";
import App from "./App";
import "./css/style.css";
import "./css/main.css";

const app = ReactDOMClient.createRoot(document.getElementById("app"));
app.render(<App />);
