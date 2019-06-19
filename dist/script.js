function Person(props) {
  return (
    React.createElement("div", { className: "person" },
    React.createElement("h1", null, props.name),
    React.createElement("p", null, "My age:", props.age)));


}

var app =
React.createElement("div", null,
React.createElement(Person, { name: "Yash", age: "22" }),
React.createElement(Person, { name: "Harsh", age: "20" }));



ReactDOM.render(app, document.querySelector('#app'));