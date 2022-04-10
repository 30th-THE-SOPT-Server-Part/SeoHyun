import express, {Request, Response, Router} from 'express';

const router: Router = express.Router();

router.post('/like', (req: Request, res: Response) => {
  return res.send(200).json({
    status: 200,
    message: '좋아요 누르기 성공'
  })
})

module.exports = router;