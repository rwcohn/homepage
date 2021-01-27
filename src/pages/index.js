import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'

const HomeIndex = () => {
  const siteTitle = 'Rob Cohn\'s page'
  const siteDescription = 'Rob Cohn'

  return (
    <Layout>
      <Helmet>
        <title>{siteTitle}</title>
        <meta name="description" content={siteDescription} />        
      </Helmet>

      <div id="main">
        <section id="one">

          <h1>Welcome to Rob Cohn's home page</h1> <br />
          [] I'm currently working as Director of AI at <a href="https://3co.ai">3co </a>. 
          I received my Ph.D. in AI/computer science from the University of Michigan in 2016, advised by <a href="https://web.eecs.umich.edu/~baveja/"> Satinder Singh </a> and <a href="https://durfee.engin.umich.edu/"> Edmund Durfee </a>.    <br />
          <br />
          <p>I'm always interested in working on challenging AI and machine learning problems, especially those relating to operations in industry.
            
            Please contact me if you would like to discuss potential collaboration. To get an idea of the kind of work
            I've done recently, take a look at my <a href="projects">past project summaries.</a></p>
            
          <ul className="labeled-icons">  
          <li>
          <h3 className="icon fa-envelope-o">
            <span className="label">Email</span>
          </h3>
          robbcohn@gmail.com
          </li>
          </ul>

        </section>

       

        
      </div>
    </Layout>
  )
}

export default HomeIndex
