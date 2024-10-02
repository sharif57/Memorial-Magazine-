import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

const RecentSt = () => {
    const users = [
        {
            name: 'David Stanly',
            date: 'August 10, 1945 - July 08, 2019',
            image: '/Rectangle 927.png'
        },
        {
            name: 'Ellenor Stout',
            date: 'August 10, 1945 - July 08, 2019',
            image: '/Rectangle 924.png'
        },
        {
            name: 'Ellenor Stout',
            date: 'August 10, 1945 - July 08, 2019',
            image: '/Rectangle 924 (1).png'
        },
        {
            name: 'David Stanly',
            date: 'August 10, 1945 - July 08, 2019',
            image: '/Rectangle 924 (2).png'
        },
        {
            name: 'David Stanly',
            date: 'August 10, 1945 - July 08, 2019',
            image: '/Rectangle 924 (3).png'
        },
        {
            name: 'David Stanly',
            date: 'August 10, 1945 - July 08, 2019',
            image: '/Rectangle 924 (4).png'
        },

    ]
    return <div className="mt-20 text-black">
        <div className="w-1/2 mx-auto text-center">
            <h1 className="text-6xl font-semibold">Recent Stories</h1>
            <p className="w-1/2 mx-auto mt-4"> We offer a wide range of funeral services and arrangements to help you honor and celebrate the life of your loved one.</p>
        </div>

        <div>
            <div className="grid lg:grid-cols-6 gap-6 my-10 px-10">
                {
                    users.map((data, index) => (
                        <div key={index} className="relative text-white">
                            <Image className="" height={200} width={500} src={data.image}></Image>
                            <div className="absolute bottom-0 left-0 w-full bg-slate-700 bg-opacity-50 text-center p-4">
                                <h3 className="text-4xl font-semibold mb-3">{data.name}</h3>
                                <p>{data.date}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="text-center">
                <button className="btn btn-outline text-center text-blue-600"> See More <FaArrowRight />                </button>
            </div>
        </div>
    </div>;
};
export default RecentSt;