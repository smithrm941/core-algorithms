export default function setIntersection(a, b){
  if (Array.isArray(a) && Array.isArray(b)){
    //check if each index in array b is in array a
    var intersection = [];
    for (var i = 0; i<b.length; i++){
      if(a.includes(b[i])){
        intersection.push(b[i]);
      }
    }
    return intersection;
    //if it is, no further action necessary
    //if it is not, remove the index from b
    //repeat and return b
  } else {
    return 'One or more inputs invalid';
  }
}
