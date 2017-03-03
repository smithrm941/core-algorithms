export default function bubbleSort(array){
  var sortingHat = [];
  if(Array.isArray(array)) {
    for(var i = 0; i<array.length; i++){
      if(isNaN(array[i]) === false){
        sortingHat.push(array[i]);
      } else {
        return 'Please enter an array of numbers';
      }
    }
  } else {
    return 'Please enter an array of numbers';
  }
  sortingHat.forEach(function repeater(element){
    for(var x = 0; x<sortingHat.length; x++){
      while(sortingHat[x] > sortingHat[x+1]){
        if(sortingHat[x] > sortingHat[x+1]){
          var temp = sortingHat[x];
          sortingHat[x] = sortingHat[x+1];
          sortingHat[x+1] = temp;
        }
      }
    }
  });
  return sortingHat;
}
