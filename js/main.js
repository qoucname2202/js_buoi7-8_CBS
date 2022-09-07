// Change open dropdown
function dropdown(id, idIcon) {
	const dropdownSelect = document.getElementById(id);
	dropdownSelect.addEventListener('click', e => {
		const icon = document.getElementById(idIcon);
		const dropdownList = e.target.nextElementSibling;
		if (dropdownList) {
			dropdownList.classList.toggle('show');
		}
		icon.classList.toggle('fa-chevron-up');
	});
}
// Features add numbers to array
let numbList = [];
document.getElementById('btnAddNumb').addEventListener('click', e => {
	e.preventDefault();
	const value = +document.getElementById('txtNumb').value;
	const reuslt = document.querySelector('.showArrNumb');
	numbList.push(value);
	reuslt.innerHTML = numbList.join(',');
	setTimeout(() => {
		document.getElementById('formAddNumArr').reset();
	}, 200);
});
// Feature button reset array
document.getElementById('btnReset').addEventListener('click', e => {
	e.preventDefault();
	const reuslt = document.querySelector('.showArrNumb');
	reuslt.innerHTML = '';
});

// Convert string to array input feild
function convertStrToArr(str) {
	if (str.length === 0) return 0;
	return str
		.trim()
		.split(',')
		.map(item => +item);
}
// Features Sum Integer Array
function sumIntegerArr(arr) {
	if (arr.length === 0) return 0;
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > 0) {
			sum += arr[i];
		}
	}
	return sum;
}
// Feature Counting up Integer
function countIntegerNumb(arr) {
	if (arr.length === 0) return 0;
	let count = 0;
	arr.forEach(item => {
		if (item > 0) {
			count += 1;
		}
	});
	return count;
}
// Features checking for prime numbers
function isPrime(numb) {
	if (numb === 1) return true;
	if (numb === 2) return false;
	for (let i = 2; i <= Math.sqrt(numb); i++) {
		if (numb % i === 0) {
			return false;
		}
	}
	return true;
}
// Features checking for even or odd numbers

// Features find min numbers
function findMin(arr) {
	let min = arr[0];
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] < min) {
			min = arr[i];
		}
	}
	return min;
}
// Features find integers numbers

// Features compare negative number vs positive number

// Exercise 1: Sum of integers
dropdown('dropdown__select-1', 'icon-1');
document.getElementById('btnAdd').addEventListener('click', e => {
	e.preventDefault();
	const txtNumbList = document.querySelector('.showArrNumb').textContent;
	const numbList = convertStrToArr(txtNumbList);
	const result = document.querySelector('.showTotal');
	if (numbList === 0) {
		result.innerHTML = `Tổng số dương: ${numbList}`;
	} else {
		const total = sumIntegerArr(numbList);
		result.innerHTML = `Tổng số dương: ${total}`;
	}
	setTimeout(() => {
		result.innerHTML = '';
	}, 5000);
});
// Exercise 2: Couting of integers
dropdown('dropdown__select-2', 'icon-2');
document.getElementById('btnCouting').addEventListener('click', e => {
	e.preventDefault();
	const txtNumbList = document.querySelector('.showArrNumb').textContent;
	const numbList = convertStrToArr(txtNumbList);
	const result = document.querySelector('.showNumbCount');
	if (numbList === 0) {
		result.innerHTML = `Số dương: ${numbList}`;
	} else {
		const count = countIntegerNumb(numbList);
		result.innerHTML = `Số dương: ${count}`;
	}
	setTimeout(() => {
		result.innerHTML = '';
	}, 5000);
});
// Exercise 3: Find min
dropdown('dropdown__select-3', 'icon-3');
document.getElementById('btnFindMin').addEventListener('click', e => {
	e.preventDefault();
	const txtNumbList = document.querySelector('.showArrNumb').textContent;
	const numbList = convertStrToArr(txtNumbList);
	const result = document.querySelector('.showFindMin');
	if (numbList === 0) {
		Swal.fire({
			position: 'center',
			icon: 'error',
			title: 'Vui lòng kiểm tra lại',
			showConfirmButton: false,
			timer: 1500,
		});
		result.innerHTML = '';
	} else {
		const min = findMin(numbList);
		result.innerHTML = `Số nhỏ nhất: ${min}`;
	}
	setTimeout(() => {
		result.innerHTML = '';
	}, 5000);
});
// Exercise 4: Find min integers
dropdown('dropdown__select-4', 'icon-4');
document.getElementById('btnFindIntegerMin').addEventListener('click', e => {
	e.preventDefault();
	console.log('Hello bài 4');
});
// Exercise 5: Find last even number
dropdown('dropdown__select-5', 'icon-5');
document.getElementById('btnFindLastEven').addEventListener('click', e => {
	e.preventDefault();
	console.log('Hello bài 5');
});
// Exercise 6: Swap number
dropdown('dropdown__select-6', 'icon-6');
document.getElementById('btnSwapNumb').addEventListener('click', e => {
	e.preventDefault();
	console.log('Hello bài 6');
});
// Exercise 7: Sort up ascending
dropdown('dropdown__select-7', 'icon-7');
document.getElementById('btnSortAscending').addEventListener('click', e => {
	e.preventDefault();
	console.log('Hello bài 7');
});
// Exercise 8: Find first prime number
dropdown('dropdown__select-8', 'icon-8');
document.getElementById('btnFindFirstPrime').addEventListener('click', e => {
	e.preventDefault();
	console.log('Hello bài 8');
});
// Exercise 9: Couting integers
dropdown('dropdown__select-9', 'icon-9');
document.getElementById('btnCoutingInteger').addEventListener('click', e => {
	e.preventDefault();
	console.log('Hello bài 9');
});
// Exercise 10: Compare the number of negative and positive numbers
dropdown('dropdown__select-10', 'icon-10');
document.getElementById('btnCompareAmountNumb').addEventListener('click', e => {
	e.preventDefault();
	console.log('Hello bài 10');
});
