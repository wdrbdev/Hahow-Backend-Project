const express = require('express')

const authenticator = require('../middleware/authenticator')
const getHeroById = require('../model/hero/getHeroById')
const getHeroProfileById = require('../model/hero/getHeroProfileById')
const getHeros = require('../model/hero/getHeros')
const authenticate = require('../auth/authenticate')
const InvalidAuthError = require('../error/InvalidAuthError')

const herosRouter = express.Router()

herosRouter.get('/', authenticator, async function(req, res, next) {
  try {
    const heros = await getHeros()
    res.json({ heros })
  } catch (e) {
    next(e)
  }
})

herosRouter.get('/:id', async function(req, res, next) {
  const hero = {}
  try {
    const data = await getHeroById(req.params.id)
    Object.assign(hero, data)
    if (!req.get('Name')) {
      return res.json(hero)
    }
  } catch (e) {
    return next(e)
  }

  try {
    authenticate(req.get('Name'), req.get('Password'))
  } catch (e) {
    return next(new InvalidAuthError())
  }

  try {
    const profile = await getHeroProfileById(req.params.id)
    Object.assign(hero, { profile })
    res.json(hero)
  } catch (e) {
    next(e)
  }
})

module.exports = herosRouter
