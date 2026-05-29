import React from 'react'
import ServiceCard from './ServiceCard'
import { Service } from '@/data/services'
import styles from './ServiceGrid.module.css'

interface ServiceGridProps {
  services: Service[]
}

export default function ServiceGrid({ services }: ServiceGridProps) {
  return (
    <div className={styles.grid}>
      {services.map(service => (
        <ServiceCard key={service.slug} service={service} />
      ))}
    </div>
  )
}
