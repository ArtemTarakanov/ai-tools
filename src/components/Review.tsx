import {useState} from 'react';
export default function Review() {
    const [current, setCurrent] = useState(0);

    const info = [
        {
            image: '/images/image-slider.png',
            description: 'Incididunt cillum do sint sint enim ullamco id deserunt mollit qui reprehenderit do. Velit ex tempor cillum ad sint occaecat. Do nulla velit labore occaecat do deserunt Lorem magna officia incididunt consectetur amet. Sunt consectetur veniam minim ex commodo sint non. Occaecat aute officia excepteur non laboris id qui ad.',
        },

        {
            image: '/images/image-slider.png',
            description: 'The quick brown fox jumps over the lazy dog near the river bank. Sunshine filters through the green leaves of the old oak tree while birds sing softly in the distance. A gentle breeze carries the scent of wild flowers across the meadow where children play happily. Clouds drift slowly across the bright blue sky changing shapes as the wind pushes them forward. Evening approaches bringing cooler air and the promise of a starry night above the quiet village.',
        },

        {
            image: '/images/image-slider.png',
            description: 'Technology advances rapidly changing how we live work and communicate with each other every single day. People use smartphones to connect with friends family and colleagues regardless of where they are located globally. Digital tools help businesses operate more efficiently while creating new opportunities for innovation and growth in various markets. Education systems adapt to include online learning platforms that make knowledge accessible to students around the world instantly. Future developments will likely bring even more surprising changes to our daily routines and societal structures soon.',
        }
    ]
    return(
        <section id="blog" className="h-175 bg-[#1E252B] flex flex-col justify-center items-center max-md:p-4">
            <div className="flex flex-row items-center gap-15 max-md:flex max-md:flex-col max-md:gap-10">

                <div>
                    <img src= {info[current].image} alt="image slider" className="max-md:max-w-[275px]"/>
                </div>

                <div className="relative max-md:max-w-[350px] ">

                    <svg className="absolute -top-10 -left-8 pointer-events-none max-md:w-[80px] max-md:h-[80px] max-md:absolute max-md:-top-6 max-md:-left-4" width="101" height="97" viewBox="0 0 101 97" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M43.1039 6.56612L48.5366 14.5418C46.0389 16.1439 43.0554 18.6358 39.5861 22.0177C36.2743 25.4542 33.0345 29.4451 29.8667 33.9903C26.911 38.4329 24.8486 43.0977 23.6793 47.9847C25.8421 47.8542 27.868 48.1172 29.7571 48.7738C33.2206 49.9776 35.7226 52.1706 37.2633 55.3528C39.0161 58.4323 39.2085 61.9398 37.8406 65.8756C36.2538 70.441 33.6298 73.6755 29.9686 75.579C26.3621 77.3251 22.5123 77.4868 18.4191 76.0641C12.2794 73.9301 8.37397 70.1907 6.70277 64.8458C5.24372 59.3981 5.6359 53.447 7.87932 46.9925C9.35669 42.7419 11.7887 38.0291 15.1754 32.8541C18.7195 27.7339 22.8934 22.8325 27.6969 18.15C32.5005 13.4675 37.6361 9.60618 43.1039 6.56612ZM86.5542 21.6682L91.9869 29.6438C89.4891 31.2459 86.5057 33.7379 83.0364 37.1197C79.7246 40.5562 76.4848 44.5471 73.317 49.0924C70.3613 53.5349 68.2989 58.1997 67.1296 63.0867C69.2924 62.9562 71.3183 63.2192 73.2074 63.8758C76.6709 65.0796 79.1729 67.2726 80.7136 70.4548C82.4664 73.5343 82.6588 77.0419 81.2909 80.9776C79.7041 85.543 77.0801 88.7775 73.4189 90.681C69.8124 92.4271 65.9626 92.5888 61.8694 91.1662C55.7297 89.0322 51.8243 85.2927 50.1531 79.9478C48.694 74.5002 49.0862 68.5491 51.3296 62.0945C52.807 57.8439 55.239 53.1312 58.6257 47.9562C62.1698 42.8359 66.3437 37.9345 71.1472 33.252C75.9508 28.5695 81.0864 24.7082 86.5542 21.6682Z" fill="url(#paint0_linear_68_8)"/>
                        <defs>
                            <linearGradient id="paint0_linear_68_8" x1="66.5449" y1="2.10593" x2="-252.382" y2="320.497" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#FCFCFC" stop-opacity="0"/>
                                <stop offset="1" stop-color="white" stop-opacity="0.5"/>
                            </linearGradient>
                        </defs>
                    </svg>

                    <p className=" z-10 font-['Roboto'] font-normal text-[14px] leading-7.5 tracking-[1.5%] text-[#FFFFFFC7] max-w-[400px] max-md:text-[12px]">{info[current].description}</p>
                </div>
            </div>

            <div className="flex gap-8 justify-center mt-8 max-md:gap-5 max-md:mt-5 ">
                <button onClick={() => setCurrent(current === 0 ? info.length - 1 : current - 1)} className="bg-[#1E252B] backdrop-blur-[50px] rounded-full p-2 hover:opacity-80 transition-opacity">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#FFFFFF8C"
                         className="max-md:w-9 max-md:h-9" viewBox="0 0 16 16">
                        <path fillRule="evenodd"
                            d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
                    </svg>
                </button>

                <button onClick={() => setCurrent(current === info.length - 1 ? 0 : current + 1)} className="bg-[#1E252B] backdrop-blur-[50px] rounded-full p-2 hover:opacity-80 transition-opacity">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#FFFFFF8C"
                         className="max-md:w-9 max-md:h-9" viewBox="0 0 16 16">
                        <path fillRule="evenodd"
                            d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                    </svg>
                </button>
            </div>
        </section>
    );
}