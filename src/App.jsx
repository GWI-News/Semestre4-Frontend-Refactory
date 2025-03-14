import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { AuthProvider } from './context/AuthContext'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar';
import NewsDashboard from './pages/NewsDashboard/NewsDashboard'
import NewsPage from './pages/NewsPage/NewsPage'


function App() {
  const [user, setUser] = useState(undefined)

  return (
    <>
      <AuthProvider value={{ user }}>
        <BrowserRouter>
          <Header />
          <Navbar />
          <Routes>
            <Route path="/" element={<NewsDashboard />} />
            <Route path="/categorias/:newsCategory/subcategorias/:newsSubcategories/noticia/:newsId" element={<NewsPage />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  )
}

export default App
