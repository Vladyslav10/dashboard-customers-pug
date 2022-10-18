import 'ScssComponents/_aside_menu.scss';

const asideMenu = () => {
	const main = document.querySelector('main__content');
	const asideItems = document.querySelectorAll('.aside__list li');
	const links = document.querySelectorAll('.aside__link');
	const w = window.innerWidth;
	let $body;
	let $menuTrigger;

	$body = $('body');
	$menuTrigger = $('.menuTrigger');

	$menuTrigger.on('click', function click() {
		if ($body.hasClass('menu_open')) {
			$body.removeClass('menu_open');
			$(this).removeClass('active_mod');
		} else {
			$body.addClass('menu_open');
			$(this).addClass('active_mod');
		}
	});
	if (w > 992) {
		asideItems[2].classList.add('aside__item-active');
	} else {
		asideItems[2].classList.add('aside__item-active');
		asideItems.forEach((el) => {
			el.addEventListener('click', (e) => {
				const curEl = el;
				if (curEl === asideItems[2]) {
					$body.removeClass('menu_open');
					$menuTrigger.removeClass('active_mod');
				}
			});
		});
	}

	links.forEach((el) => {
		el.addEventListener('click', (e) => {
			e.preventDefault();
		});
	});

	// asideItems.forEach((el) => {
	// 	el.addEventListener('click', (e) => {
	// 		asideItems.forEach((el) => el.classList.remove('aside__item-active'));
	// 		el.classList.add('aside__item-active');
	// 	});
	// });
};

export default asideMenu;
