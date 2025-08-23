import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { QueryProvider } from './providers/query-providor.tsx'
import { Toaster } from 'react-hot-toast'

createRoot(document.getElementById('root')!).render(
  <QueryProvider>
    <Toaster
  toastOptions={
    {
      position: 'bottom-right',
      error:{
        className: 'bg-red-500/10 text-red-500 rounded-sm border-red-500 backdrop-blur-md',
      },
      success:{
        className: 'bg-green-500/10 text-green-500 rounded-sm border-green-500 backdrop-blur-md',
      },
      
    }
  }

/>
    <App />
  </QueryProvider>
)
