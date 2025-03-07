const express = require('express');
const { body } = require('express-validator');
const validate = require('../middlewares/validation.middleware');
const controller = require('../controllers/booking.controller');

const router = express.Router();

router.post(
  '/',
  body('event_id').notEmpty(),
  body('user_email').isEmail(),
  body('num_tickets').isInt({ min: 1 }),
  validate,
  controller.create
);

router.get('/', controller.findAll);
router.get('/event/:eventId', controller.findByEventId);

module.exports = router;
