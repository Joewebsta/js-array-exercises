function add (a,b) {
	return a + b;
}

function subtract (a, b) {
	return a - b;
}

function sum (array) {
	let sum = 0;
	array.forEach(element => {
		sum += element;
	});

	return sum;
}

function multiply (array) {
	let total = 1;
	array.forEach(element => {
		total *= element;
	});

	return total;
}

function power(base, exponent) {
	return base ** exponent;
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