export default function setUnion(set1, set2) {
	if ( Array.isArray(set1) && Array.isArray(set2) ) {
		var union = set1
		for (var i = 0; i < set2.length; i++) {
			var currentValue = set2[i]
			if ( !union.includes(currentValue) ) {
				union.push(currentValue)
			}
		}
		return union
	} else {
		return 'One or more inputs invalid'
	}
}
