export default function setUnion(a, b){
  if (Array.isArray(a) && Array.isArray(b)){
    for (var i = 0; i < b.length; i++){
      if (a.includes(b[i]) === false){
        a.push(b[i]);
      }
  }
  return a;
} else {
  return 'One or more inputs invalid';
}
}
