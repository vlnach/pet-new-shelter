import './about.css'

export default function AboutPage() {
  return (
    <main className="about-page">
      <h1>About our shelter</h1>

      <p className="about-lead">
        Pet Shelter is a small non-profit project that helps local shelters find safe and loving
        homes for cats, dogs and other animals.
      </p>

      <section className="about-section">
        <h2>How it works</h2>
        <p>
          We collect information about animals from partner shelters and show it on this website.
          Each pet has a simple profile with a photo and basic info, so visitors can choose an
          animal that fits their lifestyle.
        </p>
        <p>
          When someone wants to adopt, they send a short request through the site. The shelter
          contacts them back, asks a few questions and organizes a meeting with the pet.
        </p>
      </section>

      <section className="about-section">
        <h2>Why this project exists</h2>
        <p>
          There are always more animals than free places in shelters. A clear and simple website
          helps to show them to more people and speeds up adoptions. The goal is to make the process
          less stressful for both humans and animals.
        </p>
      </section>

      <section className="about-section">
        <h2>What you can do</h2>
        <ul className="about-list">
          <li>Adopt a pet that matches your life and energy level.</li>
          <li>Share this website with friends or colleagues.</li>
          <li>Support shelters with donations or by volunteering.</li>
        </ul>
      </section>
    </main>
  )
}
