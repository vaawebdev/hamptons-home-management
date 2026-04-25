import { FC, PropsWithChildren } from 'react'
import { Text } from 'react-email'

export type EmailTextProps = PropsWithChildren

export const EmailText: FC<EmailTextProps> = ({ children }) => {
  return <Text className="my-2 text-base leading-relaxed text-gray-700">{children}</Text>
}
