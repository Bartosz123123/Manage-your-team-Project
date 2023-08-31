const burgerBtn = document.querySelector('.hamburger');
const dropdownMenu = document.querySelector('.dropdown-menu');
const featuresMenu = document.querySelector('.features-menu');
const solutionsMenu = document.querySelector('.solutions-menu');
const plansMenu = document.querySelector('.plans-menu');
const resourcesMenu = document.querySelector('.resources-menu');
const logo = document.querySelector('.logo');
//BTNS=============================
const featuresBtn = document.querySelector('.features');
const solutionsBtn = document.querySelector('.solutions');
const plansBtn = document.querySelector('.plans');
const resourcesBtn = document.querySelector('.resources');
const back = document.querySelector('.back');
const backBtn = document.querySelector('.back-btn');
const allNavBtnsDesktop = document.querySelectorAll('.desktop-nav-btns');

//===================
const dropdownLinks = document.querySelector('.dropdown-box');
const dropdownContainer = document.querySelector('.dropdown-container');

const linkElements = dropdownContainer.querySelectorAll('.link');
let range = 360;

const handleBurgerBtn = () => {
	burgerBtn.classList.toggle('is-active');
	dropdownMenu.classList.toggle('menu-active');
	if (
		featuresMenu.classList.contains('active-right-menu') ||
		solutionsMenu.classList.contains('active-right-menu') ||
		plansMenu.classList.contains('active-right-menu') ||
		resourcesMenu.classList.contains('active-right-menu')
	) {
		setTimeout(() => {
			featuresMenu.classList.remove('active-right-menu');
			solutionsMenu.classList.remove('active-right-menu');
			plansMenu.classList.remove('active-right-menu');
			resourcesMenu.classList.remove('active-right-menu');
		}, 500);
	}

	dropdownLinks.classList.remove('slide-left');

	if (
		back.classList.contains('slide-start-animation') &&
		logo.classList.contains('logo-exit-animation')
	) {
		back.classList.add('slide-exit-animation');
		logo.classList.add('logo-start-animation');
		logo.classList.remove('logo-exit-animation');
		back.classList.remove('slide-start-animation');

		setTimeout(() => {
			back.classList.remove('slide-exit-animation');
			logo.classList.remove('logo-start-animation');
		}, 500);
	}
};

const handleBack = () => {
	if (back.classList.contains('slide-start-animation')) {
		back.classList.remove('slide-start-animation');
		logo.classList.remove('logo-exit-animation');
		back.classList.add('slide-exit-animation');
		logo.classList.add('logo-start-animation');
		setTimeout(() => {
			back.classList.remove('slide-exit-animation');
			logo.classList.remove('logo-start-animation');
		}, 500);
		featuresMenu.classList.remove('active-right-menu');
		solutionsMenu.classList.remove('active-right-menu');
		plansMenu.classList.remove('active-right-menu');
		resourcesMenu.classList.remove('active-right-menu');
		dropdownLinks.classList.remove('slide-left');
	}
};

const handleFeaturesMenu = () => {
	featuresMenu.classList.add('active-right-menu');
	dropdownLinks.classList.add('slide-left');
	back.classList.add('slide-start-animation');
	logo.classList.add('logo-exit-animation');
};

const handleSolutionsMenu = () => {
	solutionsMenu.classList.add('active-right-menu');
	dropdownLinks.classList.add('slide-left');
	back.classList.add('slide-start-animation');
	logo.classList.add('logo-exit-animation');
};
const handlePlansMenu = () => {
	plansMenu.classList.add('active-right-menu');
	dropdownLinks.classList.add('slide-left');
	back.classList.add('slide-start-animation');
	logo.classList.add('logo-exit-animation');
};
const handleResourcesMenu = () => {
	resourcesMenu.classList.add('active-right-menu');
	dropdownLinks.classList.add('slide-left');
	back.classList.add('slide-start-animation');
	logo.classList.add('logo-exit-animation');
};

// ================== DESKTOP ===============

const showTab = (tabId) => {
	// const dropdownContainer = document.querySelector('.dropdown-container');
	const frames = document.querySelectorAll('.frame');
	const activeTab = document.getElementById(tabId);

	if (activeTab.classList.contains('active')) {
		dropdownContainer.style.maxHeight = '0';
		setTimeout(() => {
			frames.forEach((frame) => {
				frame.classList.remove('active');
			});
			activeTab.classList.remove('active');
		}, 300); // Czas trwania animacji w milisekundach
	} else {
		dropdownContainer.style.maxHeight = '0';
		frames.forEach((frame) => {
			frame.classList.remove('active');
		});

		activeTab.classList.add('active');
		dropdownContainer.style.maxHeight = activeTab.scrollHeight + 'px'; // Ustawianie maksymalnej wysokości na wysokość zawartości
	}
};

const generateRandomColor = () => {
	const letters = '0123456789ABCDEF';
	let color = 'rgba(';
	for (let i = 0; i < 3; i++) {
		color += parseInt(letters.substr(Math.floor(Math.random() * 16), 2), 16);
		if (i < 2) {
			color += ', ';
		}
	}
	color += ', 0.05)'; // Dodanie wartości alfa dla przeźroczystości (5%)
	return color;
};

const changeBackgroundColor = (element) => {
	if (!element.dataset.originalColor) {
		// Jeśli element nie ma ustawionego oryginalnego koloru, zapisujemy go
		element.dataset.originalColor = element.style.backgroundColor;
	}

	const randomColor = generateRandomColor();
	element.style.backgroundColor = randomColor;
};

const resetBackgroundColor = (element) => {
	element.style.backgroundColor = element.dataset.originalColor || ''; // Ustawienie oryginalnego koloru lub usunięcie tła
};

if (linkElements !== null) {
	linkElements.forEach((link) => {
		link.addEventListener('mouseover', function () {
			changeBackgroundColor(link);
		});

		link.addEventListener('mouseout', function () {
			resetBackgroundColor(link);
		});
	});
}

if (allNavBtnsDesktop !== null) {
	allNavBtnsDesktop.forEach((link) => {
		link.addEventListener('click', function (e) {
			e.preventDefault();
			const tabId = link.getAttribute('href').substring(1);
			showTab(tabId);
		});
	});
}

const clock = () => {
	let hours = document.querySelector('.hours');
	let minutes = document.querySelector('.minutes');
	let seconds = document.querySelector('.seconds');
	let day = document.querySelector('.day');
	let mounth = document.querySelector('.mounth');
	let year = document.querySelector('.year');

	let date = new Date();
	let h = date.getHours();
	let m = date.getMinutes();
	let s = date.getSeconds();
	let d = date.getDate();
	let mo = date.getMonth();
	let y = date.getFullYear();

	const months = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December',
	];

	hours.textContent = h < 10 ? `0${h}` : h;
	minutes.textContent = m < 10 ? `0${m}` : m;
	seconds.textContent = s < 10 ? `0${s}` : s;
	day.textContent = d;
	mounth.textContent = months[mo];
	year.textContent = y;
};

setInterval(() => {
	clock();
}, 1000);

if (backBtn !== null) {
	backBtn.addEventListener('click', handleBack);
}
if (featuresBtn !== null) {
	featuresBtn.addEventListener('click', handleFeaturesMenu);
}
if (solutionsBtn !== null) {
	solutionsBtn.addEventListener('click', handleSolutionsMenu);
}
if (plansBtn !== null) {
	plansBtn.addEventListener('click', handlePlansMenu);
}
if (resourcesBtn !== null) {
	resourcesBtn.addEventListener('click', handleResourcesMenu);
}
if (burgerBtn !== null) {
	burgerBtn.addEventListener('click', handleBurgerBtn);
}
