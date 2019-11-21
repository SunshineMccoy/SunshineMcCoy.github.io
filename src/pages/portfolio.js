import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import styled from "styled-components"

const Section = styled.section`
  border-bottom: 2px dashed black;
  max-width: ${rhythm(24)};
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 5vh
`

class Portfolio extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Portfolio">
          <h1>Web Development Portfolio</h1>
          <Section>
            <h2>React App Projects</h2>
            <h3><Link to={'/calculator'} style={{ boxShadow: `none` }}>React Calculator</Link></h3>
            <p>This is a calculator project done in React for the freeCodeCamp curriculum. I built it from scratch and recently updated it with gatsby and 
              styled components to fit in with this site.</p>
            <h3><a href="https://codepen.io/SunshineMcCoy/full/dLZbqm">Pomodoro Clock</a></h3>
            <p>This is a timer app built for use with the pomodoro method with customizable session and break lengths. This project was also built for the freeCodeCamp curriculum</p>
            <h3><a href="https://codepen.io/SunshineMcCoy/full/XQJOMY">Markdown Viewer</a></h3>
            <p>This is an app for viewing markdown text rendered in html that was also built for the freeCodeCamp curriculum.</p>
          </Section>
          <Section>
            <h2>D3.js Data Visualization Projects</h2>
            <h3><a href="https://codepen.io/SunshineMcCoy/full/bPWKqP">Video Game Tree Map</a></h3>
            <p>This is a tree map data visualization showing most the most popular video games by platform.</p>
            <h3><a href="https://codepen.io/SunshineMcCoy/full/MMJzYX">USA Education Chloropleth Map</a></h3>
            <p>This is a chloropleth map visualization showing counties across america by educational attainment.</p>
            <h3><a href="https://codepen.io/SunshineMcCoy/full/jjMzrX">Heat Map of Global Temperatures</a></h3>
            <p>This is a heat map showing global temperatures by month from 1753 to 2015.</p>
          </Section>
          <Section>
            <h2>Back End API Projects</h2>
            <h3><a href="https://glitch.com/~rattle-toaster">File Metadata Microservice Project</a></h3>
            <p>This project allows you to upload a file and a node express server returns the name and filetype of the upload.</p>
            <h3><a href="https://glitch.com/~perpetual-scourge-2">URL Shortener Microservice</a></h3>
            <p>This project allows you to enter a url and a node express server returns a shortened url, which is logged in a MongoDB database via Mongoose.
              when you enter the shortened url, the server queries the database and redirects you to the original site.
            </p>
            <h3><a href="https://glitch.com/~purrfect-suede">Exercise Tracker Microservice</a></h3>
            <p>This project allows you to create a username and log exercises, which the server stores in a MongoDB database via Mongoose and returns to you upon later visits.</p>
          </Section>
        </SEO>

      </Layout>
    )
  }
}

export default Portfolio

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`