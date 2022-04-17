function check(){
    var a = "A";
    let b = "B";
    const c = "C";
    console.log(a,b,c); // prints "A B C";

    {
        var d = "D";
        let e = "E";
        const f = "F";
        console.log(d,e,f); //prints "D E F"
    }

    console.log(d); // D
    console.log(e) // Uncaught ReferenceError: e is not defined
    console.log(f) // Uncaught ReferenceError: f is not defined
}

check();