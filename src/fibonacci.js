export default function fibonacci(n){
  if(n === 1){
    return [0];
  }else if(n > 1){
    var array = [0, 1];
    var tempArray = [];
    while(n>2){
      tempArray = (array.slice(-2));
      var nextTerm = tempArray.reduce(function(a,b) {return a+b;});
      array.push(nextTerm);
      n--;
    }
    return array;
  }else{
    return undefined;
  }
}
