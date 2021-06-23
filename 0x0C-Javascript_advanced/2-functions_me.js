function welcomeMessage(fullName){
    return function (){
        alert("Welcome " + fullName.toString())
    }
}

var guillaume = welcomeMessage('Guillaume');
var alex = welcomeMessage('Alex');
var fred = welcomeMessage('Fred');
