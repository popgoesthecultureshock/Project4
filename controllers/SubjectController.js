const { Subject, Lang } = require('../models')

const getAllSubjects = async (req, res) => {
  try {
    const subjects = await Subject.find({}).populate('language')
    res.send(subjects)
  } catch (error) {
    throw error
  }
}
const getSubjectById = async (req, res) => {
  try {
    const subject = await Subject.findById(req.params.subject_id)
      .populate('language')
      .populate('notes')
    res.send(subject)
  } catch (error) {
    throw error
  }
}

const createSubject = async (req, res) => {
  try {
    const language = await Lang.findById(req.params.language_id)
    const subject = await Subject.create({
      ...req.body,
      language: req.params.id
    })
    console.log(language.subject)
    language.subject.push(subject._id)
    await language.save()
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
  getSubjectById,
  getAllSubjects,
  createSubject,
  updateSubject,
  deleteSubject
}
