import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { SystemStatusBanner } from './components/SystemStatusBanner'
import HomePage from './HomePage.jsx'
import { FaqPage } from './pages/FaqPage'
import { FoundingMemberPage } from './pages/FoundingMemberPage'

export default function App() {
  return (
    <BrowserRouter>
      <SystemStatusBanner />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/founding-member" element={<FoundingMemberPage />} />
      </Routes>
    </BrowserRouter>
  )
}
