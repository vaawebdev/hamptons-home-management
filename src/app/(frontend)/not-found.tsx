'use client'

import { ErrorSection } from '@/components/app/sections/error/error-section'
import { FC } from 'react'

const NotFound: FC = () => {
  return (
    <ErrorSection
      code="404"
      name="Page Not Found"
      title="We're sorry, but the page you're looking for doesn't exist or has been moved."
    />
  )
}

export default NotFound
