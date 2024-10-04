import { FaArrowRight } from "react-icons/fa";

const Latest = () => {
    return <div className="bg-[#f4faff]">
        <div className="container mx-auto text-center text-black py-16">
            <div >
                <h1 className="text-6xl font-semibold">Latest News</h1>
                <p className="w-1/2 mx-auto mt-5">We offer a wide range of funeral services and arrangements to help you honor and  celebrate the life of your loved one.</p>
            </div>
            <div className="flex justify-between items-start gap-6 mt-10">
                <div className="card w-3/5 min-h-[400px] text-black shadow-xl">
                    <figure className="pt-10">
                        <img
                            src={'/Rectangle 19.png'}
                            alt="Shoes"
                            className="rounded-xl h-[400px] w-full object-cover"
                        />
                    </figure>
                    <div className="card-body flex flex-col justify-between text-start h-full">
                        <h2>25 Dec. 2023!</h2>
                        <p className='text-xl '>Helping close a Friend in Grief Get Started with a Beautiful Template</p>
                        <div className="w-full text-black mt-4">
                            <button className="btn btn-outline text-blue-400">
                                Read More <FaArrowRight />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="flex justify-between items-start gap-6">
                    <div className="card h-full text-black shadow-xl min-h-[400px] flex flex-col">
                        <figure className="pt-10">
                            <img
                                src={'/Rectangle 19.png'}
                                alt="Shoes"
                                className="rounded-xl h-[400px] w-full object-cover"
                            />
                        </figure>
                        <div className="card-body flex flex-col justify-between text-start h-full">
                            <h2>25 Dec. 2023!</h2>
                            <p className='text-xl '>Helping close a Friend in Grief Get Started with a Beautiful Template</p>
                            <div className="w-full text-black mt-4">
                                <button className="btn btn-outline text-blue-400">
                                    Read More <FaArrowRight />
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="card h-full text-black shadow-xl min-h-[400px] flex flex-col">
                        <figure className="pt-10">
                            <img
                                src={'/Rectangle 19.png'}
                                alt="Shoes"
                                className="rounded-xl h-[400px] w-full object-cover"
                            />
                        </figure>
                        <div className="card-body flex flex-col justify-between text-start h-full " >
                            <h2>25 Dec. 2023!</h2>
                            <p className='text-xl '>Helping close a Friend in Grief Get Started with a Beautiful Template</p>
                            <div className="w-full text-black mt-4">
                                <button className="btn btn-outline text-blue-400">
                                    Read More <FaArrowRight />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>;
};
export default Latest;