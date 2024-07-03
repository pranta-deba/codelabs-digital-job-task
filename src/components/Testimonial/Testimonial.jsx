import Button1 from "../Buton/Button1";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination,Autoplay } from 'swiper/modules';


const Testimonial = () => {
    return (
        <div data-aos="fade-up" className="md:max-w-[1440px] md:w-[1160px] mx-auto mt-20 px-2 space-y-3 mb-20">
            <Button1 text="Testimonial" />
            <h1 className="text-4xl font-semibold">What they say about us</h1>
            <div className="flex justify-center items-center">
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    pagination={{
                        clickable: true,
                    }}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                      }}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 50,
                        },
                    }}
                    modules={[Pagination,Autoplay]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className="card ">
                            <div className="card-body">
                                <h2 className="text-xl font-semibold">Expertise and Compassion Combined</h2>
                                <p className="text-[#4D4C7B] font-normal text-[12px]">I cant thank enough for their exceptional care. The doctors and staff showed incredible expertise and compassion throughout my treatment journey. I felt truly cared for every step of the way.</p>
                                <div className="flex items-center gap-3">
                                    <img src="./1.png" alt="" className="h-[44px] w-[44px]"/>
                                    <div>
                                        <p className="text-[12px] font-semibold">Sarah D, <span className="text-[#4D4C7B] font-normal">IT Professional</span></p>
                                        <div className="rating rating-xs">
                                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                            <input
                                                type="radio"
                                                name="rating-5"
                                                className="mask mask-star-2 bg-orange-400"
                                                defaultChecked />
                                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card">
                            <div className="card-body">
                                <h2 className="text-xl font-semibold">Life-Saving Care, Life-Changing Experience</h2>
                                <p className="text-[#4D4C7B] font-normal text-[12px]">My experience at [Healthcare Provider Name] was life-changing. The prompt and accurate diagnosis, coupled with the advanced treatments they provided, saved my life.</p>
                                <div className="flex items-center gap-3">
                                    <img src="./2.png" alt="" className="h-[44px] w-[44px]"/>
                                    <div>
                                        <p className="text-[12px] font-semibold">Michael R, <span className="text-[#4D4C7B] font-normal">Business Executive</span></p>
                                        <div className="rating rating-xs">
                                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                            <input
                                                type="radio"
                                                name="rating-5"
                                                className="mask mask-star-2 bg-orange-400"
                                                defaultChecked />
                                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card">
                            <div className="card-body">
                                <h2 className="text-xl font-semibold">A Partner in Health and
                                Wellness</h2>
                                <p className="text-[#4D4C7B] font-normal text-[12px]">As a busy professional, I appreciate the convenience and quality of care I receive at [Healthcare Provider Name]. From telemedicine consultations to routine check-ups, they have become my trusted partner in health and</p>
                                <div className="flex items-center gap-3">
                                    <img src="./3.png" alt="" className="h-[44px] w-[44px]"/>
                                    <div>
                                        <p className="text-[12px] font-semibold">David S, <span className="text-[#4D4C7B] font-normal">Lawyer</span></p>
                                        <div className="rating rating-xs">
                                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                            <input
                                                type="radio"
                                                name="rating-5"
                                                className="mask mask-star-2 bg-orange-400"
                                                defaultChecked />
                                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card">
                            <div className="card-body">
                                <h2 className="text-xl font-semibold">Expertise and Compassion Combined</h2>
                                <p className="text-[#4D4C7B] font-normal text-[12px]">I cant thank enough for their exceptional care. The doctors and staff showed incredible expertise and compassion throughout my treatment journey. I felt truly cared for every step of the way.</p>
                                <div className="flex items-center gap-3">
                                    <img src="./1.png" alt="" className="h-[44px] w-[44px]"/>
                                    <div>
                                        <p className="text-[12px] font-semibold">Sarah D, <span className="text-[#4D4C7B] font-normal">IT Professional</span></p>
                                        <div className="rating rating-xs">
                                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                            <input
                                                type="radio"
                                                name="rating-5"
                                                className="mask mask-star-2 bg-orange-400"
                                                defaultChecked />
                                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card">
                            <div className="card-body">
                                <h2 className="text-xl font-semibold">Life-Saving Care, Life-Changing Experience</h2>
                                <p className="text-[#4D4C7B] font-normal text-[12px]">My experience at [Healthcare Provider Name] was life-changing. The prompt and accurate diagnosis, coupled with the advanced treatments they provided, saved my life.</p>
                                <div className="flex items-center gap-3">
                                    <img src="./2.png" alt="" className="h-[44px] w-[44px]"/>
                                    <div>
                                        <p className="text-[12px] font-semibold">Michael R, <span className="text-[#4D4C7B] font-normal">Business Executive</span></p>
                                        <div className="rating rating-xs">
                                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                            <input
                                                type="radio"
                                                name="rating-5"
                                                className="mask mask-star-2 bg-orange-400"
                                                defaultChecked />
                                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default Testimonial;