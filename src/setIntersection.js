export default function setIntersection(a, b){
  if (Array.isArray(a) && Array.isArray(b)){
    var intersection = [];
    for (var i = 0; i<b.length; i++){
      if(a.includes(b[i])){
        intersection.push(b[i]);
      }
    }
    return intersection;
  } else {
    return 'One or more inputs invalid';
  }
}
