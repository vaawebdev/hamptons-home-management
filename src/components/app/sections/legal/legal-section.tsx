import type { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical'
import { parseISO } from 'date-fns'
import { ArrowLeftIcon } from 'lucide-react'
import Link from 'next/link'
import { FC, ReactNode } from 'react'
import { RichText } from '../../ui/rich-text/rich-text'

export type LegalSectionProps = {
  title: ReactNode
  updatedAt?: string
  content?: SerializedEditorState
}

export const LegalSection: FC<LegalSectionProps> = ({ title, updatedAt, content }) => {
  return (
    <section className="container space-y-6 py-12">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-gray-700 transition-colors hover:text-black"
      >
        <ArrowLeftIcon className="mr-2 size-4" />
        Back to Home
      </Link>
      <div className="space-y-3">
        <h1 className="font-mono text-4xl font-semibold">{title}</h1>
        {updatedAt ? (
          <p className="font-serif text-sm text-gray-700 italic">
            Last Updated:{' '}
            {Intl.DateTimeFormat('en', { month: 'long', day: 'numeric', year: 'numeric' }).format(
              parseISO(updatedAt),
            )}
          </p>
        ) : null}
      </div>
      {content ? <RichText data={content} /> : null}
    </section>
  )
}
