import './Fifth_Page.css';
import Left from '../Left/Left';
import images from '../../assets/index'

const Fifth_Page = () => {
    return <>
    <div className="fifth-page">
        <Left number="4"/>
        <div className="fifth-page-right">
            <div className="done-icon"><img src={images.thank_you}/></div>
            <div className="thank-you ubuntu_700">Thank You!</div>
            <div className="thanks-paragraph">
            Thanks for confirming your subscription! We hope you have fun 
             using our platform. If you ever need support, please feel free 
            to email us at support@loremgaming.com.
            </div>
        </div>
    </div>
    </>
}
 
export default Fifth_Page;