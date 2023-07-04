import React from 'react'
import { Link } from 'react-router-dom';
import Project from '../project/project';
import Work from './../Work/Work';
import Contact from './../Contact/Contact';
import OverView from './../OverView/OverView';

export default function Home() {

  return  <>
  <header className='pcback'> 
  <div className="container">
    <div className="vh-100 d-flex justify-content-start align-items-center pb-5">
      <div className="">
      <h1>Hello Iam Ali </h1>
      <h3>I Develop Arractive, web application </h3>
      </div>
    </div>
  </div>
</header>

<OverView/>
<Project/>
<Work/>
<Contact/>

  </>
}
