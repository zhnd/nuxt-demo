import Koa from 'koa'
import { Nuxt, Builder } from 'nuxt'
import consola from 'consola'

const app = new Koa()

const config = require('../nuxt.config.js')
const nuxt = new Nuxt(config)

const { host, port } = config.server

async function start() {
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  } else {
    await nuxt.ready()
  }

  app.use(ctx => {
    ctx.status = 200
    return new Promise((resolve, reject) => {
      nuxt.render(ctx.req, ctx.res, promise => {
        promise.then(resolve).catch(reject)
      })
    })
  })

  app.listen(port, host)
  consola.ready({
    message: `Server listening on: http://${host}:${port}`,
    badge: true
  })
}

start()
