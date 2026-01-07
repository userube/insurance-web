'use client'
import { useState } from 'react'

export default function ClaimsUpload({ onUploadComplete }: { onUploadComplete: () => void }) {
  const [file, setFile] = useState<File | null>(null)
  const [loading, setLoading] = useState(false)

  const handleUpload = async () => {
    if (!file) return
    setLoading(true)

    const formData = new FormData()
    formData.append('file', file)

    const res = await fetch('/api/claims/upload', {
      method: 'POST',
      body: formData,
    })

    if (!res.ok) alert('Upload failed')
    else onUploadComplete()

    setLoading(false)
  }

  return (
    <div className="flex gap-2 items-center">
      <input type="file" onChange={e => setFile(e.target.files?.[0] ?? null)} />
      <button onClick={handleUpload} disabled={loading || !file} className="btn">
        {loading ? 'Uploading...' : 'Upload Claims CSV'}
      </button>
    </div>
  )
}
