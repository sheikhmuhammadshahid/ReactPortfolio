
import React, { useState } from 'react';
// import lottie from 'lottie-web';
import '../Styles/LottieStyle.css';
// import animationData from '../assets/contactUs.json';
export default function ContactScreen() {
    // const LottieAnimation = () => {
    //     const containerRef = useRef(null);

    //     useEffect(() => {
    //         const anim = lottie.loadAnimation({

    //             container: containerRef.current,
    //             animationData: animationData,
    //             renderer: 'svg', // You can choose 'svg', 'canvas', or 'html'
    //             loop: true,
    //             autoplay: true,
    //         });

    //         return () => {
    //             anim.destroy(); // Cleanup when the component unmounts
    //         };
    //     }, []);

    //     return <div  style={{ width: "100%", maxHeight: "3%" }} ref={containerRef}></div>;
    // }
    const [nameController, setnameController] = useState('');
    const [subjectController, setsubjectController] = useState('');
    const [bodyController, setbodyController] = useState('');
    const handlenameChange = (e) => {
        setnameController(e.target.value);
      };
    
      // Event handler for last name input change
      const handlesubjectChange = (e) => {
        setsubjectController(e.target.value);
      };
      const handlebodyChange = (e) => {
        setbodyController(e.target.value);
      };
    const saveEmail=(e)=>{
        e.preventDefault();
        const mailtoUrl = `mailto:sheikhmuhammadshahid123@gmail.com?subject=${encodeURIComponent(
            subjectController
          )}&body=${encodeURIComponent(bodyController)}`;
      
          // Open the default mail client
          window.location.href = mailtoUrl;

    }



    return (
        <div className="vg-page page-contact" id="contact">
            <div className="container-fluid">
                <div className="text-center wow fadeInUp">
                    <div className="badge badge-subhead">Contact</div>
                </div>
                <h1 className="text-center fw-normal wow fadeInUp">Get in touch</h1>
                <div className="row py-5 " style={{flexWrap:'wrap',justifyContent:'space-around'}}>
                    {/* <div className="col-lg-6 px-0 pr-lg-3 wow zoomIn">
                    <div className="LottieContainer">
                            <div id="google-maps" >
                                {LottieAnimation()}
                            </div>
                        </div>
                    </div> */}
                    <div className="col-lg-5">
                        <form className="vg-contact-form" onSubmit={saveEmail}>
                            <div className="form-row">
                                <div className="col-12 mt-3 wow fadeInUp">
                                    <input required style={{borderColor:nameController.length===0? 'red':'grey'}} className="form-control" value={nameController} onChange={handlenameChange} type="text" name="Name" placeholder="Your Name" />
                                </div>
                                {/* <div className="col-6 mt-3 wow fadeInUp">
                                    <input className="form-control" type="text" name="Email" placeholder="Email Address" />
                                </div> */}
                                <div  className="col-6 mt-3 wow fadeInUp">
                                    <input required  style={{borderColor:subjectController.length===0? 'red':'grey'}} className="form-control" value={subjectController} onChange={handlesubjectChange} type="text" name="Subject" placeholder="Subject" />
                                </div>
                                <div className="col-12 mt-3 wow fadeInUp">
                                    <textarea required style={{borderColor:bodyController.length===0? 'red':'grey'}} className="form-control" value={bodyController} onChange={handlebodyChange} name="Message" rows="6" placeholder="Enter message here.."></textarea>
                                </div>
                                <input  type='submit'  value='Send Message' className="btn btn-theme mt-3 wow fadeInUp ml-1"></input>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
