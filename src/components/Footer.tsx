export default function Footer() {
  return (
    <footer className="bg-[#1E252B] pt-20 pb-10 max-md:pt-10">
      <div className="border-t border-[#FFFFFF26] w-full mb-[70px] max-md:mb-10"></div>
      <div className="max-w-[1224px] mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 max-md:gap-8 max-md:mb-8 max-md:text-center">
          
          <div className="flex flex-col gap-6 max-md:gap-4 max-md:items-center">
            <div className="flex items-center gap-3 max-md:gap-2 max-md:justify-center">
              <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="38" height="38" rx="8" fill="#FF6E30"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M19.9645 12.4359C19.632 12.4359 19.3089 12.4769 19 12.5542C19.1988 10.7606 19.9148 9.12398 20.9963 7.79492C25.2971 8.30464 28.6332 11.9646 28.6332 16.4029V22.7294C28.4605 22.7391 28.2864 22.744 28.1112 22.744C24.6706 22.744 21.6709 20.8483 20.1028 18.0423H23.9315V16.4029C23.9315 14.212 22.1554 12.4359 19.9645 12.4359Z" fill="white"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M9.25642 16.9507C9.25642 11.625 13.5738 7.30762 18.8995 7.30762C21.5623 7.30762 23.9731 8.38695 25.7182 10.132C24.1095 8.52336 21.9351 7.48044 19.5191 7.32724C17.894 9.12575 16.9044 11.5095 16.9044 14.1243C16.9044 14.3194 16.9099 14.5131 16.9208 14.7055C16.299 15.2538 15.9068 16.0565 15.9068 16.9507V17.6157H21.8922L17.5214 17.6158C18.9445 21.4968 22.672 24.2661 27.0462 24.2661C27.5546 24.2661 28.0543 24.2287 28.5425 24.1565V28.2563H21.8922V24.2661H15.9068V28.2563H9.25642V20.9409V16.9507Z" fill="white"/>
              </svg>
              <p className="font-['Poppins'] font-semibold text-[22px] text-[#FFFFFFE5] max-md:text-lg">antools.</p>
            </div>
            
            <p className="font-['Poppins'] font-medium text-base text-[#FFFFFFE5] max-md:text-sm">Copyright 2021. Antools</p>
            
            <p className="font-['Poppins'] font-normal text-sm leading-[25px] text-[#FFFFFF8C] max-md:text-xs max-md:leading-5">
              Antool is a web collection of information on paid or free Design and Development tools
            </p>
          </div>

          <div className="flex flex-col gap-5 max-md:gap-3 max-md:items-center">
            <h3 className="font-['Poppins'] font-medium text-xl text-[#FFFFFFE5] max-md:text-lg">Contact Us</h3>
            <a href="tel:+621987463" className="font-['Poppins'] font-medium text-base text-[#FFFFFF8C] hover:text-[#FF6E30] transition-colors max-md:text-sm">
              +621987463
            </a>
            <p className="font-['Poppins'] font-medium text-base text-[#FFFFFF8C] max-md:text-sm">
              M Building, No.10 A
            </p>
            <a href="mailto:antools@awesome.com" className="font-['Poppins'] font-medium text-base text-[#FFFFFF8C] hover:text-[#FF6E30] transition-colors max-md:text-sm">
              antools@awesome.com
            </a>
          </div>

          <div className="flex flex-col gap-5 max-md:gap-3 max-md:items-center">
            <h3 className="font-['Poppins'] font-medium text-xl text-[#FFFFFFE5] max-md:text-lg">Categories</h3>
            <a href="#" className="font-['Poppins'] font-medium text-base text-[#FFFFFF8C] hover:text-[#FF6E30] transition-colors max-md:text-sm">
              Design
            </a>
            <a href="#" className="font-['Poppins'] font-medium text-base text-[#FFFFFF8C] hover:text-[#FF6E30] transition-colors max-md:text-sm">
              Development
            </a>
          </div>

          <div className="flex flex-col gap-5 max-md:gap-3 max-md:items-center">
            <h3 className="font-['Poppins'] font-medium text-xl text-[#FFFFFFE5] max-md:text-lg">Company Info</h3>
            <a href="#" className="font-['Poppins'] font-medium text-base text-[#FFFFFF8C] hover:text-[#FF6E30] transition-colors max-md:text-sm">
              About Us
            </a>
            <a href="#" className="font-['Poppins'] font-medium text-base text-[#FFFFFF8C] hover:text-[#FF6E30] transition-colors max-md:text-sm">
              Our Partners
            </a>
            <a href="#" className="font-['Poppins'] font-medium text-base text-[#FFFFFF8C] hover:text-[#FF6E30] transition-colors max-md:text-sm">
              Blog
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}
