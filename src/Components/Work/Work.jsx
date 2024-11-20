import React from 'react'
import yummy from '../../image/yummy (2).png'
import cinmaScop from '../../image/cinmaScope.png'
import freshcart from '../../image/freshcart.png'
import gameReviews from '../../image/game.png'
import wetherApp from '../../image/wether.png'

export default function Work() {
  return <>

    <section id='Work'>
      <div className="container text-white ">
        <h2 className='pt-5 ms-5 fs-1'>Projects.</h2>
        <p className='w-50 pt-2 ms-5 fs-5' >Following projects showcases my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos in it. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.</p>

        <div className="row gx-4 p-3">
          <div className="col-md-4  mt-5">

            <div className="p-3 shadoww">
              <a href="https://alikhaled3.github.io/freshcart-v1/#/login"  target="_blank">

              <img  src={freshcart} alt="" className='w-100 mb-2' />
              </a>
              <div className="d-flex justify-content-between">
                <h4 className='px-2 py-2'>Fresh Cart </h4>
                <a  href="https://github.com/alikhaled3/freshcart-v1" rel="noopener noreferrer"> <i className="text-decoration-none text-white fa-brands fa-github py-2 fs-3"></i></a>
              </div>
              <p className='text-muted py-3 px-2'>Our e-commerce store web app provides you with a seamless and convenient online shopping experience. With a wide range of products and categories to choose from, you can easily browse, compare, and purchase items from the comfort of your own home.</p>
                <div className='d-flex justify-content-around'>
                  <h5 className='ms-1 color507 fs-6 mx-2  '>#React</h5>
                  <h5 className='ms-1 colorNode fs-6 mx-2' >#Node</h5>
                  <h5 className='ms-1 colorMNGO  fs-6 mx-2'>#MongoDB</h5>
                </div>  
            </div>
          </div>
          <div className="col-md-4   mt-5">

            <div className="p-4 shadoww ">
              <a href="https://alikhaled3.github.io/cinma/" target="_blank">  
                <img src={cinmaScop} alt="" className='w-100 mb-2' />
               </a>

              <div className="d-flex justify-content-between">
                <h4>cinma Scope</h4>
                <a href="https://github.com/alikhaled3/cinma" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-github py-2 fs-3"></i></a>
              </div>
              <p className='text-muted'>A film web application with API allows users to access movie information, ratings, and reviews from a variety of sources.</p>
              <div className='d-flex mt-3 justify-content-around mt-5 '>
                <h5 className='color507'>#React</h5>
                <h5 className='ms-1 color509'>#Api</h5>
                <h5 className='ms-1 color505'>#BS</h5>
              </div>
            </div>
          </div>
          <div className="col-md-4  mt-5">
            <div className="p-4 shadoww">
              <a href=" https://alikhaled3.github.io/yummy/" target="_blank">
              <img src={yummy} alt="" className='w-100 mb-2' />
              </a>
              <div className=" d-flex justify-content-between">
                <h4>yummy food</h4>
                <a  href='https://github.com/alikhaled3/yummy' target='_blank' rel="noopener noreferrer"><i className="fa-brands fa-github py-2 fs-3"></i></a>
              </div>
              <p className='text-muted'>A food website with API allows users to search, browse, and access recipes and food-related information efficiently and conveniently The API enables easy integration of third-party services, allowing for a seamless user experience.</p>
              <div className='d-flex justify-content-around'>
                <h5 className='ms-2 color508'>#JS</h5>
                <h5 className='ms-2 color506'>#JQuery</h5>
                <h5 className='ms-2 color505'>#BS</h5>
              </div>
            </div>
          </div>
          <div className="col-md-4  mt-5">

        <div className="p-3 shadoww">
          <a href="https://alikhaled3.github.io/gameReviews/" target="_blank">

          <img src={gameReviews} alt="" className='w-100 mb-2' />
          </a>
          <div className="d-flex justify-content-between">
            <h4 className='px-2 py-2'>Game reviews</h4>
            <a href="https://github.com/alikhaled3/gameReviews/" target="_blank" rel="noopener noreferrer"> <i className="text-decoration-none text-white fa-brands fa-github py-2 fs-3"></i></a>
          </div>
          <p className='text-muted py-3 px-2'>A website providing detailed reviews, news, and features on video games, catering to gamers, enthusiasts, and industry professionals, with user-generated content and community building features.</p>
          <div className='d-flex justify-content-around' >
            <h5 className='ms-2 color508 fs-6 mx-2  '>#JS</h5>
            <h5 className='ms-2 color509 fs-6 mx-2' >#Api</h5>
            <h5 className='ms-2 color505  fs-6 mx-2'>#BS</h5>
          </div>
        </div>
        </div>
          <div className="col-md-4  mt-5">

        <div className="p-3 shadoww">
          <a href="https://alikhaled3.github.io/weatherApp/#" target="_blank" >

          <img src={wetherApp} alt="" className='w-100 mb-2' />
          </a>
          <div className="d-flex justify-content-between">
            <h4 className='px-2 py-2'>Weather app</h4>
            <a href="https://github.com/alikhaled3/weatherApp" target="_blank" rel="noopener noreferrer"> <i className="text-decoration-none text-white fa-brands fa-github py-2 fs-3"></i></a>
          </div>
          <p className='text-muted py-3 px-2'>A website providing current weather information and forecasts for specific locations, using data from meteorological agencies and sensors.</p>
          <div className='d-flex justify-content-around'>
            <h5 className='ms-2 color508 fs-6 mx-2  '>#JS</h5>
            <h5 className='ms-2 color509 fs-6 mx-2' >#Api</h5>
            <h5 className='ms-2 color505  fs-6 mx-2'>#BS</h5>
          </div>
        </div>
        </div>
        </div>
      </div>
    </section>


  </>
}
