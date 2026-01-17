import { FC } from 'react'

export type ErrorSectionProps = {
  code: string
  name: string
  title: string
}

export const ErrorSection: FC<ErrorSectionProps> = ({ code, name, title }) => {
  return (
    <div className="container mx-auto space-y-4 py-16 text-center">
      <h1 className="font-mono text-9xl font-bold text-gray-200">{code}</h1>
      <h2 className="font-mono text-4xl font-bold">{name}</h2>
      <p className="text-base text-gray-600">{title}</p>
    </div>
  )
}
