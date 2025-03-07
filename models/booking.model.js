const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Event = require('./event.model');

const Booking = sequelize.define('Booking', {
  id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
  user_email: { type: DataTypes.STRING(100), allowNull: false, validate: { isEmail: true } },
  num_tickets: { type: DataTypes.INTEGER, allowNull: false }
}, {
  timestamps: true
});

Event.hasMany(Booking, { foreignKey: 'event_id', onDelete: 'CASCADE' });
Booking.belongsTo(Event, { foreignKey: 'event_id' });

module.exports = Booking;
