export default function symmetricDifference(a, b){
  if (Array.isArray(a) && Array.isArray(b)){
    const symmetricDifference = [];
    for(var i = 0; i<a.length; i++){
      if(b.includes(a[i]) === false){
        symmetricDifference.push(a[i]);
      }
    }
    for(var i = 0; i<b.length; i++){
      if(a.includes(b[i]) === false){
        symmetricDifference.push(b[i]);
      }
    }
    return symmetricDifference;
  } else {
    return 'One or more inputs invalid'
  }

}
