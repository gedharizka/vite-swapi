import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ErrorPage from './error-page.jsx'
import DetailPage from './pages/Detail.jsx'
import Home from './pages/Home.jsx'

const router = createBrowserRouter([
  {
    path: '/home',
    element: <Home />,
    errorElement:<ErrorPage />
  },
  {
    path: '/people/:id',
    element: <DetailPage />,
    errorElement:<ErrorPage />
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
    </RouterProvider>
  </React.StrictMode>,
)
