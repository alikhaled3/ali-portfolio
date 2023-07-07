import React from 'react'
import yummy from '../../image/yummy (2).png'
import cinmaScop from '../../image/cinmaScope.png'
import freshcart from '../../image/freshcart.png'

export default function Work() {
  return  <>

 <section id='Work'>
  <div className="container text-white ">
      <h2 className='pt-5 ms-5 fs-1'>Projects.</h2>
      <p className='w-50 pt-2 ms-5 fs-5' >Following projects showcases my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos in it. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.</p>

    <div className="row gx-4 p-3">
      <div className="col-md-4  mt-5">
        
<div className="p-3 shadoww">
        <img src={freshcart} alt=""  className='w-100 mb-2'/>
        <div className="d-flex justify-content-between">
        <h4>Fresh Cart </h4>
     <a  href=" https://alikhaled3.github.io/freshCart/" target="_blank" rel="noopener noreferrer"> <i  className="text-decoration-none text-white fa-brands fa-github py-2 fs-3"></i></a>
        </div>
        <p >Our e-commerce store web app provides you with a seamless and convenient online shopping experience. With a wide range of products and categories to choose from, you can easily browse, compare, and purchase items from the comfort of your own home.</p>
       <div className='d-flex'>
            <h5 className='color507'>#React</h5>
            <h5 className='ms-2 color506'>#Validation</h5>
            <h5 className='ms-2 color509'>#Api</h5>
            <h5 className='ms-2 color505'>#BS</h5>
            <h5 className='ms-2 color508'>#context</h5>
        </div> 
</div>
      </div>
      <div className="col-md-4   mt-5">

<div className="p-4 shadoww ">
        <img src={cinmaScop} alt=""  className='w-100 mb-2'/>
          <div className="d-flex justify-content-between">
                  <h4>cinma Scope</h4>
                 <a href="https://alikhaled3.github.io/cinma/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-github py-2 fs-3"></i></a> 
          </div>
        <p>A film web application with API allows users to access movie information, ratings, and reviews from a variety of sources.</p>
        <div className='d-flex mt-3 justify-content-around mt-5 '>
            <h5 className='color507'>#React</h5>
            <h5 className='ms-2 color506'>#Validation</h5>
            <h5 className='ms-2 color509'>#Api</h5>
            <h5 className='ms-2 color505'>#BS</h5>
        </div> 
</div>
      </div>
      <div className="col-md-4  mt-5">
<div className="p-4 shadoww">
        <img src={yummy} alt=""  className='w-100 mb-2'/>
        <div className=" d-flex justify-content-between">
              <h4>yummy food</h4>
              <a href=" https://alikhaled3.github.io/yummy/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-github py-2 fs-3"></i></a> 
        </div>
        <p>A food website with API allows users to search, browse, and access recipes and food-related information efficiently and conveniently The API enables easy integration of third-party services, allowing for a seamless user experience.</p>
        <div className='d-flex justify-content-around'>
        <h5 className='ms-2 color508'>#JS</h5>


        <h5 className='ms-2 color506'>#JQuery</h5>
        <h5 className='ms-2 color509'>#Api</h5>
        <h5 className='ms-2 color505'>#BS</h5>
        </div> 
     </div>
      </div>
    </div> 
  </div>
 </section>
 
  
  </>
}
