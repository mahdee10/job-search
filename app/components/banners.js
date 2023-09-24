import Image from 'next/image'

export default function Banner(props){
    return(
        <div className="bg-ffffff  sm:pl-9 pl-4 sm:pr-7 pr-4 flex flex-col rounded-xl sm:w-q w-h content-end sm:mb-0 mb-3">
            <Image className='sm:pt-9 pt-4 sm:w-10 sm:h-20 w-5 h-10'  src={props.path} alt="Search Icon"></Image>
            <h4 className='sm:font-black font-bold sm:text-xl text-sm sm:pt-7 pt-3'>{props.title}</h4>
            <p className="sm:text-xxs text-xxxs sm:pt-4 pt-3 sm:pb-9 pb-4 text-8a8a8a">{props.details}</p>
        </div>
    )
}