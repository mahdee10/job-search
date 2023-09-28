import acc from "../../public/imgs/acc.png"
import brain from "../../public/imgs/brain.png"
import bank from "../../public/imgs/bank.png"
import pro from "../../public/imgs/pro.png"
import sup from "../../public/imgs/sup.png"
import Image from 'next/image'
import CategoryBanner from "./cbanners"
import MySwiperComponent from "./cswiper"

export default function Categories() {
    const cats = [
        {
            title: "Desig and Development",
            content: "350 Job Vacancy",
            path: brain
        },
        {
            title: "Accounting and Finance",
            content: "350 Job Vacancy",
            path: acc
        },
        {
            title: "Bank Instituion",
            content: "350 Job Vacancy",
            path: bank
        },
        {
            title: "Product Management",
            content: "350 Job Vacancy",
            path: pro
        },
        {
            title: "Customer Support",
            content: "350 Job Vacancy",
            path: sup
        },
    ]
    return (
        <div className="bg-eef9f6">
            <section className="sm:px-24 px-12 sm:pt-8 sm:pb-20 mx-auto 2xl:container pb-10 overflow-hidden">
                <h3 className="font-black sm:text-3xl text-2xl pt-14 w-full text-center">Popular Job Categories</h3>
                <p className="text-969696 pt-5 sm:text-base text-xs text-center sm:px-44">
                    Lorarn ipsum dolor sit amnet, consoctotur ad piscing oft.
                    Sod quis lacus non orci auismod -vostibulum vitoo ul. ax.
                    Qulsguo ul arou allectus tristiaue auctor sil arnot at turpis.
                </p>

                {/* <div className=" image-container flex  justify-between flex-row   pt-10 ">
                    <div className="bg-my-green sm:pl-9 pl-3 sm:pr-7 pr-4 flex flex-col rounded-2xl sm:w-64 sm:h-60 w-28 h-24 content-end sm:mb-0 mb-3 shrink-0 sm:mr-7 mr-6">
                        <Image className='sm:pt-9 pt-3 sm:w-fit sm:h-20 w-fit sm:h-10 h-7' src={brain} alt="Search Icon"></Image>
                        <h4 className='sm:font-black font-bold sm:text-xl text-xxs sm:pt-7 pt-2 sm:pr-10 text-white'>Design and Development</h4>
                        <p className="sm:text-xxs text-xxxs sm:pt-7 pt-2 sm:pb-9 pb-4 text-white">350 Job Vacancy</p>
                    </div>
                    {cats.map((cat) => (
                        <CategoryBanner key={cat.title} title={cat.title} content={cat.content} path={cat.path} />
                    ))}
                </div> */}
                
                <div className="pt-10">
                <MySwiperComponent cats={cats} />
                </div>

                <div className="flex justify-center pt-5">
                    <button className=" text-my-green border-my-green sm:py-3 py-2 sm:px-5 px-2.5  border-2 rounded-lg w-fit sm:text-base text-sm">View more</button>

                </div>

            </section>
        </div>
    )
}