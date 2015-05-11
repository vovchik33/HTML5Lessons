/**
 * Created by unclejoe33 on 11.05.2015.
 */
function User(name){
    var doubleName = name+name;

    this.sayHello = function() {
        alert("Hello, "+doubleName);
    }
}

function onloadPage() {
    var vasia = new User("vasya");
    vasia.sayHello();
}

window.onload = onloadPage;
