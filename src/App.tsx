import { BrowserRouter, Routes, Route } from "react-router-dom"
import { LandingPage } from "@/pages/LandingPage"
import { ArchivePage } from "@/pages/ArchivePage"
import { ArticlePage } from "@/pages/ArticlePage"
import { Layout } from "@/components/Layout"

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/archive" element={<ArchivePage />} />
          <Route path="/article/:id" element={<ArticlePage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
