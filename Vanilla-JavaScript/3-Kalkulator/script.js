// Deklarasi Variabel or Constanta
const input = document.getElementById('input');
const numbers = document.querySelectorAll('#number');
const operators = document.querySelectorAll('#operator');
const equal = document.getElementById('equal');
const clear = document.getElementById('clear');
let resultDisplayed = false;
input.innerHTML = '';

// Click Number
numbers.forEach(number => {
	number.addEventListener('click', function(){
	    let currentString = input.innerHTML;
	    let lastChar = currentString[currentString.length - 1];
	    if(resultDisplayed === false){
	    	input.innerHTML += this.innerHTML;
	    }else if(resultDisplayed === true && lastChar === "+" || lastChar === "-" || lastChar === "*" || lastChar === '/'){
	    	resultDisplayed = false;
	    	input.innerHTML += this.innerHTML;
	    }else{
	    	resultDisplayed = false;
	    	input.innerHTML = "";
	    	input.innerHTML += this.innerHTML;
	    }
	})
})

// Click Operator
operators.forEach(operator => {
	operator.addEventListener('click', function(){
		let currentString = input.textContent;
		let lastChar = currentString[currentString.length - 1];
		if(lastChar === '+' || lastChar === '-' || lastChar === '*' || lastChar === '/'){
		    let newString = currentString.substring(0, currentString.length - 1) + this.textContent;
  		    input.innerHTML = newString;
		}else if(currentString.length == 0){
			console.log('Number First');
		}else{
			input.innerHTML += this.textContent;
		}
	})
})

// Click equal(=)
equal.addEventListener('click', function(){
	let inputString = input.innerHTML;
	let numbers = inputString.split(/\+|\-|\*|\//g);
	let operators = inputString.replace(/[0-9]|\./g, '').split('');
	console.log(numbers);
	console.log(operators);

	let divide = operators.indexOf('/');
	while(divide != -1){
		numbers.splice(divide, 2, numbers[divide] / numbers[divide + 1]);
		operators.splice(divide, 1);
		divide = operators.indexOf('/');
	}

	let multiply = operators.indexOf('*');
	while(multiply != -1){
		numbers.splice(multiply, 2, numbers[multiply] * numbers[multiply + 1]);
		operators.splice(multiply, 1);
		multiply = operators.indexOf('*');
	}

	let subtract = operators.indexOf('-');
	while(subtract != -1){
		numbers.splice(subtract, 2, numbers[subtract] - numbers[subtract + 1]);
		operators.splice(subtract, 1);
		subtract = operators.indexOf('-');
	}
	
	let add = operators.indexOf('+');
	while(add != -1){
		numbers.splice(add, 2, parseFloat(numbers[add]) + parseFloat(numbers[add + 1]));
		operators.splice(add, 1);
		add = operators.indexOf('+');
	}

	input.innerHTML = numbers[0]; // Menampilkan output hasil
	resultDisplayed = true;

})

// Click clear(C)
clear.addEventListener('click', function(){
	input.innerHTML = '';
})