import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return  <>

 <nav class="navbar navbar-expand-sm bg-black ">
    <div class="container">
    <Link class="navbar-brand text-white" to="/">Ali |Front-end Developer </Link>
    <button class="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
      aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="collapsibleNavId">
      <ul class="navbar-nav ms-auto mt-2 mt-lg-0">
        <li class="nav-item">
          <Link class="nav-link active text-white" to="project" aria-current="page">project <span class="visually-hidden">(current)</span></Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active text-white" to="about" aria-current="page">About <span class="visually-hidden">(current)</span></Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active text-white" to="contact" aria-current="page">Contact <span class="visually-hidden">(current)</span></Link>
        </li>
      </ul>

    </div>
   </div>
 </nav>
 

  
  </>
}
