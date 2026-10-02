import { FC } from 'react'

const year = new Date().getFullYear()

export const FooterCopyright: FC = () => {
  return (
    <div>
      <p className="text-center text-balance text-gray-400">
        {year} Hamptons Property Management. All rights reserved.
      </p>
    </div>
  )
}
