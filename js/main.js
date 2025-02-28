import '../css/style.css';
import '../css/fonts.css';

import { render } from './utils/render';
import TopController from './controllers/topSide';
import TopComponent from './components/top/top';
import CenterComponent from './components/center/center';
import BottomComponent from './components/bottom/bottom';
import CenterController from './controllers/centerSide';
import BottomController from './controllers/bottomSide';


const siteMain = document.querySelector(`main`);

const topComponent = new TopComponent();
const topController = new TopController(topComponent);
render(siteMain, topComponent);
topController.render();

const centerComponent = new CenterComponent(); 
const centerController = new CenterController(centerComponent);
render(siteMain, centerComponent);
centerController.render();

const bottomComponent = new BottomComponent();
const bottomController = new BottomController(bottomComponent);
render(siteMain, bottomComponent);
bottomController.render();





