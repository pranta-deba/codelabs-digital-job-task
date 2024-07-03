import Button1 from "../Buton/Button1";
import Button2 from "../Buton/Button2";

const Help = () => {
    return (
        <div className="md:max-w-[1440px] md:w-[1160px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 mb-20 px-2">
            <div className="space-y-6">
                <Button1 text="Who we are" />
                <h1 className="text-4xl font-semibold">We Help To Get Soultions</h1>
                <p className="text-[#4D4C7B]">We are proud to be a trusted healthcare provider in our community, and we look forward to serving you and your family with excellence, integrity, and compassion. Your health is our priority, and we are here for you every step of the way. We believe in treating each patient with dignity, respect, and empathy, ensuring that they receive the attention and care they deserve.
                </p>
                <Button2 text="Learn more" />
            </div>
            <div className="relative space-y-3 md:space-y-0">
                <img src="./Rectangle.png" alt="" className="w-full"/>
                <div className="w-full md:absolute md:-left-20 md:-bottom-12 bg-[#343268] text-white p-8 rounded-[32px] md:max-w-[395px] space-y-4">
                    <h3 className="text-2xl font-medium">Our mission is simple</h3>
                    <p className="text-base font-normal text-gray-300">To provide high-quality healthcare services that are accessible, personalized, and patient-centered.</p>
                </div>
            </div>
        </div>
    );
};

export default Help;