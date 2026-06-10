import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  const isbn = req.nextUrl.searchParams.get('isbn')
  if (!isbn) return NextResponse.json({ error: 'ISBN required' }, { status: 400 })

  const res = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=isbn:${encodeURIComponent(isbn)}&maxResults=1`,
    { next: { revalidate: 86400 } }
  )
  if (!res.ok) return NextResponse.json({ error: 'Google Books API error' }, { status: 502 })

  const json = await res.json()
  const item = json.items?.[0]
  if (!item) return NextResponse.json({ error: 'Book not found for this ISBN' }, { status: 404 })

  const info = item.volumeInfo ?? {}

  const publishedDate: string | null = normalizeDate(info.publishedDate)

  return NextResponse.json({
    title:         info.title         ?? null,
    author:        info.authors?.[0]  ?? null,
    description:   info.description   ?? null,
    pageCount:     info.pageCount     ?? null,
    publishedDate,
    categories:    info.categories    ?? [],
  })
}

function normalizeDate(raw?: string): string | null {
  if (!raw) return null
  if (/^\d{4}$/.test(raw))       return `${raw}-01-01`
  if (/^\d{4}-\d{2}$/.test(raw)) return `${raw}-01`
  return raw
}
