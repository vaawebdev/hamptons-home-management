import { AdminContactRequestMail } from '@/components/app/email/admin-contact-request-mail'
import { ContactRequest } from '@/payload-types'
import { BasePayload } from 'payload'
import { render } from 'react-email'

export type SendAdminContactRequestMailParams = {
  payload: BasePayload
  contactRequest: ContactRequest
}

export const sendAdminContactRequestMail = async (params: SendAdminContactRequestMailParams) => {
  await params.payload.sendEmail({
    to: process.env.MAIL_ADMIN_ADDRESS,
    subject: `[Contact] ${params.contactRequest.name} - ${params.contactRequest.email}`,
    html: await render(<AdminContactRequestMail contactRequest={params.contactRequest} />),
  })
}
