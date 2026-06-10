const bookFields = `
  _id,
  "slug": slug.current,
  title,
  author,
  coverUrl,
  isbn,
  amazonUrl,
  trailerUrl,
  genre,
  genres,
  price,
  hardcoverPrice,
  ebookPrice,
  audiobookPrice,
  rating,
  reviewCount,
  isNewRelease,
  isFeatured,
  shortDescription,
  description,
  publishedDate,
  pageCount,
  formats
`

export const allBooksQuery = `
  *[_type == "book"] | order(publishedDate desc) {
    ${bookFields}
  }
`

export const bookBySlugQuery = `
  *[_type == "book" && slug.current == $slug][0] {
    ${bookFields}
  }
`

export const allSlugsQuery = `
  *[_type == "book"] { "slug": slug.current }
`

export const newReleasesQuery = `
  *[_type == "book" && isNewRelease == true] | order(publishedDate desc) [0...$limit] {
    ${bookFields}
  }
`

export const featuredBooksQuery = `
  *[_type == "book" && isFeatured == true] | order(publishedDate desc) [0...$limit] {
    ${bookFields}
  }
`

export const booksByGenreQuery = `
  *[_type == "book" && $genre in genres && slug.current != $excludeSlug] | order(publishedDate desc) [0...3] {
    ${bookFields}
  }
`
