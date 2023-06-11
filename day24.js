function register(event){
    event.preventDefault();


let name=document.getElementById("userName").value;
console.log(name);

let number=document.getElementById("userNumber").value;
console.log(number);

 let email=document.getElementById("userEmail").value;
console.log(email);

let password=document.getElementById("userPassword").value;
console.log(password);

const userData={
    usename:name,
    useremail:email,
    usernumber:number,
    userpassword:password
}
localStorage.setItem("Students data",JSON.stringify(userData))


document.getElementById("userName").value="";
document.getElementById("userNumber").value="";
document.getElementById("userEmail").value="";
document.getElementById("userPassword").value="";
    alert("Welcome to my Page")
}

function getData(){
    let data=JSON.parse(localStorage.getItem("Students data"));
    console.log(data)
   

}







// var newObject={
//     name:"durvesh",
//     email:"durv@gmail.com",
//     number:2556654
// }
// console.log(newObject)
// console.log(newObject.name)
// console.log(newObject.email)
// console.log(newObject.number)