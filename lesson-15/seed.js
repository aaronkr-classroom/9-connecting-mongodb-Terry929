// seed.js
"use strict";

const { name } = require("ejs");
/**
 * Listing 15.9 (p. 224)
 * 새로운 데이터 생성
 */
// 모듈 가져오기
const mongoose = require("mongoose"),
  Subscriber = require("./models/subscriber");


// 데이터베이스 연결 설정
mongoose.connect(
  "mongodb+srv://ut-node:GrXEpqODFPP75bRL@ut-node.tceekpm.mongodb.net/?retryWrites=true&w=majority&appName=UT-Node",
  { useNewUrlParser: true }
);
mongoose.connection;

// subscribers 배열 생성 (5개 이상)
var subscribers = [
  {
    name: "aa",
    email: "aa@a",
    phoneNumber: "1567",
  },
  {
    name: "bb",
    email: "bb@v",
    phoneNumber: "1234",
  },
  {
    name: "cc",
    email: "cc@c",
    phoneNumber: "1123",
  },
  {
    name: "dd",
    email: "dd@awe",
    phoneNumber: "35667",
  },
  {
    name: "dd",
    email: "dd@a",
    phoneNumber: "1253",
  },
  {
    name: "asd",
    email: "qwer@a",
    phoneNumber: "15634",
  },
];

// 기존 데이터 제거
Subscriber.deleteMany()
  .exec()
  .then(()=> {
    console.log("Subscribers deleted!");
  });

var commands = [];

// 프라미스 생성을 위한 구독자 객체 루프
subscribers.forEach(s => {
  commands.push(
    Subscriber.create({
      name: s.name,
      email: s.email,
      phoneNumber: s.phoneNumber
    })
  );
});

// 프라미스 생성 후 로깅 작업
Promise.all(commands) 
  .then((r) => {
    console.log(JSON.stringify(r));
    mongoose.connection.close();
  })
  .catch(e => {
    console.log(`Error: ${e}`);
  });
