const express = require('express');
require('dotenv').config();
const connectDb = require('./db/dbconnect');
const { createServer } = require('http');
const multer = require('multer');
const socketio = require('./socket');
const swaggerUi = require('swagger-ui-express');
const swaggerDoc = require('./documentation/swaggerSetup');
const fileUpload = require('express-fileupload');

const app = express();
const server = createServer(app);
const io = socketio.init(server);
const adIo = socketio.initAdIo(server, '/socket/adpage');
const upload = multer({ dest: 'uploads/' });
const cors = require('cors');
const Contact = require('./models/contact');

// Use CORS middleware
//app.use(cors());


// Body parser
app.use(express.json());
app.use(express.static('public'));
app.use(fileUpload());

// CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', '*');
  next();
});

// Documentation setup
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

// Default route
app.get('/', (req, res, next) => {
  res.send('Server running');
});

// Routes
app.use('/auth', require('./routes/auth'));
app.use('/user', require('./routes/user'));
app.use('/ad', require('./routes/ad'));
app.use('/bid', require('./routes/bid'));
app.use('/room', require('./routes/room'));
app.use('/auction', require('./routes/auction'));
app.use('/upload', require('./routes/uploads'));

// Socket.io setup
const PORT = process.env.PORT || 5000;
io.on('connection', (socket) => {
  // console.log('### Socket IO client connected');
  socket.on('disconnect', (reason) => {
    // console.log('### Socket IO client disconnected');
  });
  socket.on('leaveHome', () => {
    socket.disconnect();
  });
});
adIo.on('connect', (socket) => {
  // socket.join('testroom')
  socket.on('joinAd', ({ ad }) => {
    socket.join(ad.toString());
    // console.log(`User joined room ${ad}`);
  });
  socket.on('leaveAd', ({ ad }) => {
    socket.leave(ad.toString());
    // console.log(`Left room ${ad}`);
  });
  socket.on('disconnect', () => {
    // console.log('User has disconnect from ad');
  });
});
// Connect DB and Initialize server
connectDb();
server.listen(PORT, () => {
  console.log(`### Server running on port ${PORT}`);
});


app.post('/api/submit-form', async (req, res) => {
  try {
    // Create a new Contact document based on the request body
    const newContact = new Contact(req.body);

    // Save the document to the database
    await newContact.save();

    console.log('Form data saved successfully!'); // Add this log statement

    res.status(200).json({ message: 'Form data saved successfully!' });
  } catch (error) {
    console.error('An error occurred while saving the form data:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});
