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