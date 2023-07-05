const burgerBtn = document.querySelector('.hamburger');
const dropdownMenu = document.querySelector('.dropdown-menu');
const slideRightNav = document.querySelector('.slide-right');
const featuresBtn = document.querySelector('.features-btn');
const slideLeft = document.querySelector('.container-animation');
const featuresSection = document.querySelector('.fratures');

const handleBurgerBtn = () => {
	burgerBtn.classList.toggle('is-active');
	dropdownMenu.classList.toggle('active-dropdown');
	setTimeout(() => {
		slideRightNav.classList.remove('active-slide-right');
	}, 500);
	slideLeft.classList.remove('slide-left-dropdown');
	dropdownMenu.classList.remove('overflow-off');
	featuresSection.classList.remove('overflow-on');
};

const activeFeatures = () => {
	slideRightNav.classList.add('active-slide-right');
	slideLeft.classList.add('slide-left-dropdown');
	featuresSection.classList.add('overflow-on');
	dropdownMenu.classList.add('overflow-off');
};

if (featuresBtn !== null) {
	featuresBtn.addEventListener('click', activeFeatures);
}

if (burgerBtn !== null) {
	burgerBtn.addEventListener('click', handleBurgerBtn);
}
