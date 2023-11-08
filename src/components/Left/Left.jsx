import "./Left.css";
import images from '../../assets/index.js'
//eslint-disable-next-line
const Left = ({number}) => {
  return (
    <>
      <div className="login-box-left">
        <img src={images.bg_sidebar_desktop} alt="" />
        <div className="progress-indicator-first-page">
          <div className="steps">
            <div
              className={
                number === "1" ? "step-number current-page" : "step-number"
              }
            >
              1
            </div>
            <div className="step-info">
              <span>STEP 1</span>
              <span className='ubuntu_700'>YOUR INFO</span>
            </div>
          </div>
          <div className="steps">
            <div
              className={
                number === "2" ? "step-number current-page" : "step-number"
              }
            >
              2
            </div>
            <div className="step-info">
              <span>STEP 2</span>
              <span className='ubuntu_700'>SELECT PLANS</span>
            </div>
          </div>
          <div className="steps">
            <div
              className={
                number === "3" ? "step-number current-page" : "step-number"
              }
            >
              3
            </div>
            <div className="step-info">
              <span>STEP 3</span>
              <span className='ubuntu_700'>ADD ONS</span>
            </div>
          </div>
          <div className="steps">
            <div
              className={
                number === "4" ? "step-number current-page" : "step-number"
              }
            >
              4
            </div>
            <div className="step-info">
              <span>STEP 4</span>
              <span className='ubuntu_700'>SUMMARY</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Left;
