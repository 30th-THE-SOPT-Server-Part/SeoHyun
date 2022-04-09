// 가장 먼저 index를 실행하는 .. 그래서 index로 이름을 지어버려 ..

import express, { Request, Response, NextFunction } from 'express';

const app = express(); // app에 express 객체 받아옴

app.use(express.json()); // express에서 request body를 json으로 받아오겠다
app.use('/api', require('./api')); // use -> method와 관계없이 해당 endpoint를 사용하는 모든 요청을 라우팅

app.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.send('My name is Seohyun');
}); // get -> http method

app.listen('8000', () => {
  console.log(`
        #############################################
            🛡️ Server listening on port: 8000 🛡️
        #############################################
    `);
}); // 8000번 포트에서 서버 실행하겠슴