/*
  Authors:
  >> Nathan TIROLF - { nathan.tirolf@epitech.eu }

  („• ֊ •„)❤  <  Have a good day !
  --U-----U------------------------
*/


/* ----- IMPORTS ----- */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@/style/index.css'
import App from './App.tsx'


/* ----- RENDERING ----- */
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
