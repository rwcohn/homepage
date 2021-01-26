import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import thesispdf from '../assets/docs/rwcohn_thesis.pdf'
import aistats2014pdf from '../assets/docs/aistats2014.pdf'
import msdm2012pdf from '../assets/docs/msdm2012.pdf'
import aaai2011pdf from '../assets/docs/aaai2011.pdf'
import iat2010pdf from '../assets/docs/iat2010.pdf'
import dimva2008pdf from '../assets/docs/dimva2008.pdf'



export default function Publications() {


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

        <h1> Publications </h1>

        <ul>
          <li>
              <a href={thesispdf} download>[pdf]  </a>Maximizing Expected Value of Information in Decision Problems by Querying on a Wish-to-Know Basis. <strong>(PhD Thesis)</strong>, University of Michigan, 2016.            
              <br/> <i>By Robert Cohn.</i>              
          </li>    
          
          <li>
              <a href={aistats2014pdf} download>[pdf]  </a>Characterizing EVOI-Sufficient k-Response Query Sets in Decision Problems. <strong>(AISTATS 2014.)</strong>
              <br/> <i>By Robert Cohn, Edmund Durfee, and Satinder Singh.</i>
          </li>
          <li>
              <a href={msdm2012pdf} download>[pdf]  </a>Planning Delayed-Response Queries and Transient Policites under Reward Uncertainty. <strong>(MSDM 2012)</strong>
              <br/> <i>By Robert Cohn, Edmund Durfee, and Satinder Singh.</i>
          </li>
          <li>
              <a href={aaai2011pdf} download>[pdf]  </a>Comparing Action-Query Strategies in Semi-Autonomous Agents. <strong>(AAAI 2011)</strong>
              <br/> <i>By Robert Cohn, Edmund Durfee, and Satinder Singh.</i>
          </li>
          <li>
              <a href={iat2010pdf} download>[pdf]  </a>Selecting Operator Queries using Expected Myopic Gain. <strong>(IAT 2010)</strong>
              <br/> <i>By Robert Cohn, Michael Maxim, Edmund Durfee, and Satinder Singh.</i>
          </li>
          <li>
              <a href={dimva2008pdf} download>[pdf]  </a>VeriKey: A Dynamic Certificate Verification System for Public Key Exchanges. <strong>(DIMVA 2008)</strong>
              <br/> <i>By Brett Stone-Gross, David Sigal, Rob Cohn, John Morse, Keven Almeroth, and Christopher Kruegel.</i>
          </li>
        </ul>   

          
         
        </section>

       

        
      </div>
    </Layout>
  )
}

