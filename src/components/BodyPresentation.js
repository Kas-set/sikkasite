
const BodyPresentation = (props) => {
   
    return (  
        <div className=" glass py-3 w-full flex justify-center ">
            <div className=' pt-[5%]  grid sm:grid-rows-1 lg:grid-cols-2 gap-1 w-[80%] '>
                
                <section className="sect-1 h-auto p-9 ">
                    <div className="w-auto h-full text-left lg:px-4 ">
                        <div className="w-full h-max mb-6 pr-[35%] lg:pr-0 mt-[20%] pb-[10%] ">
                            <h1 className=" h-max text-[24px] text-left lg:text-[54px]  ">
                                <span className="capitalize  colorClass "> {props.plusValeur}</span>{props.moinsValuer}
                            </h1>
                        </div>
        
                        <div className='lg:w-[325px] h-max ' id='services'>
                            <button className=" uppercase text-[12px] lg:w-full lg:text-xl text-blue-50 hover:text-sm font-bold border-2 border-amber-500 bgClass rounded-full py-3.5 px-6 ">Demander un Devis</button>
                        </div>

                    </div>
                </section>
                <section className="sect-2 lg:h-[70%]  lg:w-max ">
                    <div className="h-full lg:w-max">
                        <img src={props.img}  className="lg:w-[600px] lg:h-[600px] sm:h-[100%] sm:w-auto object-cover" alt="" />
                    </div>
                </section>
                
            </div>           

        </div>
    );
}
 
export default BodyPresentation;