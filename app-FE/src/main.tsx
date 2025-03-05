import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter,Routes, Route } from 'react-router'
import './index.css'
import App from './App.tsx'
import CredentialsPage from './routes/CredentialsPage.tsx'
import HomePage from './routes/HomePage.tsx'
import ProfilePage from './routes/ProfilePage.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element = {<App></App>}></Route>
        <Route path='/credentials' element = {<CredentialsPage></CredentialsPage>}></Route>
        <Route path='/homePage' element={<HomePage/>}></Route>
      </Routes>
      
    </BrowserRouter>
  </StrictMode>,
)
