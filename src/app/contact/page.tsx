import { Metadata } from 'next'
import Container from '@/components/layout/Container'
import SectionHeader from '@/components/ui/SectionHeader'
import RevealItem from '@/components/ui/RevealItem'
import ContactForm from '@/components/forms/ContactForm'
import styles from './contact.module.css'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with the Authors Tranquility Press team. We\'d love to hear about your book and help you publish with excellence.',
}

const INFO_CARDS = [
  {
    icon: '✉',
    label: 'Email Us',
    value: 'support@authorstranquilitypress.com',
    sub: 'We reply within one business day',
    href: 'mailto:support@authorstranquilitypress.com',
  },
  {
    icon: '📞',
    label: 'Call Us',
    value: '+1 (866) 411-8655',
    sub: 'Mon – Fri, 9 am – 6 pm EST',
    href: 'tel:+18664118655',
  },
  {
    icon: '💬',
    label: 'Live Chat',
    value: 'Start a conversation',
    sub: 'Available on business days',
    href: '#chat',
  },
]

export default function ContactPage() {
  return (
    <>
      {/* ── Dark hero banner ── */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <div className={styles.patternLayer} />
        </div>
        <Container className={styles.heroInner}>
          <span className={styles.eyebrow}>Let&apos;s Talk</span>
          <h1 className={styles.heroHeading}>
            Your Publishing Journey<br />
            <span className={styles.heroHighlight}>Starts Here.</span>
          </h1>
          <p className={styles.heroSub}>
            Whether you have a manuscript ready or just a spark of an idea, our team is here to guide you every step of the way.
          </p>
        </Container>
      </section>

      {/* ── Info cards ── */}
      <section className={styles.infoSection}>
        <Container>
          <div className={styles.infoGrid}>
            {INFO_CARDS.map((card, i) => (
              <RevealItem key={card.label} delay={i * 100}>
                <a href={card.href} className={styles.infoCard}>
                  <span className={styles.infoIcon}>{card.icon}</span>
                  <p className={styles.infoLabel}>{card.label}</p>
                  <p className={styles.infoValue}>{card.value}</p>
                  <p className={styles.infoSub}>{card.sub}</p>
                </a>
              </RevealItem>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Form section ── */}
      <section className={styles.formSection}>
        <Container>
          <div className={styles.formLayout}>
            <RevealItem className={styles.formSide}>
              <div className={styles.formCard}>
                <SectionHeader
                  eyebrow="Send a Message"
                  heading="Tell Us About Your Book"
                  subheading="Fill out the form and a publishing consultant will follow up within one business day."
                  align="left"
                />
                <div className={styles.formBody}>
                  <ContactForm />
                </div>
              </div>
            </RevealItem>

            <RevealItem delay={150} className={styles.sidebarSide}>
              <div className={styles.sidebar}>
                <div className={styles.sidebarCard}>
                  <h3 className={styles.sidebarHeading}>What Happens Next</h3>
                  <ol className={styles.stepsList}>
                    {[
                      { n: '01', title: 'We Review Your Message', body: 'A senior consultant reads your inquiry and notes your goals.' },
                      { n: '02', title: 'Personalised Consultation', body: 'We reach out to schedule a free 30-minute discovery call.' },
                      { n: '03', title: 'Custom Proposal', body: 'You receive a tailored publishing plan and transparent pricing.' },
                      { n: '04', title: 'Begin Your Journey', body: 'Once you\'re ready, we kick off your publishing project together.' },
                    ].map(step => (
                      <li key={step.n} className={styles.step}>
                        <span className={styles.stepNum}>{step.n}</span>
                        <div>
                          <p className={styles.stepTitle}>{step.title}</p>
                          <p className={styles.stepBody}>{step.body}</p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>

                <div className={styles.trustBox}>
                  <p className={styles.trustStat}><strong>500+</strong> authors published</p>
                  <div className={styles.trustDivider} />
                  <p className={styles.trustStat}><strong>1,000+</strong> books produced</p>
                  <div className={styles.trustDivider} />
                  <p className={styles.trustStat}><strong>Global</strong> distribution reach</p>
                </div>
              </div>
            </RevealItem>
          </div>
        </Container>
      </section>
    </>
  )
}
