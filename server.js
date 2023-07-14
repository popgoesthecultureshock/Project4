const express = require('express')
const logger = require('morgan')
const cors = require('cors')

const LangRouter = require('./routes/LangRouter')
const SubjectRouter = require('./routes/SubjectRouter')
const NoteRouter = require('./routes/NoteRouter')
const BookmarkRouter = require('./routes/BookmarkRouter')
const AuthRouter = require('./routes/AuthRouter')

const PORT = process.env.PORT || 3001

const db = require('./db')

const app = express()

app.use(cors())
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/list', LangRouter)
app.use('/sub', SubjectRouter)
app.use('/note', NoteRouter)
app.use('/book', BookmarkRouter)
app.use('/auth', AuthRouter)

app.use('/', (req, res) => {
  res.send(`Connected!`)
})

app.listen(PORT, () => {
  console.log(`Running Express server on Port ${PORT} . . .`)
})
