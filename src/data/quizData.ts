// ============================================================
// ATP Publishing Quiz — Scoring + Tagging Matrix
// ============================================================
//
// Actual packages (from services.ts publishing-packages):
//   Gentle        $899     — entry-level, paperback, 3 copies
//   Contemplation $1,299   — print+hardcover, social media, 6 copies
//   Determination $1,699   — eBook, press release, 9 copies
//   Execution     $3,199   — trailer, website, ATP mag half-page, 14 copies
//   Expansion     $5,499   — podcast, full-page mag, 26 copies, 5 revisions
//   Authority     $8,999   — Publisher's Weekly, unlimited revisions, 38 copies
//   Integrative   $12,999  — TV interview, Times Square Billboard, 70 copies
//
// Scoring philosophy:
//   - Budget is the dominant signal (highest per-question weight).
//   - Each non-budget question contributes refinement within the
//     budget window, allowing adjacent tiers to win when the author's
//     NEEDS outweigh their stated budget ceiling.
//   - No single answer carries a weight > 10 to prevent outlier
//     domination. Budget caps at 10 for the lowest tier (pure
//     constraint) and 9 for the highest (budget is a ceiling, not a
//     sole driver).
//   - Fallback is Execution — the most popular mid-tier package.
// ============================================================

export interface QuizOption {
  label: string
  value: string
  score?: Record<string, number>
}

export interface QuizQuestion {
  id: string
  question: string
  description?: string
  options: QuizOption[]
}

// Canonical package name constants — must match services.ts exactly
const P = {
  GENTLE:        'Gentle',
  CONTEMPLATION: 'Contemplation',
  DETERMINATION: 'Determination',
  EXECUTION:     'Execution',
  EXPANSION:     'Expansion',
  AUTHORITY:     'Authority',
  INTEGRATIVE:   'Integrative',
} as const

// ── Questions ────────────────────────────────────────────────
export const QUIZ_QUESTIONS: QuizQuestion[] = [
  // Q1 — Experience
  // Discriminates lower tiers (Gentle, Contemplation) from mid/upper.
  {
    id: 'experience',
    question: 'What best describes you as an author?',
    options: [
      {
        label: 'First-time author — just getting started',
        value: 'first_time_starting',
        score: { [P.GENTLE]: 4, [P.CONTEMPLATION]: 2 },
      },
      {
        label: 'First-time author — manuscript ready to publish',
        value: 'first_time_ready',
        score: { [P.CONTEMPLATION]: 3, [P.DETERMINATION]: 2, [P.EXECUTION]: 1 },
      },
      {
        label: "I've published before and want to grow",
        value: 'published_grow',
        score: { [P.DETERMINATION]: 2, [P.EXECUTION]: 3, [P.EXPANSION]: 1 },
      },
      {
        label: 'Multiple books — building a serious author career',
        value: 'career_author',
        score: { [P.EXECUTION]: 2, [P.EXPANSION]: 3, [P.AUTHORITY]: 2, [P.INTEGRATIVE]: 1 },
      },
    ],
  },

  // Q2 — Primary Goal
  // Discriminates publishing-only (Gentle/Contemplation) from
  // marketing-focused (Execution/Expansion) from legacy (Integrative).
  {
    id: 'goal',
    question: 'What is your primary publishing goal?',
    options: [
      {
        label: "Get my book published and into readers' hands",
        value: 'just_publish',
        score: { [P.GENTLE]: 4, [P.CONTEMPLATION]: 2 },
      },
      {
        label: 'Build my reader base and grow my author platform',
        value: 'build_readership',
        score: { [P.CONTEMPLATION]: 1, [P.DETERMINATION]: 2, [P.EXECUTION]: 3 },
      },
      {
        label: 'Launch with strong marketing and media presence',
        value: 'marketing_launch',
        score: { [P.EXECUTION]: 2, [P.EXPANSION]: 4, [P.AUTHORITY]: 1 },
      },
      {
        label: 'Achieve national visibility and build a lasting legacy',
        value: 'national_recognition',
        score: { [P.EXPANSION]: 1, [P.AUTHORITY]: 3, [P.INTEGRATIVE]: 4 },
      },
    ],
  },

  // Q3 — Budget (dominant signal — highest weights)
  // Each range maps cleanly to one primary package and one adjacent tier.
  // A budget answer alone can push a tier over the edge; all other
  // questions together refine within ±1 tier of the budget signal.
  {
    id: 'budget',
    question: "What's your publishing budget?",
    description: 'This is the most important factor — be honest and we\'ll find your best match.',
    options: [
      {
        label: 'Under $1,000',
        value: 'under_1k',
        score: { [P.GENTLE]: 10 },
      },
      {
        label: '$1,000 – $2,000',
        value: '1k_2k',
        score: { [P.CONTEMPLATION]: 6, [P.DETERMINATION]: 3 },
      },
      {
        label: '$2,000 – $4,000',
        value: '2k_4k',
        score: { [P.DETERMINATION]: 3, [P.EXECUTION]: 6 },
      },
      {
        label: '$4,000 – $7,000',
        value: '4k_7k',
        score: { [P.EXECUTION]: 3, [P.EXPANSION]: 7 },
      },
      {
        label: '$7,000 – $10,000',
        value: '7k_10k',
        score: { [P.EXPANSION]: 2, [P.AUTHORITY]: 7 },
      },
      {
        label: '$10,000 or more',
        value: 'over_10k',
        score: { [P.AUTHORITY]: 3, [P.INTEGRATIVE]: 9 },
      },
    ],
  },

  // Q4 — Media & Exposure
  // Cleanly separates no-media (Gentle/Contemplation), press-only
  // (Determination), full-kit (Execution/Expansion), and elite media
  // (Authority/Integrative).
  {
    id: 'exposure',
    question: 'How important is media exposure to your launch?',
    options: [
      {
        label: 'Not important — publishing the book is enough',
        value: 'no_media',
        score: { [P.GENTLE]: 3, [P.CONTEMPLATION]: 3 },
      },
      {
        label: 'Some exposure — social media posts and a press release',
        value: 'social_press',
        score: { [P.CONTEMPLATION]: 1, [P.DETERMINATION]: 4, [P.EXECUTION]: 1 },
      },
      {
        label: 'Strong presence — book trailer, author website, magazine feature',
        value: 'trailer_website',
        score: { [P.EXECUTION]: 5, [P.EXPANSION]: 3 },
      },
      {
        label: "Maximum reach — TV interview, billboard, Publisher's Weekly",
        value: 'tv_billboard',
        score: { [P.AUTHORITY]: 3, [P.INTEGRATIVE]: 5 },
      },
    ],
  },

  // Q5 — Support Level
  // Separates DIY-adjacent (Gentle) from full-service (Expansion/Integrative).
  {
    id: 'support',
    question: 'How much publishing support do you need?',
    options: [
      {
        label: 'Basic — formatting, ISBN, and distribution setup',
        value: 'basic',
        score: { [P.GENTLE]: 4, [P.CONTEMPLATION]: 1 },
      },
      {
        label: 'Standard — cover design, author copies, and some promotion',
        value: 'standard',
        score: { [P.CONTEMPLATION]: 3, [P.DETERMINATION]: 3 },
      },
      {
        label: 'Full team — editing, marketing toolkit, and launch support',
        value: 'full_team',
        score: { [P.EXECUTION]: 4, [P.EXPANSION]: 2 },
      },
      {
        label: 'White-glove — completely done for me, every detail handled',
        value: 'white_glove',
        score: { [P.EXPANSION]: 1, [P.AUTHORITY]: 2, [P.INTEGRATIVE]: 5 },
      },
    ],
  },

  // Q6 — Author Copies
  // Subtle but reliable discriminator between mid and upper tiers.
  // Authors ordering 30+ copies are almost certainly Authority/Integrative.
  {
    id: 'copies',
    question: 'How many physical author copies do you need?',
    options: [
      {
        label: 'Just a few (1–5 copies)',
        value: 'few',
        score: { [P.GENTLE]: 4, [P.CONTEMPLATION]: 1 },
      },
      {
        label: 'A modest amount (6–15 copies)',
        value: 'modest',
        score: { [P.CONTEMPLATION]: 2, [P.DETERMINATION]: 3, [P.EXECUTION]: 2 },
      },
      {
        label: 'Quite a few (16–30 copies)',
        value: 'quite_few',
        score: { [P.EXECUTION]: 1, [P.EXPANSION]: 4, [P.AUTHORITY]: 2 },
      },
      {
        label: 'A large quantity (30+ copies)',
        value: 'large',
        score: { [P.EXPANSION]: 1, [P.AUTHORITY]: 3, [P.INTEGRATIVE]: 4 },
      },
    ],
  },
]

// ── Scoring function ─────────────────────────────────────────
// Single source of truth — used by QuizLeadCapture and QuizResult.
export function getRecommendedPackage(answers: Record<string, string>): string {
  const scores: Record<string, number> = {
    [P.GENTLE]:        0,
    [P.CONTEMPLATION]: 0,
    [P.DETERMINATION]: 0,
    [P.EXECUTION]:     0,
    [P.EXPANSION]:     0,
    [P.AUTHORITY]:     0,
    [P.INTEGRATIVE]:   0,
  }

  QUIZ_QUESTIONS.forEach(question => {
    const option = question.options.find(o => o.value === answers[question.id])
    if (option?.score) {
      Object.entries(option.score).forEach(([pkg, points]) => {
        if (scores[pkg] !== undefined) scores[pkg] += points
      })
    }
  })

  // Find highest-scoring package; fall back to Execution on a tie or empty
  let bestFit: string = P.EXECUTION
  let maxScore = -1
  Object.entries(scores).forEach(([pkg, score]) => {
    if (score > maxScore) { maxScore = score; bestFit = pkg }
  })

  return bestFit
}

// ── Recommendation display data ──────────────────────────────
// Benefits shown on the result screen for each package.
// Prices are anchors only — direct the user to the package page for final pricing.
export const RECOMMENDATION_LOGIC = {
  benefits: {
    [P.GENTLE]:        ['100% Net Royalties', 'Paperback Distribution', 'ISBN Registration', '3 Free Author Copies'],
    [P.CONTEMPLATION]: ['Paperback & Hardcover Formats', 'Social Media Posting', 'eBook Distribution', '6 Free Author Copies'],
    [P.DETERMINATION]: ['Paperback, Hardcover & eBook', 'Press Release Included', '2-Year Bookstore Returnability', '9 Free Author Copies'],
    [P.EXECUTION]:     ['Priority Production Timeline', 'Book Trailer + Author Website', 'ATP Magazine Half-Page Feature', '14 Free Author Copies'],
    [P.EXPANSION]:     ['Podcast Interview', 'Full-Page Magazine Feature', '5 Revision Rounds', '26 Free Author Copies'],
    [P.AUTHORITY]:     ["Publisher's Weekly Listing", 'Unlimited Revisions', '5-Year Bookstore Returnability', '38 Free Author Copies'],
    [P.INTEGRATIVE]:   ['TV Interview with Logan', 'Times Square Billboard (24 hrs)', 'Unlimited Revisions', '70 Free Author Copies'],
  } as Record<string, string[]>,

  prices: {
    [P.GENTLE]:        '$899',
    [P.CONTEMPLATION]: '$1,299',
    [P.DETERMINATION]: '$1,699',
    [P.EXECUTION]:     '$3,199',
    [P.EXPANSION]:     '$5,499',
    [P.AUTHORITY]:     '$8,999',
    [P.INTEGRATIVE]:   '$12,999',
  } as Record<string, string>,
}
