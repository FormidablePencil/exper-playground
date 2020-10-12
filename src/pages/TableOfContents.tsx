import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { pages } from '../Routes'

function TableOfContents() {
  return (
    <div>
      <Container>
        <Index>
          {pages.map((page, index) => {
            if (index !== 0) {
              return (
                <Link key={page.title} to={page.path}><p>{page.title}</p></Link>
              )
            } else return null
          })}
        </Index>
      </Container>
    </div>
  )
}

const Index = styled.div`
  width: 40em;
`
const Container = styled.div`
  display: flex;
  justify-content: center;
`

export default TableOfContents
