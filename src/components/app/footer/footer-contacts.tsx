import { MailIcon } from 'lucide-react'
import { FC } from 'react'

export const FooterContacts: FC = () => {
  return (
    <div className="space-y-4">
      <h4 className="font-semibold">Контакты</h4>
      <a
        href="mailto:support@domdoley.ru"
        className="flex items-center space-x-2 text-sm text-gray-400 transition-colors hover:text-white"
      >
        <MailIcon className="size-4" />
        <span className="underline">support@domdoley.ru</span>
      </a>
    </div>
  )
}
