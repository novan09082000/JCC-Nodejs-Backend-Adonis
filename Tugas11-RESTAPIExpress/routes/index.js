var express = require('express');
var router = express.Router();

const Bootcamp = require('../controller/bootcamp');

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/register',Bootcamp.register);
router.get('/karyawan',Bootcamp.findAll);
router.put('/login',Bootcamp.login);
router.post('/karyawan/:name/siswa',Bootcamp.addSiswa)


module.exports = router;
