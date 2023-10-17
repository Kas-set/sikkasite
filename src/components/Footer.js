const Footer = () => {
    const currentYear = new Date().getFullYear();
    return ( 
        <div className="bg-stone-300 py-5" id="contact">
            <div className="mx-[11%] bg-transparent flex flex-col lg:flex-row justify-stretch lg:gap-[20%]">
                {/* Contact-infos de base */}
                <div className="">
                  <div className="w-full text-left">
                        <div className="w-full h-full py-4 text-4xl text-left">
                            <h3 className="font-small uppercase text-xl">Contact</h3>
                            <h2 className=" max-w-sm my-4 ">
                               Nous concrétisons <span className="font-bold">vos projets!</span>
                               
                            </h2>                          
                        </div>
                        <div>
                         

                                <div className="w-full flex flex-col lg:flex-row gap-[5%] py-7">
                                    {/* contact-container */}
                                    <div className="">

                                        <div className="flex gap-[20%] my-3 lg:mr-7 text-xl">
                                            <div className="flex">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-[#FC7B04]">
                                                    <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                                                    <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                                                </svg>

                                            </div>
                                            <div className="flex flex-col">
                                                <h3> 
                                                    E-MAIL 
                                                </h3>
                                                <span className="max-w-xl">contact@sikkagroupe.com</span>
                                            </div>
                                        </div>
                                        <div className="flex gap-[20%] my-3">
                                            <div className="flex">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-[#FC7B04]">
                                            <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                                            </svg>

                                            </div>
                                            <div className="flex flex-col">
                                                <h3> 
                                                    TELEPHONE
                                                </h3>
                                                <span className="max-w-xl">+228 93 64 05 34</span>
                                                <span className="max-w-xl">+228 79 89 98 89</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex gap-[20%] my-3 ml-3 text-xl">
                                        <div className="flex">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-[#FC7B04]">
                                            <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                                            </svg>

                                        </div>
                                        <div className=" flex flex-col">
                                            <h3> 
                                                ADRESSE 
                                            </h3>
                                            <span className="max-w-xl">Lomé-Togo,</span>
                                            <span className="max-w-xl"> Derrière le commissariat de djidjolé,</span>
                                            <span className="max-w-xl">5e immeuble à gauche</span>
                                        </div>
                                    </div>

                                </div>
                                <div className="my-3">
                                    <div className="flex gap-2">
                                        <div className="h-max  w-max rounded-full bg-[#FC7B04] pl-2 z-3 shadow-xl">
                                            <img src=" https://www.svgrepo.com/show/365495/instagram-logo-thin.svg" alt=""  className="h-[50px] w-[50px] bg-zinc-200 rounded-full p-2 "/>
                                        </div>
                                        <div className="h-max w-max rounded-full bg-[#FC7B04] pl-2 z-3 shadow- xl">
                                            <img src="https://get-picto.com/wp-content/uploads/2023/01/icon-facebook-svg.png" alt=""  className="h-[50px] w-[50px] text-white bg-zinc-200 rounded-full p-2"/>
                                        </div>

                                    </div>
                            </div>

                        </div>
                       
                  </div>

                </div>

                {/* formulaire container */}
                <div className="sm:mt-3 lg:mt-0 w-full text-left">
                    <div className="w-[90%]">

                        <div className="w-full text-left">
                            <div className="w-full h-full py-4 text-4xl text-left">
                                <h3 className="font-small uppercase text-xl">Travaillons ensemble</h3>
                            </div>
                        </div>   
                        <form action="" method="get">
                            <div className="flex flex-col gap-8">
                                <div className="h-max ">
                                    <input type="text" className="h-[50px] w-full max-w-sm rounded-md py-2 border-2 border-[#FC7B04] border-2 border-[#FC7B04]" placeholder="NOM"/>
                                </div>
                                <div className="h-max">
                                    <input type="text" className="h-[50px] w-full rounded-md py-2 max-w-sm border-2 border-[#FC7B04]" placeholder="E-MAIL ADRESSE"/>
                                </div>
                                <div className="h-max">
                                    <input type="text" className="h-[50px] w-full rounded-md py-2 max-w-sm border-2 border-[#FC7B04]" placeholder="TELEPHONE"/>
                                </div>
                                <div className="h-max">
                                    <select name="" id="" className="h-[50px] w-full rounded-md py-2 max-w-sm border-2 border-[#FC7B04]">
                                        <option value="">Sujet</option>
                                        <option value="">Sujet A</option>
                                        <option value="">Sujet B</option>
                                        <option value="">Sujet C</option>
                                        <option value="">Sujet D</option>
                                    </select>

                                </div>
                                <div className="h-max">
                                    <textarea name="" id="" cols="30" rows="5" className="h-[] w-full max-w-sm border-2 border-[#FC7B04]" value="Message" ></textarea>
                                </div>
                            </div>
                            <div className="w-full  max-w-sm text-center">
                                <button type="submit" className="bg-[#FC7B04] w-full max-w-sm p-3 rounded-full text-white shadow-md hover:bg-white border-4  border-[#FC7B04] hover:text-[#FC7B04]">ENVOYER</button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
            <div className="w-full text-center text-md text-white h-max p-3 bg-stone-800 mt-9">
                 <p>&copy; {currentYear} - SIKKA Communication</p>
            </div>
        </div>
     );
}
 
export default Footer;