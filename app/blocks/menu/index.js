import $ from 'jquery';

const $listToggler = $('.js-list-toggler');
const openTogglerState = 'menu__list-toggler_open';

export default class Menu {
	init() {
		$listToggler.on('click', function () { $(this).toggleClass(openTogglerState); });
	}
}
