import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter,Routes, Route } from 'react-router'
import './index.css'
import App from './App.tsx'
import CredentialsPage from './routes/CredentialsPage.tsx'
import MenuPage from './routes/MenuPage.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element = {<App></App>}></Route>
        <Route path='/credentials' element = {<CredentialsPage></CredentialsPage>}></Route>
        <Route path='/menu' element={<MenuPage/>}></Route>
      </Routes>
      
    </BrowserRouter>
  </StrictMode>,
)
