const Router = require('koa-router')
const router = new Router()

router.get('/:id', (ctx, next) => {
  ctx.body = {
    name: 'hello'
  }
})

router.get('/', (ctx, next) => {
  ctx.body = [
    {
      name: 'hello'
    },
    {
      name: 'world'
    }
  ]
})

module.exports = router
