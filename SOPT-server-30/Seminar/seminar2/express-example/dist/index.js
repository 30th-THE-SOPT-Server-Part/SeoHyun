"use strict";
// 가장 먼저 index를 실행하는 .. 그래서 index로 이름을 지어버려 ..
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)(); // app에 express 객체 받아옴
app.get('/', (req, res, next) => {
    res.send('My name is Seohyun');
}); // get -> http method
app.listen('8000', () => {
    console.log(`
        #############################################
            🛡️ Server listening on port: 8000 🛡️
        #############################################
    `);
}); // 8000번 포트에서 서버 실행하겠슴
//# sourceMappingURL=index.js.map