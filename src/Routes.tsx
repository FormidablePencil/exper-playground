import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import CrystalParallaxEffect from './pages/CrystalParallaxEffect'
import Crystals from './pages/Crystals'
import ImgBtSvg from './pages/ImgBtSvg'
import ParallaxEffect from './pages/ParallaxEffect'
import TableOfContents from './pages/TableOfContents'

export const pages = [
  { title: 'Table Of Contents', path: '/', component: <TableOfContents /> },
  { title: 'Image Between Svg', path: '/imageBetweenSvg', component: <ImgBtSvg /> },
  { title: 'Parallax Effect', path: '/parallaxEffect', component: <ParallaxEffect /> },
  { title: 'Crystals', path: '/crystals', component: <Crystals /> },
  { title: 'Crystal Parallax Effect', path: '/crystalParallaxEffect', component: <CrystalParallaxEffect /> },
]

function Routes() {
  return (
    <BrowserRouter>
      {pages.map(page =>
        <Route key={page.title} exact={page.path === '/' ? true : false} path={page.path}>
          {/* <Navbar /> */}
          {page.component}
        </Route>
      )}
    </BrowserRouter>
  )
}

export default Routes
