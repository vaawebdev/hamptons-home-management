import { FC, PropsWithChildren } from 'react'
import {
  Body,
  Container,
  Head,
  Html,
  Img,
  pixelBasedPreset,
  Preview,
  Section,
  Tailwind,
} from 'react-email'

export type EmailLayoutProps = PropsWithChildren & {
  preview?: string
}

export const EmailLayout: FC<EmailLayoutProps> = ({ preview, children }) => {
  return (
    <Html>
      <Head />
      {preview ? <Preview>{preview}</Preview> : null}
      <Tailwind
        config={{
          presets: [pixelBasedPreset],
          theme: {
            extend: {
              fontFamily: {
                sans: ["'Inter'", '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
                serif: ['ui-serif', 'Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif'],
              },
            },
          },
        }}
      >
        <Body className="bg-gray-100 font-serif">
          <Container className="mx-auto mb-16 max-w-150 bg-white p-4">
            <Section>
              <Img
                src={`${process.env.NEXT_PUBLIC_SERVER_URL}/logo.png`}
                alt="Hamptons Home Management"
                width={126}
                height={60}
              />
            </Section>
            <Section className="p-2">{children}</Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}
