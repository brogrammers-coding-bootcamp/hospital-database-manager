// imports
const express = require('express');
const sequelize = require('./config/connection')
const app = express();
const PORT = process.env.PORT || 3001;
const routes = require('./controllers')
// =========

// middleware 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// =========

app.use(routes)

// connect to database and server
sequelize.sync({ force: true }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
});
// =========