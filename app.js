const express = require('express');
const bodyParser = require('body-parser');
const db = require('./models/index');
const tradeRoutes = require('./routes/tradeRoutes');
const expressValidator = require('express-validator');

const app = express();
const port = 3000;
const initializeDatabase = async () => {
    try {
      await db.sequelize.sync({ force: false });
      console.log('Database synchronized');
    } catch (error) {
      console.error('Unable to synchronize the database:', error);
    }
  };
app.use(bodyParser.json());
app.use('/trade', tradeRoutes);

app.listen(port, () => {
    console.log('Server is running on port 3000');
    initializeDatabase();
});