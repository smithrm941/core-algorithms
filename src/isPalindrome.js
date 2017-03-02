export default function isPalindrome(input){
  if (typeof input ==='string'){
    const alphaNumeric = input.toLowerCase().replace(/[^\w]|_/g, "");
    const reverse = alphaNumeric.split('').reverse().join('');
    return reverse === alphaNumeric;
  }else{
    return 'Invalid input';
  }
}
