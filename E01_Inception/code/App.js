const heading = React.createElement("h1",{id:"parent"},[React.createElement("div",{id:"child1"},"I am child 1"),React.createElement("div",{id:"child2"},"I am child 2")]);

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(heading);