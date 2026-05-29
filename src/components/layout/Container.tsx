import React from 'react'

interface ContainerProps {
  children: React.ReactNode
  className?: string
  as?: keyof React.JSX.IntrinsicElements
}

export default function Container({
  children,
  className = '',
  as: Tag = 'div',
}: ContainerProps) {
  const Component = Tag as React.ElementType
  return (
    <Component className={['container', className].filter(Boolean).join(' ')}>
      {children}
    </Component>
  )
}
