const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const SerialPort = require('serialport');
const Readline = require('@serialport/parser-readline');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Replace '/dev/ttyUSB0' with your Arduino's serial port
const port = new SerialPort('/dev/ttyUSB0', { baudRate: 9600 });
const parser = port.pipe(new Readline({ delimiter: '\n' }));

parser.on('data', (data) => {
  const [heartRate, gsrValue] = data.trim().split(',').map(Number);
  io.emit('sensorData', { heartRate, gsrValue });
});

app.use(express.static('public')); // Serve static files from 'public' directory

io.on('connection', (socket) => {
  console.log('A user connected');
  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

