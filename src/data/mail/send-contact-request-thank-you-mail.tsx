import { ContactRequestThankYouMail } from '@/components/app/email/contact-request-thank-you-mail'
import { ContactRequest } from '@/payload-types'
import { BasePayload } from 'payload'
import { render } from 'react-email'

export type SendContactRequestThankYouMailParams = {
  payload: BasePayload
  contactRequest: ContactRequest
}

export const sendContactRequestThankYouMail = async (
  params: SendContactRequestThankYouMailParams,
) => {
  const companyInfo = await params.payload.findGlobal({
    slug: 'company-info',
  })

  const html = await render(
    <ContactRequestThankYouMail companyInfo={companyInfo} contactRequest={params.contactRequest} />,
  )

  await params.payload.sendEmail({
    to: params.contactRequest.email,
    subject: `${params.contactRequest.name}, we've received your message`,
    html,
  })
}
