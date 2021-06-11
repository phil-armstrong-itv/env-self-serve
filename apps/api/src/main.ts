import * as express from 'express';
import { Message } from '@env-self-serve/api-interfaces';
import { projectsRouter } from './app/projects/projects.router';

const app = express();

const greeting: Message = { message: 'Welcome to api yo yo yo!' };

app.get('/api', (req, res) => {
  res.send(greeting);
});

app.use('/api/projects', projectsRouter);

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log('Listening at http://localhost:' + port + '/api');
});
server.on('error', console.error);