import Nav from "./nav";
import Image from 'next/image'
import create from "../../public/imgs/create.png"
import search from "../../public/imgs/search.png"
import stats from "../../public/imgs/stats.png"
import defend from "../../public/imgs/defend.png"
import location from "../../public/imgs/location.png"
import s from "../../public/imgs/ser.png"
export default function Header() {
    return (
        <div className=" lin">

        <div className="flex  sm:flex-row flex-col mx-auto 2xl:container ">
            <div className="sm:px-24 sm:pt-7 sm:w-3/5 bg-f2f2f2 ">
                <Nav></Nav>
                <div className="sm:pt-36 pt-20 sm:bg-f2f2f2 bg-fbfbfb">
                    <h1 className="sm:text-5xl font-black sm:text-left text-center text-3xl">Search, Find, & Apply</h1>
                    <p className="pt-5 font-medium text-justify ">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis lacus non orci
                        euismod vestibulum vitae ut ex. Quisque ut arcu at lectus tristique auctor sit amet at turpis.
                    </p>
                </div>
                <div className="pt-16 pb-16 sm:bg-f2f2f2 bg-fbfbfb">
                    <div className="p-5 bg-white rounded-md flex justify-between ">
                        <input className="bg-f9f9f9 pl-3 py-3 rounded-md" type="text" value="Job title or Keyword" readOnly></input>
                        <input className="bg-f9f9f9 pl-3 py-3 rounded-md" type="text" value="Location" readOnly></input>
                        <button className="bg-my-green py-3 px-6 text-white rounded-md">Search</button>
                    </div>
                </div>


            </div>


            
            <div className="  bg-my-green rounded-bl-3xl  sm:w-2/5">
                <div className="bg-my-green">
                <div className="pl-44 pr-24 pt-7 justify-around items-center sm:flex hidden">
                    <a className="block text-center no-underline text-white font-bold text-xl" href="/">Sign in</a>
                    <button className="flex items-center justify-center gap-2 bg-white py-2 px-3 rounded-lg font-bold ">
                        <Image className="w-5 h-5" src={create} alt="Login Icon" />
                        Create Account
                    </button>
                </div>
                <div className="pt-16 ">
                    <div className="px-20">
                        <div className="sm:w-20 sm:h-20 w-12 h-12 bg-white flex items-center justify-center rounded-lg -rotate-6">
                            <Image src={search} alt="Search Icon" />
                        </div>
                    </div>
                    <div className="pr-16">
                        <div className="sm:w-20 sm:h-20 w-12 h-12 bg-white flex items-center justify-center rounded-lg rotate-6 ml-auto">
                            <Image src={stats} alt="Search Icon" />
                        </div>
                    </div>

                    <div className="px-24 py-16">
                        <div className="sm:w-20 sm:h-20 w-12 h-12 bg-white flex items-center justify-center rounded-lg -rotate-12">
                            <Image src={defend} alt="Search Icon" />
                        </div>
                    </div>

                </div>

            </div>
            </div>



        </div>
        </div>

    )
}