import React, { Fragment, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import SearchForm from './SearchForm'

const Science = () => {
  const [news, setNews] = useState([])
    const [term, setTerm] = useState('science')
    const [isloading, setIsloading] = useState(true)
    const url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${term}&api-key=${process.env.REACT_APP_ARTICLES_API_KEY}`

    useEffect(() => async () => {
      await fetch(url)
      .then(res => res.json())
      .then(data => {
       setNews(data.response.docs)
        setIsloading(false)
      })
    }, [setTerm, url]);

  

  return (
    <Fragment>
      <div className='parent'>
        <div className="overlay">
            <div className='title'>
            <h1 className='title-name'>MyBlog</h1> 
            <h5 className='title-intro text-warning'>News & Blog</h5>
            </div>
            <h1>Viewing articles on {term}</h1>
            <SearchForm searchTerm= {(term) => setTerm(term) }/>
        </div>
      </div>
      
      <div className='row'>
      <div className='col-4'>
            <ul>
                <li>
                    <Link to="/sports">Sports</Link>
                </li>
                <li>
                    <Link to="/politics">Politics</Link>
                </li>
                <li>
                    <Link to="/business">Business</Link>
                </li>
                <li>
                    <Link to="/entertainment">Entertainment</Link>
                </li>
                <li>
                    <Link to="/science">Science</Link>
                </li>
                <li>
                    <Link to="/health">Health</Link>
                </li>
            </ul>
        </div>

        
      <div className='col-8 home'>
        {news.map((article) => {
          const { _id, abstract, headline, byline:{original}, 
                  web_url, lead_paragraph
                } = article
          return (
            <div className='article'>
          {isloading ? (
            <h2 className='load'>Loading...</h2>
          ) : (

            <article key={_id}>
              <h2>{headline.main}</h2>
              <p>{abstract}</p>
              <p>{lead_paragraph}</p>
              <p>{original}</p>

              <ul>
             <li><a href={web_url} target="_blank" rel='noreferrer'>Read More</a></li>
              </ul>
            </article>
          )}
            </div>
          )
        } )}
      </div>
    
        </div>
      
    </Fragment>
      
  )
}

export default Science