import { BrowserRouter, Routes, Route } from "react-router-dom"
import { LandingPage } from "@/pages/LandingPage"
import { ArchivePage } from "@/pages/ArchivePage"
import { Layout } from "@/components/Layout"

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/archive" element={<ArchivePage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
