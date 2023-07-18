const { Notes, Subject, Lang } = require('../models')

const getAllNotes = async (req, res) => {
  try {
    const notes = await Notes.find({}).populate('content')
    res.send(notes)
  } catch (error) {
    throw error
  }
}
const getNoteById = async (req, res) => {
  try {
    const notes = await Notes.findById(req.params.note_id).populate('content')
    res.send(notes)
  } catch (error) {
    throw error
  }
}

const createNote = async (req, res) => {
  try {
    console.log(req.body)
    const note = await Notes.create(req.body)
    let subj = await Subject.findById(req.body.subject)
    subj.notes.push(note._id)
    await subj.save()
    res.send(note)
  } catch (error) {
    throw error
  }
}

const updateNote = async (req, res) => {
  try {
    const note = await Notes.findByIdAndUpdate(req.params.note_id, req.body, {
      new: true
    })
    res.send(note)
  } catch (error) {
    throw error
  }
}

const deleteNote = async (req, res) => {
  try {
    await Notes.deleteOne({ _id: req.params.note_id })
    res.send({
      msg: 'Note Deleted',
      payload: req.params.note_id,
      status: 'Ok'
    })
  } catch (error) {
    throw error
  }
}

module.exports = {
  getAllNotes,
  getNoteById,
  createNote,
  updateNote,
  deleteNote
}
