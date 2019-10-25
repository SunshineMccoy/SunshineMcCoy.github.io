/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import { rhythm } from "../utils/typography"
import styled from "styled-components"


const Section = styled.section`
  border-bottom: 2px dashed black;
  margin-top: 5vh
`
const Container = styled.div`
  display: flex;
  flex-direction: column; 
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row
  }
`

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/kahiau_photo_cropped.jpg/" }) {
        childImageSharp {
          fixed(width: 400, height: 400) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author
          social {
            twitter
          }
        }
      }
    }
  `)

  const { author} = data.site.siteMetadata
  return (
    <Container >
      <Image
        fixed={data.avatar.childImageSharp.fixed}
        alt={author}
        style={{
          top: `100`,
          marginLeft: `0`,
          marginRight: `5%`,
          marginBottom: 0,
          minWidth: 400,
          borderRadius: `2%`,
          maxWidth: `500px`,
          width: `400px`,
          height: `400px`
        }}
        imgStyle={{
          borderRadius: `2%`,
        }}
      />
      
      <div
        style={{
          display: `flex`,
          marginBottom: rhythm(2.5),
          flexDirection: `column`,
          justifyContent: `center`,
          alignItems: `center`,
        }}
      >
        <Section>
          <h2>Hello World!</h2>
          <h3>Michael McCoy, Full-Stack Web Developer</h3>
          <p>My name is Michael McCoy and I am an aspiring full-stack web developer living in Norfolk, Virginia. 
            I have been learning the MERN stack using the freeCodeCamp curriculum. 
            This website is going to serve as a coding portfolio and homebase to document my coding journey! </p>
        </Section>
        <Section>
          <h3>Contact</h3>
          <p>Please send any emails to mccoymichaeljohn@gmail.com and I'll get back to you ASAP! 
            You can also find me at <a href="https://www.linkedin.com/in/mccoymichaelj/">LinkedIn</a>, <a href="https://twitter.com/mjmcoder">twitter</a>,
             and <a href="https://github.com/SunshineMccoy">github</a>. </p>
        </Section>
    
      </div>
    </Container>

  )
}

export default Bio
