export interface SanityBook {
  _id: string
  slug: string
  title: string
  author: string
  coverUrl?: string
  isbn?: string
  amazonUrl?: string
  trailerUrl?: string
  genre: string
  genres: string[]
  price: number
  hardcoverPrice?: number
  ebookPrice?: number
  audiobookPrice?: number
  rating: number
  reviewCount: number
  isNewRelease: boolean
  isFeatured: boolean
  shortDescription: string
  description: string
  publishedDate: string
  pageCount: number
  formats: ('Paperback' | 'Hardcover' | 'eBook' | 'Audiobook')[]
}

/**
 * Every genre for a book, as a de-duplicated list of single genres.
 * Primary Genre may hold several comma-separated genres ("Memoir, Military"),
 * so editors only need to fill in that one field; the optional "All Genres"
 * list is merged in when present.
 */
export function getGenreTags(book: Pick<SanityBook, 'genre' | 'genres'>): string[] {
  const tags = [...(book.genres ?? []), ...(book.genre ?? '').split(',')]
    .map((g) => g.trim())
    .filter(Boolean)
  return [...new Set(tags)]
}

/**
 * Comparison key for a genre: "Religion & Spirituality" and
 * "Religion and Spirituality" are the same genre.
 */
export const genreKey = (g: string): string =>
  g.toLowerCase().replace(/\s+and\s+/g, ' & ')

/**
 * Adds the "&" / "and" spelling of each genre, so a query that compares exact
 * strings still finds books spelled the other way.
 */
export function withGenreSpellings(tags: string[]): string[] {
  const all = new Set(tags)
  for (const t of tags) {
    all.add(t.replace(/\s+and\s+/gi, ' & '))
    all.add(t.replace(/\s+&\s+/g, ' and '))
  }
  return [...all]
}

/**
 * Returns the best available cover image URL.
 * Priority: manual coverUrl → Amazon CDN (1500px) → Google Books (zoom=10) → null
 */
export function getCoverUrl(isbn?: string, amazonUrl?: string, coverUrl?: string): string | null {
  if (coverUrl) return coverUrl
  if (amazonUrl) {
    const asin = amazonUrl.match(/\/dp\/([A-Z0-9]{10})/i)?.[1]
    if (asin) {
      return `https://m.media-amazon.com/images/P/${asin}.01._AC_SL1500_.jpg`
    }
  }
  if (isbn) {
    return `https://books.google.com/books/content?vid=ISBN${isbn}&printsec=frontcover&img=1&zoom=10&source=gbs_api`
  }
  return null
}
