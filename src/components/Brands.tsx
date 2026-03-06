import {useState} from 'react'
export default function Brands(){
    const [current, setCurrent] = useState(0);
    const brand = [
        { icon: '/images/microsoft.svg' },
        { icon: '/images/google.svg' },
        { icon: '/images/slack.svg' },
        { icon: '/images/wordpress.svg' },
    ]

    return(
        <section className="min-h-150 bg-[#1E252B] flex justify-center max-md:px-4 max-md:flex max-md:items-center">
            <div className="flex flex-col bg-[#2C353D33] backdrop-blur-[50px]  max-h-[253px] max-w-[1224px] rounded-[25px] px-[80px] py-[55px] gap-[55px] max-md:backdrop-blur-none max-md:w-full max-md:py-5 max-md:gap-10">
                <p className="font-['Poppins'] font-medium text-2xl leading-[100%] text-[#FFFFFFCC] text-center max-md:text-[22px]">Trusted more than 150+ brand</p>

                <div className="flex gap-[100px] items-center justify-center max-md:hidden">
                    {brand.map((item, i)=>(
                        <div key={i}>
                            <img src={item.icon} alt="brand"/>
                        </div>
                    ))}
                </div>

                <div className="md:hidden flex flex-col gap-4 items-center justify-center max-w-120">
                    <img src={brand[current].icon} alt="image"/>
                </div>

                <div className="flex gap-4 overflow-visible justify-center md:hidden">
                    <button onClick={() => setCurrent(current === 0 ? brand.length - 1 : current - 1)} className="text-[#FF6E30] hover:opacity-70 transition-opacity p-1">

                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor"
                             className="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
                            <path
                                d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"/>
                        </svg>

                    </button>

                    <button onClick={() => setCurrent(current === brand.length - 1 ? 0 : current + 1)} className="text-[#FF6E30] hover:opacity-70 transition-opacity p-1">

                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor"
                             className="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
                            <path
                                d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"/>
                        </svg>

                    </button>
                </div>
            </div>

        </section>
    );
}