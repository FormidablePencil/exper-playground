import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { routesAndTitle } from '../Routes'

function TableOfContents() {
  return (
    <div>
      <Container>
        <Index>
          {routesAndTitle.map((item, index) => {
            if (index !== 0) {
              return (
                <Link to={item[0]}><p>{item[1]}</p></Link>
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
