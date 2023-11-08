import { useContext } from "react";
import "./App.css";
import First_Page from "./components/First_Page/First_Page";
import Second_Page from "./components/Second_Page/Second_Page";
import Third_Page from './components/Third_Page/Third_Page';
import AppContext from "./context/AppContext";
import Fourth_Page from "./components/Fourth_Page/Fourth_Page";
import Fifth_Page from "./components/Fifth_Page/Fifth_Page";

const App = () => {
  const appstate = useContext(AppContext);
  //eslint-disable-next-line

  switch (appstate.page) {
    case 1:
      return <>
        <div className="main-container">
          <First_Page/>
        </div>
      </>

      case 2:
      return <>
        <div className="main-container">
          <Second_Page/>
        </div>
      </>

      case 3:
      return<>
        <div className="main-container">
          <Third_Page/>
        </div>
      </>

      case 4:
        return<>
        <div className="main-container">
          <Fourth_Page/>
        </div>
        </>

        case 5:
          return<>
          <div className="main-container">
          <Fifth_Page/>
          </div>
          </>
  
    default:
      break;
  }
  
};

export default App;
