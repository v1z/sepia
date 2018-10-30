import svg4everybody from 'svg4everybody';
import $ from 'jquery';
import Header from '../blocks/header';

$(() => {
	svg4everybody();

	const header = new Header();
	header.init();
});
