import express, {Request, Response, Router} from 'express';

const router: Router = express.Router();

router.post('./signup', (req: Request, res: Response) => {
  return res.send(200).json({
    status: 200,
    message: '회원가입 성공'
  });
});

module.exports = router;