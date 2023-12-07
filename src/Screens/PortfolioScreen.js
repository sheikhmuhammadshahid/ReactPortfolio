import React, { useState } from 'react'
import work_1 from '../assets/img/work/work-1.jpg';
import work_2 from '../assets/img/work/work-2.jpg';
import work_3 from '../assets/img/work/work-3.png';
import work_4 from '../assets/img/work/work-4.jpg';
import flutter_portfolio from '../assets/img/work/flutter_portfolio.png';
import miyarGhar from '../assets/img/work/miyarGhar.png';
import react_portfolio from '../assets/img/work/react_portfolio.png';
import work_6 from '../assets/img/work/work-6.png';
import work_5 from '../assets/img/work/work-5.jpg';


export default function PortfolioScreen() {
    const [myProjects, setmyProjects] = useState([
        {
            'name': 'MEEGO',
            'description': 'Set your appointments anytime',
            'imageUrl': work_2, 'playstore_link': 'https://play.google.com/store/apps/details?id=com.meego.apps',
            'type': 'apps', 'Goto': 1
        },
        {
            'name': 'Miyar',
            'description': 'Order prodcuts anytime at bugetable prices.',
            'type': 'apps ios', 'playstore_link': 'https://play.google.com/store/apps/details?id=com.u6amtech.flutter_miyar_user',
            'imageUrl': work_1, 'Goto': 1
        }, {
            'name': 'Miyar delivery man',
            'description': 'Miyar heros, ready to deliver proucts at a time.',
            'type': 'apps ios', 'playstore_link': 'https://play.google.com/store/apps/details?id=com.miyar.delivery',
            'imageUrl': work_3, 'Goto': 1
        }, {
            'name': 'Miyar Seller',
            'description': 'Miyar seller, ready to sell products at low costs.',
            'imageUrl': work_4, 'playstore_link': 'https://play.google.com/store/apps/details?id=com.miyar.miyar_vendor',
            'type': 'apps ios',
            'Goto': 1

        },
        {
            'name': 'Portfolio - Flutter',
            'playstore_link': 'https://myportfolio-ec25d.web.app/',
            'description': 'My portfolio developed using flutter framework.',
            'imageUrl': flutter_portfolio,
            'type': 'websites',
            'Goto': 2
        }, {
            'name': 'Portfolio - React Js',
            'playstore_link': 'https://shahid.yourcrafty.net/',
            'description': 'My portfolio developed using React JS.',
            'imageUrl': react_portfolio,
            'type': 'websites', 'Goto': 4
        },
        {
            'name': 'Miyar Ghar - React JS',
            'playstore_link': 'https://ghar.miyar.pk/',
            'description': 'Multi Agents Property listing website.',
            'imageUrl': miyarGhar,
            'type': 'websites',
            'Goto': 2
        },
        {
            'name': 'BIIT Social App',
            'playstore_link': '',
            'description': 'A university social app to connect teachers, parents, students and admin to communicate with each ohthers and share information.',
            'imageUrl': work_5,
            'Goto': 3,
            'type': 'apps'
        },
        {
            'name': 'Auction System',
            'playstore_link': '',
            'description': 'System for setting the products at auction.',
            'imageUrl': work_6,
            'Goto': 3,
            'type': 'websites'
        },
       
    ])
    return (
        <div style={{backgroundColor:'white'}} className=" vg-page page-portfolio" id="portfolio">
            <div className="container">
                <div className="text-center wow fadeInUp">
                    <div className="badge badge-subhead">Portfolio</div>
                </div>
                <h1 className="text-center fw-normal wow fadeInUp">See my work</h1>
                <div className="filterable-button py-3 wow fadeInUp" data-toggle="selected">
                    <button className="btn btn-theme-outline selected" data-filter="*">All</button>
                    <button className="btn btn-theme-outline" data-filter=".apps">Apps</button>
                    {/* <button className="btn btn-theme-outline" data-filter=".template">Template</button> */}
                    <button className="btn btn-theme-outline" data-filter=".ios">IOS</button>
                    <button className="btn btn-theme-outline" data-filter=".websites">Websites</button>
                    {/* <button className="btn btn-theme-outline" data-filter=".ui-ux">UI/UX</button> */}
                    {/* <button className="btn btn-theme-outline" data-filter=".graphic">Graphic</button> */}
                    {/* <button className="btn btn-theme-outline" data-filter=".wireframes">Wireframes</button> */}
                </div>

                <div className="gridder my-3">
                    {
                        myProjects.map((e) => {
                            return <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}} className={`grid-item ${e.type}  wow zoomIn`}>
                                <div style={{ minHeight: '40vh' }} className="card img-place" data-src={e.imageUrl} data-fancybox data-caption={`<h5 className='fg-theme'>${e.name}</h5> <p>${e.description}</p>`}>
                                    <img  src={e.imageUrl} alt="" />
                                    <div className="img-caption">
                                        <h5 className="fg-theme">{e.name}</h5>
                                        <p>{e.description}</p>
                                    </div>

                                </div>
                                {e.Goto !== 3 && e.Goto !== 4 ? <a href={e.playstore_link} target="_blank" style={{maxWidth:'60vh'}} className="btn btn-theme-outline">{e.Goto === 1 ? 'Play Store' : 'Visit'} </a> : e.Goto === 4 ? <p className='fg-theme'>You are visiting this website</p> : <></>}

                            </div>
                        })
                    }
                  
                </div>
               
            </div>
        </div>
    )
}
