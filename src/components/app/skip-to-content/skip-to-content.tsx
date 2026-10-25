import { type FC } from 'react'

export const SkipToContent: FC = () => (
  <a
    href="#main"
    className="fixed top-4 left-4 z-0 rounded-lg bg-gray-800 px-4 py-2 text-sm font-medium text-white opacity-0 focus:z-50 focus:opacity-100"
  >
    Skip to content
  </a>
)
