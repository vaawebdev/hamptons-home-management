'use client'

import { CheckCircleIcon, Loader } from 'lucide-react'
import { FC, FormEvent, useCallback, useState, useTransition } from 'react'

export const ContactUsSectionForm: FC = () => {
  const [isSubmitting, startTransition] = useTransition()
  const [isSubmitted, setIsSubmitted] = useState(false)

  const onSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      const form = e.currentTarget

      startTransition(async () => {
        const payload = new FormData(form)

        const response = await fetch('/api/submit-contact-request', {
          method: 'POST',
          body: payload,
        })

        if (!response.ok) return

        setIsSubmitted(true)
        form.reset()
      })
    },
    [startTransition],
  )

  return (
    <form
      className="relative grid grid-cols-1 gap-6 bg-white p-8 shadow-lg md:grid-cols-2"
      onSubmit={onSubmit}
    >
      {isSubmitted ? (
        <div className="absolute inset-0 z-30 flex flex-col items-center justify-center space-y-2 bg-white p-4">
          <h1 className="w-full text-center font-mono text-3xl font-semibold">
            <CheckCircleIcon className="mx-auto mb-4 size-12" />
            Thank you for your request!
          </h1>
          <div className="text-center text-lg text-gray-700">
            We will react out as soon as possible
          </div>
          <div className="mt-4">
            <button
              type="button"
              className="block w-full gap-2 border-2 border-black px-8 py-4 text-center text-lg text-black transition-colors hover:bg-black hover:text-white"
              onClick={() => setIsSubmitted(false)}
            >
              Send Another Request
            </button>
          </div>
        </div>
      ) : null}
      <div className="space-y-2">
        <label htmlFor="name" className="block font-semibold">
          Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          max={200}
          required
          className="w-full border border-gray-300 px-4 py-3 transition-colors focus:border-black focus:outline-none"
          disabled={isSubmitting || isSubmitted}
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="email" className="block font-semibold">
          Email *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full border border-gray-300 px-4 py-3 transition-colors focus:border-black focus:outline-none"
          disabled={isSubmitting || isSubmitted}
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="phone" className="block font-semibold">
          Phone
        </label>
        <input
          type="text"
          id="phone"
          name="phone"
          max={200}
          className="w-full border border-gray-300 px-4 py-3 transition-colors focus:border-black focus:outline-none"
          disabled={isSubmitting || isSubmitted}
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="address" className="block font-semibold">
          Property Address
        </label>
        <input
          type="text"
          id="address"
          name="address"
          max={200}
          className="w-full border border-gray-300 px-4 py-3 transition-colors focus:border-black focus:outline-none"
          disabled={isSubmitting || isSubmitted}
        />
      </div>
      <div className="space-y-2 md:col-span-2">
        <label htmlFor="message" className="block font-semibold">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          maxLength={1000}
          className="w-full resize-none border border-gray-300 px-4 py-3 transition-colors focus:border-black focus:outline-none"
          disabled={isSubmitting || isSubmitted}
        />
      </div>
      <div className="md:col-span-2">
        <button
          type="submit"
          className="flex w-full items-center justify-center gap-2 bg-black px-8 py-4 text-center text-lg text-white transition-colors hover:bg-gray-800 disabled:opacity-50"
          disabled={isSubmitting || isSubmitted}
        >
          {isSubmitting ? (
            <>
              <Loader className="size-6 animate-spin" /> Sending...
            </>
          ) : (
            'Send Message'
          )}
        </button>
      </div>
    </form>
  )
}
