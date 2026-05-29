import React from 'react'
import BookCard from './BookCard'
import { SanityBook } from '@/sanity/types'
import styles from './BookGrid.module.css'

interface BookGridProps {
  books: SanityBook[]
}

export default function BookGrid({ books }: BookGridProps) {
  return (
    <div className={styles.grid}>
      {books.map(book => (
        <BookCard key={book.slug} book={book} />
      ))}
    </div>
  )
}
