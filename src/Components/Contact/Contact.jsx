import React from 'react'


export default function Contact() {
  return  <>
  <section id='Contact'>
<div className="container   py-5">

  <div className="row   ps-5">
      <h2 className='mb-4 fs-1 text-center'>Contact Info.</h2>

      <div className="col-md-6">
          <form action="">
        <label for="" class="form-label">name</label>
        <input type="name" class="form-control" name="" id=""  placeholder=""/>
        
        <label for="" class="form-label">Email</label>
        <input type="email" class="form-control" name="" id=""  placeholder="abc@mail.com"/>
        <label for="" class="form-label">phone</label>
        <input type="tel" class="form-control" name="" id=""  />
        
        <label for="" class="form-label">message</label>
        <textarea class="form-control" name="" id="" rows="3"></textarea>
        
        <button className='btn btn-dark p-3 px-5 my-4'>Sent</button>
  </form>
      </div>
    <div className="col-md-6 d-flex justify-content-center align-items-center mb-5">
      <ul>
        <h3>direct contact</h3>
      <h5 className='mt-3 d-flex'><i class="fa-solid fa-envelope me-2"></i>alikhaledomar8@gmail.com</h5>
      <h5 className='mt-3 '><i class="fa-solid fa-phone"></i> 01068380630</h5>
      <h3 className='mt-4'>Social Media</h3>  
      <div className="d-flex mt-3 justify-content-around">
        <a href="https://github.com/alikhaled3">

      <h5 className='text-center '><i class="fa-brands fa-github"></i> </h5>
        </a>
      <a href="https://www.linkedin.com/in/ali-khaled-29488a276">

      <h5 className='text-center '><a  class="fa-brands fa-linkedin"></a></h5>
      </a>
      <h5 className='text-center '><i class="fa-brands fa-facebook"> </i> </h5>
      <h5 className='text-center '><i class="fa-brands fa-instagram"></i></h5>
      </div>
      </ul>
    </div>



  </div>
</div>


  </section>
  
            {/* <div className="col-md-6">
          <div className="d-flex justify-content-center align-items-center">
  
              <div className="mt-5">
                <h3>contact info</h3>
              </div>
  
          </div>
        </div> */}



 
  </>
}
