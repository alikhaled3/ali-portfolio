import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return  <>

 <nav className="navbar navbar-expand-sm bg-black ">
    <div className="container">
    <Link className="navbar-brand text-white" to="/" >Ali | Front-end Developer </Link>
    <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
      aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="collapsibleNavId">
      <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
        <li className="nav-item">
          <Link className="nav-link active text-white" to='#Contact' aria-current="page">project <span className="visually-hidden">(current)</span></Link>
        </li>
        <li className="nav-item">
          <a className="nav-link active text-white" htmlFor="Work" aria-current="page">About <span className="visually-hidden">(current)</span></a>
        </li>
        <li className="nav-item">
          <Link className="nav-link active text-white" to='Contact' aria-current="page">Contact <span className="visually-hidden">(current)</span></Link>
        </li>
      </ul>

    </div>
   </div>
 </nav>
 

  
  </>
}
