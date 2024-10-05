import Image from "next/image";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa";


const Page = () => {

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

    return <div >
        {/* my-app/public/Rectangle 3 (1).png */}
        <div
            className="flex justify-center items-center  p-6 px-8 bg-blue-200 bg-cover h-[500px] bg-center bg-no-repeat relative"
            style={{
                backgroundImage: "url('/Rectangle 3 (1).png ')",
            }}
        >
            {/* Background overlay */}
            <div className="absolute inset-0 bg-blue-400 opacity-70"></div>

            <div className="container mx-auto flex justify-center items-center relative z-10">
                <div>
                    <h1 className="text-6xl font-semibold text-white">About Us</h1>
                    <div className="text-white flex items-center justify-center gap-3 pt-4">
                        <Link href={'/'}>Home</Link>
                        <IoIosArrowForward />
                        <Link href={'/about'}>About Us</Link>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <div className="w-1/2 mx-auto text-center text-black mt-16 space-y-4">
                <h1 className="text-4xl font-semibold">TO KNOW MORE ABOUT US</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam. Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                    voluptate velit esse.exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
            <div className="container mx-auto">
                <div className=" flex justify-center mt-12">
                    <Image height={500} width={1460} src="/Rectangle 45 (1).png" alt="Centered Image" />
                </div>
                <div className="container px-8 mx-auto  text-black flex justify-between items-center gap-10 mt-16">
                    <div >
                        <h2 className="text-2xl font-semibold"><span className="text-blue-500">01.</span> Mission</h2>
                        <p className="mt-4">Dorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Quis nos-
                            trud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                            aute irure dolor in reprehenderit in voluptate velit esse. exercitation ullamco labo-
                            ris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                    <div>
                        <h2 className="text-2xl font-semibold"><span className="text-blue-500">02.</span>  Our History</h2>
                        <p className="mt-4">Dorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Quis nos-
                            trud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                            aute irure dolor in reprehenderit in voluptate velit esse. exercitation ullamco labo-
                            ris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                </div>

                <div className="flex justify-between items-center px-8 mt-24 text-black">
                    <div>
                        <h1 className="text-4xl font-semibold">Recent Stories</h1>
                        <p className="w-3/4 mt-4">We offer a wide range of funeral services and arrangements to help you honor and celebrate the life of your loved one.</p>
                    </div>
                    <button className="btn btn-outline text-center text-blue-600"> See More <FaArrowRight />
                    </button>
                </div>
                <div>
                    <div className="grid lg:grid-cols-4 gap-6 my-10 px-10">
                        {
                            users.slice(0,4).map((data, index) => (
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
                </div>

            </div>
        </div>
    </div>;
};
export default Page;