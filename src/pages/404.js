import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

const NotFoundPage = () => (
  <Layout>
    <div id="main">
      <h1>Error: page does not exist!</h1>
      <p>Nothing has been found here. Which is something. </p>
    </div>
  </Layout>
)

export default NotFoundPage
