
const input = document.querySelector('.input')
const nums = [...document.querySelectorAll('.num')]
const operator = document.querySelectorAll('.calculations')
const equals = document.querySelector('.equals')
const clear = document.querySelector('.clear')
const flag = false;

function calc() {

	for (let i = 0; i < nums.length; i++) {
		nums[i].addEventListener('click', function (e) {
			// console.log(nums[i]);
			const currentSum = input.innerHTML;
			let lastChar = currentSum[currentSum.length - 1]

			if (flag === false) {
				input.innerHTML += e.target.innerHTML;
			}
			else if (flag === true && lastChar === "+" || lastChar === "-" || lastChar === "×" || lastChar === "÷") {
				flag = false;
				input.innerHTML += e.target.innerHTML
			}
			else {
				flag = false;
				input.innerHTML = "";
				input.innerHTML += e.target.innerHTML;
			}
		})
	}

	for (let i = 0; i < operator.length; i++) {
		operator[i].addEventListener("click", function (e) {
			console.log(operator[i].innerHTML);

			let currentString = input.innerHTML;
			let lastChar = currentString[currentString.length - 1];

			if (lastChar === "+" || lastChar === "-" || lastChar === "×" || lastChar === "÷") {
				let newString = currentString.substring(0, currentString.length - 1) + e.target.innerHTML;
				input.innerHTML = newString;
			} else if (currentString.length == 0) {

				console.log("enter a number first");
			} else {

				input.innerHTML += e.target.innerHTML;
			}

		});
	}

	equals.addEventListener("click", function () {

		const inputString = input.innerHTML;

		let numbers = inputString.split(/\+|\-|\×|\÷/g);

		let operators = inputString.replace(/[0-9]|\./g, "").split("");

		let divide = operators.indexOf("÷");
		while (divide != -1) {
			numbers.splice(divide, 2, numbers[divide] / numbers[divide + 1]);
			operators.splice(divide, 1);
			divide = operators.indexOf("÷");
		}

		let multiply = operators.indexOf("×");
		while (multiply != -1) {
			numbers.splice(multiply, 2, numbers[multiply] * numbers[multiply + 1]);
			operators.splice(multiply, 1);
			multiply = operators.indexOf("×");
		}
		let subtract = operators.indexOf("-");
		while (subtract != -1) {
			numbers.splice(subtract, 2, numbers[subtract] - numbers[subtract + 1]);
			operators.splice(subtract, 1);
			subtract = operators.indexOf("-");
		}
		let add = operators.indexOf("+");
		while (add != -1) {
			numbers.splice(add, 2, parseFloat(numbers[add]) + parseFloat(numbers[add + 1]));
			operators.splice(add, 1);
			add = operators.indexOf("+");
		}

		input.innerHTML = numbers[0];
		flag = true;
	})
	clear.addEventListener("click", function () {
		input.innerHTML = "";
	})
	console.log(1);
	console.log(input.value);
}
calc()
