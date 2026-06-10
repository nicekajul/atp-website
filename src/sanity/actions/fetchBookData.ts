import { useState } from 'react'
import type { DocumentActionComponent, DocumentActionProps } from 'sanity'
import { useDocumentOperation } from 'sanity'

// Loose mapping from Google Books categories → ATP genre labels
const GENRE_MAP: Record<string, string> = {
  'literary fiction':     'Literary Fiction',
  'fiction':              'Literary Fiction',
  'historical fiction':   'Historical Fiction',
  'romance':              'Romance',
  'thriller':             'Thriller',
  'suspense':             'Thriller',
  'mystery':              'Mystery',
  'detective':            'Mystery',
  'horror':               'Horror',
  'science fiction':      'Sci-Fi',
  'sci-fi':               'Sci-Fi',
  'fantasy':              'Fantasy',
  'biography':            'Memoir',
  'autobiography':        'Memoir',
  'memoir':               'Memoir',
  'self-help':            'Self-Help',
  'personal development': 'Self-Help',
  'business':             'Business',
  'business & economics': 'Business',
  'economics':            'Business',
  'poetry':               'Poetry',
  'adventure':            'Adventure',
  'contemporary':         'Contemporary',
  'cultural':             'Cultural',
  'writing':              'Writing',
  'authorship':           'Writing',
  'historical':           'Historical',
  'nonfiction':           'Non-Fiction',
  'non-fiction':          'Non-Fiction',
  'true crime':           'Non-Fiction',
}

function mapCategories(raw: string[]): string[] {
  const result: string[] = []
  for (const cat of raw) {
    const lower = cat.toLowerCase()
    // Try longest substring match first, then full string
    const match = Object.keys(GENRE_MAP).find(k => lower.includes(k))
    const mapped = match ? GENRE_MAP[match] : cat
    if (!result.includes(mapped)) result.push(mapped)
  }
  return result
}

export const FetchBookDataAction: DocumentActionComponent = (props: DocumentActionProps) => {
  const [loading, setLoading] = useState(false)
  const { patch } = useDocumentOperation(props.id, props.type)
  const doc = (props.draft ?? props.published) as Record<string, unknown> | null
  const isbn = doc?.isbn as string | undefined

  const onHandle = async () => {
    if (!isbn) return
    setLoading(true)
    try {
      const res = await fetch(`/api/book-lookup?isbn=${encodeURIComponent(isbn)}`)
      const data = await res.json()

      if (data.error) {
        window.alert(`Could not fetch: ${data.error}`)
        return
      }

      const sets: Record<string, unknown> = {}
      if (data.title)         sets.title         = data.title
      if (data.author)        sets.author        = data.author
      if (data.description)   sets.description   = data.description
      if (data.pageCount)     sets.pageCount     = data.pageCount
      if (data.publishedDate) sets.publishedDate = data.publishedDate

      if (Array.isArray(data.categories) && data.categories.length > 0) {
        const mapped = mapCategories(data.categories)
        sets.genres = mapped
        sets.genre  = mapped[0]
      }

      patch.execute([{ set: sets }])
    } catch {
      window.alert('Failed to reach the book lookup API.')
    } finally {
      setLoading(false)
    }
  }

  return {
    label: loading ? 'Fetching…' : 'Fill from ISBN',
    title: 'Auto-fill title, author, description, genres, page count and published date from Google Books. Prices must be entered manually.',
    disabled: !isbn || loading,
    onHandle,
  }
}
