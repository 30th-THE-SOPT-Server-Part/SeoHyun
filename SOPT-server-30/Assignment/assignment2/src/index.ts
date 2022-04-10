import express, {Request, Response, NextFunction} from 'express';
import { send } from 'process';

const app = express();

app.use(express.json)

app.use('/api', require('./api'));

app.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.send('Hi! This is assignment express server');
});

app.listen('3100', () => {
  console.log(`
  #########################################
    🛡 server listening on port 8000 🛡
  #########################################`
  );
});