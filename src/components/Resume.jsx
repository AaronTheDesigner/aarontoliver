import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import smile from '../img/anismile.png';

import Education from './Education';
import Experience from './Experience';
import Skills from './Skills';

class Resume extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Cell col={4} className="resume" >
                        <div style={{ textAlign: 'center' }} >
                            <img src={smile}
                                alt="avatar"
                                style={{ height: '200px' }}
                            />
                        </div>
                        <h2 style={{ paddingTop: '2rem' }}>Aaron Toliver</h2>
                        <h4 style={{ color: 'grey' }}>Web Developer</h4>
                        <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
                        <p>An imaginative web developer and a graduate of UNCC's Coding Bootcamp seeking full time employment. As a dedicated coder and a lifetime learner, I am educated in several front-end and back-end languages and technologies. These include HTML5, CSS3, JavaScript, MongoDB, SQL, Node, Express, and Git. My strongest language is JavaScript, and my favorite libraries are React, Redux, and Axios, with an emerging interest in GraphQL and Socket.io. Due to my career history in customer service, I have extensive communication and leadership skills.</p>
                        <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
                        <h5>Address</h5>
                        <p>642 Silversmith Ln</p>
                        <h5>Phone</h5>
                        <p>(980) 333-5498</p>
                        <h5>Email</h5>
                        <p>aaronaugustine85@gmail.com</p>
                        <h5>Web</h5>
                        <p>aarontoliver.com</p>
                        <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />

                    </Cell>
                    <Cell col={8} className="resume-right-col">
                        <h2>Education</h2>
                        <Education
                            gradYear='2017'
                            schoolName='University of North Carolina Charlotte'
                            schoolDescription='Acquire and apply knowledge of current and emerging coding and web design practices, to include web application concepts, design principles and layout strategies, and application development methodologies. Utilize several design and information management systems and support components; strong familiarity with HTML5, CSS3, and modern front-end libraries and frameworks.'
                        />
                        <hr style={{ borderTop: '3px solid #e22947' }} />
                        <h2>Experience</h2>
                        <Experience
                            startYear='2017'
                            endYear="current"
                            jobName="Panera Bread Ballentyne"
                            jobDescription="Champion the customer experience as the first point of contact for a busy café location. Greet and engage guests, take orders, and manage cash and credit transaction. Efficiently transition from guest to guest while maintaining a high level of service and accuracy."
                        />
                        <Experience
                            startYear='2013'
                            endYear="2017"
                            jobName="Planet Ballroom of Lake Norman"
                            jobDescription="Dance Instructor and Coach for new and existing clients. Introduced singles, couples, and pre-wedding clients to ballroom and Latin Dance. Managed and hosted weekly dance parties, sold dance lessons, and encouraged participation and attendance at Show dances and Dance sport Championships."
                        />
                        <Experience
                            startYear='2015'
                            endYear="2017"
                            jobName="Planet Ballroom of Lake Wylie"
                            jobDescription="Leveraged existing skills and experience as an Instructor and Coach to grow the business by increasing sales and new customer engagement. Developed a solid foundation in customer service and support while assisting in the operational management of the facility."
                        />
                        <hr style={{ borderTop: '3px solid #e22947' }} />
                        <h2>Skills</h2>
                        <Skills
                            skill='Javascript - 2yrs'
                            progress={86}
                            description="Can build small fullstack applications using a variety of javascript patterns and modular code. Working on algorithms and Computer Science concepts such as Big O Notation and Recursion."
                        />
                        <Skills
                            skill='Python - 1yr'
                            progress={60}
                            description="Can build small fullstack applications using the Django Framework. Working on python skills independent of any framework."
                        />
                        <Skills
                            skill='HTML - 2yrs'
                            progress={90}
                            description="Can build out full pages using HTML using the standard variety of tags and other inputs. Wroking on updating HTML5 knowledge and use."
                        />
                        <Skills
                            skill='CSS - 2yrs'
                            progress={90}
                            description="Can style a responsive website from scratch independant of css libraries and templates. Working on Sass."
                        />
                        <Skills
                            skill='Nodejs - 1.5yrs'
                            progress={75}
                            description="Can build a server, create routes, and facilitate modular development using nodejs and express. Can also build authentication."
                        />
                    </Cell>

                </Grid>
            </div>
        )
    }
}

export default Resume;