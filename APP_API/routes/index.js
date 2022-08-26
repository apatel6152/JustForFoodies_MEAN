var express = require('express');
var router = express.Router();

const ctrlMenus = require('../controllers/menu');

// movies
router.get('/menus', ctrlMenus.getMenuList);
router.post('/menus', ctrlMenus.createMenu);
router.get('/menus/:menuid', ctrlMenus.getSingleMenu);
router.put('/menus/:menuid', ctrlMenus.updateMenu);
router.delete('/menus/:menuid', ctrlMenus.deleteMenu);


module.exports = router;