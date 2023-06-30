
// let mainPlane=[
// {flightname:"Air India"},
// {iatacode:"IF"},
// {flightcode:896}
// ]
// for(i=0;i<mainPlane.length;i++){
//     console.log(mainPlane[i].flightname)
// }
// let mainPlane={
// flightname:"Air India",
// iatacode:"IF",
// flightcode:896,
// bookings:[],
// book:function(name,seatnumber){
//     console.log(`${name} has booked flight in ${this.flightname} code no. ${this.iatacode}${this.flightcode} has seat no.${seatnumber}`)
//     this.bookings.push(`name:${name},flight:${this.flightname},seatnumber:${seatnumber}`)
// }
// }
// mainPlane.book("Durvesh",789)
// mainPlane.book("Santosh",189)
// console.log(mainPlane)

// let childPlane={
// flightName:"Blue India",
// iatacode:"BI",
// flightcode:"999"
// }
// let book=mainPlane.book
// book.call("Rahul",444)

//Objects
// let car={
//     company:"BMW",
//     color:"Black",
//     model:2022,
//     engine:"BS6"
// }
// let propertyName="color";
// console.log(car[propertyName])
// console.log(car["color"])
// console.log(car["engine"])
// car.color="Red"
// car.engine="BS4"
// console.log(car)




// delete car.color;
// console.log(car.color)
// let del=delete car["engine"];
// console.log(del)

// let person={
//     ageCalculate:function(birthyear){
//     let age=2023-birthyear;
//     return age;
//     }
// }
// console.log(`The current age of the person is ${person.ageCalculate(1998)} `)

// let user={
//     name:"durvesh",
//     age:25,
//     profession:"Engineer",
//     city:"Uran",
//     summary:function(){
//     return this
//     }
// }
// let result=user.summary()
// console.log(result)

// let car=["BMW","AUDI","MERCEDEZ","HONDA"]
// car.forEach((item)=>console.log(item))

// let person=[{name:"durvesh",age:"25",city:"Uran"},
//             {name:"carlos",age:"20",city:"Mumbai"}]
// for(i=0;i<person.length;i++){
// console.log(`The name of person is ${person[i].name} age ${person[i].age} living in ${person[i].city}`)    
// }

// let mainPlane={
// planeName:"AIR India",
// iatacode:"IN",
// planecode:789,
// bookings:[],
// book:function(name,seat){
// console.log(`${name} has booked a flight on ${this.planeName} code ${this.iatacode}${this.planecode} has seat no ${seat}`)
// this.bookings.push({name:name,planeName:`${this.planeName}`,seatno:seat})
// }
// } 
// mainPlane.book("Carlos",12)
// mainPlane.book("Durvesh",56)
// console.log(mainPlane)

// let childPlane={
//     planeName:"ChildPlane",
//     iatacode:"CP",
//     planecode:123,
//     bookings:[]
// }
// let child=mainPlane.book;
// child.call(childPlane,"rocky",111)
// child.call(mainPlane,"raj",33)
// child.apply(mainPlane,["Rohan",16])

//bind

// function greet(){
//     console.log(`Welcome Mr.${this.firstName} ${this.lastName}`)
// }
// let user={
//     firstName:"Durvesh",
//     lastName:"Nakhawa"
// }
// let result=greet.bind(user);
// result()


// let arr=[1,2,3,4,5]
// let getArr=[...arr];
// arr[3]=0;
// arr.shift()
// console.log(arr)
// console.log(getArr)

// let car={
// comapany:"Honda",
// model:2023,
// color:"Black"
// }
// for(let item in car){
// console.log(item)
// }
// let x="";
// for(let item in car){
// x+=car[item]
// }
// console.log(x)

  
// console.dir(document)
// console.log(document)
// console.log(document.URL)

//Getting Elements from HTMl
// let myElement=document.querySelector("p");
// let myElement=document.querySelector(".durv");
// let myElement=document.querySelector("#durv");
// console.log(myElement)
// let myElement=document.querySelector("span");
// console.log(myElement)
// let myElement=document.querySelectorAll(".class");
// myElement.forEach((item)=>console.log(item))

// let myElement=document.getElementsByTagName('p');
// let res=Array.from(myElement)
// res.forEach(item=>console.log(item))

// let myElement=document.getElementById("durv")
// console.log(myElement)
// let myElement=document.getElementsByTagName("p")
// console.log(myElement)

//Changing content
// let myElement=document.querySelector('h1')
// console.log(myElement.innerHTML)
// myElement.innerText+="Nakhawa"
// myElement.innerText="Chill bro I am Durvesh";
// myElement.innerHTML="Chill bro I am Durvesh";


//Adding Styles

// let myElement=document.querySelector('h1')
// myElement.style.backgroundColor="cyan";
// myElement.style.color="green";
// myElement.style.borderRadius="15px";

//Get And Set Attribute
// let myElement=document.querySelector('a');
// console.log(myElement.getAttribute("href"))
// myElement.setAttribute("href","https://cricbuzz.com")
// console.log(myElement.getAttribute("href"))

//Add,remove,replace class
// let myElement=document.querySelector('span')
// myElement.classList.add("newClass")
// myElement.classList.remove("durv")
// myElement.classList.replace("durv","newClass")


// let parentElement= document.querySelector(".content")
// console.log(parentElement.children)
// let result=Array.from(parentElement.children)
// result.forEach((item)=>console.log(item))


// let childElement=document.querySelector('.class')
// console.log(childElement.parentElement)
// console.log(childElement.previousElementSibling)
// console.log(childElement.nextElementSibling)

//Events
// let click=document.querySelector('.click')
// click.addEventListener("click",()=>{
// console.log("User Clicked")    
// })

// let clickLi=document.querySelectorAll("li")
// clickLi.forEach((item)=>{
// item.addEventListener("click",()=>{
// console.log("inside li")
// })
// })
// let clickLi=document.querySelectorAll("li")
// clickLi.forEach((item)=>{
// item.addEventListener("click",(e)=>{
// console.log(e.target.innerText)
// e.target.innerText="Good"
// e.target.style.textDecoration="line-through";
// e.target.remove();
// })
// })
// const ul=document.querySelector('ul')
// const button=document.querySelector('button')
// button.addEventListener("click",function(){
// let li=document.createElement('li')
// li.textContent="New Element created"
// ul.append(li)
// ul.prepend(li)
// })
// let div=document.querySelector('div')
// let button=document.querySelector('button')
// div.addEventListener("click",()=>{
//     console.log("user clicked")
// })
// let div=document.querySelector('div')
// let span=document.querySelector('span')
// div.addEventListener("click",()=>{
//     console.log("user div")
// },true)
// span.addEventListener("click",()=>{
//     console.log("user span")
// },true)
// let button=document.querySelector('button')
// button.addEventListener("click",(event)=>{
//     console.log("user button1")
// },true)
// button.addEventListener("click",(event)=>{
//     event.stopImmediatePropagation()
//     console.log("user button2")
// })
// button.addEventListener("click",(event)=>{
//     console.log("user button3")
// })

// let arr=[1,2,3]
// let result=arr.map((element,index,array)=>{
// return array;
// })
// console.log(result)
// console.log(arr)

// let array=[1,2,3]
// let [a,b,...c]=array;
// console.log(c)

// let car={
//    company:"Honda" ,
//    color:"Black",
//    model:{year:"2022",condition:"good"}
// }
// // console.log(car.company)
// let {company,color,model}=car;
// console.log(model)

//More Events
// let copy=document.querySelector('.class')
// copy.addEventListener("copy",(e)=>{
//   console.log("Copied")
// })
// console.log(form.ema.value,form.pas.value)  
// console.log(form.userEmail.value,form.userPassword.value)
// form.userEmail.value="";
// form.userPassword.value ="";
// form.ema.value="";
// form.pas.value =""; 
// let form=document.querySelector('.form-class')
// let email=document.querySelector('#ema')

// form.addEventListener("submit",(e)=>{
// e.preventDefault() 
// console.log(email.value,password.value)  
// email.value="";
// password.value ="";
// })

// let password=document.querySelector('#pas')
// form.addEventListener("submit",(e)=>{
// e.preventDefault()
// let passwordValue=password.value
// let passwordPattern="^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{5,}$"
// let result=passwordValue.match(passwordPattern)
// if(result){
//     console.log("Strong password")
// }
// else{
//     console.log("weak password")
// }
// })
// let userPattern=/^[A-Za-z].{6,12}$/
// form.addEventListener("submit",(e)=>{
// e.preventDefault()
// let userName=user.value
// console.log(userName)
// let result=userPattern.test(userName)
// if(result===true){
//     console.log("Strong username")
// }
// else{
//     console.log("weak username")
// }
// })
// let user=document.querySelector('#use')
// let add=document.querySelector(".add")
// user.addEventListener("keyup",(e)=>{
//     e.preventDefault()
//     let userPattern=/^[A-Za-z].{6,12}$/
//     let result=userPattern.test(e.target.value)
//     if(result===true){
//         user.setAttribute("class","success")  
//     }
//     else{
//         user.setAttribute("class","error") 
//     }
// })
// var b=20;
// function addNum(){
//     var a=10;
//     console.log(a)
// }
// addNum()
// console.log(b)

// let a=10;
// if(true){
// let a=20;
// console.log(a)
// }
// console.log(a)
// let b=10;
// if(true){
// let a=20;
// console.log(b)
// }
// console.log(a)

// const object={
// name:"durvesh",
// age:25
// }
// object.name="manoj"
// console.log(object)

// let myName="durvesh"
// let myHobby="coding"
// let myName="durvesh"
// let myHobby="coding"
// console.log("My name is"+" "+myName+"My hobby id"+" "+myHobby)
// console.log(`My name is ${myName} and 
// my hobby is ${myHobby}`)

// let num=10;
// let result=num>20? "correct":"wrong";
// console.log(result)


// let result=(a,b)=>{
//     return a+b;
// }
// console.log(result(10,20))

// function addNum(){
//     return 100;
// }
// let result=(a,b,c)=>{
//     return a+b+c;
// }
// console.log(result(10,20,addNum()))