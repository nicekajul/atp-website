// ============================================================
// ATP Books Data
// ============================================================

export interface Book {
  slug: string
  title: string
  author: string
  cover: string
  genre: string
  genres: string[]
  price: string
  rating: number
  reviewCount: number
  isNewRelease: boolean
  isFeatured: boolean
  description: string
  shortDescription: string
  publishedDate: string
  pageCount: number
  isbn: string
  formats: ('Paperback' | 'Hardcover' | 'eBook' | 'Audiobook')[]
}

export const books: Book[] = [
  {
    slug: 'beneath-the-ivory-sky',
    title: 'Beneath the Ivory Sky',
    author: 'Miriam Okafor',
    cover: '/books/beneath-ivory-sky.jpg',
    genre: 'Literary Fiction',
    genres: ['Literary Fiction', 'Historical'],
    price: '$16.99',
    rating: 4.8,
    reviewCount: 142,
    isNewRelease: true,
    isFeatured: true,
    description: 'A sweeping saga of three generations of women navigating love, loss, and legacy across colonial Nigeria and modern-day London. Miriam Okafor\'s debut is a luminous meditation on what we carry forward and what we dare to leave behind.',
    shortDescription: 'Three generations. Two continents. One story that refuses to stay silent.',
    publishedDate: '2026-02-14',
    pageCount: 368,
    isbn: '978-1-234567-89-0',
    formats: ['Paperback', 'Hardcover', 'eBook'],
  },
  {
    slug: 'the-cartographers-son',
    title: "The Cartographer's Son",
    author: 'James Aldrich',
    cover: '/books/cartographers-son.jpg',
    genre: 'Historical Fiction',
    genres: ['Historical Fiction', 'Adventure'],
    price: '$14.99',
    rating: 4.6,
    reviewCount: 89,
    isNewRelease: true,
    isFeatured: false,
    description: 'Set against the backdrop of 18th-century exploration, this richly researched novel follows the illegitimate son of a royal cartographer as he charts unknown territories — both geographical and emotional.',
    shortDescription: 'A young man. A stolen map. A world waiting to be discovered.',
    publishedDate: '2026-01-28',
    pageCount: 412,
    isbn: '978-1-234567-90-6',
    formats: ['Paperback', 'eBook', 'Audiobook'],
  },
  {
    slug: 'salt-and-starlight',
    title: 'Salt and Starlight',
    author: 'Dalila Moreau',
    cover: '/books/salt-starlight.jpg',
    genre: 'Romance',
    genres: ['Romance', 'Contemporary'],
    price: '$13.99',
    rating: 4.9,
    reviewCount: 267,
    isNewRelease: true,
    isFeatured: true,
    description: 'Two rival marine biologists stranded on a remote research island must set aside their professional feud — and their undeniable chemistry — to survive. A warm, witty, and deeply romantic debut from Dalila Moreau.',
    shortDescription: 'Rivalry melts under the Pacific sun in this irresistible enemies-to-lovers romance.',
    publishedDate: '2026-03-07',
    pageCount: 320,
    isbn: '978-1-234567-91-3',
    formats: ['Paperback', 'eBook', 'Audiobook'],
  },
  {
    slug: 'the-weight-of-quiet',
    title: 'The Weight of Quiet',
    author: 'Thomas Renfrew',
    cover: '/books/weight-of-quiet.jpg',
    genre: 'Memoir',
    genres: ['Memoir', 'Non-Fiction'],
    price: '$17.99',
    rating: 4.7,
    reviewCount: 53,
    isNewRelease: true,
    isFeatured: false,
    description: 'A former war correspondent reckons with the silence of domestic life after two decades in conflict zones. Renfrew\'s memoir is raw, honest, and unexpectedly tender — a portrait of a man learning, for the first time, to be still.',
    shortDescription: 'What happens when the world\'s loudest witness finally comes home?',
    publishedDate: '2026-03-21',
    pageCount: 256,
    isbn: '978-1-234567-92-0',
    formats: ['Hardcover', 'eBook'],
  },
  {
    slug: 'ghost-frequency',
    title: 'Ghost Frequency',
    author: 'Priya Nair',
    cover: '/books/ghost-frequency.jpg',
    genre: 'Thriller',
    genres: ['Thriller', 'Sci-Fi'],
    price: '$15.99',
    rating: 4.5,
    reviewCount: 198,
    isNewRelease: false,
    isFeatured: true,
    description: 'A quantum physicist discovers that her research into parallel timelines may be responsible for a series of mysterious disappearances — including her own sister\'s. A cerebral, pulse-pounding thriller that blurs the line between science and supernatural.',
    shortDescription: 'Some frequencies should never be tuned in to.',
    publishedDate: '2025-10-15',
    pageCount: 388,
    isbn: '978-1-234567-93-7',
    formats: ['Paperback', 'Hardcover', 'eBook', 'Audiobook'],
  },
  {
    slug: 'a-thousand-spoken-rooms',
    title: 'A Thousand Spoken Rooms',
    author: 'Elena Vasquez',
    cover: '/books/thousand-spoken-rooms.jpg',
    genre: 'Poetry',
    genres: ['Poetry', 'Literary'],
    price: '$12.99',
    rating: 4.8,
    reviewCount: 34,
    isNewRelease: false,
    isFeatured: false,
    description: 'A debut poetry collection that moves through grief, memory, and the architecture of belonging. Vasquez writes in rooms — the childhood bedroom, the hospital waiting area, the kitchen at 3am — each poem a space that holds the unsayable.',
    shortDescription: 'Poetry that turns the ordinary into the sacred.',
    publishedDate: '2025-09-01',
    pageCount: 128,
    isbn: '978-1-234567-94-4',
    formats: ['Paperback', 'eBook'],
  },
  {
    slug: 'publish-with-purpose',
    title: 'Publish With Purpose',
    author: 'Sandra Leigh',
    cover: '/books/publish-with-purpose.jpg',
    genre: 'Business',
    genres: ['Business', 'Writing', 'Self-Help'],
    price: '$19.99',
    rating: 4.9,
    reviewCount: 411,
    isNewRelease: false,
    isFeatured: true,
    description: 'The definitive guide to self-publishing as a creative and business strategy. Sandra Leigh — author of 14 independently published books — shares her proven system for writing, publishing, and marketing books that build lasting careers.',
    shortDescription: 'The author\'s guide to turning your book into a business.',
    publishedDate: '2025-07-04',
    pageCount: 304,
    isbn: '978-1-234567-95-1',
    formats: ['Paperback', 'Hardcover', 'eBook', 'Audiobook'],
  },
  {
    slug: 'where-rivers-meet',
    title: 'Where Rivers Meet',
    author: 'Kofi Ansah',
    cover: '/books/where-rivers-meet.jpg',
    genre: 'Literary Fiction',
    genres: ['Literary Fiction', 'Cultural'],
    price: '$15.99',
    rating: 4.6,
    reviewCount: 76,
    isNewRelease: false,
    isFeatured: false,
    description: 'A Ghanaian-American architect returns to Accra to settle his late father\'s estate and finds himself drawn into a world he thought he had left behind. A nuanced, beautifully rendered novel about identity, inheritance, and the stories we tell ourselves.',
    shortDescription: 'Between two worlds, one man must choose who he truly is.',
    publishedDate: '2025-11-20',
    pageCount: 344,
    isbn: '978-1-234567-96-8',
    formats: ['Paperback', 'eBook'],
  },
]

export function getNewReleases(limit?: number): Book[] {
  const releases = books.filter(b => b.isNewRelease)
  return limit ? releases.slice(0, limit) : releases
}

export function getFeaturedBooks(limit?: number): Book[] {
  const featured = books.filter(b => b.isFeatured)
  return limit ? featured.slice(0, limit) : featured
}

export function getBookBySlug(slug: string): Book | undefined {
  return books.find(b => b.slug === slug)
}

export function getBooksByGenre(genre: string): Book[] {
  return books.filter(b => b.genres.includes(genre))
}

export const allGenres = [...new Set(books.flatMap(b => b.genres))].sort()
