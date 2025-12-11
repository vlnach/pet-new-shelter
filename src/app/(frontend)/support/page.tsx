import './support.css'

export default function SupportPage() {
  return (
    <main className="support-page">
      <div className="support-container">
        <h1>How to support this project</h1>

        <p className="support-lead">
          This is a demo shelter website built for a portfolio. There is no real donation flow
          behind it, but this page shows how support information could look.
        </p>

        <section className="support-section">
          <h2>For shelters</h2>
          <p>
            Send updated information about pets, adoption rules or opening hours. In a real project
            this could be a simple contact form or a separate admin access.
          </p>
        </section>

        <section className="support-section">
          <h2>For visitors</h2>
          <ul className="support-list">
            <li>Adopt a pet instead of buying from a breeder.</li>
            <li>Share the website with friends who are looking for a pet.</li>
            <li>Send feedback about what is not clear or missing.</li>
          </ul>
        </section>
      </div>
    </main>
  )
}
