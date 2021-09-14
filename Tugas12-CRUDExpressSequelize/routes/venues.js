var express = require('express');
var router = express.Router();
const VenuesController = require('../controllers/venues')

// Release 1 Create and Read
router.post('/',VenuesController.store);
router.get('/',VenuesController.findAll);
router.get('/:id',VenuesController.show);
// Release 2 Update dan Delete
router.put('/:id',VenuesController.update);
router.delete('/:id',VenuesController.destroy)

module.exports = router;
