import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import Register from './pages/register.tsx'
import AboutUsPage from './pages/about_us.tsx'
import ApplicantTracking from './pages/applicant_tracking.tsx'

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/register",
    element: <Register />
  },
  {
    path: "/aboutus",
    element: <AboutUsPage />
  },
  {
    path: "/applicant_tracking",
    element: <ApplicantTracking />
  }
]);



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />,
  </StrictMode>,
)
