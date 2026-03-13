import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { createBrowserRouter, RouterProvider, Route } from "react-router-dom"
import InfoFilme from './routes/InfoFilme.jsx'
import ErrorPage from './routes/ErrorPage.jsx'
import Search from './routes/Search.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage />
  },
  {
    path: "filme/:id",
    element: <InfoFilme />
  },
  {
    path: "search",
    element: <Search />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)