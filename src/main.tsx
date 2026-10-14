import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// GitHub Pages 静态托管下用 HashRouter 避免路由 404
import { HashRouter } from 'react-router'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>,
)
