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
	reuslt.textContent = '';
	numbList = [];
	// Swap reset
	const showRes = document.getElementById('showRes');
	if (showRes.childNodes.length === 0) {
		reuslt.textContent = '';
		numbList = [];
	} else {
		// remove class swap exercise
		showRes.className = '';
		// remove element in view result
		showRes.textContent = '';
		document.getElementById('formSwap').reset();
		reuslt.textContent = '';
		numbList = [];
	}
	// Reset Form
	document.querySelector('.showTotal').innerHTML = '';
	document.querySelector('.showNumbCount').innerHTML = '';
	document.querySelector('.showFindMin').innerHTML = '';
	document.querySelector('.showIntegerMin').innerHTML = '';
	document.querySelector('.showLastEven').innerHTML = '';
	document.querySelector('.showSortingNumb').innerHTML = '';
	document.querySelector('.showFirstPrime').innerHTML = '';
	document.querySelector('.showAmountInteger').innerHTML = '';
	document.querySelector('.showCompareNumb').innerHTML = '';
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
	if (numb === 1) return false;
	if (numb === 2) return true;
	for (let i = 2; i <= Math.sqrt(numb); i++) {
		if (numb % i === 0) {
			return false;
		}
	}
	return true;
}
// Feature first prime number of array
function firstPrimeNumb(arr) {
	let primeNumbList = [];
	arr.forEach(item => {
		if (isPrime(item)) {
			primeNumbList.push(item);
		}
	});
	return primeNumbList.length === 0
		? -1
		: `S??? nguy??n t??? ?????u ti??n: ${primeNumbList[0]}`;
}
// Features checking for even or odd numbers
function isEvenOrOdd(numb) {
	if (typeof numb !== 'number') return 0;
	return numb % 2 === 0 ? true : false;
}
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
function findMinInteger(arr) {
	if (arr.length === 0) return 0;
	const arrInteger = [];
	for (let i = 0; i < arr.length; i++) {
		const item = arr[i];
		if (item > 0) {
			arrInteger.push(item);
		}
	}
	return arrInteger.length > 0
		? `S??? d????ng nh??? nh???t: ${findMin(arrInteger)}`
		: `Kh??ng c?? s??? d????ng trong m???ng`;
}
// Feature find last even number
function findLastEven(arr) {
	if (arr.length === 0) return 0;
	const numbList = [];
	for (let i = 0; i < arr.length; i++) {
		const item = arr[i];
		if (isEvenOrOdd(item)) {
			numbList.push(item);
		}
	}
	return numbList.length > 0
		? `S??? ch???n cu???i c??ng: ${numbList[numbList.length - 1]}`
		: -1;
}
// Swap
function swap(arr, idx1, idx2) {
	let temp = arr[idx1];
	arr[idx1] = arr[idx2];
	arr[idx2] = temp;
	return arr;
}
// Checking number is Integers
function isIntegerNumb(arr) {
	const numbList = [];
	arr.forEach(item => {
		if (Number.isInteger(item)) {
			numbList.push(item);
		}
	});
	return numbList.length > 0 ? numbList.length : 0;
}
// Features compare negative number vs positive number
function compareNumb(arr) {
	const negativeNumb = [];
	const positiveNumb = [];
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > 0) {
			positiveNumb.push(arr[i]);
		} else {
			negativeNumb.push(arr[i]);
		}
	}
	return positiveNumb.length > negativeNumb.length
		? `S??? d????ng > s??? ??m`
		: positiveNumb.length < negativeNumb.length
		? `S??? d????ng < s??? ??m`
		: `S??? d????ng = S??? ??m`;
}
// Exercise 1: Sum of integers
dropdown('dropdown__select-1', 'icon-1');
document.getElementById('btnAdd').addEventListener('click', e => {
	e.preventDefault();
	const txtNumbList = document.querySelector('.showArrNumb').textContent;
	const numbList = convertStrToArr(txtNumbList);
	const result = document.querySelector('.showTotal');
	if (numbList === 0) {
		result.innerHTML = `T???ng s??? d????ng: ${numbList}`;
	} else {
		const total = sumIntegerArr(numbList);
		result.innerHTML = `T???ng s??? d????ng: ${total}`;
	}
});
// Exercise 2: Couting of integers
dropdown('dropdown__select-2', 'icon-2');
document.getElementById('btnCouting').addEventListener('click', e => {
	e.preventDefault();
	const txtNumbList = document.querySelector('.showArrNumb').textContent;
	const numbList = convertStrToArr(txtNumbList);
	const result = document.querySelector('.showNumbCount');
	if (numbList === 0) {
		result.innerHTML = `S??? d????ng: ${numbList}`;
	} else {
		const count = countIntegerNumb(numbList);
		result.innerHTML = `S??? d????ng: ${count}`;
	}
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
			title: 'Vui l??ng ki???m tra l???i????',
			showConfirmButton: false,
			timer: 1500,
		});
		result.innerHTML = '';
	} else {
		const min = findMin(numbList);
		result.innerHTML = `S??? nh??? nh???t: ${min}`;
	}
});
// Exercise 4: Find min integers
dropdown('dropdown__select-4', 'icon-4');
document.getElementById('btnFindIntegerMin').addEventListener('click', e => {
	e.preventDefault();
	const txtNumbList = document.querySelector('.showArrNumb').textContent;
	const numbList = convertStrToArr(txtNumbList);
	const result = document.querySelector('.showIntegerMin');
	if (numbList === 0) {
		Swal.fire({
			position: 'center',
			icon: 'error',
			title: 'M???ng kh??ng c?? s??? d????ng????',
			showConfirmButton: false,
			timer: 1500,
		});
		result.innerHTML = '';
	} else {
		const value = findMinInteger(numbList);
		result.innerHTML = value;
	}
});
// Exercise 5: Find last even number
dropdown('dropdown__select-5', 'icon-5');
document.getElementById('btnFindLastEven').addEventListener('click', e => {
	e.preventDefault();
	const txtNumbList = document.querySelector('.showArrNumb').textContent;
	const numbList = convertStrToArr(txtNumbList);
	const result = document.querySelector('.showLastEven');
	if (numbList === 0) {
		Swal.fire({
			position: 'center',
			icon: 'error',
			title: 'Kh??ng t??m th???y s??? ch???n n??o????',
			showConfirmButton: false,
			timer: 1500,
		});
		result.innerHTML = -1;
	} else {
		const value = findLastEven(numbList);
		result.innerHTML = value;
	}
});
// Exercise 6: Swap number
dropdown('dropdown__select-6', 'icon-6');
document.getElementById('btnSwapNumb').addEventListener('click', e => {
	e.preventDefault();
	const txtNumbList = document.querySelector('.showArrNumb').textContent;
	const numbList = convertStrToArr(txtNumbList);
	const result = document.getElementById('showRes');
	const idx1 = +document.getElementById('txtLocal_1').value;
	const idx2 = +document.getElementById('txtLocal_2').value;
	if (numbList === 0) {
		Swal.fire({
			position: 'center',
			icon: 'error',
			title: 'Vui l??ng ki???m tra l???i????',
			showConfirmButton: false,
			timer: 1500,
		});
		result.innerHTML = '';
	} else {
		const value = swap(numbList, idx1, idx2);
		result.className = 'alert alert-success mt-4';
		result.innerHTML = `
      <i class="fa-solid fa-hands-praying" id="icon-res-2"></i>
			<span class="showSwapNumb mess">M???ng sau khi ?????i: ${value}</span>
    `;
	}
});
// Exercise 7: Sort up ascending
dropdown('dropdown__select-7', 'icon-7');
document.getElementById('btnSortAscending').addEventListener('click', e => {
	e.preventDefault();
	const txtNumbList = document.querySelector('.showArrNumb').textContent;
	const numbList = convertStrToArr(txtNumbList);
	const result = document.querySelector('.showSortingNumb');
	if (numbList === 0) {
		Swal.fire({
			position: 'center',
			icon: 'error',
			title: 'Vui l??ng ki???m tra l???i????',
			showConfirmButton: false,
			timer: 1500,
		});
		result.innerHTML = '';
	} else {
		const newArr = numbList.sort((a, b) => (a > b ? 1 : -1)).join(',');
		result.innerHTML = `M???ng sau khi s???p x???p: ${newArr}`;
	}
});
// Exercise 8: Find first prime number
dropdown('dropdown__select-8', 'icon-8');
document.getElementById('btnFindFirstPrime').addEventListener('click', e => {
	e.preventDefault();
	const txtNumbList = document.querySelector('.showArrNumb').textContent;
	const numbList = convertStrToArr(txtNumbList);
	const result = document.querySelector('.showFirstPrime');
	if (numbList === 0) {
		Swal.fire({
			position: 'center',
			icon: 'error',
			title: 'Kh??ng t??m th???y s??? nguy??n t???????',
			showConfirmButton: false,
			timer: 1500,
		});
		result.innerHTML = -1;
	} else {
		const value = firstPrimeNumb(numbList);
		result.innerHTML = value;
	}
});
// Exercise 9: Couting integers
dropdown('dropdown__select-9', 'icon-9');
document.getElementById('btnCoutingInteger').addEventListener('click', e => {
	e.preventDefault();
	const txtNumbList = document.querySelector('.showArrNumb').textContent;
	const numbList = convertStrToArr(txtNumbList);
	const result = document.querySelector('.showAmountInteger');
	if (numbList === 0) {
		Swal.fire({
			position: 'center',
			icon: 'error',
			title: 'Vui l??ng ki???m tra l???i????',
			showConfirmButton: false,
			timer: 1500,
		});
		result.innerHTML = '';
	} else {
		const value = isIntegerNumb(numbList);
		result.innerHTML = `S??? nguy??n: ${value}`;
	}
});
// Exercise 10: Compare the number of negative and positive numbers
dropdown('dropdown__select-10', 'icon-10');
document.getElementById('btnCompareAmountNumb').addEventListener('click', e => {
	e.preventDefault();
	const txtNumbList = document.querySelector('.showArrNumb').textContent;
	const numbList = convertStrToArr(txtNumbList);
	const result = document.querySelector('.showCompareNumb');
	if (numbList === 0) {
		Swal.fire({
			position: 'center',
			icon: 'error',
			title: 'Vui l??ng ki???m tra l???i????',
			showConfirmButton: false,
			timer: 1500,
		});
		result.innerHTML = ``;
	} else {
		const value = compareNumb(numbList);
		result.innerHTML = value;
	}
});
