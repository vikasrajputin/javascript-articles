var globalVariable = 'Hello';
function foo() {
  if (true) {
    console.log(globalVariable);
  }
  console.log(globalVariable);
}

foo();

/* Console
==========
Hello
Hello
========== */