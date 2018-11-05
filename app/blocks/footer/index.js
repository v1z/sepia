import $ from 'jquery';

export default class Footer {
	init() {
		$('.footer__button')[0].addEventListener('click', () => {
			$('html, body').animate({scrollTop: 0}, 700);
		});
	}
}
