import React, { useState } from 'react'
import  '../Styles/ServiceScreen.css';

export default function ServicesScreen() {
    const [myServices] = useState([
        {
            'imageUrl': 'mobile',
            'ServiceName': 'Mobile Apps',
            'description': 'Using Flutter and React Native',
            'url': ''
        },
        {
            'imageUrl': 'world',
            'ServiceName': 'Web Development',
            'description': 'Using Flutter, Asp.Net, Next-JS and React-JS',
            'url': ''
        }, {
            'imageUrl': 'server',
            'ServiceName': 'Backend',
            'description': 'Using ServerPod (Flutter), Node-Js  and Asp.Net',
            'url': ''
        },
    ]);
    return (
        <div className="vg-page page-service" id='services'>
            <div className="container">
                <div className="text-center wow fadeInUp">
                    <div className="badge badge-subhead">Service</div>
                </div>
                <h1 className="fw-normal text-center wow fadeInUp">What can i do?</h1>
                <div class="serviceContainer">
                    {
                        myServices.map((e) => {
                            return <div class="serviceCard">
                                <div class="face face1">
                                    <div style={{ alignItems: 'center', display: 'flex', flexDirection: 'column' }} class="content">
                                        <div className="icon">
                                            <span style={{ fontSize: '45px', color: 'white' }} className={'ti-' + e.imageUrl}></span>
                                        </div>

                                        <h3>{e.ServiceName}</h3>
                                    </div>
                                </div>
                                <div class="face face2">
                                    <div class="content">
                                        <p>{e.description}</p>
                                        <a className="nav-link" data-animate="scrolling" href="#contact">Hire Me?</a>
                                    </div>
                                </div>
                            </div>
                        })
                    }

                </div>


            </div>
        </div>
    )
}
