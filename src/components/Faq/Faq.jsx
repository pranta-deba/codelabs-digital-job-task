import Button1 from "../Buton/Button1";

const Faq = () => {
    return (
        <div  data-aos="fade-up" className="md:max-w-[1440px] md:w-[1160px] mx-auto mt-20 px-2 space-y-3 mb-20">
            <Button1 text="Faq" />
            <h1 className="text-4xl font-semibold">Frequntly Asked Question</h1>
            <div>
                <div className="join join-vertical w-full">
                    <div className="collapse collapse-arrow join-item">
                        <input type="radio" name="my-accordion-4" defaultChecked />
                        <div className="collapse-title text-xl font-medium border-b">What are your office hours?</div>
                        <div className="collapse-content">
                            <p className="text-[#343268] text-[14px] mt-3">Our office hours vary by location, but typically we are open Monday through Friday from 8:00 AM to 5:00 PM. Some locations may offer extended hours or weekend appointments. Please contact your nearest clinic for specific hours.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title text-xl font-medium border-b">How can I make an appointment?</div>
                        <div className="collapse-content">
                            <p className="text-[#343268] text-[14px] mt-3">You can make an appointment by calling our office at [phone number], using our online appointment scheduling system, or visiting our clinic in person. We also offer telehealth appointments for your convenience.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border-b">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title text-xl font-medium">Do you accept insurance?</div>
                        <div className="collapse-content">
                            <p>Yes, we accept most major insurance plans. Please contact our office or check our website for a list of accepted insurance providers. If you have any questions about your coverage, our billing department is here to help.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border-b">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title text-xl font-medium">What should I bring to my first appointment?</div>
                        <div className="collapse-content">
                            <p>For your first appointment, please bring a valid ID, your insurance card, a list of current medications, and any relevant medical records. If you have specific concerns or symptoms, note them down to discuss with your doctor.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border-b">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title text-xl font-medium">How do I access my medical records?</div>
                        <div className="collapse-content">
                            <p>You can access your medical records through our secure patient portal. If you need assistance setting up or accessing your account, please contact our office for support.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border-b">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title text-xl font-medium">How do I refill my prescription?</div>
                        <div className="collapse-content">
                            <p>You can request a prescription refill through our patient portal, by calling our office, or by visiting your pharmacy. Please allow 48 hours for processing. For urgent refill requests, contact our office directly.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;