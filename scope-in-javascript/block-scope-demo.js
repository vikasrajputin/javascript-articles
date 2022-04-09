function foo() {
    if(true){
      // block scope 	
      let blockVariable = 'Hello';
      console.log(blockVariable);
    }
    console.log(blockVariable); 
    // Uncaught ReferenceError: blockVariable is not defined
  }
  
  foo();