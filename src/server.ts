import * as Koa from 'koa'
import * as Router from 'koa-router' 

const app = new Koa()
const router = new Router()

router.get('khareedle', '/', (ctx) => {
  ctx.body = "<H1>khareedle</H1>"
})

app.use(router.routes())
  .use(router.allowedMethods())

app.listen(process.env.PORT ||3000, () => console.log('running on port 3000'))