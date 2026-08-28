export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-line bg-ink py-8">
      <div className="container-px flex flex-col items-center justify-between gap-3 text-xs text-bone-dim sm:flex-row">
        <p>© {year} Senithi Malalanayake. Built from scratch, deployed on GitHub Pages.</p>
        <p>Designed & developed by Senithi.</p>
      </div>
    </footer>
  )
}
