import { useState } from "react";
import AppContext from './AppContext';


//eslint-disable-next-line
const AppContextProvider = ({children})=>{
    const[monthly, setMonthly] = useState(false);
    const[arcade, setArcade] = useState(false);
    const[advanced, setadvanced] = useState(false);
    const[pro, setpro] = useState(false);

    const[online, setonline] = useState(false);
    const[storage, setstorage] = useState(false);
    const[profile, setprofile] = useState(false);

    const[page, setpage] = useState(1);

    const page_inc = ()=>{
        let counter = page;
        if(page<5){
            counter++
            setpage(counter);
        }
        else{
            setpage(counter)
        }
    }

    const page_dec = ()=>{
        let counter = page;
        if(page>1){
            counter--;
            setpage(counter);
        }
        else 
        setpage(counter)
    }

    const handleonline = ()=>{
        const x = document.getElementById('online');
        if(!online){
            x.checked = true;
            setonline(true);
        }
        else{
            x.checked = false;
            setonline(false);
        }
    }

    const handlestorage = ()=>{
        const y = document.getElementById('storage');
        if(!storage){
            y.checked = true;
            setstorage(true)
        }
        else{
            y.checked = false;
            setstorage(false);
        }
    }

    const handleprofile = ()=>{
        const z = document.getElementById('profile');
        if(!profile){
            z.checked = true;
            setprofile(true)
        }
        else{
            z.checked = false;
            setprofile(false)
        }
    }

    const handlearcade = ()=>{
        setArcade(true);
        setadvanced(false);
        setpro(false);
    }

    const handleadvanced = ()=>{
        setArcade(false);
        setadvanced(true);
        setpro(false);
    }

    const handlepro = ()=>{
        setArcade(false);
        setadvanced(false);
        setpro(true);
    }

    const handletoggle = ()=>{
        if(monthly){
            setMonthly(false);
        }
        else{
            setMonthly(true);
        }
    }

    return (
        <AppContext.Provider value={{monthly, handletoggle, handlearcade, arcade, handleadvanced, advanced, handlepro, pro, setpro, online, handleonline, storage, handlestorage, profile, handleprofile, page, page_inc, page_dec, setpage}}>
            {children}
        </AppContext.Provider>
    )

}

export default AppContextProvider;