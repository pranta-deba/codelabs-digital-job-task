import Button1 from "../Buton/Button1";
import Button2 from "../Buton/Button2";

const Service = () => {
    return (
        <div className="md:max-w-[1440px] md:w-[1160px] mx-auto px-2">
            <div data-aos="fade-up" className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-20">
                <div className="space-y-6">
                    <Button1 text="Service" />
                    <h1 className="text-4xl font-semibold">Empowering Health, <br /> Enriching Lives</h1>
                    <p className="text-[#4D4C7B]">We are committed to providing high-quality, compassionate care to every patient we serve. Whatever your healthcare needs may be, you can trust us to be your partner in health and wellness.
                    </p>
                    <Button2 text="Appointment" />
                </div>
                <div className="relative space-y-3 md:space-y-0">
                    <img src="./Rectangle2.png" alt="" className="w-full rounded-[30px]" />
                    <div className="w-full absolute left-0 bottom-0 md:left-4 md:bottom-4 bg-[#343268] bg-opacity-70 text-white p-8 rounded-[32px] md:max-w-[395px] space-y-4 flex flex-col md:flex-row gap-4 items-end">
                        <div>
                            <h3 className="text-2xl font-medium">Advanced Technology</h3>
                            <p className="text-base font-normal text-gray-300">Our surgeons are trained in the latest robotic surgical techniques, which allow for greater precision</p>
                        </div>
                        <button className="btn bg-transparent border-none outline-none hover:bg-transparent">
                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                                <circle cx="24" cy="24" r="24" fill="#FFC637" />
                                <path d="M32.1421 16.8579C32.1421 16.3056 31.6944 15.8579 31.1421 15.8579L22.1421 15.8579C21.5899 15.8579 21.1421 16.3056 21.1421 16.8579C21.1421 17.4101 21.5899 17.8579 22.1421 17.8579L30.1421 17.8579L30.1421 25.8579C30.1421 26.4101 30.5899 26.8579 31.1421 26.8579C31.6944 26.8579 32.1421 26.4101 32.1421 25.8579L32.1421 16.8579ZM17.7071 31.7071L31.8492 17.565L30.435 16.1508L16.2929 30.2929L17.7071 31.7071Z" fill="#FFFFF5" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <div data-aos="fade-up" className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-10">
                <div className="relative space-y-3 md:space-y-0">
                    <img src="./Rectangle4.png" alt="" className="w-full rounded-[30px]" />
                    <div className="w-full absolute left-0 bottom-0 md:left-4 md:bottom-4 bg-[#343268] bg-opacity-70 text-white p-8 rounded-[32px] md:max-w-[395px] space-y-4 flex flex-col md:flex-row gap-4 items-end">
                        <div>
                            <h3 className="text-2xl font-medium">Online Doctor Meet</h3>
                            <p className="text-base font-normal text-gray-300">Our surgeons are trained in the latest robotic surgical techniques, which allow for greater precision</p>
                        </div>
                        <button className="btn bg-transparent border-none outline-none hover:bg-transparent">
                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                                <circle cx="24" cy="24" r="24" fill="#FFC637" />
                                <path d="M32.1421 16.8579C32.1421 16.3056 31.6944 15.8579 31.1421 15.8579L22.1421 15.8579C21.5899 15.8579 21.1421 16.3056 21.1421 16.8579C21.1421 17.4101 21.5899 17.8579 22.1421 17.8579L30.1421 17.8579L30.1421 25.8579C30.1421 26.4101 30.5899 26.8579 31.1421 26.8579C31.6944 26.8579 32.1421 26.4101 32.1421 25.8579L32.1421 16.8579ZM17.7071 31.7071L31.8492 17.565L30.435 16.1508L16.2929 30.2929L17.7071 31.7071Z" fill="#FFFFF5" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="relative space-y-3 md:space-y-0">
                    <img src="./Rectangle3.png" alt="" className="w-full rounded-[30px]" />
                    <div className="w-full absolute left-0 bottom-0 md:left-4 md:bottom-4 bg-[#343268] bg-opacity-70 text-white p-8 rounded-[32px] md:max-w-[395px] space-y-4 flex flex-col md:flex-row gap-4 items-end">
                        <div>
                            <h3 className="text-2xl font-medium">Consultancy your health</h3>
                            <p className="text-base font-normal text-gray-300">Our surgeons are trained in the latest robotic surgical techniques, which allow for greater precision</p>
                        </div>
                        <button className="btn bg-transparent border-none outline-none hover:bg-transparent">
                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                                <circle cx="24" cy="24" r="24" fill="#FFC637" />
                                <path d="M32.1421 16.8579C32.1421 16.3056 31.6944 15.8579 31.1421 15.8579L22.1421 15.8579C21.5899 15.8579 21.1421 16.3056 21.1421 16.8579C21.1421 17.4101 21.5899 17.8579 22.1421 17.8579L30.1421 17.8579L30.1421 25.8579C30.1421 26.4101 30.5899 26.8579 31.1421 26.8579C31.6944 26.8579 32.1421 26.4101 32.1421 25.8579L32.1421 16.8579ZM17.7071 31.7071L31.8492 17.565L30.435 16.1508L16.2929 30.2929L17.7071 31.7071Z" fill="#FFFFF5" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;