import React from 'react'
import Container from '@/components/layout/Container'
import styles from './ServiceProof.module.css'

interface ServiceProofProps {
  serviceType: 'design' | 'marketing' | 'editorial' | string
}

export default function ServiceProof({ serviceType }: ServiceProofProps) {
  const isDesign = serviceType.toLowerCase().includes('design')
  const isMarketing = serviceType.toLowerCase().includes('marketing')
  const isEditorial = serviceType.toLowerCase().includes('editing') || serviceType.toLowerCase().includes('editorial')
  const isPublishing = serviceType.toLowerCase().includes('publishing')

  return (
    <section className={styles.section}>
      <Container>
        {isPublishing && (
          <div className={styles.publishingProof}>
            <div className={styles.header}>
              <h2 className={styles.title}>Your Path to Global Distribution</h2>
              <p className={styles.subtitle}>Our comprehensive publishing process ensures your book reaches every major retailer.</p>
            </div>
            <div className={styles.distGrid}>
              <div className={styles.distItem}>
                <div className={styles.distIcon}>🌍</div>
                <h4>Global Reach</h4>
                <p>Distribution to 40,000+ retailers, libraries, and schools worldwide.</p>
              </div>
              <div className={styles.distItem}>
                <div className={styles.distIcon}>🆔</div>
                <h4>Professional ISBN</h4>
                <p>Registered under your name or ATP for maximum credibility.</p>
              </div>
              <div className={styles.distItem}>
                <div className={styles.distIcon}>📈</div>
                <h4>Royalty Tracking</h4>
                <p>Transparent reporting and 100% royalty ownership for the author.</p>
              </div>
            </div>
          </div>
        )}

        {isDesign && (
          <div className={styles.proofGrid}>
            <div className={styles.header}>
              <h2 className={styles.title}>Visual Excellence in Every Genre</h2>
              <p className={styles.subtitle}>Browse our recent cover designs and interior layouts across various categories.</p>
            </div>
            <div className={styles.gallery}>
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className={styles.galleryItem}>
                  <div className={styles.placeholderImage}>
                    <span>Cover Sample #{i}</span>
                  </div>
                  <div className={styles.itemMeta}>
                    <span className={styles.genre}>Fiction / Mystery</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {isEditorial && (
          <div className={styles.editorialProof}>
             <div className={styles.header}>
              <h2 className={styles.title}>Precision Editorial Workflow</h2>
              <p className={styles.subtitle}>See how we transform manuscripts while preserving your unique author voice.</p>
            </div>
            <div className={styles.workflowGrid}>
              <div className={styles.workflowStep}>
                <span className={styles.stepNum}>01</span>
                <h3>Deep Analysis</h3>
                <p>Structural review of plot, pacing, and character arcs.</p>
              </div>
              <div className={styles.workflowStep}>
                <span className={styles.stepNum}>02</span>
                <h3>Line-by-Line</h3>
                <p>Refining syntax, flow, and word choice for maximum impact.</p>
              </div>
              <div className={styles.workflowStep}>
                <span className={styles.stepNum}>03</span>
                <h3>Polish & Proof</h3>
                <p>Eliminating errors while ensuring consistent tone.</p>
              </div>
            </div>
          </div>
        )}

        {isMarketing && (
          <div className={styles.marketingProof}>
             <div className={styles.header}>
              <h2 className={styles.title}>Marketing & PR Deliverables</h2>
              <p className={styles.subtitle}>Consistent, high-impact assets designed to drive visibility and sales.</p>
            </div>
            <div className={styles.deliverableList}>
               <div className={styles.deliverableItem}>
                  <div className={styles.deliverableIcon}>📢</div>
                  <div>
                    <h4>Media Outreach</h4>
                    <p>Sample press releases and strategic outreach flows.</p>
                  </div>
               </div>
               <div className={styles.deliverableItem}>
                  <div className={styles.deliverableIcon}>📱</div>
                  <div>
                    <h4>Social Assets</h4>
                    <p>Designed graphics for Instagram, Facebook, and X.</p>
                  </div>
               </div>
               <div className={styles.deliverableItem}>
                  <div className={styles.deliverableIcon}>✉️</div>
                  <div>
                    <h4>Email Campaigns</h4>
                    <p>Automated sequences to build author mailing lists.</p>
                  </div>
               </div>
            </div>
          </div>
        )}
      </Container>
    </section>
  )
}
