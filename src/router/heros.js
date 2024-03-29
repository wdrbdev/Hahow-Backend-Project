const express = require('express')

const getHeroById = require('../model/hero/getHeroById')
const getHeroProfileById = require('../model/hero/getHeroProfileById')
const getHeros = require('../model/hero/getHeros')
const authenticate = require('../auth/authenticate')
const InvalidAuthError = require('../error/InvalidAuthError')

const herosRouter = express.Router()

herosRouter.get('/', async function(req, res, next) {
  let heros = []
  // get heros without profile when not logged-in
  try {
    heros = await getHeros()
    if (!req.get('Name')) {
      return res.json({ heros })
    }

    // get heros with profile when logged-in
    authenticate(req.headers['name'], req.headers['password'])
    for (let i = 0; i < heros.length; ++i) {
      const profile = await getHeroProfileById(heros[i].id)
      Object.assign(heros[i], { profile })
    }
    res.json({ heros })
  } catch (e) {
    next(e)
  }
})

herosRouter.get('/:id', async function(req, res, next) {
  const hero = {}
  // get hero without profile when not logged-in
  try {
    const data = await getHeroById(req.params.id)
    Object.assign(hero, data)
    if (!req.get('Name')) {
      return res.json(hero)
    }

    // get hero with profile when logged-in
    authenticate(req.headers['name'], req.headers['password'])
    const profile = await getHeroProfileById(req.params.id)
    Object.assign(hero, { profile })
    res.json(hero)
  } catch (e) {
    next(e)
  }
})

module.exports = herosRouter
