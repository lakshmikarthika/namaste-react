// const heading = document.createElement("h1");
// heading.innerHTML = "Hello World";
// document.getElementById("root").appendChild(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));
const child = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "In H1"),
    React.createElement("h2", {}, "In H2"),
  ])
);
root.render(child);
