import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/Layout"

import "./blogTemplate.css"

export default function Template({ data }) {
  const post = data.markdownRemark
  const { title, author, date } = post.frontmatter

  return (
    <Layout>
      <div className="blogTemplate">
        <Link to="/blog">Back to blogs</Link>
        <h1 className="blogTemplate-title">{title}</h1>
        <p className="blogTemplate-posted-by">
          Posted by {author} on {date}
        </p>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  )
}

export const postQuery = graphql`
  query BlogPost($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      frontmatter {
        author
        date
        title
        path
      }
      html
    }
  }
`
