import { LegalSection } from '@/components/app/sections/legal/legal-section'
import { getPrivacyPolicyAction } from '@/data/actions/get-privacy-policy-action'
import { Metadata } from 'next'
import { FC } from 'react'

export const metadata: Metadata = {
  title:
    'Privacy Policy | Hamptons Property Management Services | Anton Nesterov - 20+ Years Experience',
}

const Page: FC = async () => {
  const privacy = await getPrivacyPolicyAction()

  return (
    <LegalSection title="Privacy Policy" updatedAt={privacy.updatedAt} content={privacy.content} />
  )
}

export default Page
