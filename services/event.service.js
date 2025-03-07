const Event = require('../models/event.model');

exports.createEvent = async (data) => Event.create(data);
exports.getAllEvents = async () => Event.findAll();
exports.getEventById = async (id) => Event.findByPk(id);
