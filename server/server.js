import appModulePath from 'app-module-path';
// import http from 'http';
// import express from 'express';
// import cors from 'cors';
import jsonServer from 'json-server';
import path from 'path';
import bodyParser from 'body-parser';
import fs from 'fs'

const server = jsonServer.create()
const router = jsonServer.router(path.join(__dirname, 'db.json'))
const middlewares = jsonServer.defaults()

appModulePath.addPath(`${__dirname}`);

server.use(middlewares)

server.use(bodyParser.json())

server.post('/update-db', (req, res) => {
  // console.log('res',res.body);

  fs.readFile(`${__dirname}/db.json`, 'utf8', (err, data) => {
    if (err) throw err;
    let defaultData = JSON.parse(data);
    let resData = req.body

    let newData = { ...defaultData, ...resData }

    let json = JSON.stringify(newData);

    fs.writeFile(`${__dirname}/db.json`, json, function (err) {
      if (err) throw err;
      res.send("complete");
    })
  })
  // console.log('req', req.body);

  // res.jsonp(req.body)
  // console.log(res.body);      // your JSON
  // res.send(res.body);
})

server.use(jsonServer.bodyParser)
server.use((req, res, next) => {
  if (req.method === 'POST') {
    req.body.createdAt = Date.now()
  }
  // Continue to JSON Server router
  next()
})

// Add this before server.use(router)
server.use(jsonServer.rewriter({
  "/api/*": "/$1",
  "/:resource/:id/show": "/:resource/:id",
  "/:resource/:title/show": "/:resource/:title",
  "/:resource/:author/show": "/:resource/:author",
  "/:resource/:a/show": "/:resource/:a",
  "/posts/:category": "/posts?category=:category",
  "/articles\\?id=:id": "/posts/:id"
}))


// Use default router
server.use(router)
// server.use('api/',router)
server.listen(9001, () => {
  console.log('JSON Server is running')
})
