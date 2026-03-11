const express = require('express');
const router = express.Router();


router.get('/', function(req,res){
    res.send('This is express Home Page - got change');
});


router.get('/about', function(req,res){
    res.send('This is express About Page');
});


router.get('/soapi', function(req,res){
    let so = {
        soid: '1234',
        desc: 'material m001 order',
        cust: 'Hypercity'
    }
    res.send(so);
});

module.exports = router;