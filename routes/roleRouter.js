var express = require('express');
var router = express.Router();
var cors = require('cors');
var service = require('../service/rolesService');

router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3001");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
router.use(cors());


router.get('/', getAll);
router.get('/:email/roles', getRolesForEmail);

function getAll(req, res) {
    service.findAll(function (response) {
        res.send(response);
    })
}

function getRolesForEmail(req, res, next) {
    service.findEmail(req.params.email, function (err, response) {
        if (err) {
            err.code = 400;
            return next(err);
        }
        res.send(response);
    })
}

module.exports = router;
