function add (a,b) {
	return a + b;
}

function subtract (a, b) {
	return a - b;
}

function sum (array) {
	return array.reduce((total, current) => total + current, 0);
}

function multiply (array) {
	if ( array.length === 0) {
		return 0;	
	} else {
		return array.reduce((accumulator, nextItem) => accumulator * nextItem);
	} 
}

function power(base, exponent) {
	return Math.pow(base, exponent);
}

function factorial(num) {
	let total = 1;

	for (let i = num; i >= 1; i--){
		total *= i;
	}

	return total;
}


module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}