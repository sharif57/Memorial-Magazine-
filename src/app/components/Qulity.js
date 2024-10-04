const Qulity = () => {
    const services = [
        {
            image: '/Rectangle 11.png',
            title: 'All People Memorial Moments',
            des: 'Memorial Moments Magazine People Stories section serves as a platform to celebrate the diverse, touching, and impactful narratives of individuals, fostering connection and'
        },
        {
            image: '/Rectangle 11 (2).png',
            title: 'Veterans Memorial Moments',
            des: 'This specialized section within Memorial Moments Magazine serves as a tribute to the dedicated individuals who serve or have served in uniformed profession'
        },
        {
            image: '/Rectangle 11 (1).png',
            title: 'Pet Memorial Moments',
            des: 'This Pets Stories section within Memorial Moments Magazine aims to celebrate the joy, companionship, and profound connections that people experience wi'
        },

    ]
    return <div className="bg-[#eaf3fc] py-7  mt-14">
        <div className="w-1/2 mx-auto mt-14 text-center text-black">
            <h1 className="text-6xl font-semibold">Quality Services</h1>
            <p className="w-1/2 mx-auto mt-4">We offer a wide range of funeral services and arrangements to help you honor and celebrate the life og your loved one.</p>
        </div>
        <div className="container mx-auto mt-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {
                    services.map((service, index) => (
                        <div key={index} className="card   text-black  shadow-xl">
                            <figure className=" pt-10">
                                <img
                                    src={service.image}
                                    alt="Shoes"
                                    className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">{service.title}!</h2>
                                <p>{service.des}</p>
                                <div className="w-full text-black mt-4">
                                    <button className="btn btn-outline w-full text-black">More Details</button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>;
};
export default Qulity;