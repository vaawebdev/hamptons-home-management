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
    content: 'info@hamptonspm.com',
    href: 'mailto:info@hamptonspm.com',
  },
  {
    icon: MapPinIcon,
    label: 'Location',
    content: (
      <>
        Serving the Hamptons
        <br />
        New York
      </>
    ),
  },
]
