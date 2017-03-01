export default function isPalindrome(inputString){

  inputString = inputString.toLowerCase();
  inputString = inputString.replace(/[^\w]|_/g, "");
  var inputArray = inputString.split('');
  inputArray.reverse();
  var reverseString = inputArray.join('');
  if (reverseString === inputString) {
    return true;
  } else {
    return false;
  }
}
