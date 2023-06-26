// var target=25;
// var array=[10,13,45,23,25,15];
// for(i=0;i<array.length-2;i++){
//     for(j=i+1;j<array.length-1;j++){
//      console.log(array[i],"array[i]",array[j],"array[j]")

// }



// Question 1: Given an target find two number from array which subtration is target
// var target = 4;
// var array = [3, 54, 65, 32, 6, 23, 56, 76, 17, 100, 7];
// for(i=0;i<array.length;i++){
// for(j=i+1;j<array.length;j++){
//     if(array[i]-array[j]==target){
//         console.log(array[i],array[j])
//     }
//     else if (array[j]-array[i]==target){
//         console.log(array[j],array[i]);
//     }
// }
// }

// Question 2:  Given an target find three number from array which additionation is target
// var target = 126;

// var array = [3, 55, 65, 32, 6, 23, 56, 76, 17, 100, 7, 91, 27, 8];
// for (i = 0; i < array.length; i++) {
//     for (j = i + 1; j < array.length; j++) {
//         for (s = i + 2; s < array.length; s++) {
//             if (array[i] + array[j] + array[s] == target) {
//                 console.log(array[i], array[j], array[s])
//             }
//         }
//     }

// }
// var target = 25;
// var array = [ 2,3,5,5,32,54,23,12,45,23,43,1,34,65,1,54,6,33,4,9,7 ];
// for(i=0;i<array.length;i++){
//     for(j=i+1;j<array.length-1;j++){
//         for(k=j+1;k<array.length-2;k++){
//             for(l=k+1;l<array.length-3;l++){
//             if(array[i]+array[j]+array[k]+array[l]==target){
//                 console.log(array[i],array[j],array[k],array[l],"got it...")
//             }
//             }
//         }
//     }
// }
// let myArray=[-4,-3,-2,-1,0,1,4,5,6]
// function myArray(array){
// let left=0;
// let right=array.length-1;
// while(left<right){
//     sum=array[left]+array[right];
//     if(sum==0){
//     return [array[left],array[right]];
//     }
//     else if(sum>0){
//        right--; 
//     }
//     else{
//         left++;
//     }
//     }

// }
// let result=myArray([-4,-3,-2,-1,0,1,2,4,5,6]);
// console.log(result)


// var num1=30;
// var num2=20;
// function addition(){
// return num1+num2;
// }
// console.log(num1+num2)
// addition()

// function substraction(){
//     var sub=num1-num2;
//     if(sub>0){
//         return sub
//     }
//      else if(sub==0){
//         return "sub is zero";
//     }
//     return "No result"
// }
// let result=substraction();
// console.log(result)


// var target = 105;

// var array2 = [23, 345, 565, 65, 40, 40];
// function additionOfNumbers(durvesh,nakhawa){
// for(var i=0;i<durvesh.length-1;i++){
// for(var j=i+1;j<durvesh.length;j++){
//     if(durvesh[i]+durvesh[j]==nakhawa){
//     console.log(durvesh[i],durvesh[j]);
//     }
// }
// }
// }
// additionOfNumbers(array2,target);

// q1
// var number1 = 9876;
// var number2 = 5678;
// function subtraction(){
//     console.log(number1-number2)
// }
// subtraction()

// q2
// var number3 = 9876;
// var number4 = 5678;
// function multiplication(){
//     console.log(number1*number2)  
// }
// multiplication()
// q3
// var number5 = 9876;
// var number6 = 5678;
// function divid(){
//     console.log(number1*number2)  

// }
// divid()
// q4
// var array = [34,45,56,67,78,34,76,234,567,7834,56,34];
// var target = 112;
// var flag=false;
// function additionOfThreeNumber(array1,target1){
// for(var i=0;i<array1.length-2;i++){
//  for(var j=i+1;j<array1.length-1;j++){
//     for(var k=j+1;k<array1.length;k++){
//         if(array1[i]+array1[j]+array1[k]==target1){
//             console.log(array1[i],array1[j],array1[k])
//             flag=true;
//         }

//     }

//  }
// }
// }
// if(flag==false){
//     console.log("false flag")
// }
// additionOfThreeNumber(array,target);

// let num1=10;
// let num2=20;
// function num3(){
//  return 100;   
// }

// function addition(num1,num2,f3){
// return num1+num2+f3;   
// }
// console.log(addition(10,20,num3()))

// function anagram(string1,string2){
// if(string1.length!=string2.length){
// return false;
// }
// let counter={}
// for(letter of string1){
// counter[letter]=(counter[letter]|| 0)+1;
// console.log(counter[letter])
// }
// // console.log(counter)
// for(items of string2){
//     if(!counter[items]){
//      return false;   
//     }
//     counter[items]-=1;
// }
//  return true;
// }

// let result=anagram("hello","lelho")
// console.log(result)
// if(result==true){
//     console.log("string is anagram")
// }
// else{
//     console.log("String is not anagram")
// }

// let remote="world,is,great";
// console.log(remote.split(","))

//q
// var start=8723;
// var end=6567;

// function twoStage(high,low){
//     let newArray1=[];
// let newArray2=[];

// for(i=low;i<=high;i++){
// if(i%2==0 && i%5==0 && i%10==0){
//   newArray1.push(i);
// }
// }
// console.log(newArray1)


// for(j=1;j<=newArray1.length;j=j+2){

//     newArray2.push(newArray1[j]);


//     }
//     console.log(newArray2)


// }

// evenArray=twoStage(start,end)

//q: To find missing number from an array
// let array=[5,7,9,11,15,17]

// function getNumber(array){
// for(i=0;i<array.length;i++){
// if(array[i+1]-array[i]!==2){
//   return array[i]+2;
// }
// }
// }
// let result=getNumber(array);
// console.log(result)


// function resolveAfter2Sec(){
//   return new Promise((resolve)=>{
//    setTimeout(()=>{
//    resolve('response')
//    },2000);
//   });
// }

// async function asynCall(){
//   console.log("start")
//   let result=await(resolveAfter2Sec())
//   console.log(result,"-Result")
//   console.log("end")
// }
// asynCall()


// let myName="durvesh";
// console.log(myName)

// var a=10;
// console.log(a)
// //or
// console.log(a)
// var a=10;

//concat 



// let myName="durvesh";
// console.log(myName.trim())
// let myHobby="coding"
// let num=20;
// console.log(`My name is ${myName} and my 
// hobby is ${myHobby} ${num/2}`)

// console.log(myName.length)
// console.log(myName[2])
// console.log(myName)
// console.log(myName.indexOf("v"))
// console.log(myName.lastIndexOf("var"))
// console.log(myName.trim())
//descending
// let arr=[1,2,3]
// for(i=arr.length-1;i>=0;i--){
//  console.log(arr[i]); 
// }
// let newString=[];
// for(i=myName.length-1;i>=0;i--){
// newString.push(myName[i]); 
// }
// console.log(newString)
// let res=newString.join('');
// console.log(res)

// let myName="My Name is Durvesh";
// console.log(myName.includes("is"))

// console.log(myName.slice(0,3))
// console.log(myName.split(' '))


//    let myName="durvesh";
//    let myHobby="coding";
//    console.log(myName,myHobby)

// let fruits="apple,orange,peru";
// console.log(fruits.split(','))

// const result=25;
// console.log("The result is"+result)
// console.log(typeof("The result is"+result))

// var age=25;
// console.log(age!=25) 

// var age=25;
// console.log(age!="25") 

//  var age=25;
// console.log(age!=25)   //false

// var num=250;
// console.log(typeof String(num))

// var str="14550";
// console.log(Number(str))

// var num=14550;
// console.log(String(num))

// let age="pttt";
// console.log(Boolean(age))

//Bubble Sort
// function bubbleSort(array){
// for(i=array.length;i>0;i--){
//     console.log(i)
// let sorting=false;
//  for(j=0;j<i-1;j++){
//         if(array[j]>array[j+1]){
//             [array[j],array[j+1]]=[array[j+1],array[j]];
//             console.log(array)
//             sorting=true;
//         }
//     }
        
//     if(sorting==false){
//         break;
//     }
// }
// return array;
// }
// let res=bubbleSort([5,1,2,22,3,7,9,56,4]);
// console.log(res)

//Selection Sort

// function selectionSort(array) {
 
//     for (let i = 0; i < array.length; i++) {
//       let min=i;
//         for (let j = i + 1; j < array.length; j++) {
//           if(array[min]>array[j]) {
//             min=j;
//           }
//         }
//         if(i!=min){
//           temp=array[i];
//           array[i]=array[min];  
//           array[min]=temp;
//         }
//     }
//     return array;
// }
// console.log(selectionSort([10, 5, 15, 9, 2]))

//Closure

// function outerFunction(){
//     let marks=30;
//     console.log("Inside Outer function")
//     function innerFunction(){
//       console.log("Inside Inner function",marks)  
//     }
//     return innerFunction;
// }

// let result=outerFunction();
// console.log(result())

// function runAfter5Sec(){
//     return new Promise((resolve)=>{
//        setTimeout(()=>{
//        resolve('Got Response')
//        },2000) 
//     })
// }

// async function asynCall(){
//     console.log("First print")
//     const x=await(runAfter5Sec())
//     console.log(x)
//     console.log("Second response")
// }
// asynCall()



//   function removeDuplicates(nums) {
//     let counter=null;
//     let newArray=[];
//     let newArray1=[];
//     for(i=0; i < nums.length; i++){
//          if(nums[i]!=nums[i+1]){
//             counter+=1;
//               newArray.push("_")
//               newArray1.push(nums[i])
//          } 
//     }
//     let durvesh=newArray1+","+newArray;
//     console.log(durvesh.split(","))
// return counter;
// }
// console.log(removeDuplicates([1,1,2,2,2,2,3,3]))

//Array

    // let dishes=['biryani','pulao','chicken','rice','paneer']
    // let i=0;
    // do{
    //     console.log(dishes)
    //     i++;
    // }while(i<0)

//  let age=1;
 
//  if(age==18){
//     console.log("You are eligible for First vaccine")
//  }
//  else if(age>25 && age<60 ){
// console.log("You are eligible for Second Vaccine")
//  }
//  else{
//     console.log("Dont take vaccine")
//  }
    
    // for(let i=1;i<=10;i++){
    //     if(i==2){
    //     break;
    //     }
    //     console.log(i)
    // }

//    let age=20;
//    let result=age>18? "Success":"fail";
//     console.log(result)

// let code="IN"
// switch(code){
//     case "IN":
//     console.log("India")
//     break;
//     case "UN":
//     console.log("United States")
//     break;
//     case "NA":
//     console.log("North America")
//     break;

//     default:
//     console.log("Planet Mars")
// }


//Find & FindIndex
// let array=[{id:1,name:"durvesh",age:25,profession:"Coder"},
//           {id:2,name:"rahul",age:20,profession:"Writer"},
//           {id:3,name:"pravin",age:30,profession:"Technician"},
//           {id:4,name:"rohan",age:26,profession:"Engineer"}]
// let userId=1;
// let data=array.find((user)=>user.id=userId)
// let data1=array.findIndex((user)=>user.id=userId)
// console.log(data,data1)

// var userName = 'ujnbhhajkndwahdakndbahwjd';
// var index = array.findIndex((object) => object.name == userName);
// console.log(index)

// var numbers = [1, 8, 9, 15, 3, 7, 37, 2, 6, 1, 6, 7, 9];
// console.log(numbers.sort())

// var numbers = [1, 8, 9, 15, 3, 7, 37, 2, 6, 1, 6, 7, 9];
// console.log(numbers.sort((a, b) => b - a))

// var numbers = [1, 8, 9, 15, 3, 7, 37, 2, 6, 1, 6, 7, 9];
// console.log(numbers.sort((a, b) => a - b))


// const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

// let result=words.filter((word)=>word.length>6)
// console.log(result)

// Leetcode1: Return true for duplicate numbers in Array else return false
// let duplicateNumbers=function(nums){
//     let flag=false;
//     for(let i=0;i<nums.length-1;i++){
//        for(let j=i+1;j<nums.length;j++){
//         if(nums[i]==nums[j]) {
//             return true;
//         }  
//        }
//     } 
//     if(flag==false){
//     return false;
//     } 
// }
// let res=duplicateNumbers([1,2,3,1]);
// console.log(res)


// let array=[1,2,3]
// let addition=0;
// for(i=0;i<array.length;i++){
//     addition+=array[i];
// }
// console.log(addition)


// function removeNumber(nums){

//     for(j=0;j<nums.length-1;j++){
//       if(nums[j]!=nums[j+1]){
//   [nums[j],nums[j+1]]=[nums[j+1],nums[j]]
//        }
//     }

//       if(nums[0]==nums[nums.length-1]){
//        [nums[0],nums[nums.length-2]]=[nums[nums.length-2],nums[0]]
//       } 
//       return nums;
//   }
//   let res=removeNumber([1,1,4,3,3,11,15,7]);
//   console.log(res)

//functions

// function getNumbers(){
//     console.log("Numbers")
// }
// getNumbers()                 //Function call

// function getNumbers(){
//     return "Numbers"
// }
// console.log(getNumbers())    //Function call


// function getNumbers(one,two){
//  console.log(`You are ${one} and new to the ${two}`)   
// }
// getNumbers("Hello","World")

// let a=10;
// let b=20;
// function getNumbers(one,two){
//  console.log(a+b)   
// }
// getNumbers(a,b)


// function getNumbers(one,two){
//  console.log(one+two)   
// }
// getNumbers(10,20)

// function getNumbers(one,two=20){
//  console.log(one+two)   
// }
// getNumbers(10)

// function newNumber(){
//     return 100;
// }
// function getNumbers(one,two,three){
//  console.log(one+two+three)   
// }
// getNumbers(10,20,newNumber())

// let anonymous=function(){
//     console.log("Anonymous Function")
// }
// anonymous()

// let uppercase=function(str){
//     return str.toUpperCase();
// }
// let lowercase=function(str){
//     return str.toLowerCase();
// }
// let trans=function(str,transform){
//     return transform(str)
// }
// console.log(trans("HHHHllo",lowercase))


// let compliment=function(msg){
// return function(name){
//     console.log(`${msg}${name}`)
// }
// }
// compliment("You are a good Coder")("durvesh");

// let compliment=function(msg){
// return function(name){
//     console.log(`${msg} ${name}`)
// }
// }
// let result=compliment("You are a good Coder");
// result("durvesh")

//Arrow function
// let arrow=()=>{
//     console.log("Hello world")
// }
// arrow()

// let arrow=welcome=>`Welcome to the ${welcome}`;
// console.log(arrow("party"))

// IIFE
// (function(){
//     console.log("hello")
// }())

// test=10;
// console.log(test)
// var test;

// nnn()
// function nnn(){
//     console.log("hello")
// }

// let durvesh=function(name){
//     console.log(`${name}`)
// }
// setTimeout(durvesh,3000,"my name is Durvesh")

// setTimeInterval(function(name){
//     console.log(name)
// },3000,"durvesh")
// let c=0;
// function getNumber(nums){
// for(i=0;i<nums.length;i++){
// c=c^nums[i]
// }
// return c;
// }
// let res=getNumber([4,1,2,4,2,1])
// console.log(res)

