import React, { useState, useEffect } from 'react'

import booksList from './booksList'
import Categories from './Categories'
import Menu from './Menu'

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN

// const url = 'https://course-api.com/react-tabs-project'

const cats = []
booksList.forEach((book) => {
  if (!cats.includes(book.author)) cats.push(book.author)
  cats.sort()
})

function App() {
  /*
  const [loading, setLoading] = useState(true)
  const [jobs, setJobs] = useState([])
  const [value, setValue] = useState(0)

  const fetchJobs = async () => {
    const response = await fetch(url)
    const newJobs = await response.json()
    setJobs(newJobs)
    setLoading(false)
  }

  useEffect(() => {
    fetchJobs()
  }, []) 
  

  if (loading)
    return (
      <section className='section loading'>
        <h1>Loading...</h1>
      </section>
    )
  */

  const [books, setBooks] = useState(booksList)
  const [value, setValue] = useState(0)

  const filterBooks = (author) => {
    if (!author) setBooks(booksList)
    else {
      const newList = booksList.filter((book) => book.author === author)
      setBooks(newList)
      setValue(0)
    }
  }

  return (
    <section className='section'>
      <div className='title'>
        <h2>تصفح المؤلفات</h2>
        <div className='underline'></div>
      </div>
      <div className='jobs-center'>
        {/* Button Container */}
        <Categories cats={cats} filterBooks={filterBooks} />

        {/* Books Info */}

        <Menu books={books} value={value} setValue={setValue} />
      </div>
    </section>
  )
}

export default App
