function foo() {
  var functionVariable = 'Hello';
  if (true) {
    console.log(functionVariable);
  }
  console.log(functionVariable);
}

foo();

/* Console
==========
Hello
Hello
========== */