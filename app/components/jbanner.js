import Image from 'next/image'
import job from "../../public/imgs/job.png"
import greater from "../../public/imgs/greater.png"
import location from "../../public/imgs/location.png"


export default function JobBanner(props) {
    return (
        <div className="bg-ffffff  sm:pl-9 pl-3 sm:pr-7 pr-4 flex flex-col rounded-2xl sm:w-jw sm:h-jh w-44 h-52 content-end sm:mb-0 mb-3 shrink-0 sm:mr-7 mr-6">
            <Image className='sm:pt-9 pt-3 sm:w-fit sm:h-24 w-fit sm:h-10 h-7' src={props.path} alt="Search Icon"></Image>
            <h4 className='sm:font-black font-bold sm:text-xl text-xxs sm:pt-7 pt-2  '>{props.title}</h4>
            <p className="sm:text-xxs text-xxxs sm:pt-4 pt-2 sm:pb-4 pb-2 text-8a8a8a">{props.content}</p>
            <p className="sm:text-xs sm:pr-4 text-xxxs sm:pt-5 pt-1 sm:pb-9 pb-2 text-8a8a8a">
                Lorarn ipsum dolor sit amnet, consoctotur ad piscing oft.
                Sod quis lacus non orci auismod -vostibulum vitoo ul. ax.
                Qulsguo ul arou allectus tristiaue auctor sil arnot at turpis.
            </p>

            <div className="flex justify-between sm:w-11/12">
                <div className='flex justify-between bg-f9f9f9 sm:px-3 sm:py-2 px-1 py-1 rounded-xl sm:text-base text-xxxs'>
                    <Image className=' sm:mr-3 mr-1 sm:w-fit sm:h-fit w-2 h-2' src={location} alt="Search Icon"></Image>
                    San Francisco, CA
                </div>
                <div className='flex justify-between bg-f9f9f9 sm:px-3 sm:py-2 px-1 py-1 rounded-xl sm:text-base text-xxxs'>
                    <Image className=' sm:mr-3 mr-1 sm:w-fit sm:h-fit w-2 h-2' src={job} alt="Search Icon"></Image>
                    Full Time
                </div>

            </div>

            <p className="sm:font-black font-bold sm:text-xl text-xxs sm:pt-7 pt-2 text-my-green">Apply Now <span className='ml-5'>&gt;</span></p>
            

        </div>
    )
}