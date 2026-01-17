import { MailIcon, MapPinIcon, PhoneIcon } from 'lucide-react'

export const CONTACT_INFO = [
  {
    icon: PhoneIcon,
    label: 'Phone',
    content: '(555) 123-4567',
    href: 'tel:+15551234567',
  },
  {
    icon: MailIcon,
    label: 'Email',
    content: 'info@hamptonshomemgmt.com',
    href: 'mailto:info@hamptonshomemgmt.com',
  },
  {
    icon: MapPinIcon,
    label: 'Location',
    content: (
      <>
        Hamptons Home Management
        <br />
        33 flying point rd , suite 124
        <br />
        Southampton NY
        <br />
        11968
      </>
    ),
  },
]
