function foo(){
    fooVar = "Global Test";
    console.log("Inside Function: "+fooVar);
  }
  foo();
  console.log("Outside Function: "+fooVar);
  
  /*
  Console
  =============================
  Inside Function: Global Test
  Outside Function: Global Test
  =============================
  */