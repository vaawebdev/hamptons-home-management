import { Text } from '@react-email/components'
import { FC, PropsWithChildren } from 'react'

export type EmailTextProps = PropsWithChildren

export const EmailText: FC<EmailTextProps> = ({ children }) => {
  return <Text className="my-2 text-base leading-relaxed text-gray-700">{children}</Text>
}
