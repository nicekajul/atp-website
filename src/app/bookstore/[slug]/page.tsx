export const runtime = 'edge'
export const dynamic = 'force-dynamic'

import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { client } from '@/sanity/lib/client'
import { bookBySlugQuery, allSlugsQuery, booksByGenreQuery } from '@/sanity/queries'
import { SanityBook, getCoverUrl } from '@/sanity/types'
import BookDetail from '@/components/books/BookDetail'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const book: SanityBook | null = await client.fetch(bookBySlugQuery, { slug })

  if (!book) {
    return { title: 'Book Not Found' }
  }

  const coverUrl = getCoverUrl(book.isbn, book.amazonUrl)
  const pageUrl = `https://authorstranquilitypress.com/bookstore/${slug}`
  const ogImage = coverUrl ? [{ url: coverUrl, alt: `Cover of ${book.title}` }] : []

  return {
    title: `${book.title} by ${book.author}`,
    description: book.shortDescription,
    openGraph: {
      title: `${book.title} by ${book.author}`,
      description: book.shortDescription ?? '',
      type: 'book',
      url: pageUrl,
      siteName: 'Authors Tranquility Press',
      images: ogImage,
    },
    twitter: {
      card: 'summary_large_image',
      title: `${book.title} by ${book.author}`,
      description: book.shortDescription ?? '',
      images: coverUrl ? [coverUrl] : [],
    },
  }
}

export async function generateStaticParams() {
  const slugs: { slug: string }[] = await client.fetch(allSlugsQuery)
  return slugs.map((s) => ({ slug: s.slug }))
}

export default async function BookDetailPage({ params }: Props) {
  const { slug } = await params
  const book: SanityBook | null = await client.fetch(bookBySlugQuery, { slug })

  if (!book) {
    notFound()
  }

  const relatedBooks: SanityBook[] = await client.fetch(booksByGenreQuery, {
    genre: book.genres?.[0] ?? book.genre,
    excludeSlug: slug,
  })

  return <BookDetail book={book} relatedBooks={relatedBooks} />
}
