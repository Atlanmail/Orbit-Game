const express = require('express');
const { createServer } = require('node:http');
const { join } = require('node:path');
const { Server } = require('socket.io');

const app = express();
const server = createServer(app);
const http = require('http').Server(app);

const io = new Server(http);

const PORT = process.env.PORT || 3000;

// Serve static files from the 'dist' directory
app.use(express.static(join(__dirname, '../dist')));

io.on('connection', (socket) => {
    console.log('a user connected');
  });


http.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

app.get('*', (req, res) => {
    res.sendFile(join(__dirname, '../dist/index.html'));
  });
  

  

