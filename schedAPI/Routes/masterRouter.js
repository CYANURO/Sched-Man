(function(){

    'use strict';

    var express = require('express'),
        router = express.Router();


    router.get('/', function(req, res) {

        res.status(200).send('Hello Worldo!');
    });

    module.exports = router;

}());