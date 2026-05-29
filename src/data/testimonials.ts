// ============================================================
// ATP Testimonials Data
// ============================================================

export interface Testimonial {
  id: string
  name: string
  title: string
  bookTitle?: string
  bookSlug?: string
  avatar?: string
  rating: number
  quote: string
  service?: string
  featured: boolean
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Miriam Okafor',
    title: 'Author of Beneath the Ivory Sky',
    bookTitle: 'Beneath the Ivory Sky',
    bookSlug: 'beneath-the-ivory-sky',
    rating: 5,
    quote: 'Authors Tranquility Press didn\'t just publish my book — they helped me shape my vision into something I\'m genuinely proud of. The editorial team understood my voice, and the final design exceeded everything I imagined. This is what author support should feel like.',
    service: 'Publishing Packages',
    featured: true,
  },
  {
    id: '2',
    name: 'James Aldrich',
    title: 'Author of The Cartographer\'s Son',
    bookTitle: "The Cartographer's Son",
    bookSlug: 'cartographers-son',
    rating: 5,
    quote: 'I had been sitting on my manuscript for two years, afraid to take the next step. ATP made the entire process feel manageable and exciting. My book launched to incredible reviews and charted in three historical fiction categories on launch day.',
    service: 'Publishing Packages',
    featured: true,
  },
  {
    id: '3',
    name: 'Sandra Leigh',
    title: 'Author of 14 independently published books',
    bookTitle: 'Publish With Purpose',
    bookSlug: 'publish-with-purpose',
    rating: 5,
    quote: 'The marketing team at ATP is genuinely world-class. They built my entire author platform from scratch and delivered results that outperformed campaigns I\'d run with much larger, much more expensive agencies. Worth every penny.',
    service: 'Marketing & PR',
    featured: true,
  },
  {
    id: '4',
    name: 'Priya Nair',
    title: 'Author of Ghost Frequency',
    bookTitle: 'Ghost Frequency',
    bookSlug: 'ghost-frequency',
    rating: 5,
    quote: 'What impressed me most was that they actually read my book — deeply. The editorial letter was insightful, respectful of my vision, and gave me exactly the direction I needed to strengthen the final third. Exceptional editorial service.',
    service: 'Editorial Services',
    featured: false,
  },
  {
    id: '5',
    name: 'Kofi Ansah',
    title: 'Author of Where Rivers Meet',
    bookTitle: 'Where Rivers Meet',
    bookSlug: 'where-rivers-meet',
    rating: 5,
    quote: 'The cover design process was collaborative and inspiring. They nailed the aesthetic on the second concept — something that feels both deeply rooted in the story and completely contemporary. Every time I see it, I feel proud.',
    service: 'Book Design',
    featured: false,
  },
  {
    id: '6',
    name: 'Dalila Moreau',
    title: 'Author of Salt and Starlight',
    bookTitle: 'Salt and Starlight',
    bookSlug: 'salt-starlight',
    rating: 5,
    quote: 'As a first-time author, I had so many questions and anxieties. The team at ATP answered every single one, walked me through every stage, and treated my work with genuine care. The result speaks for itself — my book hit bestseller status within two weeks.',
    service: 'Publishing Packages',
    featured: true,
  },
  {
    id: '7',
    name: 'Thomas Renfrew',
    title: 'Author of The Weight of Quiet',
    bookTitle: 'The Weight of Quiet',
    bookSlug: 'weight-of-quiet',
    rating: 5,
    quote: 'Writing a memoir required a different kind of editorial sensitivity. My editor at ATP handled the personal material with remarkable professionalism and empathy. The line editing transformed my manuscript without erasing my voice.',
    service: 'Editorial Services',
    featured: false,
  },
]

export function getFeaturedTestimonials(limit?: number): Testimonial[] {
  const featured = testimonials.filter(t => t.featured)
  return limit ? featured.slice(0, limit) : featured
}
