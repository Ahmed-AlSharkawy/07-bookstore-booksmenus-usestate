import React from 'react'
import { useState } from 'react'
import {
  FaChevronLeft,
  FaChevronRight,
  FaAngleDoubleLeft,
} from 'react-icons/fa'
import Book from './Book'

const Menu = ({ books, value, setValue }) => {
  const { title, author, info, price } = books[value]

  return (
    <article className='job-info'>
      <h3>{title}</h3>
      <h4>{author}</h4>
      <p className='job-date'>
        {price}
        {info.map((item, index) => {
          return (
            <div key={index} className='job-desc'>
              <FaAngleDoubleLeft className='job-icon' />
              <p>{item}</p>
            </div>
          )
        })}
      </p>
      <div className='button-container'>
        <button
          className='next-btn'
          onClick={() => {
            if (value < books.length - 1) setValue(value + 1)
            else setValue(0)
          }}
        >
          <FaChevronRight />
        </button>
        <button
          className='prev-btn'
          onClick={() => {
            if (value > 0) setValue(value - 1)
            else setValue(books.length - 1)
          }}
        >
          <FaChevronLeft />
        </button>
      </div>
    </article>
  )
}

export default Menu
