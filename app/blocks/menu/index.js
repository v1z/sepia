import $ from 'jquery';

const $projectsToggler = $('.js-toggle-projects');
const $projectsList = $('.js-projects-list');
const $projectsTogglerIcon = $('.js-projects-toggler-icon');
const $artsToggler = $('.js-toggle-arts');
const $artsList = $('.js-arts-list');
const $artsTogglerIcon = $('.js-arts-toggler-icon');

const openSubListClass = 'menu__sub-nav-list_open';
const revertedTogglerIconClass = 'menu__toggler-icon_revert';

export default class Menu {
	init() {
		$projectsToggler.on('click', () => {
			$projectsList.toggleClass(openSubListClass);
			$projectsTogglerIcon.toggleClass(revertedTogglerIconClass);
		});

		$artsToggler.on('click', () => {
			$artsList.toggleClass(openSubListClass);
			$artsTogglerIcon.toggleClass(revertedTogglerIconClass);
		});
	}
}
