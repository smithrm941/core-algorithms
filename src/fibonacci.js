export default function fibonacci(num){
	if (num === 1) {
		return [0]
	} else if (num > 1) {
		var fibonacciArray = [0, 1]
		while (num > 2) {
			var nextTerm = fibonacciArray.slice(-2).reduce(function(a,b) {return a+b})
			fibonacciArray.push(nextTerm)
			num--
		}
		return fibonacciArray
	}
}
