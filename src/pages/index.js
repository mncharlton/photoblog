import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"

class IndexPage extends React.Component {
  render() {
    const siteTitle = "Matt takes photos"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[`blog`, `gatsby`, `javascript`, `react`, `photos`]}
        />
        <h1>
          Hey{" "}
          <span role="img" aria-label="wave emoji">
            👋
          </span>
        </h1>
        <p>Welcome to my photo blog!  📷</p>
        <p>
          I'm currently learning photography following the fantastic (and free!)
          <a href='https://ayearwithmycamera.com/'> A Year With My Camera </a>
          course and I'll be using this blog to make notes as I go, as well as
          posting my a selection of my photos, hopefully there'll be a
          noticeable improvement as I learn!
        </p>
        <Link to="/blog/">
          <Button marginTop="35px">Go to Blog</Button>
        </Link>
      </Layout>
    )
  }
}

export default IndexPage
