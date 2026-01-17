import { FC } from 'react'

export const FooterCopyright: FC = () => {
  return (
    <div>
      <p className="text-center text-balance text-gray-400">
        {new Date().getFullYear()} Hamptons Property Management. All rights reserved.
      </p>
    </div>
  )
}
