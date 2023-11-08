import { useContext } from 'react';
import './Navigator.css';
import AppContext from '../../context/AppContext';


//eslint-disable-next-line
const Navigator = ({message}) => {

    const appstate = useContext(AppContext);
    return <>
    <div className="navigator">
        <div className="goback ubuntu_500" onClick={appstate.page_dec}>Go Back</div>
        <div className="nextstep ubuntu_500" onClick={appstate.page_inc}>{message}</div>
    </div>
    </>
}
 
export default Navigator;