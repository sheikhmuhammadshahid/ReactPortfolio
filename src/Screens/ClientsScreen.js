import React from 'react'
import company_1 from '../assets/img/logo/company_1.svg';
import company_2 from '../assets/img/logo/company_2.svg';
import company_3 from '../assets/img/logo/company_3.svg';
import company_4 from '../assets/img/logo/company_4.svg';
import company_5 from '../assets/img/logo/company_5.svg';
import company_6 from '../assets/img/logo/company_6.svg';
import company_7 from '../assets/img/logo/company_7.svg';
import company_8 from '../assets/img/logo/company_8.svg';

export default function ClientsScreen() {
    return (
        <div className="vg-page page-client">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-lg-4 col-xl-3 item">
                        <div className="img-place wow fadeInUp">
                            <img src={company_1} alt="" />
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 col-xl-3 item">
                        <div className="img-place wow fadeInUp">
                            <img src={company_2} alt="" />
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 col-xl-3 item">
                        <div className="img-place wow fadeInUp">
                            <img src={company_3} alt="" />
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 col-xl-3 item">
                        <div className="img-place wow fadeInUp">
                            <img src={company_4} alt="" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 col-lg-4 col-xl-3 item">
                        <div className="img-place wow fadeInUp">
                            <img src={company_5} alt="" />
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 col-xl-3 item">
                        <div className="img-place wow fadeInUp">
                            <img src={company_6} alt="" />
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 col-xl-3 item">
                        <div className="img-place wow fadeInUp">
                            <img src={company_7} alt="" />
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 col-xl-3 item">
                        <div className="img-place wow fadeInUp">
                            <img src={company_8} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    )
}
