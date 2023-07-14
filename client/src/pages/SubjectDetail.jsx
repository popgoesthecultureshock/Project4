import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

const SubjectDetail = (props) => {
  const [lang, setLang] = useState('')

  let { id } = useParams()

  useEffect(() => {
    let selectedLang = props.langs.find((lang) => {
      return lang.id === parseInt(id)
    })
    setLang(selectedLang)
  }, [props.langs, id])

  return lang ? (
    <div className="lang-page">
      <div className="lang-header">
        <h1>{lang.name}</h1>
      </div>
      <div className="info-wrapper">
        <h3>{lang.subject}</h3>
        <p>{lang.notes}</p>
        <p>{lang.bookmarks}</p>
      </div>
      <Link to="/">
        <button>Back</button>
      </Link>
    </div>
  ) : (
    <h2>'No Languages Added Yet'</h2>
  )
}

export default SubjectDetail
