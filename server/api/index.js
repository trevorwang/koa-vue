'use strict'
const Router = require('koa-router')
const router = Router({
  prefix: '/api'
})
const users = require('./user')
router.use('/users', users.routes(), users.allowedMethods())
module.exports = router
