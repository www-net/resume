import '../css/style.css';
import '../css/fonts.css';

import Store from './api/store'
import { render } from './utils/render';
import TopController from './controllers/topSide';
import TopComponent from './components/top/top';
import CenterComponent from './components/center/center';
import CenterController from './controllers/centerSide';
import BottomComponent from './components/bottom/bottom';
import BottomController from './controllers/bottomSide';

const siteMain = document.querySelector(`main`);

const store = new Store();
const topComponent = new TopComponent();
const topController = new TopController(topComponent, store);
render(siteMain, topComponent);
topController.render();

const centerComponent = new CenterComponent(); 
const centerController = new CenterController(centerComponent, store);
render(siteMain, centerComponent);
centerController.render();

const bottomComponent = new BottomComponent();
const bottomController = new BottomController(bottomComponent, store);
render(siteMain, bottomComponent);
bottomController.render();





