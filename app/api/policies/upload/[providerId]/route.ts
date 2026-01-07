// app/api/policies/upload/[providerId]/route.ts
import { NextRequest, NextResponse } from 'next/server'

export const POST = async (req: NextRequest, { params }: { params: { providerId: string } }) => {
  const providerId = params.providerId
  const formData = await req.formData()
  const file = formData.get('file') as File

  if (!file) {
    return NextResponse.json({ message: 'No file uploaded' }, { status: 400 })
  }

  // Forward file to NestJS backend
  const apiRes = await fetch(`http://localhost:3000/policies/upload/${providerId}`, {
    method: 'POST',
    body: file,
  })

  const data = await apiRes.json()
  return NextResponse.json(data, { status: apiRes.status })
}
