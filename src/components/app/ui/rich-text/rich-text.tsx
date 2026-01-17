import { cn } from '@/utils/cn'
import { RichText as Component } from '@payloadcms/richtext-lexical/react'
import { ComponentProps, FC } from 'react'

export type RichTextProps = ComponentProps<typeof Component>

export const RichText: FC<RichTextProps> = ({ className, ...props }) => {
  return (
    <div>
      <Component
        {...props}
        className={cn('prose prose-headings:font-mono max-w-full', className)}
      />
      <div className="clear-both" />
    </div>
  )
}
