const burgerBtn = document.querySelector('.hamburger');
const dropdownMenu = document.querySelector('.dropdown-menu');
const rightMenu = document.querySelector('.features-menu');
const featuresBtn = document.querySelector('.features');

const handleBurgerBtn = () => {
	burgerBtn.classList.toggle('is-active');
	dropdownMenu.classList.toggle('menu-active');
	setTimeout(() => {
		rightMenu.classList.remove('active-right-menu');
	}, 500);
};

const handleRightMenu = () => {
	rightMenu.classList.add('active-right-menu');
};

if (featuresBtn !== null) {
	featuresBtn.addEventListener('click', handleRightMenu);
}
if (burgerBtn !== null) {
	burgerBtn.addEventListener('click', handleBurgerBtn);
}
