import { Heading } from '@react-email/components'
import { FC, PropsWithChildren } from 'react'

export type EmailHeadingProps = PropsWithChildren

export const EmailHeading: FC<EmailHeadingProps> = ({ children }) => {
  return (
    <Heading className="my-4 text-2xl font-normal tracking-tight text-gray-700">{children}</Heading>
  )
}
