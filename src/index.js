import './style.css';
import DOMManipulator from './modules/dom_manipulator.js';

const dom = new DOMManipulator();
dom.addSubmitListener();
dom.populateScoreBoard();
dom.addRefreshListener();
