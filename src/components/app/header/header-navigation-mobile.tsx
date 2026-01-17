'use client'

import { FocusTrap } from 'focus-trap-react'
import { MenuIcon, XIcon } from 'lucide-react'
import Link from 'next/link'
import { FC, useCallback, useState } from 'react'
import { useKey, useLockBodyScroll } from 'react-use'
import { HEADER_NAVIGATION } from './constants'
import { HeaderBrand } from './header-brand'

export const HeaderNavigationMobile: FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  const open = useCallback(() => setIsOpen(true), [])
  const close = useCallback(() => setIsOpen(false), [])

  useLockBodyScroll(isOpen)
  useKey('Escape', () => setIsOpen(false))

  return (
    <>
      {isOpen ? (
        <FocusTrap>
          <div className="fixed inset-0 z-50 h-screen w-screen overflow-y-auto bg-white">
            <div className="container">
              <div className="mx-auto flex h-24 items-center justify-between">
                <HeaderBrand onNavigate={close} />
                <button
                  type="button"
                  className="flex size-12 items-center justify-center text-gray-700 transition-colors hover:text-black"
                  aria-label="Hide menu"
                  onClick={close}
                >
                  <XIcon className="size-7" />
                </button>
              </div>
              <nav className="divide-y divide-neutral-200">
                {HEADER_NAVIGATION.map((link) => (
                  <div key={link.id}>
                    <Link
                      href={link.href}
                      className="block px-4 py-3 text-lg text-gray-700 transition-colors hover:text-black"
                      onNavigate={close}
                    >
                      {link.text}
                    </Link>
                  </div>
                ))}
              </nav>
            </div>
          </div>
        </FocusTrap>
      ) : null}
      <button
        type="button"
        className="ml-auto flex size-12 items-center justify-center text-gray-700 md:hidden"
        aria-label="Show menu"
        onClick={open}
      >
        <MenuIcon className="size-7" />
      </button>
    </>
  )
}
