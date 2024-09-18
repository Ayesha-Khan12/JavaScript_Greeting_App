function greet(){
    let name = prompt("Enter Your Name");
let age = +prompt("Enter Your Age");

if(age >= 18){
    document.getElementById("para").innerHTML = `Welcome ${name} ! You are eligible to participate.`;
}
else if(isNaN(age)) {
    document.getElementById("para").innerHTML = `${name} ! Please put correct number of age`;
}
else{
    document.getElementById("para").innerHTML = `Sorry ${name} ! You are too young to join`;
}
}
