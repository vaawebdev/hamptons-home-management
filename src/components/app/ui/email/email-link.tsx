import { FC } from 'react'
import { Link, LinkProps } from 'react-email'

export type EmailLinkProps = LinkProps

export const EmailLink: FC<EmailLinkProps> = ({ ...props }) => {
  return <Link {...props} />
}
