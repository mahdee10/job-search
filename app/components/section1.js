import reg from "../../public/imgs/reg.png"
import resume from "../../public/imgs/resume.png"
import ajob from "../../public/imgs/ajob.png"
import fjob from "../../public/imgs/fjob.png"
import Banner from "./banners"
export default function How(){
    const banner=[
        {
            title:"Register",
            path:reg,
            details:"Lorem ipsum dolor sit donet, consectetur adipiscing elit. sed quis lacus non orci euismod vestibulum vitae ut ex"
        },
        {
            title:"Create Resume",
            path:resume,
            details:"Lorem ipsum dolor sit donet, consectetur adipiscing elit. sed quis lacus non orci euismod vestibulum vitae ut ex"
        },
        {
            title:"Find Job",
            path:fjob,
            details:"Lorem ipsum dolor sit donet, consectetur adipiscing elit. sed quis lacus non orci euismod vestibulum vitae ut ex"
        },
        {
            title:"Apply Job",
            path:ajob,
            details:"Lorem ipsum dolor sit donet, consectetur adipiscing elit. sed quis lacus non orci euismod vestibulum vitae ut ex"
        }
    ]
    return(
        <section className="sm:px-24 px-12 sm:pt-20 sm:pb-20 bg-fbfbfb">
            <h3 className="font-black text-2xl pt-14">How it works</h3>
            <div className=" image-container flex  justify-between flex-row  flex-wrap  pt-10">

                    {banner.map((banner) => (
                        <Banner key={banner.title} title={banner.title} details={banner.details} path={banner.path} />
                    ))}
                </div>
        </section>
    )
}