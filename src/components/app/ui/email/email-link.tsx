import { Link, LinkProps } from '@react-email/components'
import { FC } from 'react'

export type EmailLinkProps = LinkProps

export const EmailLink: FC<EmailLinkProps> = ({ ...props }) => {
  return <Link {...props} />
}
