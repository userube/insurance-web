'use client'

import { useState } from 'react'

export default function PoliciesUpload({ providerId }: { providerId: string }) {
  const [file, setFile] = useState<File | null>(null)
  const [progress, setProgress] = useState(0)
  const [status, setStatus] = useState('')

  const handleUpload = async () => {
    if (!file) return

    const formData = new FormData()
    formData.append('file', file)

    setStatus('Uploading...')
    setProgress(0)

    // Use fetch with ReadableStream for progress
    const xhr = new XMLHttpRequest()
    xhr.open('POST', `/api/policies/upload/${providerId}`)

    xhr.upload.onprogress = (event) => {
      if (event.lengthComputable) {
        setProgress(Math.round((event.loaded / event.total) * 100))
      }
    }

    xhr.onload = () => {
      if (xhr.status === 200) {
        setStatus('Upload complete!')
      } else {
        setStatus('Upload failed')
        console.error(xhr.responseText)
      }
    }

    xhr.onerror = () => {
      setStatus('Upload failed')
    }

    xhr.send(formData)
  }

  return (
    <div className="space-y-3">
      <input
        type="file"
        accept=".csv"
        onChange={(e) => setFile(e.target.files?.[0] ?? null)}
      />
      <button
        onClick={handleUpload}
        className="bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50"
        disabled={!file}
      >
        Upload CSV
      </button>
      {status && <p>{status}</p>}
      {progress > 0 && <p>Progress: {progress}%</p>}
    </div>
  )
}
