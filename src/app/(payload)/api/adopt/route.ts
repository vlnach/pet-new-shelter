import { NextResponse } from 'next/server'
import { getPayload } from 'payload'
import configPromise from '@payload-config'

export async function POST(request: Request) {
  const body = await request.json()
  const payload = await getPayload({ config: configPromise })

  await payload.create({
    collection: 'adoptions',
    data: body,
  })

  return NextResponse.json({ ok: true })
}
