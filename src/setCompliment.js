export default function setCompliment(a, b){
  if (Array.isArray(a) && Array.isArray(b)){
    const compliment = [];
    for(var i = 0; i<b.length; i++){
      if(a.includes(b[i]) === false){
        compliment.push(b[i]);
      }
    }
    return compliment;
  } else {
    return 'One or more inputs invalid';
  }
}
