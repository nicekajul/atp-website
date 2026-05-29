import React from 'react'
import styles from './Button.module.css'
import Link from 'next/link'

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'outline' | 'gold'
export type ButtonSize = 'sm' | 'md' | 'lg'

interface BaseProps {
  variant?: ButtonVariant
  size?: ButtonSize
  className?: string
  children: React.ReactNode
  fullWidth?: boolean
}

type ButtonAsButton = BaseProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined }

type ButtonAsLink = BaseProps & { href: string; target?: string; rel?: string }

type ButtonProps = ButtonAsButton | ButtonAsLink

export default function Button({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  fullWidth = false,
  ...props
}: ButtonProps) {
  const classes = [
    styles.btn,
    styles[`btn--${variant}`],
    styles[`btn--${size}`],
    fullWidth ? styles['btn--full'] : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  if ('href' in props && props.href) {
    const { href, target, rel, ...rest } = props as ButtonAsLink
    return (
      <Link href={href} className={classes} target={target} rel={rel}>
        {children}
      </Link>
    )
  }

  const { ...rest } = props as ButtonAsButton
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  )
}
