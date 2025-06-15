import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router'
import { ThemeProvider } from "./context/ThemeContext.tsx";
import router from "./routes/router.tsx";
import './index.css'

createRoot(document.getElementById('root')!).render(
  <ThemeProvider>
      <RouterProvider router={router} />
  </ThemeProvider>
)
