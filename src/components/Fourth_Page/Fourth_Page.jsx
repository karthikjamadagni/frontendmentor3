import { useContext } from 'react';
import './Fourth_Page.css';
import AppContext from '../../context/AppContext';
import Left from '../Left/Left';
import Navigator from '../Navigator/Navigator';

const arcade_list = {
    name: "Arcade",
    yearly: 90,
    monthly: 9
};

const advanced_list = {
    name: "Advanced",
    yearly: 120,
    monthly: 12
}

const pro_list = {
    name: "Pro",
    yearly: 150,
    monthly: 15
}

const online_add_on = {
    name: "Online Service",
    yearly: 10,
    monthly: 1
}

const storage_add_on = {
    name: "Larger Storage",
    yearly: 20,
    monthly: 2
}

const profile_add_on = {
    name: "Customizable Profile",
    yearly: 20,
    monthly: 2
}


const Fourth_Page = () => {
    const appstate = useContext(AppContext);

    const handlepagetwo = ()=>{
        appstate.setpage(2);
    }


    let plan = "";
    let cost = 0;
    let total_cost = 0;

    if(appstate.arcade){
        if(appstate.monthly){
            plan = `Arcade (Monthly)`;
            cost = arcade_list.monthly
        }
        else{
            plan = `Arcade (Yearly)`;
            cost = arcade_list.yearly
        } 
    }
    else if(appstate.advanced){
        if(appstate.monthly){
            plan = `Advanced (Monthly)`
            cost = advanced_list.monthly
        }
        else{
            plan = `Advanced (Yearly)`
            cost = advanced_list.yearly
        }
    }

    else {
        if(appstate.monthly){
            plan = `Pro (Monthly)`
            cost = pro_list.monthly
        }
        else{
            plan = "Pro (Yearly)";
            cost = pro_list.yearly;
        }
    }

    total_cost = cost;


    if(appstate.online){
        if(appstate.monthly){
            total_cost += online_add_on.monthly
        }
        else{
            total_cost += online_add_on.yearly;
        }
    }

    if(appstate.storage){
        if(appstate.monthly){
            total_cost += storage_add_on.monthly
        }
        else{
            total_cost += storage_add_on.yearly;
        }
    }

    if(appstate.profile){
        if(appstate.monthly){
            total_cost += profile_add_on.monthly
        }
        else{
            total_cost += profile_add_on.yearly;
        }
    }

    

    

    return <>
    <div className="fourth-page">
        <Left number="4"/>
        <div className="fourth-page-right">
            <div className="fourth-page-heading ubuntu_700">
                Finishing Up
                <div className="fourth-page-note ubuntu_400">Double-check everything looks OK before confirming</div>
            </div>
            <div className="summary">
                <div className="summary-heading">
                    <div className="plan-option-summary ubuntu_700">{plan} <div className="change" onClick={handlepagetwo}>Change</div></div>
                    <div className="plan-cost ubuntu_700">${cost}{appstate.monthly?<>/mo</>:<>/yr</>}</div>
                </div>

                <div className="summary-add-ons">
                    {
                        appstate.online && 
                        <>
                        <div className="summary-add-on">
                            <div className="add-on-name">Online service</div>
                            <div className="add-on-cost">{appstate.monthly?<>+${online_add_on.monthly}/mo</>:<>+${online_add_on.yearly}/yr</>}</div>
                        </div>
                        </>
                    }
                    {
                        appstate.storage && 
                        <>
                        <div className="summary-add-on">
                            <div className="add-on-name">Larger service</div>
                            <div className="add-on-cost">{appstate.monthly?<>+${storage_add_on.monthly}/mo</>:<>+${storage_add_on.yearly}/yr</>}</div>
                        </div>
                        </>
                    }
                    {
                        appstate.profile && 
                        <>
                        <div className="summary-add-on">
                            <div className="add-on-name">Customizable Profile</div>
                            <div className="add-on-cost">{appstate.monthly?<>+${profile_add_on.monthly}/mo</>:<>+${profile_add_on.yearly}/yr</>}</div>
                        </div>
                        </>
                    }
                </div>

                <div className="total">
                    <div className="total-note ubuntu_500">Total Cost({appstate.monthly?<>per month</>:<>per year</>})</div>
                    <div className="total-cost ubuntu_700">${total_cost}{appstate.monthly?<>/mo</>:<>/yr</>}</div>
                </div>
            </div>
            <div className="Navigator confirm">
                <Navigator message="Confirm"/>
            </div>
        </div>
    </div>
    </>
}
 
export default Fourth_Page;