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
