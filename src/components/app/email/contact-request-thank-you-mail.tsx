import { CompanyInfo, ContactRequest } from '@/payload-types'
import { FC, Fragment } from 'react'
import { EmailHeading } from '../ui/email/email-heading'
import { EmailLayout } from '../ui/email/email-layout'
import { EmailLink } from '../ui/email/email-link'
import { EmailText } from '../ui/email/email-text'

export type ContactRequestThankYouMailProps = {
  companyInfo: CompanyInfo
  contactRequest: ContactRequest
}

export const ContactRequestThankYouMail: FC<ContactRequestThankYouMailProps> & {
  PreviewProps: ContactRequestThankYouMailProps
} = ({ companyInfo, contactRequest }) => {
  return (
    <EmailLayout preview="Thank you for contacting Hamptons Home Management">
      <EmailHeading>Thank You, {contactRequest.name}!</EmailHeading>
      <EmailText>We have received your message and appreciate you reaching out to us.</EmailText>
      <EmailText>
        A member of our team will review your inquiry and get back to you shortly.
      </EmailText>
      {companyInfo.email || companyInfo.phone ? (
        <>
          <EmailText>
            If you have any urgent questions in the meantime, please don&apos;t hesitate to contact
            us directly:
          </EmailText>
          <EmailText>
            <EmailLink href={`mailto:${companyInfo.email}`}>{companyInfo.email}</EmailLink>
            {companyInfo.phone ? (
              <>
                {' | '}
                <EmailLink href={`tel:${companyInfo.phone}`}>{companyInfo.phone}</EmailLink>
              </>
            ) : null}
          </EmailText>
        </>
      ) : null}
      <EmailText>Best regards,</EmailText>
      <EmailText>The Hamptons Home Management Team</EmailText>
      {companyInfo.address ? (
        <EmailText>
          {companyInfo.address
            .trim()
            .split('\n')
            .map((line, idx, lines) => (
              <Fragment key={idx}>
                {line}
                {idx < lines.length - 1 ? <br /> : null}
              </Fragment>
            ))}
        </EmailText>
      ) : null}
    </EmailLayout>
  )
}

ContactRequestThankYouMail.PreviewProps = {
  companyInfo: {
    id: '1',
    email: 'info@hamptonshomemanagement.com',
    phone: '(631) 555-0100',
    address: '100 Main Street,\nSouthampton, NY 11968',
  },
  contactRequest: {
    id: '1',
    name: 'John Smith',
    email: 'john.smith@example.com',
    phone: '(631) 555-1234',
    address: '123 Ocean Drive, Southampton, NY 11968',
    message:
      'Hi, I am interested in learning more about your home management services for my property in the Hamptons. Please contact me at your earliest convenience.',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
}

export default ContactRequestThankYouMail
