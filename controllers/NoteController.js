const { Notes } = require('../models')

const getNote = async (req, res) => {
  try {
    const notes = await Notes.find({})
    res.send(notes)
  } catch (error) {
    throw error
  }
}

const createNote = async (req, res) => {
  try {
    const note = await Notes.create({ ...req.body })
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
  getNote,
  createNote,
  updateNote,
  deleteNote
}
