var a = "A";
var a = "B";
console.log(a); // prints "B", value "A" will be replaced by "B"

let b = "B";
let c = "C"; // Uncaught SyntaxError

const c = "C";
const c = "D"; // Uncaught SyntaxError