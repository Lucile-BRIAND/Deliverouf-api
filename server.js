require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const cors = require('cors');
 
const PORT = process.env.PORT || 6666 ;
const restoRoute = require('./routes/restoRoutes');
const commandeRoute = require('./routes/commandeRoute');
const produitsRoute = require('./routes/produitsRoute');


 
// database connection
require('./config/database');
 
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
 
// routes
app.use('/api/resto', restoRoute);
app.use('/api/commande', commandeRoute);
app.use('/api/produits', produitsRoute);
 
// server running status
app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`The app listening at http://localhost: ${PORT}`)
});