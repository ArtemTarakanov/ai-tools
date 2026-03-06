import {useState} from 'react';
export default function Header(){
    const [isOpen, setIsOpen] = useState(false);
    return(
        <section className="bg-[#1E252B] min-h-18.75 flex items-center justify-around px-27.75 py-6.5 max-md:px-8 max-md:justify-between ">

            <div className="flex flex-row gap-[12px] items-center max-md:gap-2">

                <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="38" height="38" rx="8" fill="#FF6E30"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M19.9645 12.4359C19.632 12.4359 19.3089 12.4769 19 12.5542C19.1988 10.7606 19.9148 9.12398 20.9963 7.79492C25.2971 8.30464 28.6332 11.9646 28.6332 16.4029V22.7294C28.4605 22.7391 28.2864 22.744 28.1112 22.744C24.6706 22.744 21.6709 20.8483 20.1028 18.0423H23.9315V16.4029C23.9315 14.212 22.1554 12.4359 19.9645 12.4359Z" fill="white"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.25642 16.9507C9.25642 11.625 13.5738 7.30762 18.8995 7.30762C21.5623 7.30762 23.9731 8.38695 25.7182 10.132C24.1095 8.52336 21.9351 7.48044 19.5191 7.32724C17.894 9.12575 16.9044 11.5095 16.9044 14.1243C16.9044 14.3194 16.9099 14.5131 16.9208 14.7055C16.299 15.2538 15.9068 16.0565 15.9068 16.9507V17.6157H21.8922L17.5214 17.6158C18.9445 21.4968 22.672 24.2661 27.0462 24.2661C27.5546 24.2661 28.0543 24.2287 28.5425 24.1565V28.2563H21.8922V24.2661H15.9068V28.2563H9.25642V20.9409V16.9507Z" fill="white"/>
                </svg>

                <p className="font-['Poppins'] font-semibold text-[22px] text-[#FFFFFFE5]">antools.</p>

            </div>

            <ul className="flex flex-row gap-4 items-center max-md:hidden">
                <a href="#" className="font-['Poppins'] font-medium text-base text-[#FFFFFF8C]">Home</a>
                <a href="#" className="font-['Poppins'] font-medium text-base text-[#FFFFFF8C]">Categories</a>
                <a href="#" className="font-['Poppins'] font-medium text-base text-[#FFFFFF8C]">My collection</a>
                <a href="#" className="font-['Poppins'] font-medium text-base text-[#FFFFFF8C]">Blog</a>
            </ul>
            
            <div className="flex flex-row gap-10 items-center max-md:hidden">

                <a href="https://t.me/broskiy_portfolio" className="font-['Poppins'] font-semibold text-base text-[#FFFFFFC7]">Login</a>

                <a href="https://t.me/broskiy_portfolio" className="font-['Poppins'] font-semibold text-base text-[#FDF5FF] bg-[#FF6E30] w-29.5 h-auto px-7 py-3 rounded-lg">Sign Up</a>
                
            </div>

            <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
                     className={`bi bi-caret-down-fill text-[#FF6E30] transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`} viewBox="0 0 16 16">
                    <path
                        d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                </svg>
            </button>

            {isOpen && (
                <div className="md:hidden absolute flex flex-col top-18.75 left-0 w-full bg-[#1E252B] shadow-lg py-6 px-4 animate-slideDown z-50" style={{borderBottom: '1px solid rgba(211, 211, 211, 0.5)'}}>
                    <ul className="flex flex-col gap-6 items-center mb-6" style={{borderBottom: '1px solid #D3D3D3', paddingBottom: '24px'}}>
                        <a href="#" className="font-['Poppins'] font-medium text-base text-[#FFFFFF8C] hover:text-[#FF6E30] transition-colors duration-300">Home</a>
                        <a href="#" className="font-['Poppins'] font-medium text-base text-[#FFFFFF8C] hover:text-[#FF6E30] transition-colors duration-300">Categories</a>
                        <a href="#" className="font-['Poppins'] font-medium text-base text-[#FFFFFF8C] hover:text-[#FF6E30] transition-colors duration-300">My collection</a>
                        <a href="#" className="font-['Poppins'] font-medium text-base text-[#FFFFFF8C] hover:text-[#FF6E30] transition-colors duration-300">Blog</a>
                    </ul>

                    <div className="flex flex-col gap-4 items-center pt-2">
                        <a href="https://t.me/broskiy_portfolio" className="font-['Poppins'] font-semibold text-base text-[#FF6E30] bg-[#FDF5FF]  px-7 py-3 rounded-lg w-full max-w-[200px] text-center ">Login</a>
                        <a href="https://t.me/broskiy_portfolio" className="font-['Poppins'] font-semibold text-base text-[#FDF5FF] bg-[#FF6E30]  px-7 py-3 rounded-lg w-full max-w-[200px] text-center ">Sign Up</a>
                    </div>
                </div>
            )}


        </section>
    );

}