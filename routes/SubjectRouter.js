const router = require('express').Router()
const controller = require('../controllers/SubjectController')
const middleware = require('../middleware')

router.get('/', controller.getSubject)
router.post(
  '/',
  middleware.stripToken,
  middleware.verifyToken,
  controller.createSubject
)
router.put(
  '/:subject_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.updateSubject
)
router.delete(
  '/:subject_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.deleteSubject
)

module.exports = router
