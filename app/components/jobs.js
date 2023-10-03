import prod from "../../public/imgs/prod.png"
import ds from "../../public/imgs/ds.png"
import angg from "../../public/imgs/angg.png"
import r from "../../public/imgs/right.png"
import l from "../../public/imgs/left.png"
import Image from 'next/image'

import JobBanner from "./jbanner"
import MySwiperComponent from "./jswiper"
export default function Jobs() {
    const jobs = [
        {
            title: "UI/UX Designer",
            content: "Dimension Studio",
            path: ds
        },
        {
            title: "Full Stack Developer",
            content: "Alpander",
            path: angg
        },
        {
            title: "Product Designer",
            content: "XReact Tech",
            path: prod
        },
        {
            title: "Product Designers",
            content: "XReact Tech",
            path: prod
        },
    ]
    return (
        <div className="bg-fbfbfb">
            <section className="sm:px-24 px-12 sm:pt-8 sm:pb-12 mx-auto 2xl:container pb-10 overflow-hidden">
                <h3 className="font-black sm:text-3xl text-2xl pt-14 w-full text-center">Recently Added Jobs</h3>
                <p className="text-969696 pt-5 sm:text-base text-xs text-center sm:px-44">
                    Lorarn ipsum dolor sit amnet, consoctotur ad piscing oft.
                    Sod quis lacus non orci auismod -vostibulum vitoo ul. ax.
                    Qulsguo ul arou allectus tristiaue auctor sil arnot at turpis.
                </p>

                {/* <div className="flex  justify-between flex-row   pt-10 ">
                    {jobs.map((job) => (
                        <JobBanner key={job.title} title={job.title} content={job.content} path={job.path} />
                    ))}
                </div> */}
            </section>
            <section className="sm:px-24 px-12 sm:pt-5  mx-auto 2xl:container  overflow-hidden">

                <div className="">
                    <MySwiperComponent jobs={jobs} />
                </div>
            </section>
            <section className="sm:px-24 px-12 sm:pt-3 sm:pb-20 mx-auto 2xl:container pb-10 overflow-hidden">
                <div className="flex justify-center pt-5">
                    <button className=" text-my-green border-my-green sm:py-3 py-2 sm:px-5 px-2.5  border-2 rounded-lg w-fit sm:text-base text-sm">View more</button>

                </div>

                <h3 className="font-black sm:text-4xl text-2xl pt-20 w-full sm:text-left text-center sm:px-0 px-4">People's Feedback about JobNow!</h3>


                <div className="flex sm:flex-row flex-col sm:justify-between items-center">
                    <div className="flex flex-col sm:w-54 sm:px-0 px-12">
                        <p className="text-969696  sm:text-base text-xs sm:text-left text-center pt-5 sm:pr-7">
                            Lorarn ipsum dolor sit amnet, consoctotur ad piscing oft.
                            Sod quis lacus non orci auismod -vostibulum vitoo ul. ax.
                        </p>
                        <p className=" sm:pt-16 pt-5 sm:text-base text-xs sm:text-left text-center sm:pr-7 sm:pb-0 pb-10">
                            Lorarn ipsum dolor sit amnet, consoctotur ad piscing oft.
                            Sod quis lacus non orci auismod -vostibulum vitoo ul. ax.
                            Qulsguo ul arou allectus tristiaue auctor sil arnot at turpis.
                        </p>
                        <div className=" sm:flex sm:flex-col hidden">

                            <h4 className='sm:pt-16 sm:font-black font-bold sm:text-xl text-xxs sm:pt-7 pt-2  sm:text-left text-center'>Brown Garcia</h4>
                            <p className="sm:text-xs sm:pr-4 text-xxxs sm:pt-5 pt-1 sm:pb-9 pb-2 text-8a8a8a sm:text-left text-center">
                                Full Stack Developer  in Xreact Tech
                            </p>
                            <div className='flex   rounded-xl sm:text-base text-xxxs sm:justify-start justify-center'>
                                <a href="/">
                                    <Image className=' sm:mr-3 mr-1 sm:w-fit sm:h-fit w-2 h-2' src={l} alt="Search Icon"></Image>

                                </a>
                                <a href="/">
                                    <Image className=' sm:mr-3 mr-1 sm:w-fit sm:h-fit w-2 h-2' src={r} alt="Search Icon"></Image>


                                </a>
                                
                            </div>
                        </div>

                    </div>
                    <div className="sm:w-2/5 sm:h-fh w-48 h-48  rounded-3xl bg-my-green sm:pt-0">

                    </div>

                    <div className="sm:hidden flex flex-col ">

                        <h4 className='sm:pt-16 sm:font-black font-bold sm:text-xl text-xxs sm:pt-7 pt-2  sm:text-left text-center'>Brown Garcia</h4>
                        <p className="sm:text-xs sm:pr-4 text-xxxs sm:pt-5 pt-1 sm:pb-9 pb-2 text-8a8a8a sm:text-left text-center">
                            Full Stack Developer  in Xreact Tech
                        </p>
                        <div className='flex   rounded-xl sm:text-base text-xxxs sm:justify-start justify-center'>
                            <Image className=' sm:mr-3 mr-1 sm:w-fit sm:h-fit w-2 h-2' src={l} alt="Search Icon"></Image>
                            <Image className=' sm:mr-3 mr-1 sm:w-fit sm:h-fit w-2 h-2' src={r} alt="Search Icon"></Image>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}