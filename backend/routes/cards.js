var express = require('express');
var router = express.Router();
const cards = require('../controllers/cards');

// router.get('/:_id', cards.myCards);
router.get('/', cards.allCards);
router.get('/:id', cards.getOneCard);
router.post('/', cards.addCard);

module.exports = router;