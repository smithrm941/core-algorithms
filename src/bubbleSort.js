// export default function bubbleSort(array){
//   var sortingHat = [];
//   if(Array.isArray(array)){ //this checks for an array
//     for(var i = 0; i<array.length; i++){ //checks that the array contains only numbers
//       if(isNaN(array[i]) === false){
//         sortingHat.push(array[i]);
//       }//pushes all numerical elements to a new array and allows for statement to loop
//           }else{
//         return 'Please enter an array of numbers'; //sends error message if non-number is in array
//       }
//   }else{
//     return 'Please enter an array of numbers'; //sends error message if argument is not an array
//   }
// }

export default function bubbleSort(array){
  var sortingHat = [];
  if(Array.isArray(array)){
    for(var i = 0; i<array.length; i++){
      if(isNaN(array[i]) === false){
        sortingHat.push(array[i]);
      }
      }else{
        return 'Please enter an array of numbers';
    }else{
      return 'Please enter an array of numbers';
    }
  }
}

//console.log(sortingHat);

// }
//   }
  // while(i<sortingHat.length){ //swaps adjacent values one time
  //   if(sortingHat[i] > sortingHat[i+1]){
  //     var temp = sortingHat[i];
  //     sortingHat[i] = sortingHat[i+1];
  //     sortingHat[i+1] = temp;
