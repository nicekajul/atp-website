import React from 'react'
import Link from 'next/link'
import { Service } from '@/data/services'
import Badge from '@/components/ui/Badge'
import styles from './ServiceCard.module.css'

interface ServiceCardProps {
  service: Service
}

export default function ServiceCard({ service }: ServiceCardProps) {
  // Grab features from the first package, or default to some general deliverables if available
  const features = service.packages[0]?.features?.slice(0, 3) || service.deliverables?.slice(0,3) || []
  
  return (
    <Link href={`/services/${service.slug}`} className={styles.card}>
      <div className={styles.iconWrapper}>
        <span className={styles.icon} aria-hidden="true">{service.icon}</span>
      </div>
      
      <div className={styles.content}>
        <div className={styles.meta}>
          <div className={styles.badges}>
            <Badge variant="navy">{service.category}</Badge>
            {/* Hardcoded 'Best for' label for the example, would come from data normally */}
            <span className={styles.bestForBadge}>Best for: Authors</span>
          </div>
        </div>
        
        <h3 className={styles.title}>{service.title}</h3>
        <p className={styles.tagline}>{service.tagline}</p>
        
        <div className={styles.descWrapper}>
          <p className={styles.desc}>{service.description}</p>
          <ul className={styles.hoverFeatures}>
            {features.map((feat, i) => (
              <li key={i}>{feat}</li>
            ))}
          </ul>
        </div>
        
        <div className={styles.footer}>
          <div className={styles.pricing}>
            {service.packages.length > 0 && (
              <>
                <span className={styles.startingAt}>Starting at</span>
                <span className={styles.priceAmount}>{service.packages[0].price}</span>
              </>
            )}
          </div>
          <span className={styles.linkText}>View Packages &rarr;</span>
        </div>
      </div>
    </Link>
  )
}
