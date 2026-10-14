import { Route, Routes } from 'react-router'
import Footer from '@/components/Footer'
import SiteNav from '@/components/SiteNav'
import About from '@/pages/About'
import Gallery from '@/pages/Gallery'
import Home from '@/pages/Home'
import Plugins from '@/pages/Plugins'

export default function App() {
  return (
    <div className="min-h-svh bg-zinc-950 text-zinc-200 antialiased">
      <SiteNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/plugins" element={<Plugins />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  )
}
