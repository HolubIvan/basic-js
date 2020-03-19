// module.exports = function transform(arr) {


//     let control = {
//         discardN: '--discard-next',
//         discardP: '--discard-prev',
//         doubleN: '--double-next',
//         doubleP: '--double-prev'

//     }    
//     let newArr = [];

//     if(arr.length === 0){
//         return newArr;
//     }


//     if(Array.isArray(arr)){

//         for(let i = 0; i < arr.length; i++){
//             if(typeof(arr[i]) === 'number'){
//                 newArr.push(arr[i])
//             } else if(arr[i] === control['doubleN']){
//                 if(arr[i+1] !== undefined){
//                     newArr.push(arr[i+1]);
//                 }
//             } else if(arr[i] === control['doubleP']){
//                 if(arr[i-1] !== undefined){
//                     newArr.push(arr[i-1]);
//                 }
//             } else if(arr[i] === control['discardN']){
//                 i++;
//             } else if(arr[i] === control['discardP']){
//                 if(i>0){
//                     newArr.pop();
//                 } else {
//                     continue;
//                 }
                
//             }
//         }


//     } else {
//         throw new Error()
//     }

//     return newArr;
// };
