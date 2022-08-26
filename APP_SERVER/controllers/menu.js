// var menuArray = [
//     {
//         title:"Dal Makhni",
//         description: "Sweet delicious food"
//     },
//     {
//         title:"Masala Dosa",
//         description: "South Indian dish with sambhar"
//     },
//     {
//         title:"Paneer Kathi Roll",
//         description: "Loaded with paneer"
//     }
    
// ];

// module.exports.menulist = function (req, res) {
//     res.render('menu-list', { title: 'Menu List', menu: menuArray });
// }


const request = require('request');

var apiOptions = {
    server: 'http://localhost:3000'
};

var renderMenuListPage = function(req, res, responseBody) {

    var message;

    if (!(responseBody instanceof Array)) {
        message = "API lookup error";
        responseBody = [];
    } else {
        if (!responseBody.length) {
          message = "No Menus found!";
        }
    }
    res.render('menu-list', { 
        title: 'Menu list', 
        menus: responseBody,
        message: message 
    }); 
    // console.log(responseBody);
};

module.exports.menulist = function (req, res) {

    var requestOption, path;
    
    var path = '/api/menus';
    
    requestOption = {
        url: apiOptions.server + path,
        method: 'GET',
        json: {}
    };

    request(requestOption, function(err, response, body) {

        renderMenuListPage(req, res, body);
        // if(err) {
        //     console.log(err);
        // } else if(response.statusCode === 200) {
        //     res.render('list-display', { 
        //         title: 'Movie list', 
        //         movies: body 
        //     }); 
        // } else {
        //     console.log(response.statusCode);
        // }        
        console.log(body);
    });
}


const _renderCreatePage = function(req, res) {
    res.render('create', {
        title: "create-new-menu"
    });
};

module.exports.addNewMenu = function(req, res) {
    _renderCreatePage(req, res);
}

module.exports.doAddNewMenu = function(req,res) {
    const path = '/api/menus';
    const postdata = {
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
        type: req.body.type,
        rating: req.body.rating,
        image: req.body.image
    };
    console.log(postdata);
    const requestOptions = {
        url: apiOptions.server + path,
        method: 'POST',
        json: postdata
    }
    request(
        requestOptions,
        (err, response, body) => {
            if(response.statusCode === 200) {
                res.redirect('/menu');
            }
        }
    );
};


var renderEditMenuPage = function(req, res, responseBody) {

    res.render('edit', { 
        title: 'Edit', 
        menus: responseBody,
       
    }); 
    // console.log(responseBody);
};

module.exports.editMenu = function (req, res) {

    var requestOption, path;

    var path = '/api/menus/' + req.params.menuid;

    requestOption = {
        url: apiOptions.server + path,
        method: 'GET',
        json: {}
    };

    request(requestOption, function(err, response, body) {

        renderEditMenuPage(req, res, body);
    
    });
}


module.exports.doEditMenu = function(req,res) {
    const path = '/api/menus/' + req.params.menuid;
    const postdata = {
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
        type: req.body.type,
        rating: req.body.rating,
        image: req.body.image
    };
    console.log(postdata);
    const requestOptions = {
        url: apiOptions.server + path,
        method: 'PUT',
        json: postdata
    }
    request(
        requestOptions,
        (err, response, body) => {
            if(response.statusCode === 200) {
                res.redirect('/menu');
            }
        }
    );
};



module.exports.doDeleteMenu = function(req,res) {
    const path = '/api/menus/' + req.params.menuid ;
    
    const requestOptions = {
        url: apiOptions.server + path,
        method: 'DELETE',
        json: {}
    }
    request(
        requestOptions,
        (err, response, body) => {
            if(response.statusCode === 204) {
                res.redirect('/menu');
            }
        }
    );
};
