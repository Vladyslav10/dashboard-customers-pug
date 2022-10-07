import 'ScssComponents/_aside_menu.scss';

const asideMenu = () => {
	const main = document.querySelector('main');
	const aside = document.querySelector('aside');
	const asideItems = document.querySelectorAll('.aside__list li');
	const links = document.querySelectorAll('.aside__link');
	const btnBack = document.querySelector('.main__back');
	const w = window.innerWidth;
	if (w > 992) {
		asideItems[2].classList.add('active');
	} else {
		asideItems.forEach((el) => {
			el.addEventListener('click', (e) => {
				aside.classList.add('hidden');
				main.classList.add('show');
			});
		});
		btnBack.addEventListener('click', () => {
			asideItems.forEach((el) => el.classList.remove('active'));
			aside.classList.remove('hidden');
			main.classList.remove('show');
		});
	}

	links.forEach((el) => {
		el.addEventListener('click', (e) => {
			e.preventDefault();
		});
	});

	asideItems.forEach((el) => {
		el.addEventListener('click', (e) => {
			asideItems.forEach((el) => el.classList.remove('active'));
			el.classList.add('active');
		});
	});
};

export default asideMenu;
