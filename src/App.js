// import NavigationComponent from "./Screens/NavigationComponent";
import './App.css';
import AboutScreen from './Screens/AboutScreen';
import ContactScreen from './Screens/ContactScreen';
// import ClientsScreen from './Screens/ClientsScreen';
import HomeScreen from './Screens/HomeScreen';
import PortfolioScreen from './Screens/PortfolioScreen';
import ServicesScreen from './Screens/ServicesScreen';
import SocialLinks from './Screens/SocialLinks';


function App() {
  return (
    <div className="app theme-red">
      <div className="btn-back_to_top">
        <span className="ti-arrow-up"></span>
      </div>

      {/* <!-- Setting button --> */}
      <HomeScreen />

      <AboutScreen />

      <ServicesScreen />

      <PortfolioScreen />

      {/* <TestimonialScreen/> */}
      {/* <ClientsScreen/> */}
      {/* <div className="vg-page page-blog" id="blog">
    <div className="container">
      <div className="text-center">
        <div className="badge badge-subhead wow fadeInUp">Blog</div>
      </div>
      <h1 className="text-center fw-normal wow fadeInUp">Latest Post</h1>
      <div className="row post-grid">
        <div className="col-md-6 col-lg-4 wow fadeInUp">
          <div className="card">
            <div className="img-place">
              <img src="../assets/img/work/work-9.jpg" alt=""/>
            </div>
            <div className="caption">
              <a href="javascript:void(0)" className="post-category">Technology</a>
              <a href="#" className="post-title">Invision design forward fund</a>
              <span className="post-date"><span className="sr-only">Published on</span> May 22, 2018</span>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 wow fadeInUp">
          <div className="card">
            <div className="img-place">
              <img src="../assets/img/work/work-6.jpg" alt=""/>
            </div>
            <div className="caption">
              <a href="javascript:void(0)" className="post-category">Business</a>
              <a href="#" className="post-title">Announcing a plan for small teams</a>
              <span className="post-date"><span className="sr-only">Published on</span> May 22, 2018</span>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 wow fadeInUp">
          <div className="card">
            <div className="img-place">
              <img src="../assets/img/work/work-1.jpg" alt=""/>
            </div>
            <div className="caption">
              <a href="#" className="post-category">Design</a>
              <a href="#" className="post-title">5 basic tips for illustrating</a>
              <span className="post-date"><span className="sr-only">Published on</span> May 22, 2018</span>
            </div>
          </div>
        </div>
        <div className="col-12 text-center py-3 wow fadeInUp">
          <a href="#" className="btn btn-theme">See All Post</a>
        </div>
      </div>
    </div>
  </div>   */}
      <ContactScreen />
      <div className="vg-footer">
        <h1 className="text-center">Muhammad Shahid</h1>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 py-3">
              <div className="footer-info">
                <p>Where to find me</p>
                <hr className="divider" />
                <p className="fs-large fg-white">Rawalpindi, Pk</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 py-3">
              <div className="float-lg-right">
                <p>Follow me</p>
                {/* <SocialLinks/> */}
                <hr className="divider" />
                <ul className="list-unstyled">
                  <li><div style={{display:'flex',flexDirection:'row'}}>
                    <img className='socialLogo' height={30} width={30} src="https://seeklogo.com/images/S/skype-logo-F4A7960445-seeklogo.com.png" alt="" />
                  <a className='mx-2' target='_blank' href="https://join.skype.com/invite/ydrBOH26gunM">Skype</a>
                  </div></li>

                  <li>
                  <div style={{display:'flex',flexDirection:'row'}}>
                    <img className='socialLogo' height={30} width={30} src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/640px-WhatsApp.svg.png" alt="" />
                    <a className='mx-2' target='_blank' href="https://wa.me/+923401062704">Whatsapp</a>
                  </div></li>
                  <li>
                  <div style={{display:'flex',flexDirection:'row'}}>
                    <img className='socialLogo' height={30} width={30} src="https://pbs.twimg.com/profile_images/1661161645857710081/6WtDIesg_400x400.png" alt="" />
                    <a className='mx-2' target='_blank' href="https://www.linkedin.com/in/m-shahid-3051sk/">LinkedIn</a>
                  </div></li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 col-lg-5 py-3">
              <div className="float-lg-right">
                <p>Contact me</p>
                <hr className="divider" />
                <ul className="list-unstyled">
                  <li><a href="mailto:sheikhmuhammadshahid123@gmail.com" >sheikhmuhammadshahid123@gmail.com</a> </li>
                  <li  ><a href="tel:+923401062704"> +923401062704</a></li>

                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>

  );
}

export default App;
