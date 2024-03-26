import React, { Fragment } from 'react'
import { Container } from 'react-bootstrap'
import { useState} from 'react';
import {Button, Col, Row} from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Bill from './Bill';
import "../css/Bill.css"
function CourseDetail  (props) {
    const [semesterValue,setSemesterValue] = useState('');
    const [courseValue,setCourseValue] = useState('')
    const semesterChange = (e)=>{
        setSemesterValue(e.target.value);
    }
    const CourseChange = (e)=>{
        setCourseValue(e.target.value);
    }
    const [showComponent, setShowComponent] = useState(false);

  const toggleComponent = () => {
    setShowComponent(!showComponent);
  };

  const handleButtonClick = () => {
    setShowComponent(true);
  }

  return (
    <Fragment>
        <Container className='p-3'>
            <Row>
            
                <div>
                        <label htmlFor="" className='input-label'>Semesters</label>
                        <Form.Select onChange={semesterChange} value={semesterValue} >
                            <option>Select Semester</option>
                            <option value="1st Year 1st Semester">1st Year 1st Semester</option>
                            <option value="1st Year 2nd Semester">1st Year 2nd Semester</option>
                            <option value="2nd Year 1st Semester">2nd Year 1st Semester</option>
                            <option value="2nd Year 2nd Semester">2nd Year 2nd Semester</option>
                            <option value="3rd year 1st semester">3rd year 1st semester</option>
                            <option value="3rd Year 2nd Semester">3rd Year 2nd Semester</option>
                            <option value="4th Year 1st Semester">4th Year 1st Semester</option>
                            <option value="4th Year 2nd Semester">4th Year 2nd Semester</option>
                            <option value="MSc">MSc</option>
                        </Form.Select>
                    </div>
         
            
                    </Row>
                    <Row>
                        {
                            (semesterValue==="1st Year 1st Semester")&&
                          
                            <Fragment >
                                <Row>
                                <div>
                        <label htmlFor="" className='input-label'>Courses</label>
                        <Form.Select onChange={CourseChange} value={courseValue}  >
                            <option>Select Courses</option>
                            <option value="Viva-Voce (CSE 100)">Viva-Voce (CSE 100)</option>
                            <option value="Mathematics-I (MATH 101)">Mathematics-I (MATH 101)</option>
                            <option value="Communicative English (ENG 103)">Communicative English (ENG 103)</option>
                            <option value="Structured Programming (CSE 105)">Structured Programming (CSE 105)</option>
                            <option value="Structured Programming Laboratory (CSE 106)">Structured Programming Laboratory (CSE 106)</option>
                            <option value="Electrical Circuits (CSE 107)">Electrical Circuits (CSE 107)</option>
                            <option value="Electrical Circuits Laboratory (CSE 108)">Electrical Circuits Laboratory (CSE 108)</option>
                            <option value="Physics (PHY 109)">Physics (PHY 109)</option>
                            <option value="Computer Aided Engineering Drawing Laboratory (URP 112)">Computer Aided Engineering Drawing Laboratory (URP 112)</option>

                        </Form.Select>
                        {
                            (courseValue!=="")&&
                            <Bill/>
                        }
                    </div>
         
                                </Row>
                            </Fragment>
                          
                          
                            

                        }
                        {
                            (semesterValue==="1st Year 2nd Semester")&&
                            
                              <Fragment >
                                  <Row>
                                  <div>
                          <label htmlFor="" className='input-label'>Courses</label>
                          <Form.Select  onChange={CourseChange} value={courseValue}  >
                          <option>Select Courses</option>
                              <option value="Viva-Voce (CSE 150)">Viva-Voce (CSE 150)</option>
                              <option value="Mathematics-II (MATH 151)">Mathematics-II (MATH 151)</option>
                              <option value="Discrete Mathematics-II (CSE 153)">Discrete Mathematics-II (CSE 153)</option>
                              <option value="Data Structures (CSE 155)">Data Structures (CSE 155)</option>
                              <option value="Data Structures Laboratory (CSE 156)">Data Structures Laboratory (CSE 156)</option>
                              <option value="Electronic Device and Circuits-I (CSE 157)">Electronic Device and Circuits-I (CSE 157)</option>
                              <option value="Object Oriented Programming(C++) (CSE 159)">Object Oriented Programming(C++) (CSE 159)</option>
                              <option value="Object Oriented Programming(C++) Laboratory (CSE 160)">Object Oriented Programming(C++) Laboratory (CSE 160)</option>
                              <option value="Technical Writing and Presentation Laboratory (CSE 162)">Technical Writing and Presentation Laboratory (CSE 162)</option>
                          </Form.Select>
                          {
                            (courseValue!=="")&&
                            <Bill/>
                        }
                      </div>
           
                                  </Row>
                              </Fragment>
                            
                            
                        }
                         {
                            (semesterValue==="2nd Year 1st Semester")&&
                            
                              <Fragment >
                                  <Row>
                                  <div>
                          <label htmlFor="" className='input-label'>Courses</label>
                          <Form.Select onChange={CourseChange} value={courseValue}   >
                          <option>Select Courses</option>
                              <option value="Mathematics-III (MATH 201)">Mathematics-III (MATH 201)</option>
                              <option value="Computer Ethics and Cyber Law (CSE-203)">Computer Ethics and Cyber Law (CSE-203)</option>
                              <option value="Numerical Methods (CSE 205)">Numerical Methods (CSE 205)</option>
                              <option value="Numerical Methods Laboratory (CSE 206)">Numerical Methods Laboratory (CSE 206)</option>
                              <option value="Electronic Device and Circuits-II (CSE 207)">Electronic Device and Circuits-II (CSE 207)</option>
                              <option value="Electronic Device and Circuits-II Laboratory (CSE 208)">Electronic Device and Circuits-II Laboratory (CSE 208)</option>
                              <option value="Algorithm-I (CSE 209)">Algorithm-I (CSE 209)</option>
                              <option value="Algorithm-I Laboratory (CSE 210)">Algorithm-I Laboratory (CSE 210)</option>
                              <option value="Object Oriented Programming(JAVA) Laboratory (CSE-212)">Object Oriented Programming(JAVA) Laboratory (CSE-212)</option>

                          </Form.Select>
                          {
                            (courseValue!=="")&&
                            <Bill/>
                        }
                      </div>
           
                                  </Row>
                              </Fragment>
                            
                            
                        }
                         {
                            (semesterValue==="2nd Year 2nd Semester")&&
                            
                              <Fragment >
                                  <Row>
                                  <div>
                          <label htmlFor="" className='input-label'>Courses</label>
                          <Form.Select  onChange={CourseChange} value={courseValue}  >
                          <option>Select Courses</option>
                              <option value="Viva-Voce (CSE 250)">Viva-Voce (CSE 250)</option>
                              <option value="Introduction to Probability and Statistics (STAT 251)">Introduction to Probability and Statistics (STAT 251)</option>
                              <option value="Digital Logic Design (CSE 253)">Digital Logic Design (CSE 253)</option>
                              <option value="Digital Logic Design Laboratory (CSE 254)">Digital Logic Design Laboratory (CSE 254)</option>
                              <option value="Database Systems (CSE 255)">Database Systems (CSE 255)</option>
                              <option value="Database Systems Laboratory (CSE 256)">Database Systems Laboratory (CSE 256)</option>
                              <option value="Algorithm-II (CSE 257)">Algorithm-II (CSE 257)</option>
                              <option value="Algorithm-II Laboratory (CSE 258)">Algorithm-II Laboratory (CSE 258)</option>
                              <option value="Data and Telecommunication (CSE 259)">Data and Telecommunication (CSE 259)</option>
                              <option value="Data and Telecommunication Laboratory (CSE 260)">Data and Telecommunication Laboratory (CSE 260)</option>
                          </Form.Select>
                          {
                            (courseValue!=="")&&
                            <Bill/>
                        }
                      </div>
           
                                  </Row>
                              </Fragment>
                            
                            
                        }
                         {
                            (semesterValue==="3rd year 1st semester")&&
                            
                              <Fragment >
                                  <Row>
                                  <div>
                          <label htmlFor="" className='input-label'>Courses</label>
                          <Form.Select  onChange={CourseChange} value={courseValue}  >
                          <option>Select Courses</option>
                              <option value="Viva-Voce (CSE 300)">Viva-Voce (CSE 300)</option>
                              <option value="Economics (ECO 301)r">Economics (ECO 301)</option>
                              <option value="Computer Graphics (CSE 303)">Computer Graphics (CSE 303)</option>
                              <option value="Computer Graphics Laboratory (CSE 304)">Computer Graphics Laboratory (CSE 304)</option>
                              <option value="Computational Geometry (CSE 305)">Computational Geometry (CSE 305)</option>
                              <option value="Computer Architecture and Organizations (CSE 307)">Computer Architecture and Organizations (CSE 307)</option>
                              <option value="Operating Systems (CSE 309)">Operating Systems (CSE 309)</option>
                              <option value="Operating Systems Laboratory (CSE 310)">Operating Systems Laboratory (CSE 310)</option>
                              <option value="Web Design and Programming Laboratory-I (CSE 312)">Web Design and Programming Laboratory-I (CSE 312)</option>
                              <option value="OOAD Laboratory (CSE 314)">OOAD Laboratory (CSE 314)</option>
                          </Form.Select>
                          {
                            (courseValue!=="")&&
                            <Bill/>
                        }
                      </div>
           
                                  </Row>
                              </Fragment>
                            
                            
                        }
                         {
                            (semesterValue==="3rd Year 2nd Semester")&&
                            
                              <Fragment >
                                  <Row>
                                  <div>
                          <label htmlFor="" className='input-label'>Courses</label>
                          <Form.Select  onChange={CourseChange} value={courseValue}  >
                          <option>Select Courses</option>
                              <option value="Viva-Voce (CSE 350)">Viva-Voce (CSE 350)</option>
                              <option value="Management and Accounting (BIS 351)">Management and Accounting (BIS 351)</option>
                              <option value="Human Computer Interaction (CSE 353)">Human Computer Interaction (CSE 353)</option>
                              <option value="Introduction to Bioinformatics (CSE 355)">Introduction to Bioinformatics (CSE 355)</option>
                              <option value="Microprocessors (CSE 357)">Microprocessors (CSE 357)</option>
                              <option value="Microprocessors and Assembly Language Laboratory (CSE 358)">Microprocessors and Assembly Language Laboratory (CSE 358)</option>
                              <option value="Computer Networks (CSE 359)">Computer Networks (CSE 359)</option>
                              <option value="Computer Networks Laboratory (CSE 360)">Computer Networks Laboratory (CSE 360)</option>
                              <option value="Web Design and Programming Laboratory-II (CSE 362)">Web Design and Programming Laboratory-II (CSE 362)</option>
                              
                          </Form.Select>
                          {
                            (courseValue!=="")&&
                            <Bill/>
                        }
                      </div>
           
                                  </Row>
                              </Fragment>
                            
                            
                        }
                         {
                            (semesterValue==="4th Year 1st Semester")&&
                            
                              <Fragment >
                                  <Row>
                                  <div>
                          <label htmlFor="" className='input-label'>Courses</label>
                          <Form.Select  onChange={CourseChange} value={courseValue}  >
                          <option>Select Courses</option>
                              <option value="Viva-Voce (CSE 400)">Viva-Voce (CSE 400)</option>
                              <option value="Theory of Computation and Application ( CSE 401)">Theory of Computation and Application ( CSE 401)</option>
                              <option value="Software Engineering and Information System Design (CSE 403)">Software Engineering and Information System Design (CSE 403)</option>
                              <option value="Software Engineering and ISD Laboratory (CSE 404)">Software Engineering and ISD Laboratory (CSE 404)</option>
                              <option value="Digital Image Processing (CSE 405)">Digital Image Processing (CSE 405)</option>
                              <option value="Digital Image Processing Laboratory (CSE 406)">Digital Image Processing Laboratory (CSE 406)</option>
                              <option value="Wireless Network (CSE 407)">Wireless Network (CSE 407)</option>
                              <option value="Mobile Application Development Laboratory (CSE 410)">Mobile Application Development Laboratory (CSE 410)</option>
                              <option value="Research Project (CSE 440)">Research Project (CSE 440)</option>
                          </Form.Select>

                          {
                            (courseValue!=="")&&
                            <Bill/>
                        }
                      </div>
           
                                  </Row>
                              </Fragment>
                            
                            
                        }
                         {
                            (semesterValue==="4th Year 2nd Semester")&&
                            
                              <Fragment >
                                  <Row>
                                  <div>
                          <label htmlFor="" className='input-label'>Courses</label>
                          <Form.Select   onChange={CourseChange} value={courseValue} >
                          <option>Select Courses</option>
                              <option value="Viva-Voce (CSE 450)">Viva-Voce (CSE 450)</option>
                              <option value="Data Mining and Big Data Analysis (CSE 451)">Data Mining and Big Data Analysis (CSE 451)</option>
                              <option value="Data Mining and Big Data Analysis Laboratory (CSE 452)">Data Mining and Big Data Analysis Laboratory (CSE 452)</option>
                              <option value="Artificial Intilligence (CSE 453)">Artificial Intilligence (CSE 453)</option>
                              <option value="Artificial Intilligence Laboratory (CSE 454)">Artificial Intilligence Laboratory (CSE 454)</option>
                              <option value="Software Quality Assurance (CSE 455)">Software Quality Assurance (CSE 455)</option>
                              <option value="Machine Learning (CSE 457)">Machine Learning (CSE 457)</option>
                              <option value="Machine Learning Laboratory (CSE 458)">Machine Learning Laboratory (CSE 458)</option>
                              <option value="IoT Laboratory (CSE 460)">IoT Laboratory (CSE 460)</option>
                              <option value="Research Project (CSE 480)">Research Project (CSE 480)</option>
                          </Form.Select>
                          {
                            (courseValue!=="")&&
                            <Bill/>
                        }
                      </div>
           
                                  </Row>
                              </Fragment>
                            
                        }
                        {
                            (semesterValue==="MSc")&&
                            
                              <Fragment >
                                  <Row>
                                  <div>
                          <label htmlFor="" className='input-label'>Courses</label>
                          <Form.Select  onChange={CourseChange} value={courseValue}  >
                          <option>Select Courses</option>
                              <option value="Viva-Voce (CSE 600)">Viva-Voce (CSE 450)</option>
                              <option value="Distributed System(CSE 601)">Distributed System(CSE 601)</option>
                              <option value="Complexity and Algorithms (CSE 602)">Complexity and Algorithms (CSE 602)</option>
                              <option value="E-commerce and E-governance (CSE 603)">E-commerce and E-governance (CSE 603)</option>
                              <option value="Advanced Neuroinformatics (CSE 604)">Advanced Neuroinformatics (CSE 604)</option>
                              <option value="Computer Vision (CSE 605)">Computer Vision (CSE 605)</option>
                              <option value="Embedded System Engineering (CSE 606)">Embedded System Engineering (CSE 606)</option>
                              <option value="Distributed Database(CSE 607)">Distributed Database(CSE 607)</option>
                              <option value="Machine intelligence and Expert Systems (CSE 608)">Machine intelligence and Expert Systems (CSE 608)</option>
                              <option value="Software Project Management and Quality Assurance (CSE 609)">Software Project Management and Quality Assurance (CSE 609)</option>
                              <option value="Network Security (CSE 610)">Network Security (CSE 610)</option>
                              <option value="Robotics (CSE 611)">Robotics (CSE 611)</option>
                              <option value="Medical Imaging (CSE 612)">Medical Imaging (CSE 612)</option>
                              <option value="Management Information System (CSE 613)">Management Information System (CSE 613)</option>
                              <option value="Internet Engineering and IP Technology (CSE 614)">Internet Engineering and IP Technology (CSE 614)</option>
                              <option value="Information Theory and Coding System (CSE 615)">Information Theory and Coding System (CSE 615)</option>
                              <option value="Internet Technology and Application(CSE 618)">Internet Technology and Application(CSE 618)</option>
                              <option value="Introduction to Data Science (CSE 619)">Introduction to Data Science (CSE 619)</option>
                              <option value="Web Application Security (CSE 620)">Web Application Security (CSE 620)</option>
                              <option value="Internet of Things and Sensor (CSE 621)">Internet of Things and Sensor (CSE 621)</option>
                              <option value="Natural Language Processing (CSE 622)">Natural Language Processing (CSE 622)</option>
                              <option value="Cloud Computing (CSE 623)">Cloud Computing (CSE 623)</option>
                              <option value="Digital Signal Processing(CSE 624)">Digital Signal Processing(CSE 624)</option>
                              <option value="Routing and Switching Technology (CSE 625)">Routing and Switching Technology (CSE 625)</option>
                              <option value="Pattern Recognition (CSE 626)">Pattern Recognition (CSE 626)</option>
                              <option value="Modeling and Simulation (CSE 627)">Modeling and Simulation (CSE 627)</option>
                              <option value="Machine Learning (CSE 628)">Machine Learning (CSE 628)</option>
                              <option value="Deep Learning (CSE 629)">Deep Learning (CSE 629)</option>
                              <option value="Industrial Automation Systems (CSE 630)">Industrial Automation Systems (CSE 630)</option>
                              <option value="Thesis/Project (CSE 650)">Thesis/Project (CSE 650)</option>
                          </Form.Select>
                          {
                            (courseValue!=="")&&
                            <Bill/>
                        }
                      </div>
           
                                  </Row>
                              </Fragment>
                            
                            
                        }
                    </Row>

                   
                                <div className='Mahfuz'>
      <Button variant="primary" >Submit</Button>
     
    </div>                                
    
    <div className='Mahfuz'>

      <Button variant="primary"  onClick={toggleComponent}>Add Another Course</Button>
      {showComponent && <CourseDetail />}
    </div> 


 
        
        </Container>
    </Fragment>
    
  )
}

export default CourseDetail
