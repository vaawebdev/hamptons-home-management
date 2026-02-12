import { Text } from '@react-email/components'
import { FC, PropsWithChildren, ReactNode } from 'react'

export type EmailFieldProps = PropsWithChildren & {
  label?: ReactNode
}

export const EmailField: FC<EmailFieldProps> = ({ label, children }) => {
  return (
    <div className="my-6">
      {label ? (
        <Text className="mt-0 mb-1 text-xs font-semibold text-gray-400">{label}</Text>
      ) : null}
      <Text className="my-0 text-base text-gray-700">{children}</Text>
    </div>
  )
}
