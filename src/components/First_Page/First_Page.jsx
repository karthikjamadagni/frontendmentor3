import './First_Page.css';
import Left from '../Left/Left';
import { useContext } from 'react';

import AppContext from '../../context/AppContext';

const First_Page = () => {

  const appstate = useContext(AppContext)
    return <>
    <div className="login-box">
          <Left number="1"/>
          <div className="login-box-right">
            <div className="login-box-first-page-heading ubuntu_700">
              Personal info
            </div>
            <div className="login-box-first-page-paragraph ubuntu_400">
              Please provide your name, email address and phone number
            </div>

            <div className="login-box-first-page-forms">
              <div className="first-page-form">
                <span className="ubuntu_500">Name</span>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="e.g Stephen King"
                />
              </div>
              <div className="first-page-form">
                <span className="ubuntu_500">Email Address</span>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="e.g stephenking@lorem.com"
                />
              </div>
              <div className="first-page-form">
                <span className="ubuntu_500">Phone Number</span>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="e.g +1 234 567 890"
                />
              </div>
            </div>

            <div className="login-box-first-page-next-step-section">
              <div className="next-step" onClick={appstate.page_inc}>Next Step</div>
            </div>
          </div>
        </div>
    </>
}
 
export default First_Page;