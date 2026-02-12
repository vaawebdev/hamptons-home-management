import { ContactRequest } from '@/payload-types'
import { FC } from 'react'
import { EmailField } from '../ui/email/email-field'
import { EmailHeading } from '../ui/email/email-heading'
import { EmailLayout } from '../ui/email/email-layout'
import { EmailText } from '../ui/email/email-text'

export type AdminContactRequestMailProps = {
  contactRequest: ContactRequest
}

export const AdminContactRequestMail: FC<AdminContactRequestMailProps> & {
  PreviewProps: AdminContactRequestMailProps
} = ({ contactRequest }) => {
  return (
    <EmailLayout preview={`New contact request from ${contactRequest.name}`}>
      <EmailHeading>New Contact Request</EmailHeading>
      <EmailText>A new contact request has been submitted</EmailText>
      <EmailField label="NAME">{contactRequest.name}</EmailField>
      <EmailField label="EMAIL">{contactRequest.email}</EmailField>
      {contactRequest.phone ? <EmailField label="PHONE">{contactRequest.phone}</EmailField> : null}
      {contactRequest.address ? (
        <EmailField label="ADDRESS">{contactRequest.address}</EmailField>
      ) : null}
      <EmailField label="MESSAGE">{contactRequest.message}</EmailField>
    </EmailLayout>
  )
}

AdminContactRequestMail.PreviewProps = {
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

export default AdminContactRequestMail
