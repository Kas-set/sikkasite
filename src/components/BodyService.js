import '../App.css';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
const servicesArray =[
    {
        titre:"Communiaction digitale",
        content:"Nous concevons à vos mesures et à vos couleurs des objets promotionnels et publicitaires qui deviendrons, le support de votre communication. "
    },
    {
        titre:"Fournitures de matériels",
        content:"Avec plusieurs partenaires dans le monde, nous vous fournissons les matériels bureautiques et informatiques pour le bon fonctionnement de votre entreprise. "
    },
    {
        titre:"Site Internet sur mesure",
        content:"Que vous souhaitiez juste un site simple, pour présenter votre activité et toucher plus de clients, ou que vous désiriez créer un site e-commerce complet, vous trouverez votre bonheur parmi nos offres. "
    },
    {
        titre:"Événementiel et divers",
        content:"SIKKA communication propose à ses clients, l’organisation d’événements  haut de gamme et sur-mesure en créant des moments uniques et élégants, à l’image des entreprises.",
    },
];

const BodyService = () => {
    return ( 
        <div >
            <div className='glass px-[15%]'>
                <div className='w-full  flex justify-center mb-9'>
                    <div className= "flex flex-col  gap-4 w-[90%] text-2xl">
                        <h1 className="capitalize font-medium text-4xl" > nos services</h1>
                        <p className=' lg:px-[5%] '>
                            Nous sommes spécialisés dans la communication digitale, le branding, la conception graphique, site internet, les impressions et plus encore. Nous offrons également à nos clients, un vaste choix de propositions et de conseils à un prix défiant toute concurence.
                        </p>
                    </div>
                </div>

                <div className=" flex flex-col gap-6 sm:gap-9 lg:grid lg:grid-cols-4 lg:gap-4 p-5 ">
                    {servicesArray.map((service, index) =>(
                        <div className=" w-full h-full   z-3" >
                            <div className='grid grid-col-1 sm:p-7 lg:p-0 gap-0  h-full bg-white rounded-lg lg:shadow-xl border-t-8  border-[#FC7B04]' key={index}>
                                <div className="h-max flex justify-center">
                                    <div className="h-max w-max bg-red-500 my-4">
                                            {/* <img src="https://cdn-icons-png.flaticon.com/512/1386/1386640.png" className=" bg-red-500  h-[50px] w-[50px]" alt="" /> */}
                                        <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="51" height="51"><path d="m18.5,2h-2.55c-.232-1.14-1.243-2-2.45-2h-3c-1.207,0-2.218.86-2.45,2h-2.55c-1.379,0-2.5,1.122-2.5,2.5v19.5h18V4.5c0-1.378-1.121-2.5-2.5-2.5Zm-8-1h3c.827,0,1.5.673,1.5,1.5s-.673,1.5-1.5,1.5h-3c-.827,0-1.5-.673-1.5-1.5s.673-1.5,1.5-1.5Zm9.5,22H4V4.5c0-.827.673-1.5,1.5-1.5h2.55c.232,1.14,1.242,2,2.45,2h3c1.208,0,2.217-.86,2.45-2h2.55c.827,0,1.5.673,1.5,1.5v18.5Z"  /></svg>
                                        
                                    </div>
                                </div>

                                <div className="max-w-max max-h-full p-4 md:p-0">
                                    <h2 className='uppercase mb-3 font-bold'>{service.titre}</h2>
                                    <div className=" lg:px-0 md:px-[20%] sm:px-[10%] lg:px-[15%] max-w-lg">
                                        <p className=" w-full sm:max-w-sm md:max-w-xl h-auto  w-full   w-full">
                                            {service.content}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

            </div>
            </div>
            
    <div className='bg-[#FC7B04]  sm:w-screen md:w-full  lg:h-[45vh]  text-4xl'>
                <div className='mx-[4%] md:flex-col lg:flex-row justify-between items-center  h-full sm:flex'>
                    <div className='w-full text-left  h-full flex items-center  p-[10%] '>
                        <h1 className="w-full  text-[45px] lg:p-8 font-medium">Voir nos différents projet?  Consultez notre Portfolio</h1>
                    </div>
                    <div className=' w-full lg:w-[40%]'>
                        <button className='w-full sm:h-full rounded-full bg-zinc-100 border-2 border-amber-700 text-[#FC7B04] font-normal lg:p-4 sm:py-auto sm:p-4 md:px-7'> Cliquer ici</button>
                    </div>
                </div>
            </div>
            <div className='bg-zinc-50 md:w-full sm:w-screen  lg:h-full  text-4xl border-t-2' id='clients'>
                <div className='mx-[7%] flex flex-col justify-between items-center  h-full sm:flex'>
                    <div className='w-full text-left  h-full flex items-center  p-[7%] '>
                        <h1 className="w-full text-3xl lg:text-[75px] lg:p- font-medium">Il nous font confiance</h1>
                    </div>
                    <div className='w-full  ' id="clients">
                        <Splide className = ' p-9  px-[5%] border-1 mb-2 rounded-full'  options={ {
                                    rewind: true,
                                    gap   : '50px',
                                    perPage:3,
                                    autoplay:true,
                                } }>
                            <SplideSlide className="border-amber-500 border-2 px-[%]">
                                <div className='w-full h-[200px]  flex justify-center '>
                                         <h1 className=" h-[100%] text-white border-2 w-max-sm bg-red-300">Client1</h1>
                                </div>
                            </SplideSlide>
                            <SplideSlide className="border-amber-500 border-2 px-[%]">
                                <div className='w-full h-[200px] border border-red-500 flex justify-center '>
                                         <h1 className=" h-[100%]  text-white border-2 w-max-sm bg-red-300">Client2</h1>
                                </div>
                            </SplideSlide>
                            <SplideSlide className="border-amber-500 border-2 px-[%]">
                                <div className='w-full h-[200px] border border-red-500 flex justify-center '>
                                         <h1 className=" h-[100%]  text-white border-2 w-max-sm bg-red-300">Client3</h1>
                                </div>
                            </SplideSlide>
                            <SplideSlide className="border-amber-500 border-2 px-[%]">
                                <div className='w-full h-[200px] border border-red-500 flex justify-center '>
                                         <h1 className=" h-[100%]  text-white border-2 w-max-sm bg-red-300">Client4</h1>
                                </div>
                            </SplideSlide>
                            <SplideSlide className="border-amber-500 border-2 px-[%]">
                                <div className='w-full h-[200px] border border-red-500 flex justify-center '>
                                         <h1 className=" h-[100%]  text-white border-2 w-max-sm bg-red-300">Client5</h1>
                                </div>
                            </SplideSlide>
                            <SplideSlide className="border-amber-500 border-2 px-[%]">
                                <div className='w-full h-[200px] border border-red-500 flex justify-center '>
                                         <h1 className=" h-[100%]  text-white border-2 w-max-sm bg-red-300">Client6</h1>
                                </div>
                            </SplideSlide>
                            <SplideSlide className="border-amber-500 border-2 px-[%]">
                                <div className='w-full h-[200px] border border-red-500 flex justify-center '>
                                         <h1 className=" h-[100%]  text-white border-2 w-max-sm bg-red-300">Client7</h1>
                                </div>
                            </SplideSlide>
                            
                        </Splide>
                    </div>
                        
                </div>
            </div>
           




        </div> 
     );
}
 
export default BodyService;