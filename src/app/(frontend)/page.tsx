import { headers as getHeaders } from 'next/headers.js'
import Image from 'next/image'
import { getPayload } from 'payload'
import React from 'react'
import { fileURLToPath } from 'url'
import Link from 'next/link'

import config from '@/payload.config'
import './styles.css'

export default async function HomePage() {
  const headers = await getHeaders()
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const { user } = await payload.auth({ headers })

  const fileURL = `vscode://file/${fileURLToPath(import.meta.url)}`

  return (
    <div>
      <div className="hero">
        <div className="hero-text">
          <h1>
            Find a safe home
            <br />
            for every pet.
          </h1>
          <p className="hero-subtitle">
            Browse pets from local shelters and send a short request in a few clicks.
          </p>
          <div className="hero-actions">
            <Link href="/pets" className="btn-primary">
              Browse pets
            </Link>
            <Link href="/about" className="btn-secondary">
              How it works
            </Link>
          </div>
          <div className="hero-stats">
            <div>
              <span className="hero-stat-number">50+</span>
              <span className="hero-stat-label">Pets available</span>
            </div>
            <div>
              <span className="hero-stat-number">10+</span>
              <span className="hero-stat-label">Partner shelters</span>
            </div>
            <div>
              <span className="hero-stat-number">98%</span>
              <span className="hero-stat-label">Happy families</span>
            </div>
          </div>
        </div>

        <div className="hero-media">
          <div className="hero-card">
            <Image
              src="/happy-family-with-adopted-dog-in-cozy-home.jpg"
              alt="Happy dog with family"
              width={700}
              height={475}
            />
          </div>
        </div>
      </div>

      <section className="home-section">
        <h2>How this project helps</h2>
        <p>
          We collect pet profiles from shelters and make it easy for people to find and adopt them.
          The goal is to make adoptions faster and less stressful for both humans and animals.
        </p>
      </section>
      <section className="home-section">
        <p className="home-note">
          Are you a shelter partner? <Link href="/admin">Log in to your dashboard</Link> to add new
          pets.
        </p>
      </section>
    </div>
  )
}
