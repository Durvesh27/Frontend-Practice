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
var target = 25;
var array = [ 2,3,5,5,32,54,23,12,45,23,43,1,34,65,1,54,6,33,4,9,7 ];
for(i=0;i<array.length;i++){
    for(j=i+1;j<array.length-1;j++){
        for(k=j+1;k<array.length-2;k++){
            for(l=k+1;l<array.length-3;l++){
            if(array[i]+array[j]+array[k]+array[l]==target){
                console.log(array[i],array[j],array[k],array[l],"got it...")
            }
            }
        }
    }
}


