import { Routes, Route } from 'react-router'
import SiteLayout from './components/SiteLayout'
import Home from './pages/Home'
import Sessions from './pages/Sessions'
import SessionDetail from './pages/SessionDetail'
import Program from './pages/Program'
import About from './pages/About'

export default function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/sessions" element={<Sessions />} />
        <Route path="/sessions/:id" element={<SessionDetail />} />
        <Route path="/program" element={<Program />} />
        <Route path="/about" element={<About />} />
      </Route>
    </Routes>
  )
}
