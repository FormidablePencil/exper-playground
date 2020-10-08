import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Navbar from './components/layouts/Navbar'
import ImgBtSvg from './pages/ImgBtSvg'
import ParallaxEffect from './pages/ParallaxEffect'
import TableOfContents from './pages/TableOfContents'

export const routesAndTitle = [
  //Routes, title
  ['/', 'Table Of Contents'],
  ['/parallaxEffect', 'Parallax Effect'],
  ['/imageBetweenSvg', 'Image Between Svg']
]

function Routes() {
  return (
    <BrowserRouter>
      <Route exact path='/'>
        <Navbar />
        <TableOfContents />
      </Route>

      <Route path='/parallaxEffect'>
        <Navbar />
        <ParallaxEffect />
      </Route>

      <Route path='/imageBetweenSvg'>
        <Navbar />
        <ImgBtSvg />
      </Route>

    </BrowserRouter>
  )
}

export default Routes
