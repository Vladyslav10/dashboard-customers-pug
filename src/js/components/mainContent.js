import 'ScssComponents/_main_content.scss';

const mainContent = () => {
	let curPage = 1;
	const users = 320;
	const perPage = 8;
	let pages = Math.ceil(users / perPage);
	const nextbtn = document.querySelector('.main__pagination-arrow.next');
	const prevBtn = document.querySelector('.main__pagination-arrow.prev');
	const paginationArea = document.querySelector('.main__pagination-items');

	function pagCreator(pages, curPage) {
		let spanTag = '';
		let active;
		let beforePage = curPage - 1;
		let afterPage = curPage + 1;

		if (curPage > 2) {
			spanTag += '<li><a class="main__pagination-item" href="#">1</a></li>';
			if (curPage > 3) {
				spanTag += '<li class="dots">...</li>';
			}
		}

		if (curPage === pages) {
			beforePage -= 2;
		} else if (curPage === pages - 1) {
			beforePage -= 1;
		}

		if (curPage === 1) {
			afterPage += 2;
		} else if (curPage === 2) {
			afterPage += 1;
		}

		for (let plength = beforePage; plength <= afterPage; plength += 1) {
			if (plength <= pages) {
				if (plength === 0) {
					plength += 1;
				}
				if (curPage === plength) {
					active = 'active';
				} else {
					active = '';
				}
				spanTag += `<li><a class="main__pagination-item ${active}" href="#">${plength}</a></li>`;
			}
		}

		if (curPage < pages - 1) {
			if (curPage < pages - 2) {
				spanTag += '<li class="dots">...</li>';
			}
			spanTag += `<li><a href="#" class="main__pagination-item">${pages}</a></li>`;
		}

		paginationArea.innerHTML = spanTag;
		return spanTag;
	}
	paginationArea.innerHTML = pagCreator(pages, curPage);
	document.querySelectorAll('.main__pagination-item').forEach((el) => {
		el.addEventListener('click', (e) => {
			e.preventDefault();
		});
	});
	nextbtn.addEventListener('click', () => {
		if (curPage === pages) {
			curPage = 1;
			pagCreator(pages, curPage);
		} else {
			curPage += 1;
			pagCreator(pages, curPage);
		}
	});

	prevBtn.addEventListener('click', () => {
		if (curPage === 1) {
			curPage = pages;
			pagCreator(pages, curPage);
		} else {
			curPage -= 1;
			pagCreator(pages, curPage);
		}
	});
};

export default mainContent;
