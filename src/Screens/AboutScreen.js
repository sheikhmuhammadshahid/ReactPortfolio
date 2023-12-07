import React from 'react'
import person from '../assets/img/person.jpg';
export default function AboutScreen() {
    return (
        <div className="vg-page page-about" id="about">
            <div className="container py-5">
                <div className="row">
                <div className="col-lg-4 py-3 my-2">
                        <div  className="img-place wow fadeInUp ">
                            <img className='card'  src={person} alt="" />
                        </div>
                    </div>
                    <div className="col-lg-6 offset-lg-1 wow fadeInRight">
                        <h1 className="fw-light">Muhammad Shahid</h1>
                        <h5 className="fg-theme mb-3">Flutter , React JS & Native Developer</h5>
                        <p className="text-muted">I am an experienced developer proficient in Flutter, React JS, and native development, with a strong background in backend technologies such as Node.js, .NET Core, and ServerPod. I excel in creating cross-platform applications that seamlessly blend aesthetics and functionality. As a lifelong learner, I stay updated on technological trends to architect dynamic and future-proof systems. Collaborative by nature, I thrive in team environments, contributing my skills to drive projects from concept to realization.</p>
                        <ul className="theme-list">
                            <li><b>From:</b> Muzaffargarh, PK</li>
                            <li><b>Lives In:</b> Rawalpindi, PK</li>
                            <li><b>Age:</b> 22</li>
                            <li><b>Gender:</b> Male</li>
                        </ul>
                        <a href='https://shahid.yourcrafty.net/Images/Muhammad%20Shahid.pdf' target="_blank" className="btn btn-theme-outline">Download CV</a>
                    </div>
                    
                </div>
            </div>
            {/* <div className="container py-5">
                <h1 className="text-center fw-normal wow fadeIn">My Skills</h1>
                <div className="row py-3">
                    <div className="col-md-6">
                        <div className="px-lg-3">
                            <h4 className="wow fadeInUp">Coding skills</h4>
                            <div className="progress-wrapper wow fadeInUp">
                                <span className="caption">JavaScript</span>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" style={{ width: '86%' }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">86%</div>
                                </div>
                            </div>
                            <div className="progress-wrapper wow fadeInUp">
                                <span className="caption">PHP</span>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" style={{ width: '80%' }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">80%</div>
                                </div>
                            </div>
                            <div className="progress-wrapper wow fadeInUp">
                                <span className="caption">HTML + CSS</span>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" style={{ width: '100%' }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">100%</div>
                                </div>
                            </div>
                            <div className="progress-wrapper wow fadeInUp">
                                <span className="caption">Phyton</span>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" style={{ width: '90%' }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">90%</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="px-lg-3">
                            <h4 className="wow fadeInUp">Design Skills</h4>
                            <div className="progress-wrapper wow fadeInUp">
                                <span className="caption">UI / UX Design</span>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" style={{ width: '92%' }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">92%</div>
                                </div>
                            </div>
                            <div className="progress-wrapper wow fadeInUp">
                                <span className="caption">Web Design</span>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" style="width: 99%;" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">99%</div>
                                </div>
                            </div>
                            <div className="progress-wrapper wow fadeInUp">
                                <span className="caption">Logo Design</span>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" style={{ width: '79%' }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">79%</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            <div className="container pt-5">
                <div className="row">
                    <div className="col-md-6 wow fadeInRight">
                        <h2 className="fw-normal">Education</h2>
                        <ul className="timeline mt-4 pr-md-5">
                            <li>
                                <div className="title">2023</div>
                                <div className="details">
                                    <h5>BSCS</h5>
                                    <small className="fg-theme">Barani Institute Of Information Technology, Rawalpindi</small>
                                    <p></p>
                                </div>
                            </li>
                            <li>
                                <div className="title">2019</div>
                                <div className="details">
                                    <h5>ICS</h5>
                                    <small className="fg-theme">Abdalian Science Higher Secondary School</small>
                                    <p></p>
                                </div>
                            </li>
                            <li>
                                <div className="title">2017</div>
                                <div className="details">
                                    <h5>Matric</h5>
                                    <small className="fg-theme">Allied School</small>
                                    <p></p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-6 wow fadeInRight" data-wow-delay="200ms">
                        <h2 className="fw-normal">Experience</h2>
                        <ul className="timeline mt-4 pr-md-5">
                            <li>
                                <div className="title">9/2023 - Current</div>
                                <div className="details">
                                    <h5>Flutter & React-JS</h5>
                                    <small className="fg-theme">KNS Technology</small>
                                    <p>Developing mobile apps and websites using Flutter framework and React JS.</p>
                                </div>
                            </li>
                            <li>
                                <div className="title">8/2021 - 9/2023</div>
                                <div className="details">
                                    <h5>Flutter Developer</h5>
                                    <small className="fg-theme">FIT Computer Institute</small>
                                    <p>Developed mobile apps using flutter framework.</p>
                                </div>
                            </li>
                           
                        </ul>
                    </div>
                </div>
            </div> 
        </div>
    )
}
