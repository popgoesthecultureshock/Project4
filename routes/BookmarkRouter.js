const router = require('express').Router()
const controller = require('../controllers/BookmarkController')
const middleware = require('../middleware')

router.get('/', controller.getBookmark)
router.post(
  '/',
  middleware.stripToken,
  middleware.verifyToken,
  controller.createBookmark
)
router.put(
  '/:bookmark_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.updateBookmark
)
router.delete(
  '/:bookmark_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.deleteBookmark
)

module.exports = router
