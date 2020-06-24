/*
 * Require
 */
const express = require('express');
const { Server } = require('http');
const socket = require('socket.io');
const bodyParser = require('body-parser');
const session = require('express-session');
// const axios = require('axios')

/*
 * Vars
 */
const app = express();
const server = Server(app);
const io = socket(server);
const port = 3001;

// Session
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: {},
}));

/*
 * Express
 */
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

/*
 Database connection
 */
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  port: 3306,
  database: 'chattest',
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Connexion à la bdd ok!');
});

// function which verify the connection
function isConnected(req, res, next) {
  if (req.session.user) {
    console.log('User logged in, next');
    next();
  }
  else {
    console.log('<< 401 UNAUTHORIZED');
    res.status(401).end();
  }
}

// check session
app.post('/isConnected', (req, res) => {
  console.log(req.session);
  if (req.session.user) {
    res.json({ logged: true, info: req.session.user });
  }
  else {
    res.json({ logged: false });
  }
});

// connection with email/password
app.post('/login', (req, res) => {
  console.log('>> POST /login', req.body);

  const { email, password } = req.body;

  connection.query('SELECT * FROM users', (err, rows) => {
    rows.forEach((row) => {
      let pseudo;
      if (row.email === email && row.password === password) {
        pseudo = row.pseudo;
        console.log(pseudo);
        // envoi du pseudo dans la réponse
        if (pseudo) {
          req.session.user = row.email;
          console.log('<< 200 OK', req.session.user);
          res.json({ logged: true, info: req.session.user, pseudo });
        }
        else {
          console.log('<< 401 UNAUTHORIZED');
          res.status(401).end();
        }
      }
    });
  });
});

// deconnection
app.post('/logout', (req, res) => {
  req.session.destroy();
  res.json({ logged: false });
});

// Récupération des données
app.get('/characters', (req, res) => {
  console.log('>> GET /characters', req.body);

  connection.query('SELECT * FROM characters', (err, rows) => {
    rows.forEach((row) => {
      console.log(`nom ${row.name} house ${row.house}`);
    });
    res.json(rows);
  });
});

/*
 * Socket.io
 */
let id = 0;
io.on('connection', (ws) => {
  console.log('>> socket.io - connected');
  ws.on('send_message', (message) => {
    // eslint-disable-next-line no-plusplus
    message.id = ++id;
    io.emit('send_message', message);
  });
});

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

server.listen(port, () => {
  console.log(`listening on *:${port}`);
});
