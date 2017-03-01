export default function factorial(num){
  if(num > 0){
    var array = [];
    while(num > 0){
      array.push(num);
        num--;}
    var factorialOfNum = array.reduce(function(a,b){return a*b;});
    return factorialOfNum;
  }else if(num === 0){
    factorialOfNum = 1;
    return factorialOfNum;
  }else{
    factorialOfNum = 'Invalid input';
    return factorialOfNum;
  }
}
