import React from 'react'
import { Link, animateScroll as scroll } from 'react-scroll'

export default function Navbar() {
  return <>

    <nav className="navbar navbar-expand-sm bg-black ">
      <div className="container">
        <Link className="navbar-brand text-white fs-4" to="/" >Ali  |  Full Stack Developer</Link>
        <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
          aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav ms-auto mt-2 mt-lg-0 py-3">
            <li className="nav-item">
              <Link className="nav-link active text-white mx-3" to='Work' smooth={true} duration={500} aria-current="page">Projects <span className="visually-hidden">(current)</span></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active text-white mx-3" to="overView" smooth={true} duration={500} aria-current="page">About <span className="visually-hidden">(current)</span></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active text-white mx-3" to='Contact' smooth={true} duration={500} aria-current="page">Contact <span className="visually-hidden">(current)</span></Link>
            </li>
          </ul>

        </div>
      </div>
    </nav>



  </>
}
