import { redirect } from 'next/navigation'

// Sanity Studio is hosted at the Sanity-managed URL.
// Run `npx sanity deploy` from your project root to publish it there.
export default function StudioPage() {
  redirect('https://lkry447y.sanity.studio')
}
