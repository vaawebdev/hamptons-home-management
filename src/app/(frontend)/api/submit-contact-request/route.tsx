import { submitContactRequestAction } from '@/data/actions/submit-contact-request-action'
import { NextResponse } from 'next/server'
import { z, ZodError } from 'zod'

export const POST = async (req: Request) => {
  try {
    const form = await req.formData()

    const raw = {
      name: form.get('name'),
      email: form.get('email'),
      phone: form.get('phone'),
      address: form.get('address'),
      message: form.get('message'),
    }

    const validated = await z
      .object({
        name: z.string().min(1).max(200),
        email: z.email(),
        phone: z.string().max(200).nullish(),
        address: z.string().max(200).nullish(),
        message: z.string().min(1).max(1000),
      })
      .parseAsync(raw)

    await submitContactRequestAction(validated)

    return new NextResponse(undefined, { status: 204 })
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json({ issues: error.issues }, { status: 422 })
    }

    throw error
  }
}
