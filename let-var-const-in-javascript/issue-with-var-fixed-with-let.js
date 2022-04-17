var functionArray = [];
for(let i=0; i < 3; i++){
    functionArray[i] = function(){
        console.log(i);
    };
}

functionArray[0](); // prints "0"
functionArray[1](); // prints "1"
functionArray[2](); // prints "2"