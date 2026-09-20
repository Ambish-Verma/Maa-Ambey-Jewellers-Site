export const metadata = {
  title: 'Page Not Found | Maa Ambey Jewellers',
  description: 'The page you are looking for does not exist. Visit Maa Ambey Jewellers for custom gold & silver jewellery in Liluah, Howrah.',
  robots: { index: false, follow: true },
}

export default function NotFound() {
  return (
    <section style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '1.5rem', padding: '2rem', textAlign: 'center' }}>
      <h1 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(48px, 10vw, 80px)', fontWeight: 300, color: 'var(--ink)' }}>404</h1>
      <p style={{ fontFamily: 'var(--serif)', fontSize: '20px', color: 'var(--stone)' }}>This page doesn&apos;t exist.</p>
      <a href="/" className="btn-primary" style={{ textDecoration: 'none', marginTop: '1rem' }}>Back to Home</a>
    </section>
  )
}
