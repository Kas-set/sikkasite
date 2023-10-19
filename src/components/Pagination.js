const Paginatiton = () => {
    return ( 
        <div className="z-10 h-max w-max fixed top-[30%] right-0 ml-1">
                <div className="h-max w-[45px] bg-zinc-500 flex justify-center p-2 py-5 rounded-md shadow-md">
                    <div className=" w-max border-2 border-zinc-500 h-[90px] flex flex-col gap-1 bg-transparent justify-around py-0 px-1">
                        <div className="bg-neutral-400 h-[10px] w-[10px] rounded-full "></div>
                        <div className="bg-neutral-400 h-[10px] w-[10px] rounded-full "></div>
                        <div className="bg-neutral-400 h-[10px] w-[10px] rounded-full "></div>
                        <div className="bg-neutral-400 h-[10px] w-[10px] rounded-full "></div>
                        <div className="bg-neutral-400 h-[10px] w-[10px] rounded-full "></div>
                    </div>
                </div>
        </div>
     );
}
 
export default Paginatiton;