// src/socket.js
import { io } from 'socket.io-client';

// Replace with your backend server URL
const SOCKET_SERVER_URL = 'http://localhost:3000';

const socket = io(SOCKET_SERVER_URL);

export default socket;

