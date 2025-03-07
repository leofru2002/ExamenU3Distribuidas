const sequelize = require('../config/database');
require('./event.model');
require('./booking.model');

const initModels = async () => {
  await sequelize.sync({ alter: true });
};

module.exports = { sequelize, initModels };
