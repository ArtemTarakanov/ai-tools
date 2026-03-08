export default function Form(){
    return(
        <section className="h-175 bg-[#1E252B] flex items-center justify-center max-md:p-4 max-md:h-150">

            <div className = "flex flex-col justify-center items-center">
                <h2 className = "font-['Poppins'] font-medium text-5xl leading-[130%] text-center text-[#FFFFFFE5] max-md:max-w-100">Become a contributor?</h2>
                <p className = "font-['Poppins'] font-medium text-3xl leading-[130%] text-center text-[#FFFFFF8C] mt-6 max-md:text-[20px] max-md:max-w-90">Join us and get tips & tricks to become a great Designer and Developer</p>

                <div className = "flex flex-row gap-4 items-center mt-25 max-md:flex max-md:flex-col max-md:w-full max-md:mt-18">
                    <form className = "bg-[#283036] w-[450px] h-16 pl-6 py-5 rounded-2xl flex items-center max-md:w-full">
                        <label></label>
                        <input type="text" placeholder="Enter your email..." className = "font-['Poppins'] font-normal text-[14px] leading-[100%] text-[#FFFFFF61]"/>
                    </form>

                    <button className = "bg-[#FF6E30] w-[130px] h-14 rounded-lg font-['Poppins'] font-semibold text-base leading-[100%] text-[#FFFFFF] max-md:h-13 max-md:w-30">Join Us</button>
                </div>

            </div>

        </section>
    );
}