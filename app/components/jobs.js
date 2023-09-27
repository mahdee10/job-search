import ang from "../../public/imgs/ang.png"
import JobBanner from "./jbanner"
export default function Jobs(){
    const jobs=[
        {
            title:"UI/UX Designer",
            content:"Dimension Studio",
            path:ang
        },
        {
            title:"Full Stack Developer",
            content:"Alpander",
            path:ang
        },
        {
            title:"Product Designer",
            content:"XReact Tech",
            path:ang
        },
    ]
    return(
        <div className="bg-fbfbfb">
            <section className="sm:px-24 px-12 sm:pt-8 sm:pb-20 mx-auto 2xl:container pb-10 overflow-hidden">
            <h3 className="font-black sm:text-3xl text-2xl pt-14 w-full text-center">Recently Added Jobs</h3>
                <p className="text-969696 pt-5 sm:text-base text-xs text-center sm:px-44">
                    Lorarn ipsum dolor sit amnet, consoctotur ad piscing oft.
                    Sod quis lacus non orci auismod -vostibulum vitoo ul. ax.
                    Qulsguo ul arou allectus tristiaue auctor sil arnot at turpis.
                </p>

                <div className="flex  justify-between flex-row   pt-10 ">
                {jobs.map((job) => (
                        <JobBanner key={job.title} title={job.title} content={job.content} path={job.path} />
                    ))}
                </div>
                <div className="flex justify-center pt-5">
                    <button className=" text-my-green border-my-green sm:py-3 py-2 sm:px-5 px-2.5  border-2 rounded-lg w-fit sm:text-base text-sm">View more</button>

                </div>
            </section>
        </div>
    )
}