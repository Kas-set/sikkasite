import { useState } from 'react';
import '../App.css';
const PopUp = () => {
   const [notif, setNotif] = useState(false); 
   const handleDisplay = ()=>{
    setNotif(!notif);
   }
    return (  
        <div >
            <div className="w-max z-999 h-max fixed bottom-[5%] right-0 " >
                <div className={`hidden ${notif ? 'block' : '' } border-é border h-[300px] w-[300px] z-99 bg-zinc-100 font-black text-xl text-blue-500 flex justify-center items-center rounded-md shadow-lg`}>
                   <p className=''>
                        Lien Vers Contact Whatsapp
                   </p>
                </div>
                <div className=" border-amber-500 border-2 h-[70px] w-[70px] shadow-lg p-2 bg-amber-600 rounded-full " onClick={handleDisplay}>
                    <img src="https://www.svgviewer.dev/static-svgs/432997/whats-app-whatsapp-whatsapp-icon.svg" alt="" className="w-full h-full bg-neutral-300 rounded-full text-white" />                              
                </div>
            </div>
        </div>
    );
}
 
export default PopUp;