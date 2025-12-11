'use client'

import { useState, FormEvent } from 'react'
import './adopt.css'

type Status = 'idle' | 'sending' | 'success' | 'error'

type AdoptFormProps = {
  petId: string
}

export default function AdoptForm({ petId }: AdoptFormProps) {
  const [status, setStatus] = useState<Status>('idle')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')

    const form = e.currentTarget

    const data = {
      pet: Number(petId),
      name: (form.elements.namedItem('name') as HTMLInputElement)?.value || '',
      email: (form.elements.namedItem('email') as HTMLInputElement)?.value || '',
      message: (form.elements.namedItem('message') as HTMLTextAreaElement)?.value || '',
    }

    try {
      const res = await fetch('/api/adopt', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (!res.ok) throw new Error('Request failed')

      form.reset()
      setStatus('success')
    } catch (err) {
      console.error(err)
      setStatus('error')
    }
  }

  return (
    <form className="adopt-form" onSubmit={handleSubmit}>
      <div className="adopt-field">
        <label className="adopt-label" htmlFor="name">
          Your name
        </label>
        <input id="name" name="name" required className="adopt-input" />
      </div>

      <div className="adopt-field">
        <label className="adopt-label" htmlFor="email">
          Email
        </label>
        <input id="email" name="email" type="email" required className="adopt-input" />
      </div>

      <div className="adopt-field">
        <label className="adopt-label" htmlFor="message">
          Message
        </label>
        <textarea id="message" name="message" rows={4} className="adopt-textarea" />
      </div>

      <button type="submit" className="adopt-button" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending...' : 'Send request'}
      </button>

      {status === 'success' && (
        <p className="adopt-status adopt-status-success">
          Thank you! Your adoption request has been sent.
        </p>
      )}

      {status === 'error' && (
        <p className="adopt-status adopt-status-error">Something went wrong. Please try again.</p>
      )}
    </form>
  )
}
