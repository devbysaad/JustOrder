require('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const callToDB = require('./config/database');
const app = require('./app');

const server = express();

server.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));
server.use(express.json());
server.use(cookieParser());
server.get('/', (req, res) => {
  res.send('Server running...');
});

server.use('/api', app);

callToDB();


server.listen(5000, () => {
  console.log(`Server running on port 5000`);
});


module.exports = server;
