let a = "A";
a = "B";
console.log(a); // prints "B"

const b = "B";
b = "C";        // Uncaught TypeError: invalid assignment to const 'b'
console.log(b);