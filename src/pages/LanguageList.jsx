import { Link } from 'react-router-dom'

const LanguageList = (props) => {
  return (
    <div className="lang-page">
      <div className="search">
        <Search
          onSubmit={getSearchResults}
          onChange={handleChange}
          value={searchQuery}
        />
        <h2>Search Results</h2>
        <section className="search-results container-grid">
          {searched &&
            searchResults.map((search) => (
              <Link to={`/details/${search.id}`} key={search.id}>
                <GameCard
                  name={search.name}
                  rating={search.rating}
                  image={search.background_image}
                />
              </Link>
            ))}
        </section>
      </div>
      <div className="lang-list">
        {props.langs.map((lang) => (
          <div className="lang-header" key={lang.id}>
            <Link to={`${lang.id}`}>
              <div className="lang-card">
                <h1>{lang.name}</h1>
                <div className="info-wrapper">
                  <h3>{lang.subject}</h3>
                  <p>{lang.notes}</p>
                  <p>{lang.bookmarks}</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
        <Link to="/">
          <button>Back</button>
        </Link>
      </div>
    </div>
  )
}

export default LanguageList
