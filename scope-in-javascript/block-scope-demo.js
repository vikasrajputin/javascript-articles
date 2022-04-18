function foo() {
  if (true) {
    let blockVariable = 'Hello';
    console.log("Inside block: " + blockVariable);
  }
  console.log("Inside function: " + blockVariable);
}
foo();
console.log("Outside function: " + blockVariable);

/* Console
======================================================
Inside block: Hello
Uncaught ReferenceError blockVariable is not defined
Uncaught ReferenceError blockVariable is not defined
======================================================
*/