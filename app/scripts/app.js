import svg4everybody from 'svg4everybody';
import $ from 'jquery';
import Header from '../blocks/header';
import Menu from '../blocks/menu';

$(() => {
	svg4everybody();

	const header = new Header();
	header.init();

	const menu = new Menu();
	menu.init();
});
