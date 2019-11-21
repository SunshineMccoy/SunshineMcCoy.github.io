import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import resume from "./mccoy-resume.pdf"

import { rhythm } from "../utils/typography"

const Container = styled.div`
  background-color: #ffffcc;
  min-height: 100vh
`
const H1 = styled.h1`
  margin-bottom: ${rhythm(1.5)};
  margin-top: 0px;
  background-color: #66ffff;
  position: fixed;
  z-index: 2;
  width: 100%;

  @media (min-width: 768px) {
    font-size: 64px
  }
`

const Main = styled.main`
  max-width: ${rhythm(36)}; 
  margin-left: auto;
  margin-right: auto;
  padding-top: ${rhythm(3)};

  @media (min-width: 768px) {
    padding-top: ${rhythm(5)};
  }
  
`

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <H1>
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link> 
          <span> | </span>
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`./portfolio`}
          >
            {`Portfolio  `}
          </Link> 
          <a
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            href={resume}
          >
            {`Resume  `}
          </a> 
        </H1>
      )
    } else {
      header = (
        <h3
          style={{
            fontFamily: `Montserrat, sans-serif`,
            marginTop: 0,
            backgroundColor: `#66ffff`,
            position: `fixed`,
            width: `100%`
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
          <span> | </span>
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/portfolio`}
          >
            {`Portfolio  `}
          </Link> 
          <a
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            href={resume}
            >
            {`Resume  `}
          </a> 
        </h3>
      )
    }
    return (
      <Container
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
         
        }}
      >
        <header>{header}</header>
        <Main >{children}</Main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </Container>
    )
  }
}

export default Layout
