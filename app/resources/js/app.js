import smoothscroll from 'smoothscroll-polyfill';

(function () {
	const app = {
		init: function () {
			this.scroll();
		},

		scroll: function () {
			smoothscroll.polyfill();
			document.addEventListener('click', e => {
				const target = e.target;

				if (!target.classList.contains('js-smooth-scroll')) return;

				e.preventDefault();
				const targetId = target.hash;
				document.querySelector(targetId).scrollIntoView({
					behavior: 'smooth',
					block: 'start'
				});
			});
		}
	};

	document.addEventListener('DOMContentLoaded', function () {
		app.init();
	});
})();