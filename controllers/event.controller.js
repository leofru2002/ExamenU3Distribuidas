const service = require('../services/event.service');

exports.create = async (req, res) => res.json(await service.createEvent(req.body));
exports.findAll = async (req, res) => res.json(await service.getAllEvents());
exports.findById = async (req, res) => res.json(await service.getEventById(req.params.id));
