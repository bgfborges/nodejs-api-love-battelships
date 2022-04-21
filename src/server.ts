import express from 'express';
import cors from 'cors';
import socket from 'socket.io';
import http from 'http';
import { generatorRoutes } from './routes/generator.routes';

const app = express();

app.use(cors());

app.use(express.json());

app.use('/generator', generatorRoutes);

const serverHttp = http.createServer(app);

const io = socket(serverHttp, {
  cors: { origin: 'http://localhost:3000' },
  path: '/socket.io',
});

io.on('connect', (client) => {
  client.on('message', (data) => {
    // io.emit('newMessage', data);
    io.emit(data.slug, data);
  });
});

app.get('/', (request, response) => response.status(200).json({ status: 'OK Running' }));

serverHttp.listen(4000, () => console.log('Running on folder 4000'));
