const { Subject } = require('../models')

const getSubject = async (req, res) => {
  try {
    const subjects = await Subject.find({})
    res.send(subjects)
  } catch (error) {
    throw error
  }
}

const createSubject = async (req, res) => {
  try {
    const subject = await Subject.create({ ...req.body })
    res.send(subject)
  } catch (error) {
    throw error
  }
}

const updateSubject = async (req, res) => {
  try {
    const subject = await Subject.findByIdAndUpdate(
      req.params.subject_id,
      req.body,
      {
        new: true
      }
    )
    res.send(subject)
  } catch (error) {
    throw error
  }
}

const deleteSubject = async (req, res) => {
  try {
    await Subject.deleteOne({ _id: req.params.subject_id })
    res.send({
      msg: 'Subject Deleted',
      payload: req.params.subject_id,
      status: 'Ok'
    })
  } catch (error) {
    throw error
  }
}

module.exports = {
  getSubject,
  createSubject,
  updateSubject,
  deleteSubject
}
