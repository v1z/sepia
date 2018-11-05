import svg4everybody from 'svg4everybody';
import $ from 'jquery';
import Header from '../blocks/header';
import Menu from '../blocks/menu';
import Footer from '../blocks/footer';

$(() => {
	svg4everybody();

	const header = new Header();
	header.init();

	const menu = new Menu();
	menu.init();

	const footer = new Footer();
	footer.init();
});
