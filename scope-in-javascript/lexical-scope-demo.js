var message = "Hello";

function one(){
    function two() {
        function three() {
            console.log("Message: "+message);
        }
        return three();
    }
    return two();
}
one();