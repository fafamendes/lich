import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { PixelContextProvider } from './context/PixelContext.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <PixelContextProvider>
      <App />
    </PixelContextProvider>
  </React.StrictMode>,
)
