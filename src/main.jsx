import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import {
  Contact,
  Error,
  Github,
  Layout
} from './components'
import Home from './components/Home/Home'
import About from './components/About/About'
import User from './components/User/User'
import { githubData } from './components/Github/Github'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />} errorElement={<Error />}>   
        <Route path='/' element={<Home />} />
        <Route path='contact' element={<Contact />} />
        <Route path='about' element={<About />} />
      <Route
        path='github'
        element={<Github />}
        loader={githubData}
      
      />
        <Route path='user/:userId' element={<User />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
