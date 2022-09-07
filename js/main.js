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
	}, 300);
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
	return arr
		.filter(val => val > 0)
		.reduce((total, item) => {
			return (total += item);
		}, 0);
}
// Feature Counting up Integer

// Features checking for prime numbers

// Features checking for even or odd numbers

// Features find min numbers

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
});
// Exercise 2: Couting of integers
dropdown('dropdown__select-2', 'icon-2');
document.getElementById('btnCouting').addEventListener('click', e => {
	e.preventDefault();
	console.log('Hello bài 2');
});
// Exercise 3: Find min
dropdown('dropdown__select-3', 'icon-3');
document.getElementById('btnFindMin').addEventListener('click', e => {
	e.preventDefault();
	console.log('Hello bài 3');
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
