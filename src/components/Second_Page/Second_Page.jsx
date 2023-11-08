import "./Second_Page.css";
import Left from "../Left/Left.jsx";
import images from "../../assets/index.js";
import Navigator from "../Navigator/Navigator";
import { useContext } from "react";
import AppContext from "../../context/AppContext";


const Second_Page = () => {  

  const appstate = useContext(AppContext)


  return (
    <>
      <div className="second-page">
        <Left number="2" />
        <div className="second-page-right">
          <div className="second-page-right-heading ubuntu_700">
            Select your plan
            <div className="second-page-heading-note ubuntu_400">
              You have the option of monthly or yearly billing
            </div>
          </div>
          <div className="plan-options">
            <div className={appstate.arcade?'plan-option margin-blue': 'plan-option'} onClick={appstate.handlearcade}>
              <div className="plan-icon">
                <img src={images.icon_arcade} alt="arcade-img" />
              </div>
              <div className="plan-description">
                <span className="ubuntu_700">Arcade</span>
                <span>{appstate.monthly?<>$9/mo</>:<>$90/yr</>}</span>
                {!appstate.monthly && <span className="free ubuntu_500">2 months free</span>}
              </div>
            </div>
            <div className={appstate.advanced?'plan-option margin-blue': 'plan-option'} onClick={appstate.handleadvanced}>
              <div className="plan-icon">
                <img src={images.icon_advanced} alt="arcade-img" />
              </div>
              <div className="plan-description">
                <span className="ubuntu_700">Advanced</span>
                <span>{appstate.monthly?<>$12/mo</>:<>$120/yr</>}</span>
                {!appstate.monthly && <span className="free ubuntu_500">2 months free</span>}
              </div>
            </div>
            <div className={appstate.pro?'plan-option margin-blue': 'plan-option'} onClick={appstate.handlepro}>
              <div className="plan-icon">
                <img src={images.icon_pro} alt="arcade-img" />
              </div>
              <div className="plan-description">
                <span  className="ubuntu_700">Pro</span>
                <span>{appstate.monthly?<>$15/mo</>:<>$150/yr</>}</span>
                {!appstate.monthly && <span className="free ubuntu_500">2 months free</span>}
              </div>
            </div>
          </div>

          <div className="toggler-section">
            Monthly
            <div className={appstate.monthly?'toggler-btn':'toggler-btn flex-end'} onClick={appstate.handletoggle}>
              <div className="toggle-circle"></div>
            </div>
            Yearly
          </div>

          <div className="Navigator">
            <Navigator message="Next Step"/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Second_Page;
