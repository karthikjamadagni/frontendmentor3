import './Third_Page.css';
import Left from '../Left/Left.jsx';
import { useContext } from 'react';
import AppContext from '../../context/AppContext';
import Navigator from '../Navigator/Navigator';

const Third_Page = () => {
    const appstate = useContext(AppContext);
    return <>
    <div className="third-page">
        <Left number="3"/>
        <div className="third-page-right">
            <div className="third-page-heading ubuntu_700">
                Pick add-ons
                <div className="third-page-note">Add-ons help enhance your gaming experience</div>
            </div>
            <div className="add-ons">
                <div className={appstate.online?'add-on margin-blue':'add-on'} onClick={appstate.handleonline}>
                    <div className="checkbox">{appstate.online?<><input type="checkbox" name="" id="online" checked/></>:<><input type="checkbox" name="" id="online" /></>}</div>
                    <div className="description">
                        <span className='ubuntu_700'>Online Service</span>
                        <span>Access to multiplayer games</span>
                    </div>

                    <div className="price ubuntu_700">
                        {appstate.monthly?<>+$1/mo</>:<>+$10/yr</>}
                    </div>
                </div>
                <div className={appstate.storage?'add-on margin-blue':'add-on'} onClick={appstate.handlestorage}>
                    <div className="checkbox">{appstate.storage?<><input type="checkbox" name="" id="storage" checked/></>:<><input type="checkbox" name="" id="storage" /></>}</div>
                    <div className="description">
                        <span className='ubuntu_700'>Larger Storage</span>
                        <span>Extra 1 TB of cloud save</span>
                    </div>

                    <div className="price ubuntu_700">
                        {appstate.monthly?<>+$2/mo</>:<>+$20/yr</>}
                    </div>
                </div>
                <div className={appstate.profile?'add-on margin-blue':'add-on'} onClick={appstate.handleprofile}>
                    <div className="checkbox">{appstate.profile?<><input type="checkbox" name="" id="profile" checked/></>:<><input type="checkbox" name="" id="profile" /></>}</div>
                    <div className="description">
                        <span className='ubuntu_700'>Customizable Profile</span>
                        <span>Custom theme on your profile</span>
                    </div>

                    <div className="price ubuntu_700">
                        {appstate.monthly?<>+$2/mo</>:<>+$20/yr</>}
                    </div>
                </div>
            </div>

            <div className="Navigator">
                <Navigator message="Next Step"/>
            </div>
        </div>
    </div>
    </>
}
 
export default Third_Page;