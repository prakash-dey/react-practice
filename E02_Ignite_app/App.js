import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1", {}, "I am groot267");
const HeadingInJSX = () => <h1>I am jsx</h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
