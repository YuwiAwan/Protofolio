import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './index.css'
import Navbar from './components/navbar.jsx'
import App from './page/App.jsx'
import Tentang from './page/Tentang.jsx'
import Proyek from './page/Proyek.jsx'
import Kontak from './page/Kontak.jsx'
import "remixicon/fonts/remixicon.css";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <div className='container mx-auto px-4'>
    <Navbar />
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/tentang' element={<Tentang />} />
      <Route path='/proyek' element={<Proyek />} />
      <Route path='/kontak' element={<Kontak />} />
    </Routes>
    </div>
    </BrowserRouter>
  </StrictMode>,
)
