import { useState } from 'react';
import BodyPresentation from '../components/BodyPresentation.js';
const PortfolioPage = () => {
    const presentationArray = {plusValeur:"SIKKA Communication", moinsValeur:" Nos réalisations"}
    ;
    const img1 = "https://sikkagroupe.com/wp-content/uploads/2021/09/1_Plan-de-travail-1-1280x1141.png"
    const btns = [ 
                    {
                        id:1,
                        text:"Tout",
                        content:" CONTENU TOUT "
                    },
                    {
                        id:2,
                        text:"Carte de visite",
                        content:" CONTENU CARTE DE VISITE "
                    },
                    {
                        id:3,
                        text:"Flayers",
                        content:" CONTENU FLAYERS "
                    },
                    {
                        id:4,
                        text:"Logo",
                        content:" CONTENU LOGO "
                    },
                    {
                        id:5,
                        text:"Kakemono",
                        content:" CONTENU KAKAEMONO "
                    },
                    {
                        id:6,
                        text:"Site Web",
                        content:" CONTENU SITE WEB "
                    },
                    {
                        id:7,
                        text:"Visuel Web",
                        content:" CONTENU VISUEL WEB "
                    },
                 
];
    const [content, setContent] = useState('');
    const [activeButton, setActiveButton] = useState(0);

    const handleClick = (btn) => {
        setContent(btn.content);
    }
    return (  
        <div>
            {/* <h1 className="lg:text-5xl "> EN maintenance...</h1> */}
            <div>
                <BodyPresentation 
                    plusValeur ={presentationArray.plusValeur}
                    moinsValuer = {presentationArray.moinsValeur}
                    img = {img1}
                />
                <div className='w-full px-[15%] text-center'>
                    <div className='w-[75%] md:grid md:grid-cols-3 grid grid-cols-2 gap-1 w-full '>
                        {btns.map((btn, indx) =>(
                            <div key={indx} className='sm:p-3'>
                                <button onClick={()=> 
                                        {   setActiveButton(indx);
                                            if (indx === 0) {
                                            // Si c'est le premier bouton, affiche son contenu
                                            handleClick(btn);
                                        } else {
                                            // Sinon, appelle handleClick sans afficher le contenu
                                            handleClick(btn);
                                        }
                                        }
                                        } className={` hover:bg-slate-600 hover:text-white w-full rounded-full py-2 bg-[#FC7B04] text-white  text-md ${indx === activeButton ? 'bg-different' : ''}`}>{btn.text}</button>
                            </div>       )
                        
                        )}
                       
                    </div>
                </div>
                <div className='mt-5'>
                    <div className='flex justify-center'>
                        <div className='h-[400px] w-[800px] rounded-md shadow-inner bg-blue-50'>
                            <h1 className='h-full flex justify-center items-center font-black text-3xl'> {content} </h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default PortfolioPage;