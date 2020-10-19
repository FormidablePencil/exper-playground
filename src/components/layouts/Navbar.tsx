import React from 'react'
import { Link, useRouteMatch } from 'react-router-dom'
import styled from 'styled-components'
import { pages } from '../../Routes'

function Navbar() {
  const { path } = useRouteMatch()

  const title = pages.filter(page => page.path === path)[0].title
  const home = pages.filter(page => page.path === '/' && page)[0].title

  const BackToHome = () =>
    <>{path !== '/' &&
      <NavItem><Link to='/'>{home}</Link></NavItem>
    }</>

  return (
    <Container>
      <BackToHome />
      <NavItem>{title}</NavItem>
    </Container>
  )
}

const Container = styled.div`
  background: #CCCCCC;
  display: flex;
  padding: 0em 5em 0em 5em;
`
const NavItem = styled.p`
  margin: 1em;
`

export default Navbar
