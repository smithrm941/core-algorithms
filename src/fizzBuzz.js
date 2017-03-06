export default function fizzBuzz(){
	var array = []
	for (var i = 1; i < 101; i++){
		array.push(i)
	}
	for (var j = 0; j<array.length; j++){
		if (array[j] % 3 === 0 && array[j] % 5 !== 0){
			array.splice(j, 1, 'Fizz')
		}
		if (array[j] % 5 === 0 && array[j] % 3 !== 0){
			array.splice(j, 1, 'Buzz')
		}
		if (array[j] % 3 === 0 && array[j] % 5 === 0){
			array.splice(j, 1, 'FizzBuzz')
		}
	}
	return array
}
