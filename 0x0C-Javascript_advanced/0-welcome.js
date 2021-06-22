function welcome(firstName, lastName){
    var fullName = firstName.toString() + ' ' + lastName.toString();

    function displayFullName(){
        alert('Welcome '+ fullName + '!');
    }

    displayFullName();
}
