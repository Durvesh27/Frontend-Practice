" use strict";
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
// let Car=function(color,model){
//     this.color=color;
//     this.model=model;
//     this.startEngine=function(){         //Not a good practice
//         console.log("Engine Started")
//     }
//     }
//     let result=new Car("Black",2023)
//     let result1=new Car("Blue",2021)
//     console.log(result)
//     console.log(result1 instanceof Car)

// let Car=function(color,model){
//     this.color=color;
//     this.model=model;
//     }
//     Car.prototype.startEngine=function(){
//         console.log("Engine Started")
//     }
//     let result=new Car("Black",2023)
//     let result1=new Car("Blue",2021)
//     console.log(result)
//     console.log(result1)
//     result.startEngine()

// let Car=function(color,model,){
//     this.color=color;
//     this.model=model;
//     }
//     Car.prototype.startEngine=function(){
//         console.log("Engine Started")
//     }
//     Car.prototype.company="Honda"
// console.log(Car.prototype)
//     let result=new Car("Black",2023)
//     let result1=new Car("Blue",2021)
//     console.log(result)
//     console.log(result1)
// console.log(result.company)
// console.log(result.__proto__.isPrototypeOf(result))
// console.log(Car.prototype.isPrototypeOf(Car))

// let arr=[1,2,3,4,5]
// console.log(arr.__proto__,Array.prototype)
// console.log(arr.__proto__.__proto__)
// console.log(Object.prototype)

//Array Methods
// Reverse
// let letters=["a","b","c","d"]
// console.log(letters.reverse())

//concat
// let numbers=[1,2,3,4]
// console.log(numbers.concat(letters))
// console.log([...numbers,...letters])

//join
// console.log(letters.join(','))

//Slice
// let nums=[1,25,2,22,6,5]
// console.log(nums.slice(0,3))
// console.log(nums.slice(1))
// console.log(nums.slice(-1))
// console.log(nums.slice(-2))

//Splice
// let arr=[1,2,3,4,5]
// console.log(arr.splice(1,1,0),arr)

//at
// let nums=[1,2,3,4,5]
// console.log(nums.at(-1))
// console.log(nums[nums.length-1])
// console.log(nums.slice(-1)[0])

//map
// let salaries=[1000,3000,5000,9000,7000]
// let increementedSalaries=salaries.map(salary=>{
// let half=salary/2;
// return salary+half;
// })
// console.log(increementedSalaries)

//Chaining
// let salaries=[1000,3000,5000,9000,7000]
// let increementedSalaries=salaries.map(salary=>{
// let half=salary/2;
// return salary+half;
// }).filter(item=>item>6000)
// console.log(increementedSalaries)

// let cars=[{name:"BMW",color:"Black",model:2023},
// {name:"Innova",color:"White",model:2015},
// {name:"Scoda",color:"Blue",model:2020}]

// let result=cars.map(object=>{
// return object.name.toLowerCase();
// })
// console.log(result)

//Filter
// let nums=[10,145,56,89,66]
// let result=nums.filter(item=>{
// return  item >100
// })
// console.log(result)

//Reduce

// let nums=[1,2,3,4,5]
// let result=nums.reduce((total,current)=>{
// return total+current;
// },0)
// console.log(result)

//Find
// let students=[{id:1,name:"Durvesh"},{id:2,name:"Sarvesh"},{id:3,name:"Shri"}]
// let result=students.find(item=>{
//     return item.id==1
// })
// console.log(result)

//findIndex
// let age=[21,18,26,13,29]
// let result=age.findIndex(item=>{
//     return item>25
// })
// console.log(result)

//some
// let scores=[12,25,36,15,10]
// let result=scores.some(item=>{
// return item>25
// })
// console.log(result)

// //every
// let scores=[12,25,36,15,10]
// let result=scores.every(item=>{
// return item>25
// })
// console.log(result)

// let number=7.689
// console.log(Math.round(number))  //Rounds to Nearest
// console.log(Math.floor(number))  //Round to low
// console.log(Math.ceil(number))   //Round to High
// console.log(Math.trunc(number))  //Removes decimal part

// let random=Math.random()         //Picks random no. bet 1-0
// console.log(Math.round(random*100))

// let Car=function(color,model){
// this.color=color ;
// this.model=model;
// this.startEngine=function(){
// console.log("Engine Started")
// }
// }
// let result=new Car("black",2023)
// console.log(result)

// let Car=function(color,model){
// this.color=color ;
// this.model=model;
// }
// Car.prototype.startEngine=function(){
//     console.log("Engine Started")
// }
// Car.prototype.Company="Honda"
// let result=new Car("black",2023)
// console.log(result)
// result.startEngine()
// console.log(Car.prototype.__proto__)
// console.log(Object.prototype)
// console.log(result.__proto__)
// console.log(result.__proto__.isPrototypeOf(result))

// let arr=[1,2,3,4]
// console.log(arr.__proto__)

// //Class Constructor
// class Car{
// constructor(color,model){
// this.color=color;
// this.model=model;
// }
// }
// let result=new Car("black",2023)
// console.log(result)

// class Car{
// constructor(color,model){
// this.color=color;
// this.model=model;
// }
// startEngine(){
// console.log("Engine Started")
// }
// }
// let result=new Car("black",2023)
// console.log(result.__proto__)

//Setters & Getters
// class Car{
// constructor(color,model){
// this.color=color;
// this.model=model;
// }
// startEngine(){
// console.log("Engine Started")
// }
// get startEngine1(){
// return `The color of Car is ${this.color} and model is ${this.model}`
// }
// }
// let result=new Car("black",2023)
// console.log(result.startEngine1)

// class Car{
// constructor(color,model){
// this.color=color;
// this.model=model;
// }
// startEngine(){
// console.log("Engine Started")
// }
// set changeColor(color){
// console.log(this.color=color)
// }
// }
// let result=new Car("black",2023)
// result.changeColor="blue"
// console.log(result)

//Static method
// class Car{
// constructor(color,model){
// this.color=color;
// this.model=model;
// }
// }
// Car.startEngine=function(){
// console.log("Engine Started")
// }

// let result=new Car("black",2023)
// console.log(result)
// Car.startEngine()

// class Car{
// constructor(color,model){
// this.color=color;
// this.model=model;
// }
// }
// let result=new Car("black",2023)
// console.log(result)

// class Bike extends Car{
// constructor(color,model,engine){
// super(color,model)
// this.engine=engine;
// }
// startEngine(){
// console.log("Engine Started")
// }
// }
// let result1=new Bike("Blue",2020,"200CC")
// console.log(result1)
// console.log(result1.__proto__)

//Making Http request
// let request = new XMLHttpRequest();
// // console.log(request)
// // console.log(request,request.readyState)  //Initially 0
// request.addEventListener("readystatechange",()=>{
// console.log(request,request.readyState)  //then 1,2,3,4
// if(request.readyState==4){
//     console.log(request.responseText) //Displays json response
// }
// })
// request.open("Get","https://jsonplaceholder.typicode.com/todos")
// request.send()

// let todos=(callback)=>{
// let request= new XMLHttpRequest();
// request.addEventListener("readystatechange",()=>{
// if(request.readyState==4 && request.status==200){
// let data=JSON.parse(request.responseText); //Json To JS
// callback(undefined,data)
// }else if(request.readyState==4){
// callback("Error! Data Could not be Fetched",undefined)
// }
// })
// request.open("Get","https://jsonplaceholder.typicode.com/todos")
// request.send()
// }
// todos((error,data)=>{
// if(error){
// console.log(error)
// }
// else{
//     console.log(data)
// }
// })

// let todos=(resource,callback)=>{
// let request= new XMLHttpRequest();
// request.addEventListener("readystatechange",()=>{
// if(request.readyState==4 && request.status==200){
// let data=JSON.parse(request.responseText); //Json To JS
// callback(undefined,data)
// }else if(request.readyState==4){
// callback("Error! Data Could not be Fetched",undefined)
// }
// })
// request.open("Get",resource)
// request.send()
// }
// todos("data.json",(error,data)=>{
// if(error){
// console.log(error)
// }
// else{
//     console.log(data)
// }
//   todos("mario.json",(error,data)=>{           //CALL BACK HELL
//     if(error){
//         console.log(error)
//         }
//         else{
//             console.log(data)
//         }
//   })
//      todos("lurie.json",(error,data)=>{
//     if(error){
//         console.log(error)
//         }
//         else{
//             console.log(data)
//         }
//   })
// })

//PROMISE
// let getData=()=>{
// return new Promise((resolve,reject)=>{
// resolve("Promise resolved")
// reject("Promise rejected")
// })
// }
// getData().then(data=>{
// console.log(data)
// }).catch(error=>{
//     console.log(error)
// })

//PROMISE
// let todos=(re)=>{
// return new Promise((resolve,reject)=>{
//     let request= new XMLHttpRequest();
//     request.addEventListener("readystatechange",()=>{
//     if(request.readyState==4 && request.status==200){
//     let data=JSON.parse(request.responseText); //Json To JS
//     resolve(data)
//     }else if(request.readyState==4){
//     reject("Error! Data Could not be Fetched")
//     }
//     })
//     request.open("Get",resource)
//     request.send()
// })

// }
// todos("data.json").then(data=>{
// console.log(data)
// return todos("mario.json")
// }).then(data=>{
// console.log(data)
// return todos("lurie.json")
// }).then(data=>{
//     console.log(data)
//     }).catch((err)=>{
// console.log(err)
// })

// FETCH API
// fetch("data.json").then((data)=>{
// console.log(data)
// return data.json()
// }).then(data1=>{
//     console.log(data1)
// }).catch((err)=>{
// console.log(err)
// })
// let a;
// function getItem(){
// setTimeout(()=>{
//  a=20;
// },3000)
// }
// alert(a)

// let a;
// function getItem(){
// setTimeout((al)=>{
//  al(20)
// },3000,(a)=>{alert(a)})
// }
// getItem()

// let a=10;
// function getItem(){
// let myPromise=new Promise((resolve,reject)=>{
// setTimeout(()=>{
// resolve(a=20)
// },3000)
// })
// return myPromise
// }
// getItem().then((item)=>{
// console.log(item)
// })

// console.log(1)
// function setNum(){
//     setTimeout(()=>{
//         console.log("p")
//         },3000);
//  }
// async function getNum(a){
// console.log(a)
// await setNum();
// console.log(6)
// }
// getNum(2)

// const getTodos=async()=>{
// let response= await fetch("data.json")
// if(response.status!==200){
// throw new Error("Data could not be Fetched")
// }
// let data=await response.json()
// return data;
// }
// getTodos().then((item)=>{
// console.log(item)
// }).catch((err)=>{
// console.log(err.message)
// })

// let getTodos=async()=>{
// try{
//     let res1=await fetch("data.json")
//     let data1= await res1.json()
//     let res2=await fetch("mario.json")  //NO CHAINING
//     let data2= await res2.json()
//     console.log(data1,data2)
// }catch(err){
// console.log(err)
// }
// }
// getTodos()

// const getData = async() => {
// let data = "Hello World";
// return data;
// }

// getData().then(data => console.log(data));

// const getData = async() => {
// 	let y = await "Hello World";
// 	console.log(y);
// }

// console.log(1);
// getData();
// console.log(2);

// let arr=[10,20,30,40]
// let[a,b,c,d]=arr;
// console.log(a,b,c,d)

// let arr=[10,20,[30,40]]
// let[a,b,[c,d]]=arr;
// console.log(a,b,c,d)

// let user={
// name:"durvesh",
// age:25,
// qualify:["SSC","HSC","B.E"]
// }
// let[a,b,c]=user.qualify;
// console.log(a,b,c)

// let temp=a;
// a=b;
// b=temp;
// console.log(a,b,c)

// [a,b]=[b,a]
// console.log(a,b,c)

// let hotel={
// name:"hotel",
// location:"Uran Raigad",
// categories:["Chinese","Thai","Italian"],
// menu:["FoodA","FoodB","FoodC"],
// openingHours:{
//     sunday:{open:"9.00AM",close:"11.00PM"},
//     monday:{open:"11.00AM",close:"8.00PM"}
// }
// }

// let{name,location,menu}=hotel;
// console.log(name,location,menu)

// let{name:MyName,location:myloc,menu:myMenu}=hotel;
// console.log(MyName,myloc,myMenu)

// let{name,location=[],myMenus=[]}=hotel;
// console.log(name,location,myMenus)

// let {name,openingHours}=hotel;
// console.log(openingHours,name)

// let {monday}=openingHours
// console.log(monday)

// let{sunday:{open,close}}=openingHours
// console.log(open,close)
// let{sunday,monday}=hotel.openingHours;
// console.log(sunday,monday)

// let{sunday,monday}=hotel.openingHours;
// console.log(sunday,monday)

// let nums=[1,2,3,4]
// console.log(...nums)

// let arr=["a","b",...nums]
// // console.log(arr)

// console.log([...nums,...arr])

// let update=[...hotel.menu,"FoodD","FoodE"]
// // console.log(update)
// let copy=[...update]
// copy[1]="Rice";
// console.log(copy)
// console.log(update)

// let string="programming";
// console.log(...string)

// let arr=[1,2,3,4,5]
// let[a,b,...rest]=arr;
// console.log(rest)

// let{sunday,...workingDays}=hotel.openingHours
// console.log(workingDays)

// let restaurant={...hotel,newDishes:["rice","dal"]}
// console.log(restaurant)

// function getNumber(nums){
// if(nums.length>1){
// var array=[];
// for(let i=0;i<nums.length-1;i++){
//     let box=0;
//     for(let j=i+1;j<nums.length;j++){
//         if(nums[i]!=nums[j]){
//         continue;
//         }
//         else{
//         box+=1;
//         }
//     }
//     array.push([box,nums[i]])
// }
// // let index=array.indexOf(Math.max(...array))
// // if(array1.length>1){
// // return array1[index+1]
// // }else{
// // return array1[0]
// // }
// let res=array.find((ele)=>{
// ele.forEach((k)=>{

// })
// // return Math.max((ele[0]))
// })
// return res
// }else{
//     return nums[0];
// }
// }
// console.log(getNumber([2,2,1,1,1,2,2]))
// console.log(getNumber([8,8,7,7,7]))
// console.log(getNumber([3,2,3]))
// console.log(getNumber([6,5,5]))
// console.log(getNumber([2,2,3,3,3,3,2]))

// function duplicateNumber(nums,k){

// for(let i=0;i<nums.length;i++){
//     for(let j=i+1;j<nums.length;j++){
//         if(nums[i]==nums[j] && (i-j)<=k){
//             console.log(nums[i],nums[j],i,j)
//             return true;
//             }
//     }
// }
// return false
// }
// console.log(duplicateNumber([1,2,3,1],3))

// var moveZeroes = function (nums) {
//  var array = [];
//   for (let i = 0; i < nums.length; i++) {
//   if(nums[i]==0){
//   nums.splice(i,1)
//   array.push(0)
//   }
//   }
//   return [nums.reverse(),...array].flat(1)
// };
// console.log(moveZeroes([0, 0, 1]));

var moveZeroes = function(nums) {
    for(let i=0;i<nums.length;i++){
        for(let j=0;j<nums.length;j++){
            if(nums[i]==0  && nums[j]!=0){
                nums.splice(i,1)
                nums.push(0)
                }else if(nums[i]==0  && nums[j]==0){
                nums.splice(i,1)
                nums.push(0)
                }
        }
    }
    return nums;
    };
    // console.log(moveZeroes([0,0,0,0,0,0,1,1,1]))
    // console.log(moveZeroes([0,1,0,3,12]))
    console.log(moveZeroes([0,0,1]))
