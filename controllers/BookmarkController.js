const { Bookmarks } = require('../models')

const getBookmark = async (req, res) => {
  try {
    const langs = await Bookmarks.find({})
    res.send(langs)
  } catch (error) {
    throw error
  }
}

const createBookmark = async (req, res) => {
  try {
    const bookmark = await Bookmarks.create({ ...req.body })
    res.send(bookmark)
  } catch (error) {
    throw error
  }
}

const updateBookmark = async (req, res) => {
  try {
    const bookmark = await Bookmarks.findByIdAndUpdate(
      req.params.bookmark_id,
      req.body,
      {
        new: true
      }
    )
    res.send(bookmark)
  } catch (error) {
    throw error
  }
}

const deleteBookmark = async (req, res) => {
  try {
    await Bookmarks.deleteOne({ _id: req.params.bookmark_id })
    res.send({
      msg: 'Bookmark Deleted',
      payload: req.params.bookmark_id,
      status: 'Ok'
    })
  } catch (error) {
    throw error
  }
}

module.exports = {
  getBookmark,
  createBookmark,
  updateBookmark,
  deleteBookmark
}
