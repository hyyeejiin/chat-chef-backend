import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";

// 환경변수 로드
dotenv.config();

const app = express();

// cors 설정
app.use(cors());

// json 설정
app.use(express.json());
app.use(express.urlencoded({extended : true}));

// 서버 실행 코드
app.listen(8080, () => {
    console.log("Server On", process.env.CLIENT_URL);
});