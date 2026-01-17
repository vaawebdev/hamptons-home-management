'use client'

import { ErrorSection } from '@/components/app/sections/error/error-section'
import { FC, useEffect } from 'react'

type Props = {
  error: Error & { digest?: string }
  reset: () => void
}

const Error: FC<Props> = ({ error }) => {
  useEffect(() => {
    console.error(error)
  }, [error])

  return <ErrorSection code="500" name="Server Error" title="Website is temporarily out." />
}

export default Error
