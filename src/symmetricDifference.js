export default function symmetricDifference(a, b){
	if (Array.isArray(a) && Array.isArray(b)){
		const symmetricDifference = []
		for(var i = 0; i<a.length; i++){
			if(b.includes(a[i]) === false){
				symmetricDifference.push(a[i])
			}
		}
		for(var j = 0; j<b.length; j++){
			if(a.includes(b[j]) === false){
				symmetricDifference.push(b[j])
			}
		}
		return symmetricDifference
	} else {
		return 'One or more inputs invalid'
	}

}
