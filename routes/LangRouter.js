const router = require('express').Router()
const controller = require('../controllers/LangController')
const middleware = require('../middleware')

router.get('/', controller.getLang)
router.post(
  '/',
  middleware.stripToken,
  middleware.verifyToken,
  controller.createLang
)
router.put(
  '/:lang_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.updateLang
)
router.delete(
  '/:lang_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.deleteLang
)

module.exports = router
