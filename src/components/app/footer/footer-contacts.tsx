import { getCompanyInfoAction } from '@/data/actions/get-company-info-action'
import { parsePhoneNumberWithError } from 'libphonenumber-js'
import { LucideIcon, MailIcon, MapPinIcon, PhoneIcon } from 'lucide-react'
import { FC, ReactNode } from 'react'

export const FooterContacts: FC = async () => {
  const info = await getCompanyInfoAction()

  const contacts: { id: string; icon: LucideIcon; content: ReactNode }[] = []

  if (info.phone) {
    const phone = parsePhoneNumberWithError(info.phone, 'US')

    if (phone.isValid()) {
      contacts.push({
        id: 'phone',
        icon: PhoneIcon,
        content: (
          <a
            href={phone.format('RFC3966')}
            className="underline transition-colors hover:text-white"
          >
            {phone.format('NATIONAL')}
          </a>
        ),
      })
    }
  }

  if (info.email) {
    contacts.push({
      id: 'email',
      icon: MailIcon,
      content: (
        <a href={`mailto:${info.email}`} className="underline transition-colors hover:text-white">
          {info.email}
        </a>
      ),
    })
  }

  if (info.address) {
    contacts.push({
      id: 'address',
      icon: MapPinIcon,
      content: <address className="whitespace-pre-wrap italic">{info.address}</address>,
    })
  }

  return contacts.length ? (
    <ul className="flex flex-col gap-x-9 gap-y-6 text-gray-300 lg:flex-row lg:items-start lg:justify-center">
      {contacts.map((contact) => (
        <li key={contact.id} className="flex items-start gap-4">
          <contact.icon className="mt-0.6 size-6 shrink-0" />
          <div>{contact.content}</div>
        </li>
      ))}
    </ul>
  ) : null
}
