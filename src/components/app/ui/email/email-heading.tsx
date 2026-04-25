import { FC, PropsWithChildren } from 'react'
import { Heading } from 'react-email'

export type EmailHeadingProps = PropsWithChildren

export const EmailHeading: FC<EmailHeadingProps> = ({ children }) => {
  return (
    <Heading className="my-4 text-2xl font-normal tracking-tight text-gray-700">{children}</Heading>
  )
}
