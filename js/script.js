function myFunction() {
	var preloader = document.getElementById('loading');
	preloader.style.display = 'none';
}

function toggleNavbar() {
	document.getElementById('mainNav').classList.toggle('width');
}

let values = document.querySelectorAll('.num');
let interval = 5000;
values.forEach((value) => {
	let startValue = 0;
	let endValues = parseInt(value.getAttribute('data-val'));
	let duration = Math.floor(interval / endValues);
	let counter = setInterval(function () {
		startValue += 1;
		value.textContent = startValue + '+';
		if (startValue == endValues) {
			clearInterval(counter);
		}
	}, duration);
});

var d = new Date();
var year = d.getFullYear();
const footerDate = document.getElementById('date');
footerDate.innerText = year;

//javascript for scroll to top button
const scrollBtn = document.querySelector('.scrollToTop-btn');

window.addEventListener('scroll', function () {
	scrollBtn.classList.toggle('active', window.scrollY > 500);
});

//javascript for scroll back to top on click scroll-to-top button
scrollBtn.addEventListener('click', function () {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
});
