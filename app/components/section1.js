import reg from "../../public/imgs/reg.png"
import resume from "../../public/imgs/resume.png"
import ajob from "../../public/imgs/ajob.png"
import fjob from "../../public/imgs/fjob.png"
import Banner from "./banners"
export default function How() {
    const banner = [
        {
            title: "Register",
            path: reg,
            details: "Lorem ipsum dolor sit donet, consectetur adipiscing elit. sed quis lacus non orci euismod vestibulum vitae ut ex"
        },
        {
            title: "Create Resume",
            path: resume,
            details: "Lorem ipsum dolor sit donet, consectetur adipiscing elit. sed quis lacus non orci euismod vestibulum vitae ut ex"
        },
        {
            title: "Find Job",
            path: fjob,
            details: "Lorem ipsum dolor sit donet, consectetur adipiscing elit. sed quis lacus non orci euismod vestibulum vitae ut ex"
        },
        {
            title: "Apply Job",
            path: ajob,
            details: "Lorem ipsum dolor sit donet, consectetur adipiscing elit. sed quis lacus non orci euismod vestibulum vitae ut ex"
        }
    ]
    return (
        <div className="bg-fbfbfb">
            <section className="sm:px-24 px-12 sm:pt-20 sm:pb-20 mx-auto 2xl:container pb-10">
                <div className="flex flex-wrap sm:flex-row flex-col items-center">

                    <h3 className="order-1 font-black sm:text-3xl text-2xl pt-14 w-full">How it works</h3>
                    <p className="order-2 text-969696 sm:w-9/12 sm:pr-60 pt-5 w-full pr-3 sm:text-base text-xs">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed quis locus non orgi euismod vestibulum vitoo ut ex,
                        Quisque ut orcu of lectus tristique пистосьвоттносьтитоя
                    </p>
                    <button className="sm:order-3 order-4 text-my-green border-my-green sm:py-3 py-2 sm:px-5 px-2.5  border-2 rounded-lg w-fit sm:mt-0 mt-1 sm:text-base text-sm">Learn more</button>
                    <div className="sm:order-4 order-3 image-container flex  justify-between flex-row  flex-wrap  pt-10">
                        {banner.map((banner) => (
                            <Banner key={banner.title} title={banner.title} details={banner.details} path={banner.path} />
                        ))}
                    </div>
                </div>
                <div className="flex sm:flex-row flex-col justify-between items-center sm:pt-20 pt-10">
                    <div className="bg-c4c4c4 sm:w-2/5 sm:h-96 rounded-3xl w-72 h-52">

                    </div>
                    <div className="flex flex-col sm:w-54 gap-y-8 w-full sm:items-start items-center">
                    <h3 className=" font-black sm:text-3xl sm:text-left text-xl pt-14 w-full text-center">We will help you to become an employee in your dream company</h3>
                    <p className="text-969696 pr-5 sm:text-left text-center sm:text-base text-xs">
                    Lorem ipsur dolor sit amet, consectetur adipiscing elit. Sed quis locus non ordi
                     eulsmod vestibulum vitoe ut ex. Quisque ut arou at lectus tristique auctor sit amit at turpis
                    </p>
                    <button className=" text-my-green border-my-green sm:py-3 py-2 sm:px-5 px-2.5  border-2 rounded-lg w-fit sm:text-base text-sm">Learn more</button>
                    </div>
                </div>

            </section>
            
        </div>
    )
}