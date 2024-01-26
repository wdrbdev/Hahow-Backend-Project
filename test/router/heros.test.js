const axios = require('axios')
const MockAdapter = require('axios-mock-adapter')
const request = require('supertest')

const app = require('../../src/app')

const mock = new MockAdapter(axios)
const numRegex = /[^0-9]/g

const validIds = ['1', '0001', String(Number.MAX_SAFE_INTEGER)]
const invalidIds = [
  'abc',
  '123abc',
  'abc123',
  'NaN',
  '@@@',
  '-1',
  '1.1',
  '-1.1',
  '0',
  '0.0',
  '-0',
  '-0.0',
  String(Number.MIN_SAFE_INTEGER)
]

describe('/heros/:id', () => {
  beforeAll(() => {
    mock.onGet().reply(function(config) {
      const id = config.url.replace(numRegex, '')
      const hero = {
        id,
        name: 'hero name',
        image: 'hero image link'
      }
      const profile = {
        str: 1,
        int: 1,
        agi: 1,
        luk: 1
      }
      if (
        config.headers['name'] === 'hahow' &&
        config.headers['password'] === 'rocks'
      ) {
        return [200, { ...hero, profile }]
      }
      return [200, hero]
    })
    mock.onPost().reply(200, 'OK')
  })

  afterAll(() => {
    mock.resetHandlers()
  })

  test('GET with valid IDs succeed', async () => {
    for (const validId of validIds) {
      const res = await request(app).get(`/heros/${validId}`)

      expect(res.headers['content-type']).toMatch(/json/)
      expect(res.statusCode).toBe(200)

      const hero = res.body
      expect(hero.id).toBeDefined()
      expect(typeof hero.id).toBe('string')
      expect(hero.id).toBe(validId)
      expect(hero.profile).not.toBeDefined()
    }
  })

  test('GET with invalid IDs fails', async () => {
    for (const invalidId of invalidIds) {
      const res = await request(app).get(`/heros/${invalidId}`)

      expect(res.headers['content-type']).toMatch(/json/)
      expect(res.statusCode).toBe(400)
    }
  })

  test('after login, hero profile is present', async () => {
    for (const validId of validIds) {
      const res = await request(app)
        .get(`/heros/${validId}`)
        .set('Name', 'hahow')
        .set('Password', 'rocks')
      expect(res.headers['content-type']).toMatch(/json/)
      expect(res.statusCode).toBe(200)

      const hero = res.body
      expect(hero.id).toBeDefined()
      expect(typeof hero.id).toBe('string')
      expect(hero.profile).toBeDefined()
      expect(typeof hero.profile).toBe('object')
    }
  })
})

describe('/heros', () => {
  beforeAll(() => {
    mock.onGet().reply(function(config) {
      const id = config.url.replace(numRegex, '')
      const heros = [
        { id: '1', name: 'hero 1 name', image: 'hero 1 image link' },
        { id: '2', name: 'hero 2 name', image: 'hero 2 image link' }
      ]
      if (
        config.headers['name'] === 'hahow' &&
        config.headers['password'] === 'rocks'
      ) {
        const profile = { str: 1, int: 1, agi: 1, luk: 1 }
        for (let i = 0; i < heros.length; ++i) {
          heros[i] = {
            ...heros[i],
            profile
          }
        }
        return [200, { heros }]
      }
      return [200, heros]
    })
    mock.onPost().reply(200, 'OK')
  })

  afterAll(() => {
    mock.resetHandlers()
  })

  test('GET heros successfully before login', async () => {
    for (const validId of validIds) {
      const res = await request(app).get(`/heros`)

      expect(res.headers['content-type']).toMatch(/json/)
      expect(res.statusCode).toBe(200)
      expect(res.body.heros).toBeDefined()
      expect(Array.isArray(res.body.heros)).toBe(true)
      for (const hero of res.body.heros) {
        expect(hero.id).toBeDefined()
        expect(typeof hero.id).toBe('string')
        expect(hero.profile).not.toBeDefined()
      }
    }
  })

  test('after login, hero profile is present', async () => {
    for (const validId of validIds) {
      const res = await request(app)
        .get(`/heros`)
        .set('Name', 'hahow')
        .set('Password', 'rocks')

      expect(res.headers['content-type']).toMatch(/json/)
      expect(res.statusCode).toBe(200)
      expect(res.body.heros).toBeDefined()
      expect(Array.isArray(res.body.heros)).toBe(true)
      for (const hero of res.body.heros) {
        expect(hero.id).toBeDefined()
        expect(typeof hero.id).toBe('string')
        expect(hero.profile).toBeDefined()
        expect(typeof hero.profile).toBe('object')
      }
    }
  })
})
