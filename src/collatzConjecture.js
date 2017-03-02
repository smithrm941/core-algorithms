export default function collatzConjecture(n){
  if(n > 0){
    var array = [n];
    while(n > 1){
      if (n % 2 === 0){
        array.push(n / 2);
        n = array[array.length - 1];
     }else if(n % 2 !== 0){
        array.push(n*3 + 1);
        n = array[array.length - 1];
     }
   }
    return array;
  }else{
    return undefined;
  }
 }
