const express = require('express');
const { body } = require('express-validator');
const validate = require('../middlewares/validation.middleware');
const controller = require('../controllers/event.controller');

const router = express.Router();

router.post(
  '/',
  body('name').notEmpty(),
  body('date').isISO8601(),
  body('capacity').isInt({ min: 1 }),
  validate,
  controller.create
);

router.get('/', controller.findAll);
router.get('/:id', controller.findById);

module.exports = router;
