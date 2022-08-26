var express = require('express');
var router = express.Router();

const ctrlMain = require('../controllers/main');
const ctrlMenu = require('../controllers/menu');
const ctrlAbout = require('../controllers/about');
const ctrlDisplay = require('../controllers/details');
/* GET home page. */
router.get('/', ctrlMain.index);
router.get('/menu', ctrlMenu.menulist);
router.get('/about', ctrlAbout.about);
router.get('/menu/:menuid', ctrlDisplay.display);

router.get('/new', ctrlMenu.addNewMenu);
router.post('/new', ctrlMenu.doAddNewMenu);

router.get('/edit/:menuid', ctrlMenu.editMenu);
router.post('/edit/:menuid', ctrlMenu.doEditMenu);

router.get('/delete/:menuid', ctrlMenu.doDeleteMenu);

module.exports = router;
