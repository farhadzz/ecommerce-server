const router = require('express').Router()
const { authentication } = require('../middlewares/auth')
const productsRoutes = require('./productsRoutes')
const userRoutes = require('./userRoutes')

router.use(userRoutes)
router.use(authentication)
router.use('/products', productsRoutes)

module.exports = router