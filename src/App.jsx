import { HashRouter, Route, Routes } from 'react-router-dom'
import SmoothScroll from './components/SmoothScroll'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import ProjectDetail from './pages/ProjectDetail'

export default function App() {
  return (
    <HashRouter>
      <SmoothScroll>
        <div className="relative bg-ink">
          <div className="dot-overlay" />
          <div className="noise-overlay" />
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/project/:id" element={<ProjectDetail />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </SmoothScroll>
    </HashRouter>
  )
}
