import { Metadata } from 'next'
import Container from '@/components/layout/Container'
import PageCTA from '@/components/shared/PageCTA'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'About Us | Authors Tranquility Press',
  description: 'Learn about Authors Tranquility Press — our story, mission, values, and the team dedicated to helping independent authors publish with confidence.',
}

const STATS = [
  { value: '500+', label: 'Books Published' },
  { value: '4.9★', label: 'Author Satisfaction' },
  { value: '12+',  label: 'Years of Experience' },
  { value: '40+',  label: 'Countries Reached' },
]

const VALUES = [
  {
    icon: '✦',
    title: 'Author-First Always',
    body: 'Every decision we make is filtered through one question: does this serve the author? We exist to amplify your vision, not replace it.',
  },
  {
    icon: '◈',
    title: 'Craft Over Speed',
    body: 'We take the time to get it right. From editorial precision to cover aesthetics, quality is non-negotiable at every stage of production.',
  },
  {
    icon: '◎',
    title: 'Radical Transparency',
    body: 'No hidden fees, no vague timelines, no guesswork. We walk you through every step, every cost, and every milestone — openly.',
  },
  {
    icon: '❋',
    title: 'Community & Legacy',
    body: 'Publishing a book changes your life. We build lasting relationships with the authors we serve, celebrating milestones long after launch day.',
  },
]

const PROCESS = [
  {
    step: '01',
    title: 'Consultation',
    body: 'We start with a free discovery call to understand your manuscript, goals, timeline, and budget. No pressure — just a conversation.',
  },
  {
    step: '02',
    title: 'Editing & Polish',
    body: 'Our editorial team refines your manuscript through developmental feedback, copy editing, and meticulous proofreading.',
  },
  {
    step: '03',
    title: 'Design & Formatting',
    body: 'From custom cover design to interior typesetting, we craft a book that looks professional on every shelf and every screen.',
  },
  {
    step: '04',
    title: 'Publishing & Distribution',
    body: 'We handle your ISBN, upload your book to Amazon KDP, IngramSpark, and global retailers — then put it in front of readers.',
  },
  {
    step: '05',
    title: 'Marketing & Launch',
    body: 'Press releases, social campaigns, book trailers, and launch strategy — we build momentum before, during, and after your launch day.',
  },
  {
    step: '06',
    title: 'Ongoing Support',
    body: 'Your success is our reputation. We stay in your corner with royalty tracking, re-marketing guidance, and sequel planning support.',
  },
]


export default function AboutPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────── */}
      <header className={styles.hero}>
        <div className={styles.heroBg} />
        <div className={styles.patternLayer} />
        <Container>
          <div className={styles.heroInner}>
            <span className={styles.eyebrow}>Our Story</span>
            <h1 className={styles.heroHeading}>
              Helping authors find
              <span className={styles.heroHighlight}>their voice.</span>
            </h1>
            <p className={styles.heroSub}>
              Author&rsquo;s Tranquility Press was founded on a simple belief — every story deserves to be told. We partner with independent authors to bring their visions to life through professional publishing services.
            </p>
          </div>
        </Container>
      </header>

      {/* ── Stats bar ────────────────────────────────────── */}
      <div className={styles.statsBar}>
        <Container>
          <div className={styles.statsGrid}>
            {STATS.map(s => (
              <div key={s.label} className={styles.statItem}>
                <span className={styles.statValue}>{s.value}</span>
                <span className={styles.statLabel}>{s.label}</span>
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* ── Mission ──────────────────────────────────────── */}
      <section className={styles.mission}>
        <Container>
          <div className={styles.missionInner}>
            <div className={styles.missionText}>
              <p className={styles.sectionEyebrow}>Why We Exist</p>
              <h2 className={styles.sectionHeading}>
                Traditional publishing leaves too many great stories on the table.
              </h2>
              <p className={styles.sectionBody}>
                The traditional publishing gatekeeping system was never built for the author — it was built for the industry. Countless manuscripts with real potential are rejected every year not because they lack merit, but because they don&rsquo;t fit a commercial formula, come from an unknown name, or arrived at the wrong time.
              </p>
              <p className={styles.sectionBody}>
                Authors Tranquility Press was built to change that. We combine the rigour of traditional publishing — professional editing, commercial-quality design, global distribution — with the flexibility and author-ownership that self-publishing promises but rarely delivers on its own.
              </p>
              <p className={styles.sectionBody}>
                The result: books that compete at the highest level, authors who retain their rights, and a publishing experience rooted in respect for the craft.
              </p>
            </div>
            <div className={styles.missionVisual}>
              <div className={styles.quoteCard}>
                <span className={styles.quoteGlyph}>&ldquo;</span>
                <p className={styles.quoteText}>
                  Every story deserves a professional advocate — someone who believes in it as deeply as its author does.
                </p>
                <p className={styles.quoteAuthor}>— Victoria Lane, Founder</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Values ───────────────────────────────────────── */}
      <section className={styles.values}>
        <Container>
          <div className={styles.sectionCenter}>
            <p className={styles.sectionEyebrow}>What We Stand For</p>
            <h2 className={styles.sectionHeading}>Our core values</h2>
            <p className={styles.sectionBodyCentered}>
              These aren&rsquo;t aspirational posters on a wall. They&rsquo;re the principles that govern how we handle every manuscript, every deadline, and every author relationship.
            </p>
          </div>
          <div className={styles.valuesGrid}>
            {VALUES.map(v => (
              <div key={v.title} className={styles.valueCard}>
                <span className={styles.valueIcon}>{v.icon}</span>
                <h3 className={styles.valueTitle}>{v.title}</h3>
                <p className={styles.valueBody}>{v.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Process ──────────────────────────────────────── */}
      <section className={styles.process}>
        <Container>
          <div className={styles.sectionCenter}>
            <p className={styles.sectionEyebrowLight}>How We Work</p>
            <h2 className={styles.sectionHeadingLight}>From manuscript to market</h2>
            <p className={styles.sectionBodyLight}>
              A clear, guided path — so you always know what happens next.
            </p>
          </div>
          <div className={styles.processGrid}>
            {PROCESS.map(p => (
              <div key={p.step} className={styles.processStep}>
                <span className={styles.stepNumber}>{p.step}</span>
                <h3 className={styles.stepTitle}>{p.title}</h3>
                <p className={styles.stepBody}>{p.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <PageCTA variant="publish" />
    </>
  )
}
