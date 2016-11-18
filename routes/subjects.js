var express = require('express');
var router = express.Router();
var cors = require('cors');

router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3001");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
router.use(cors());


router.get('/', getAll);

function getAll(req, res) {
    res.send({id: 1, name: 'test'});
}



module.exports = router;
