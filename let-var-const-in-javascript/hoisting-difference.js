function check(){
    console.log(a); // undefined
    console.log(b); // Uncaught ReferenceError
    console.log(c); // Uncaught ReferenceError

    var a = "A";
    let b = "B";
    const c = "C";

    console.log(a); // prints "A"
    console.log(b); // prints "B"
    console.log(c); // prints "C"
}