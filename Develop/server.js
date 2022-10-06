//Codes were given 
const express = require('express');
// import sequelize connection
const sequelize = require('./config/connection');
//importing routes
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server
sequelize.sync().then(() =>{
  app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
  
});

// Create the code needed in `server.js` to sync the Sequelize models to the MySQL database on server start.
