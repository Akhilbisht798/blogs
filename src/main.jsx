import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import './index.css'
import Home from './components/Home.jsx';
import AboutMe from './components/AboutMe.jsx';
import MarkdownRender from './components/MarkdownRender.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/aboutMe",
    element: <AboutMe />
  },
  {
    path: "/blog/:filePath",
    element: <MarkdownRender />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
