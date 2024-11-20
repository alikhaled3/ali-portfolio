import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export default function Project() {
  return  <>

 <section id='Project' className='p-5'>
  <h6 className='text-center'>What I have been professional at so far</h6>
  <h2 className='text-center fs-1 wight'> Experiences.</h2>
  <VerticalTimeline className=''>
  <VerticalTimelineElement
    className="vertical-timeline-element--work "
    contentStyle={{ background: 'rgb(0, 0, 0)', color: '#fff' ,boxShadow:' 0 4px 8px 0 rgba(116, 116, 116, 0.2), 0 6px 20px 0 rgba(139, 139, 139, 0.19)',    borderBottom:'5px solid rgba(255, 255, 255, 0.87) '}}
    contentArrowStyle={{ borderRight: '7px solid  rgb(100, 100, 100)' }}
    iconStyle={{ background: 'rgb(0, 0, 0)', color: '#fff' }}
    >
      <h2 className='fs-2 mb-3 wight'>Frontend Developer</h2>
      <ul>
        <li className='mt-2'>Exquisite in HTML, CSS, and JavaScript</li>
        <li className='mt-2'>Have a Knowledge of responsive design and cross-browser compatibility</li>
        <li className='mt-2'>Understanding of Git for version control</li>
        <li className='mt-2'>Have an experience with API integration and async JavaScript</li>
        <li className='mt-2'>Understanding SEO principles</li>
        <li className='mt-2'>Understanding Progressive Web Apps and their development</li>
      </ul>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(0, 0, 0)', color: '#fff' ,boxShadow:' 0 4px 8px 0 rgba(116, 116, 116, 0.2), 0 6px 20px 0 rgba(139, 139, 139, 0.19)',    borderBottom:'5px solid rgba(255, 255, 255, 0.87) '}}
    contentArrowStyle={{ borderRight: '7px solid  rgb(100, 100, 100)' }}
    iconStyle={{ background: 'rgb(0, 0, 0)', color: '#fff' }}
  >
      <h2 className='fs-2 mb-2 wight'>React.js Developer</h2>
      <ul>
        <li className='mt-2'>Building and sustaining web-based software using React.js and associated technologies.</li>
        <li className='mt-2'>Executing responsive layouts and guaranteeing interoperability across various browsers.</li>
        <li className='mt-2'>Taking part in code assessments and offering constructive criticism to other developers.</li>
      </ul>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(0, 0, 0)', color: '#fff' ,boxShadow:' 0 4px 8px 0 rgba(116, 116, 116, 0.2), 0 6px 20px 0 rgba(139, 139, 139, 0.19)',    borderBottom:'5px solid rgba(255, 255, 255, 0.87) '}}
    contentArrowStyle={{ borderRight: '7px solid  rgb(100, 100, 100)' }}
    iconStyle={{ background: 'rgb(0, 0, 0)', color: '#fff' }}
  >
      <h2 className='fs-2 mb-2 wight'>Back-end</h2>
      <ul>
        <li className='mt-2'>Node.js & Express.js: Built robust RESTful APIs with middleware for data validation, error handling, and security best practices.</li>
        <li className='mt-2'>Authentication & Authorization: Implemented secure user management systems using JWT, OAuth2, and session-based authentication.</li>
        <li className='mt-2'>Database Management: MongoDB, Mongoose,  MySQL</li>

      </ul>
  </VerticalTimelineElement>
 
  </VerticalTimeline>
  </section>
  </>
}
