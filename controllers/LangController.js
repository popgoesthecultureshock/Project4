const { Lang } = require('../models')

const getLang = async (req, res) => {
  try {
    const langs = await Lang.find({})
    res.send(langs)
  } catch (error) {
    throw error
  }
}

const createLang = async (req, res) => {
  try {
    const lang = await Lang.create({ ...req.body })
    res.send(lang)
  } catch (error) {
    throw error
  }
}

const updateLang = async (req, res) => {
  try {
    const lang = await Lang.findByIdAndUpdate(req.params.lang_id, req.body, {
      new: true
    })
    res.send(lang)
  } catch (error) {
    throw error
  }
}

const deleteLang = async (req, res) => {
  try {
    await Lang.deleteOne({ _id: req.params.lang_id })
    res.send({
      msg: 'Language Deleted',
      payload: req.params.lang_id,
      status: 'Ok'
    })
  } catch (error) {
    throw error
  }
}

module.exports = {
  getLang,
  createLang,
  updateLang,
  deleteLang
}
