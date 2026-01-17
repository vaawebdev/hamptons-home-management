import { LegalSection } from '@/components/app/sections/legal/legal-section'
import { getPrivacyPolicyAction } from '@/data/actions/get-privacy-policy-action'
import { Metadata } from 'next'
import { FC } from 'react'

export const metadata: Metadata = {
  title:
    'Privacy Policy | Hamptons Property Management Services | Over two decades of local expertise. Trusted service. Complete peace of mind.',
}

const Page: FC = async () => {
  const privacy = await getPrivacyPolicyAction()

  return (
    <LegalSection title="Privacy Policy" updatedAt={privacy.updatedAt} content={privacy.content} />
  )
}

export default Page
