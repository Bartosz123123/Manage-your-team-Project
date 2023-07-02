const burgerBtn = document.querySelector('.hamburger');
const dropdownMenu = document.querySelector('.dropdown-menu');

const handleBurgerBtn = () => {
	burgerBtn.classList.toggle('is-active');
	dropdownMenu.classList.toggle('active-dropdown');
};

burgerBtn.addEventListener('click', handleBurgerBtn);
