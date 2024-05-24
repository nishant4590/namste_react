/**
const heading = React.createElement("h1", {id:'heading'}, "Hello world from reactjs");
const root = ReactDOM.createRoot(document.getElementById("root"));
*/
/**
 *Nested Structure
 <div id="parent">
    <div id="child">
        <h1> I am in h1 tag</h1>
    </div>
</div>

React element is an object which becomes HTML that browser understands once it is rendered
 */

const parent = React.createElement("div", { id: "parent" },[ 
    React.createElement("div", {id: "child"},[
        React.createElement("h1", {}, "I am an h1 tag"),
        React.createElement("h2", {}, "I am an h2 tag"),
    ]),
    React.createElement("div", {id: "child2"},[
        React.createElement("h1", {}, "I am an h1 tag"),
        React.createElement("h2", {}, "I am an h2 tag"),
    ]),
]);
console.log(parent); //object
const root = ReactDOM.createRoot(document.getElementById("root"));
// const parent = react.createElement()
root.render(parent);