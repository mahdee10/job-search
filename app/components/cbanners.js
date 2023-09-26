import Image from 'next/image'
export default function CategoryBanner(props){
    return (
        <div className="bg-ffffff  sm:pl-9 pl-3 sm:pr-7 pr-4 flex flex-col rounded-2xl sm:w-64 sm:h-60 w-28 h-24 content-end sm:mb-0 mb-3 shrink-0 sm:mr-7 mr-6">
            <Image className='sm:pt-9 pt-3 sm:w-fit sm:h-20 w-fit sm:h-10 h-7'  src={props.path} alt="Search Icon"></Image>
            <h4 className='sm:font-black font-bold sm:text-xl text-xxs sm:pt-7 pt-2 sm:pr-10 '>{props.title}</h4>
            <p className="sm:text-xxs text-xxxs sm:pt-7 pt-2 sm:pb-9 pb-4 text-8a8a8a">{props.content}</p>
        </div>
    )
}