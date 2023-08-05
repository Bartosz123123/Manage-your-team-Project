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
// const frames = document.querySelectorAll('.frame');
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
