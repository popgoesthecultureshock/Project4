const router = require('express').Router()
const controller = require('../controllers/BookmarkController')
const middleware = require('../middleware')

router.get('/', controller.getAllBookmarks)
router.get(
  '/:bookmark_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.getBookmarkById
)
router.post(
  '/:bookmark_id',
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
