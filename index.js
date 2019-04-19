'use strict';

const koa = require('koa')
const koaRouter = require('koa-router')

const app = new koa()
const router = new koaRouter()

router.get('khareedle', '/', (ctx) => {
  ctx.body = "<H1>khareedle</H1>"
})

app.use(router.routes())
  .use(router.allowedMethods())

app.listen(3000, () => console.log('running on port 3000'))