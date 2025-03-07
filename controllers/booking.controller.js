const service = require('../services/booking.service');

exports.create = async (req, res) => res.json(await service.createBooking(req.body));
exports.findAll = async (req, res) => res.json(await service.getAllBookings());
exports.findByEventId = async (req, res) => res.json(await service.getBookingsByEventId(req.params.eventId));
