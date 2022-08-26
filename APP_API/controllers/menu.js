const mongoose = require('mongoose');
const men = mongoose.model('menu');

var sendJSONresponse = function(res, status, content) {
    res.status(status).json(content);
};

var buildMenuList = function(results){

    var menus = [];

    results.forEach(function(menu){
        menus.push({
            name: menu.name,
            price: menu.price,
            description: menu.description,  
            type: menu.type,
            image: menu.image,         
            _id: menu._id
        });
    });

    return menus;
};

module.exports.getMenuList = function(req, res) {
    //sendJSONresponse(res, 200, {message: 'getMovieList successful'});

    try {

        men.find().exec(function(err, results){
    
            if(err) {
                sendJSONresponse(res, 500, err);
                return;
            }
    
            var menus = buildMenuList(results);
            sendJSONresponse(res, 200, menus);
    
        });
        
    }
    catch(err) {
        sendJSONresponse(res, 500, err);
    }
};

module.exports.getSingleMenu = function(req, res) {

    //sendJSONresponse(res, 200, {message: 'getSingleMovie successful'});
    debugger
    if(!req.params || !req.params.menuid) {
        sendJSONresponse(res, 400, 'The menuid parameter is required');
        return;
    }

    try {

        men.findById(req.params.menuid).exec(function(err, menu){


            if(err) {
                sendJSONresponse(res, 500, err);
                return;
            }
    
            if(!menu) {
                sendJSONresponse(res, 404, 'menu not found');
                return;
            }
    
            sendJSONresponse(res, 200, menu);

        });
    }
    catch(err) {
        sendJSONresponse(res, 500, err);
    }  
};

module.exports.createMenu = function(req, res) {
   // sendJSONresponse(res, 200, {message: 'createMovie successful'});
    //b
    var newMenu = {
        name: req.body.name,
        // genre: req.body.genre.split(', '),
        // cast: req.body.cast.split(', '),
        price:parseInt(req.body.price),
        description: req.body.description,  
        // duration: parseInt(req.body.duration),
        rating: parseInt(req.body.rating),
        type: req.body.type,
        image: req.body.image
    };   

    men.create(newMenu, function(err, menu){

        if(err){
            sendJSONresponse(res, 500, err);
            return
        }
        sendJSONresponse(res, 200, menu);
    });
};

module.exports.updateMenu = function(req, res) {
    //sendJSONresponse(res, 200, {message: 'updateMovie successful'});

    if(!req.params.menuid){
        sendJSONresponse(res, 400, { "message": "Menuid is required" });
        return;
    }

    men.findById(req.params.menuid).exec(function(err, menu){

        if(err){
            sendJSONresponse(res, 500, err);
            return;
        }

        if (!menu) {
            sendJSONresponse(res, 404, { "message": "menu not found" });
            return;
        }

        menu.name = req.body.name;
        // menu.genre = req.body.genre.toString().split(',');
        // menu.cast = req.body.cast.toString().split(',');
        // menu.director = req.body.director;
        // menu.duration = parseInt(req.body.duration);
        menu.price = parseInt(req.body.price);
        menu.description = req.body.description;
        menu.type = req.body.type;
        menu.rating = parseInt(req.body.rating);
        menu.image = req.body.image;

        menu.save(function(err, menu){
            if (err) {
                sendJSONresponse(res, 500, err);
            } else {
                sendJSONresponse(res, 200, menu);
            }
        });

    });
};

module.exports.deleteMenu = function(req, res) {
    //sendJSONresponse(res, 200, {message: 'deleteMovie successful'});

    if (!req.params.menuid) {
        sendJSONresponse(res, 400, { "message": "No menuid" });
        return;
    }

    men.findByIdAndDelete(req.params.menuid).exec(function(err, menu){

        if (err) {
            sendJSONresponse(res, 500, err);
            return;
       }

       sendJSONresponse(res, 204, null);

    });
};