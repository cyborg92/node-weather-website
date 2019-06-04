// const restify = require('restify');
// const server = restify.createServer();

const express=require('express');
const app=express();
const async = require('async') // for slow I/O example


// event loop issue
// function sleep (ms) {
//   const future = Date.now() + ms
//   while (Date.now() < future);
// }

// app.get('/', function (req, res, next) {
//   sleep(30)
//   res.send({})
//   next()
// })

// Slow I/O operation

function awaitData (callback) {
  async.series([
    (done1) => setTimeout(done1, Math.random() * 1000),
    (done1) => async.parallel([
      (done2) => setTimeout(done2, Math.random() * 1000),
      (done2) => setTimeout(done2, Math.random() * 1000),
      (done2) => setTimeout(done2, Math.random() * 1000),
      (done2) => setTimeout(done2, Math.random() * 1000),
      (done2) => setTimeout(done2, Math.random() * 1000)
    ], done1)
  ], callback)
}

app.get('/', function (req, res, next) {
  awaitData(function () {
    res.send({})
    next()
  })
})

var server=app.listen(3000);

process.on('SIGINT', function () {
  console.error('Caught SIGINT, shutting down.')
  server.close();
})