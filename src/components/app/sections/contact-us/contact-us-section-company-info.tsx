import { getCompanyInfoAction } from '@/data/actions/get-company-info-action'
import { parsePhoneNumberWithError } from 'libphonenumber-js'
import { LucideIcon, MailIcon, MapPinIcon, PhoneIcon } from 'lucide-react'
import { FC, ReactNode } from 'react'

export const ContactUsSectionCompanyInfo: FC = async () => {
  const info = await getCompanyInfoAction()

  const contacts: { id: string; label: string; icon: LucideIcon; content: ReactNode }[] = []

  if (info.phone) {
    const phone = parsePhoneNumberWithError(info.phone, 'US')

    if (phone.isValid()) {
      contacts.push({
        id: 'phone',
        label: 'Phone',
        icon: PhoneIcon,
        content: (
          <a href={phone.format('RFC3966')} className="underline hover:text-black">
            {phone.format('NATIONAL')}
          </a>
        ),
      })
    }
  }

  if (info.email) {
    contacts.push({
      id: 'email',
      label: 'Email',
      icon: MailIcon,
      content: (
        <a href={`mailto:${info.email}`} className="underline hover:text-black">
          {info.email}
        </a>
      ),
    })
  }

  if (info.address) {
    contacts.push({
      id: 'address',
      label: 'Address',
      icon: MapPinIcon,
      content: <address className="whitespace-pre-wrap italic">{info.address}</address>,
    })
  }

  return (
    <div className="space-y-8">
      {contacts.length ? (
        <div>
          <h3 className="mb-6 font-mono text-2xl font-semibold text-balance">
            Contact Information
          </h3>
          <ul className="space-y-4">
            {contacts.map((contact) => (
              <li key={contact.id} className="flex items-start gap-4">
                <contact.icon className="mt-1 size-6 shrink-0" />
                <div className="space-y-1">
                  <h3 className="font-mono font-semibold text-balance">{contact.label}</h3>
                  <div className="text-gray-700">{contact.content}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
      <div className="space-y-2 bg-black p-6 text-white">
        <h4 className="font-mono text-lg font-semibold text-balance">Available 24/7</h4>
        <p className="text-pretty text-gray-300">
          Emergency property issues? We're always here to help protect your investment.
        </p>
      </div>
    </div>
  )
}
