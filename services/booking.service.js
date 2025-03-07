const Booking = require('../models/booking.model');

exports.createBooking = async (data) => Booking.create(data);
exports.getAllBookings = async () => Booking.findAll({ include: 'Event' });
exports.getBookingsByEventId = async (event_id) => Booking.findAll({ where: { event_id } });
