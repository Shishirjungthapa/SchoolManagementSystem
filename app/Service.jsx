import services from "./data/servicesData";

function Service() {
    return (
        <>
            <div className="flex flex-col w-full h-full gap-10 pt-5 pb-32">
                <div className="flex flex-col items-center justify-center gap-10 px-10 lg:px-48 md:px-10">
                    <h1 className="text-3xl font-semibold text-center text-homeblue">We Provide Integrated School Management</h1>
                    <p className="text-center">
                        Nepal Web Studio offers customized school management software that provides 
                        end-to-end solutions for admissions, academics, staff management, and more.
                        This all-in-one platform integrates features like biometrics, SMS, e-exams, and a mobile app,
                        empowering your institute to focus on education while we handle the administrative tasks.
                    </p>
                </div>
                <div className="w-full px-14 md:px-15 lg:px-52">
                    <div className="grid w-full grid-cols-1 gap-x-7 gap-y-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        {services.map((service, index) => (
                            <div key={index} className="relative flex flex-col items-center w-full gap-5 p-5 overflow-visible bg-white shadow-lg h-44 rounded-xl">
                                <div className="text-4xl sm:text-5xl md:text-6xl text-homeblue">
                                    {service.icon}
                                </div>   
                                <span className="text-center">{service.title}</span>
                                <button className="absolute bottom-[-18px] left-1/2 transform -translate-x-1/2 w-24 text-sm text-white rounded-lg bg-homeviolet h-9">
                                    More
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Service;
