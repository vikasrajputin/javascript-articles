var functionArray = [];
for(var i=0; i < 3; i++){
    functionArray[i] = function(){
        console.log(i);
    };
}

functionArray[0](); // prints "3"
functionArray[1](); // prints "3"
functionArray[2](); // prints "3"