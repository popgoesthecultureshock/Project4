const router = require('express').Router()
const controller = require('../controllers/NoteController')
const middleware = require('../middleware')

router.get('/', controller.getNote)
router.post(
  '/',
  middleware.stripToken,
  middleware.verifyToken,
  controller.createNote
)
router.put(
  '/:note_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.updateNote
)
router.delete(
  '/:note_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.deleteNote
)

module.exports = router
