import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"

const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}

const paragraphStyles = {
  marginBottom: 48,
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}

const NotFoundPage = () => {
  return (
    <Layout>

      <mai className="error-page">
        <section>
          <h1>404</h1>
          <h3>Page not found</h3>
          <p><Link to='/'>Go back to home</Link></p>
        </section>
      </mai>
    </Layout>
  )
}

export default NotFoundPage

export const Head = () => <title>Not found</title>
