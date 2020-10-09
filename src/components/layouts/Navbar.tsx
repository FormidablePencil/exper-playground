import React from 'react'
import { Link, useRouteMatch } from 'react-router-dom'
import styled from 'styled-components'
import { routesAndTitle } from '../../Routes'

function Navbar() {
  const { path } = useRouteMatch()

  const title = routesAndTitle.filter(item => item[0] === path)[0][1]
  const tableOfContents = routesAndTitle.filter(item => item[0] === '/')[0][1]

  const BackToTableOfContents = () =>
    <>{path !== '/' &&
      <NavItem><Link to='/'>{tableOfContents}</Link></NavItem>
    }</>

  return (
    <Container>
      <BackToTableOfContents />
      <NavItem>{title}</NavItem>
    </Container>
  )
}

const Container = styled.div`
  background: #36FFA2;
  display: flex;
  padding: 0em 5em 0em 5em;
`
const NavItem = styled.p`
  margin: 1em;
`

export default Navbar
