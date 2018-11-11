import $ from 'jquery';

const $page = $('.page');
const $header = $('.header');
// const $intro = $('.intro');
const $toggler = $('.js-menu-toggler');

const topMenuClass = 'header_on-top';
const fixedMenuClass = 'header_fixed';
const crossIntroMenuClass = 'header_cross-intro';

export default class Header {
	constructor() {
		this.oldScroll = '';
		this.isHeaderFixed = false;
		this.isMenuOpen = false;
		this.scrollBeforeMenuOpen = '';
		this.debounce = true;
	}

	handleMenuToggle() {
		if (!this.isMenuOpen) {
			this.scrollBeforeMenuOpen = window.pageYOffset;
			$header.css({transition: 'transform .5s, color .3s'});
		}

		$header.toggleClass('header_menu-open');
		$page.toggleClass('page_menu-open');

		this.isMenuOpen = !this.isMenuOpen;

		if (!this.isMenuOpen) {
			window.scrollTo(0, this.scrollBeforeMenuOpen);
			$('.header__menu-wrapper').scrollTop(0); // reopen menu always at top scroll position
			setTimeout(() => { $header.css({transition: 'transform .5s, color .3s, background-color .3s'}); }, 10);
		}
	}

	handlePageScroll() {
		// handle header fix to top
		if (window.pageYOffset <= 0) {
			$header.addClass(topMenuClass);
		}else {
			$header.removeClass(topMenuClass);
		}

		// handle cross intro section
		if ($('#intro')[0] && $('#intro')[0].getBoundingClientRect().bottom <= 0 + $header.height() + 100) {
			$header.addClass(crossIntroMenuClass);
		}else {
			$header.removeClass(crossIntroMenuClass);
		}

		// handle header show/hide
		this.isHeaderFixed = this.oldScroll > window.pageYOffset;
		this.oldScroll = window.pageYOffset;

		if (this.isHeaderFixed) {
			$header.addClass(fixedMenuClass);
		}else {
			$header.removeClass(fixedMenuClass);
		}
	}

	init() {
		$toggler.on('click', this.handleMenuToggle);
		window.addEventListener('scroll', () => this.handlePageScroll());
		// $intro[0].addEventListener('click', () => {
		// 	if (window.innerWidth >= 1366 && $('#intro')) {
		// 		$header.addClass(fixedMenuClass);
		// 		this.handleMenuToggle();
		// 	}
		// });
	}
}
