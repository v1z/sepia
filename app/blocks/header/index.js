import $ from 'jquery';

const $page = $('.page');
const $header = $('.header');
const $toggler = $('.js-menu-toggler');

const topMenuClass = 'header_on-top';
const fixedMenuClass = 'header_fixed';

export default class Header {
	constructor() {
		this.oldScroll = '';
		this.isHeaderFixed = false;
	}

	handleMenuToggle() {
		$header.toggleClass('header_menu-open');
		$page.toggleClass('page_menu-open');
	}

	handlePageScroll() {
		// handle header fix to top
		if (window.scrollY === 0) {
			$header.addClass(topMenuClass);
		}else {
			$header.removeClass(topMenuClass);
		}

		// handle header show/hide
		this.isHeaderFixed = this.oldScroll > window.scrollY;
		this.oldScroll = window.scrollY;

		if (this.isHeaderFixed) {
			$header.addClass(fixedMenuClass);
		}else {
			$header.removeClass(fixedMenuClass);
		}
	}

	init() {
		$toggler.on('click', this.handleMenuToggle);
		window.addEventListener('scroll', this.handlePageScroll);
	}
}
