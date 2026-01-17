import { LegalSection } from '@/components/app/sections/legal/legal-section'
import { getTermsOfServiceAction } from '@/data/actions/get-terms-of-service-action'
import { Metadata } from 'next'
import { FC } from 'react'

export const metadata: Metadata = {
  title:
    'Terms Of Service | Hamptons Property Management Services | Anton Nesterov - 20+ Years Experience',
}

const Page: FC = async () => {
  const terms = await getTermsOfServiceAction()

  return (
    <LegalSection title="Terms Of Service" updatedAt={terms.updatedAt} content={terms.content} />
  )
}

export default Page
