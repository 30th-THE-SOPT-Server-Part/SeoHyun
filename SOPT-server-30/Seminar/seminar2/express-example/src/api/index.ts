import express, {Router} from 'express';

const router: Router = express.Router(); // express 라우팅 시스템을 받아옿거 ~

router.use('/user', require('./user'));
// use -> user라는 endpoint로 들어오는 모든 요청은 ./user에 있는 파일로 처리할거임
// mapping 개념

module.exports = router;