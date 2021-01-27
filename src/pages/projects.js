import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import chairbase from '../assets/images/chair_base.png'
import bplantbase from '../assets/images/bplant_base.png'
import chair0 from '../assets/images/chair_0.png'
import chair1 from '../assets/images/chair_1.png'
import bplant0 from '../assets/images/bplant_0.png'
import bplant1 from '../assets/images/bplant_1.png'
import bplant2 from '../assets/images/bplant_2.png'

export default function Projects() {

    const siteTitle = 'Rob Cohn\'s page'
    const siteDescription = 'Rob Cohn'

  return (
    <Layout>

      <Helmet>
        <title>{siteTitle}</title>
        <meta name="description" content={siteDescription} />        
      </Helmet>

      <div id="main">
        

        <h1>Some Past Projects</h1>
        <hr />
            
        <h2>Autonomous Robotic 3D Scanning for Photorealistic Models of Objects</h2>

        
        <div className="image left">
        <img src={chairbase} className = "left"/>     
        </div>
        <br /><br /> 
        In the context of 3D object scanning, the goal is to measure a 
        3D object like the brown chair to the left with a physical scanning device, 
        and then process the data collected to construct a model of the object: an asset
        which can be used in a variety of digital media such as movies, games, or online shopping interfaces.
        <br/>
        
        <br />
        
        
        <div className="image right">
        <img src={chair0} className = "right"/>     
        </div>        
        The first step of this process is to collect data about the object from all necessary perspectives, which might produce
        a pointcloud like that shown on the right.  
        

        
        This is currently done with hand-held scanning devices,
        making the process labor-intensive and time-consuming, which limits the number of
        objects companies can scan. <br/><br/>
        I'm currently working with 3co on developing an autonomous robotic solution
        that will offer a way to obtain photorealistic 3D scans of physical objects at the push of a button.
    

        
        
        
{/*         
        <div className="image left">
        <img src={chair1} width="60%" className = "left"/>     
        </div> */}
        
        <div className="image left">
        <img src={chair1} className = "left"/>     
        </div> 
        <br /><br />
        For those interested, I dive into a little more detail about just the surface reconstruction
        part of the problem <a href="surfacereconstruction">here</a>. That is, given a set of range scans in the form of point clouds representing 
        different views of the object, how that can all be neatly integrated into a single coherent mesh like the one on the left.

        <br />        
        <br />
        <br />
        <br />
        <br />
        
        <hr />

        <h2>Detecting Mines in the Ocean</h2>

        While working with <a href="http://e-cortex.com">e-Cortex</a>, I had the pleasure of working alongside computer scientists and cognitive computational 
        neuroscientists, and together delving into the problem of detecting explosive ocean mines in the ocean, using
        video and sonar data collected by Archerfish: unmanned submarines used to find and
        destroy sea mines. 
        
        <br /><br />
        At the time, a human operator would need to remotely watch the video and sonar feed and guide
        the archerfish to sweep areas for mines, and ultimately decide when to pull the trigger
        to destroy a visually confirmed mine. Our task was to automate the mine detection process. In order to do this,
        we were given several dozen sets of sonar/video feed sequences, each consisting of several minutes of
        mine-seeking until a mine was eventually spotted. After creating training data by assigning mine/no mine labels to the entire dataset, it was time to train some models.

        <br /><br />
        We expected that a simple image classification approach would suffice for the 
        video data, since upon visual inspection of the video data the mines were fairly easy to discern with the human eye. 
        Our approach was to utilize the image representations learned by Inception [1], a CNN that had been trained for classifcation on a 
        large natural image dataset, by retraining it on our mine sweeping video data. As expected,
        we achieved accuracy ratings in the upper 90s. 

        <br /><br />
        However, mines were only visible up close in the video data. To spot mines from farther away, 
        the sonar data would need to be utilized. When we tried employing the same strategy as with the video data,
        the network performed about as well as a random classification strategy. It was essentially a garbage-in-garbage-out situation. So,
        the key to achieving accurate results turned out to be two preprocessing steps unique to this domain.
        
        <br /><br />
        First, instead of presenting the sonar images in polar coordinates to the network, 
        we transformed them to cartesian space, which allows the convolutional structures and features captured by the network
        to operate on images more closely resembling the natural images it was pre-trained on.  
        <br /><br />
        Second, we utilized pose information of the submarine to align sequences of sonar images
        instead of looking at them in isolation. By doing this, we were able to drastically reduce the 
        noise present in the sonar data.
        <br />
        <br />
        Taken together, these two preprocessing steps allowed us to train the network to achieve accuracy in the low 90s for the sonar
        data.

        <br />
        <br />
        <h2>References</h2>
        [1] C. Szegedy, W. Liu, Y. Jia, P. Sermanet, S. Reed, D. Anguelov, D. Erhan, V. Vanhoucke, and
A. Rabinovich. Going deeper with convolutions. <i>CVPR,</i> 2015.
        <hr />

        


        
        {/* <h2>Designing Intelligently Inquisitive Agents</h2>

        
        <hr /> */}

      

      </div>
    </Layout>
  )
}