import Image from 'next/image'
import f from "../../public/imgs/f.png"
import t from "../../public/imgs/t.png"
import l from "../../public/imgs/l.png"

export default function Footer() {
    return (
        <div className='sm:pt-44 pt-20'>


            <div className="relative bg-my-green">
                <div className="flex  justify-center 2 absolute left-1/2 transform -translate-x-1/2 top-0 transform -translate-y-1/2 ">
                    <div className="sm:py-10 bg-003A2C sm:w-fw sm:h-fhh sm:rounded-3xl rounded flex justify-center flex-col items-center w-80  p-5">

                        <h3 className="font-black text-white sm:text-3xl text-base  w-full text-center ">Register your CV now</h3>
                        <p className="text-white sm:pt-5 pb-5 sm:text-base text-xxxs text-center pt-2">
                            Lorarn ipsum dolor sit amnet, consoctotur ad piscing oft.
                            Sod quis lacus non orci auismod -vostibulum vitoo ul ex.
                        </p>
                        <div className="">
                            <button className=" text-white border-white sm:py-3 py-2 sm:px-5 px-1.5  border-2 rounded-lg w-fit sm:text-base text-xxxs">Register Now</button>

                        </div>
                    </div>
                </div>
                <div className="3  flex justify-between sm:px-24 px-5 sm:pt-8 sm:pb-12 mx-auto 2xl:container pb-10 overflow-hidden sm:pt-20 pt-10 flex-wrap">
                    <div className="flex items-center flex-col sm:pt-32 sm:w-80 w-full">
                        <h3 className="font-black text-white sm:text-4xl text-2xl pt-14 w-full hover:text-black"><a href='/'><span className="text-black">Job</span>Now</a></h3>
                        <p className="text-white sm:text-base  text-xxs sm:pt-5 pt-1 sm:pb-9 pb-2  sm:pr-10 pr-20">
                            Lorarn ipsum dolor sit amnet, consoctotur ad piscing oft.
                            Sod quis lacus non orci auismod
                        </p>
                    </div>
                    <div className="flex  flex-col sm:pt-32 sm:w-fit w-54">
                        <h3 className="font-black text-white sm:text-2xl text-xl sm:pt-14 pt-5 w-full ">Company</h3>
                        <p className="text-white sm:text-base  text-xxs sm:pt-1 pt-1  pb-2  ">
                            Address: 123 Fifth Avenue, New York-1060, USA
                        </p>
                        <a href="tel:+(1600)456 7800">
                        <p className="text-white sm:text-base text-xxs   pb-2  hover:text-black">
                            Call Us: +(1600)456 7800
                        </p>
                        </a>
                       
                        <a href="mailto:yourid@example.com">
                            <p className="text-white sm:text-base  text-xxs  pb-2 hover:text-black ">
                                Email:yourid@example.com
                            </p>
                        </a>

                        <p className="text-white sm:text-base text-xxs  pb-2  ">
                            Mon Sat: 9:00 AM - 19:00 PM
                        </p>
                    </div>

                    <div className="flex  flex-col sm:pt-32 sm:w-fit w-2/6">
                        <h3 className="font-black text-white sm:text-2xl text-xl sm:pt-14 pt-5 w-full ">Pages</h3>
                        <a href='/'>
                            <p className="text-white sm:text-base  text-xxs sm:pt-1 pt-1  pb-2  hover:text-black">
                                &gt; Home
                            </p>
                        </a>
                        <a href='/'>
                            <p className="text-white sm:text-base text-xxs   pb-1  hover:text-black">
                                &gt; Booking
                            </p>
                        </a>
                        <a href='/'>
                            <p className="text-white sm:text-base  text-xxs  pb-1  hover:text-black">
                                &gt;  Facilities
                            </p>
                        </a>
                        <a href='/'>
                            <p className="text-white sm:text-base text-xxs  pb-1  hover:text-black">
                                &gt;  About Us
                            </p>
                        </a>
                        <a href='/'>
                            <p className="text-white sm:text-base text-xxs   pb-1  hover:text-black">
                                &gt; Location
                            </p>
                        </a>
                        <a href='/'>
                            <p className="text-white sm:text-base text-xxs  pb-1  hover:text-black">
                                &gt; Contact
                            </p>
                        </a>

                    </div>
                    <div className="flex  flex-col sm:pt-32 w-fit">
                        <h3 className="font-black text-white sm:text-2xl text-xl sm:pt-14 pt-5 w-full ">Contact Us</h3>
                        <div className="text-white sm:text-base  text-xxs sm:pt-3 pt-1  pb-2  flex">
                            <a href='/'>
                                <Image className=' sm:mr-3 mr-2 sm:w-8 sm:h-8 w-5 h-5' src={f} alt="Search Icon"></Image>

                            </a>
                            <a href='/'>
                                <Image className=' sm:mr-3 mr-2 sm:w-8 sm:h-8 w-5 h-5' src={l} alt="Search Icon"></Image>

                            </a>
                            <a href='/'>
                                <Image className=' sm:mr-3 mr-2 sm:w-8 sm:h-8 w-5 h-5' src={t} alt="Search Icon"></Image>

                            </a>

                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}