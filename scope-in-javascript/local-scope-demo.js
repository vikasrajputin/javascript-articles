
function foo() {
  var functionVariable = 'Hello';
  if (true) {
    console.log("Inside block: "+functionVariable);
  }
  console.log("Inside function: "+functionVariable);
}
foo();
console.log("Outside function: "+functionVariable);

/* Console
======================================================
Inside block: Hello
Inside function: Hello
Uncaught ReferenceError functionVariable is not defined
======================================================
*/