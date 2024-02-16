import React from 'react';

const WhyChooseUs = () => {
    return (
        <div className="text-center p-8 w-4/5 mx-auto">
            <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                Why to choose US?
            </h2>

            <div className="flex flex-wrap items-center mt-20 text-left text-center">
                <div className="w-full md:w-3/5 lg:w-1/2 px-4">
                    <img src="https://picsum.photos/400/240" alt="gem" className="inline-block rounded shadow-lg border border-merino-400" />
                </div>
                <div className="w-full md:w-2/5 lg:w-1/2 px-4 text-center md:text-left lg:pl-12">
                    <h3 className="font-bold mt-8 text-xl md:mt-0 sm:text-2xl">
                    Expertise: 
                    </h3>
                    <p className="sm:text-lg mt-6">
                    Benefit from our team's extensive expertise in application development, marketing strategies, and software maintenance, ensuring that every aspect of your digital presence is handled with precision and proficiency.
                    </p>
                </div>
            </div>

            <div className="flex flex-wrap items-center mt-20 text-left text-center">
                <div className="w-full md:w-3/5 lg:w-1/2 px-4">
                    <img src="https://picsum.photos/400/240" alt="project members" className="inline-block rounded shadow-lg border border-merino-400" />
                </div>
                <div className="w-full md:w-2/5 lg:w-1/2 px-4 md:order-first text-center md:text-left lg:pr-12">
                    <h3 className="font-bold mt-8 text-xl md:mt-0 sm:text-2xl">
                    Integrated Solutions: 
                    </h3>
                    <p className="sm:text-lg mt-6">
                    We offer comprehensive solutions that cover the entire lifecycle of 
                    your digital assets, from initial development to ongoing maintenance and marketing efforts,
                     providing a seamless and cohesive experience for your business.
                    </p>
                </div>
            </div>

            <div className="flex flex-wrap items-center mt-20 text-left text-center">
                <div className="w-full md:w-3/5 lg:w-1/2 px-4">
                    <img src="https://picsum.photos/400/240" alt="editor" className="inline-block rounded shadow-lg border border-merino-400" />
                </div>
                <div className="w-full md:w-2/5 lg:w-1/2 px-4 text-center md:text-left lg:pl-12">
                    <h3 className="font-bold mt-8 text-xl md:mt-0 sm:text-2xl">
                    Customized Approach:
                    </h3>
                    <p className="sm:text-lg mt-6">
                     Our services are tailored to meet your unique needs and goals.
                     We take the time to understand your business objectives and craft solutions 
                     that align with your vision, ensuring maximum effectiveness and impact.
                    </p>
                </div>
            </div>

            <div className="flex flex-wrap items-center mt-20 text-left text-center">
                <div className="w-full md:w-3/5 lg:w-1/2 px-4">
                    <img src="https://picsum.photos/400/240" alt="bulk editing" className="inline-block rounded shadow-lg border border-merino-400" />
                </div>
                <div className="w-full md:w-2/5 lg:w-1/2 px-4 md:order-first text-center md:text-left lg:pr-12">
                    <h3 className="font-bold mt-8 text-xl md:mt-0 sm:text-2xl">
                    Continuous Support:
                    </h3>
                    <p className="sm:text-lg mt-6">
                     We provide ongoing support and maintenance for your 
                    applications and software, ensuring that they remain up-to-date, secure,
                     and optimized for performance. Our dedicated team is always available to
                      address any issues and provide assistance whenever you need it
                    </p>
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;
