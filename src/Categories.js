import React, { useState } from 'react'

const Categories = ({ cats, filterBooks }) => {
  const [active, setActive] = useState(0)
  return (
    <div className='btn-container'>
      <button
        type='button'
        className={`job-btn ${active === 0 && 'active-btn'}`}
        onClick={() => {
          setActive(0)
          filterBooks('')
        }}
      >
        جميع المؤلفين
      </button>
      {cats.map((element, index) => {
        return (
          <button
            type='button'
            className={`job-btn ${active === index + 1 && 'active-btn'}`}
            key={index}
            onClick={() => {
              setActive(index + 1)
              filterBooks(element)
            }}
          >
            {element}
          </button>
        )
      })}
    </div>
  )
}

export default Categories
