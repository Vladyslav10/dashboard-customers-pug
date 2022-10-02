import { GLOBAL_VARS } from 'utils/constants';
import { documentReady, pageLoad } from 'utils';
import asideMenu from '../components/asideMenu';
import mainContent from '../components/mainContent';

export default class IndexPage {
	constructor() {
		this.init = this.init.bind(this);
	}

	loadFunc() {
		console.log('index page load');
		asideMenu();
		mainContent();
	}

	init() {
		this.loadFunc();
	}
}
