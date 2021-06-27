const express  = require('express');
const router = express.Router();

//import controller
const {loginAuth} = require("../controllers/loginAuth");
const {createStudent,createManager,createPerminentEmployeer,creatTemporaryEmployeee} = require("../controllers/create");
const {Remove} = require("../controllers/remove");
const {Invoice} = require("../controllers/invoice");

router.post('/loginAuth', loginAuth);

// create section
router.post('/createManager',createManager);
router.post('/createPerminentEmployeer',createPerminentEmployeer);
router.post('/creatTemporaryEmployeee',creatTemporaryEmployeee);
router.post('/createStudent',createStudent);

// removie section
router.post('/remove',Remove);
// Invoice
router.post('/invoiceData',Invoice);

module.exports = router;