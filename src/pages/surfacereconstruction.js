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
import bplant_overlap from '../assets/images/bplant_overlap.png'

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
        
        <section id="one">
        <h1>Surface Reconstruction for Point Cloud Sequences</h1>
        
        <div className="image left">
        <img src={bplantbase} width="30%" className = "left"/>     
        </div>

        Consider the problem of constructing a 3D model of this banana plant from a set of point clouds collected
        by a range scanner from various view points. Ideally, we would like to construct a watertight mesh, whose 
        geometry, texture, and colors are faithful to the real thing. 
        
        <br/><br/>
        Here, I'm going to talk about just the geometry
        part, which is referred to as <i>surface reconstruction</i>, and is a well-studied and arguably "solved" problem in the literature [1].
        <br/><br/>
        Meshing individual scans in the sequence is easy, since the perspective used to capture each point cloud 
        naturally imposes a lattice structure, which can be directly iterated through, forming triangles when the maximum
        side length is under some threshold.

        </section>

        <section id="two">
        The real challenge arises when attempting to merge each individually meshed scan into a single mesh, as there will be
        overlap in regions that are captured by multiple scans, which must be resolved for the model to be commercially usable:
        <br /><br />

        <div className="image center">
             <img src={bplant_overlap} width="80%"></img>
             </div>
        <br /><br />

        The literature offers two main ways to tackle this issue. The first is to actually ignore the
        lattice structure described above, and perform meshing on the entire point cloud containing all measured points
        directly. While this does throw away information, in some instances it can work well. In particular, variants of Poisson reconstruction [2,3]
        can achieve extremely accurate results in cases <i>where all surfaces of the object are observed</i>. In cases of completely absent data for certain regions,
        such as the underside of the leaves in a top-down view of our banana plant, Poisson reconstruction will fail in rather disturbing fashion:
        <br />
        <br />        
        <div className="image center">
             <img src={bplant2} width="80%"></img>
             </div>
        <br /><br />

        These phantom "bubbles" are the result of Poisson reconstruction's (elegant) treatment of the problem as the optimization of a watertight surface whose surface was sampled
        to produce the scanned point clouds. <br/><br />

        The second family of methods in the literature for handling sets of point clouds collected from differing perspectives treats the problem more directly.
        The <i>Zippering</i> approach of Turk et. al. [4] would be an ideal solution, except computationally it does not scale well to the higher resolutions 3co works with. To 
        address this issue, Meerits et. al. [5] have reformulated the algorithm to be GPU-friendly, potentially making it computationally viable to higher resolutions. Unfortunately, their code is
        not publically available for testing, and their results do not appear to construct models at the level of accuracy needed for commercially usable 3D models.

        <br/><br/>
        In the end, the best approach for this setting seems to be <i>VRIP</i>, contributed by Curless et. al.[6]. VRIP utilizes the lattice structure of 
        each scan's observations, but instead of individually meshing scans and then merging them, VRIP iterates across voxels in a volumetric representation of the object in an efficient
        manner that accounts for the knowledge of where free space is given the persective of the scanner across time. An implementation of VRIP with minor extensions called VCG is conveniently included in 
        <a href="meshlab.net"> MeshLab </a>[7], and with a subsequent final step of applying <a href="https://igl.ethz.ch/projects/instant-meshes/">Instant Meshes</a> [8] for compression and clean-up, we get the following quite usable result: <br /><br />



        <div className="image center">
             <img src={bplant1} width="80%"></img>
             </div>

        </section>


           
        


       
    <br /><br />
    <h2> References</h2>
    [1] Matthew Berger, Andrea Tagliasacchi, Lee Seversky, Pierre Alliez, Gael Guennebaud, et al.. A Survey of Surface Reconstruction from Point Clouds. <i>Computer Graphics Forum,</i> 2016.<br/>
    [2] Kazhdan, M., Bolitho, M., Hoppe, H.: Poisson surface reconstruction. <i>Symposium on
Geometry Processing, The Eurographics Association</i>, 2006.<br />
    [3] Kazhdan, M., Hoppe, H.: Screened poisson surface reconstruction. <i>ACM Trans. Gr. (TOG)</i>, 2013. <br />

    [4] Turk, G., Levoy, M.: Zippered polygon meshes from range
images. <i>Proceedings of the 21st Annual Conference on
Computer Graphics and Interactive Techniques,</i> 1994.<br/>
    [5] Meerits, S.; Nozick, V.; Saito, H. Real-time scene
reconstruction and triangle mesh generation using
multiple RGB-D cameras. <i>Journal of Real-Time Image
Processing</i>, 2017. <br/>
    [6] Curless, B., and Levoy, M. A volumetric method
for building complex models from range images. <i>SIGGRAPH Proceedings</i>, 1996. <br/>    
    [7] P. Cignoni, M. Callieri, M. Corsini, M. Dellepiane, F. Ganovelli, G. Ranzuglia
MeshLab: an Open-Source Mesh Processing Tool.
<i> Sixth Eurographics Italian Chapter Conference</i>, 2008. <br/>
    [8] W. Jakob, M. Tarini, D. Panozzo, and O. Sorkine-Hornung.
Instant field-aligned meshes. <i>ACM Transactions on Graphics</i>, Oct. 2015. <br/>

        </div>
    </Layout>
  )
}