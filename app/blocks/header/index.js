import $ from 'jquery';

const $page = $('.page');
const $header = $('.header');
const $toggler = $('.js-menu-toggler');

export default class Header {
	handleMenuToggle() {
		$header.toggleClass('header_menu-open');
		$page.toggleClass('page_menu-open');
	}

	init() {
		$toggler.on('click', this.handleMenuToggle);
	}
}
