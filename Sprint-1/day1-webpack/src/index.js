

import react from "react";
import reactDom  from "react-dom";

import "./index.css";

const h1 = react.createElement("h1", {className : "redtext"}, "Hello React!");

reactDom.render(
    h1,
    document.getElementById("root")
)