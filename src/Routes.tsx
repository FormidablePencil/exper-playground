import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Navbar from './components/layouts/Navbar'
import CrystalParallaxEffect from './pages/CrystalParallaxEffect'
import Crystals from './pages/Crystals'

export const pages = [
  { title: 'Crystals', path: '/crystals', component: <Crystals /> },
  { title: 'Crystal Parallax Effect', path: '/', component: <CrystalParallaxEffect /> },
]

function Routes() {
  return (
    <BrowserRouter>
      {pages.map(page =>
        <Route key={page.title} exact={page.path === '/' ? true : false} path={page.path}>
          <Navbar />
          {page.component}
        </Route>
      )}
    </BrowserRouter>
  )
}

export default Routes
