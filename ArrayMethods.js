// let arr=[1,20,30,4,50]
// forEach
// arr.forEach((num)=>{
// console.log(num*100)
// })

//Map
// let result=arr.map((array,index)=>{
// return array;
// return index;
// })
// console.log(result)

//Filter
// let result=arr.filter((element)=>{
// return element>20;
// })
// console.log(result)

//Reduce
// let sum=arr.reduce((total,current)=>{
// return total+current;
// },0)
// console.log(sum)

//Slice
// let result=arr.slice(0,3)
// console.log(result)

//Splice
// let result=arr.splice(1,1,23)
// console.log(arr,result)

//reverse
// console.log(arr.reverse())

//find
// let result=arr.find((element)=>{
// return element>20
// })
// console.log(result)

//findIndex
// let result=arr.findIndex((element)=>{
// return element>20
// })
// console.log(result)

//includes
// let result=arr.includes(30)
// console.log(result)

//concat
// let newArr=[1,2,3]
// let result=arr.concat(newArr)
// console.log(result)

//join
// let result=arr.join(',')
// console.log(result)

//sort
//Accending
// let result=arr.sort((a,b)=>a-b)
// console.log(arr,result)

//descending
// let result=arr.sort((a,b)=>b-a)
// console.log(arr,result)

//localeString
// let result=arr.toLocaleString()
// console.log(result)

//some
// let even=(item)=>{
// return item%2===0;
// }
// let result=arr.some(even)
// console.log(result)

// //flat
let arr1=[1,2,3,[4,5,[6,7,8]]]
let result=arr1.flat(2)
console.log(result)

//flatMap
// let cart=[
// {
// name:"Mobile Phone",
// qty:"1",
// price:15000
// },
// {
// name:"Tablet",
// qty:"2",
// price:35000
// }
// ]
// let newCart=cart.flatMap((item)=>{
//     if(item.name=="Mobile Phone"){
//         return [item,{name:"Screen Guard"}]
//     }
//     else{
//         return [item]
//     } 
// })
// console.log(newCart)

//indexOf
// let result=arr.indexOf(20)
// console.log(result)

//indexOf
// let arr1=[1,2,3,3,4,5]
// let result=arr1.lastIndexOf(3)
// console.log(result)


