// src/socket.js
import { io } from 'socket.io-client';

const socket = io('https://backend.fuelingo.ae', {
    transports: ['polling'] // fallback if websocket fails
  });

export default socket;
