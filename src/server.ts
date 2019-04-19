import * as Koa from 'koa'
import * as Router from 'koa-router' 
import * as  json from 'koa-json'
var cors = require('@koa/cors');


const app = new Koa()
const router = new Router()


app.use(json())
app.use(cors())


router.get('khareedle', '/', (ctx) => {
  ctx.body = { foo: 'bar' }
})

app.use(router.routes())
  .use(router.allowedMethods())

app.listen(process.env.PORT || 3000, () => console.log('running on port 3000'))