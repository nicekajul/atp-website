export interface SanityBook {
  _id: string
  slug: string
  title: string
  author: string
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
 * Priority: Amazon (by ASIN extracted from the Amazon URL) → Open Library (by ISBN) → null
 */
export function getCoverUrl(isbn?: string, amazonUrl?: string): string | null {
  if (amazonUrl) {
    const asin = amazonUrl.match(/\/dp\/([A-Z0-9]{10})/i)?.[1]
    if (asin) {
      return `https://images-na.ssl-images-amazon.com/images/P/${asin}.01._SL1500_.jpg`
    }
  }
  if (isbn) {
    return `https://covers.openlibrary.org/b/isbn/${isbn}-L.jpg`
  }
  return null
}
