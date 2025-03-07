require('dotenv').config();
const express = require('express');
const { sequelize, initModels } = require('./models');
const errorHandler = require('./middlewares/error.middleware');

const app = express();
app.use(express.json());

app.use('/events', require('./routes/event.routes'));
app.use('/bookings', require('./routes/booking.routes'));

app.use(errorHandler);

const PORT = process.env.PORT || 3000;
sequelize.authenticate()
  .then(() => {
    console.log('DB Connected');
    return initModels();
  })
  .then(() => app.listen(PORT, () => console.log(`Server on port ${PORT}`)))
  .catch(err => console.error('DB Error:', err));
