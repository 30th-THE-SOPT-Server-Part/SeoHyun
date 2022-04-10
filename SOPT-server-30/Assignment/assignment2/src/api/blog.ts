import express, {Request, Response, Router} from 'express';

const router: Router = express.Router();

router.get('./blog', (req: Request, res: Response) => {
  return res.send(200).json({
    status: 200,
    message: '블로그 조회 성공'
  })
})

module.exports = router;