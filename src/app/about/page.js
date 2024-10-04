import Image from "next/image";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

const Page = () => {
    return <div>
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
                    <Image height={500} width={1330} src="/Rectangle 45 (1).png" alt="Centered Image" />
                </div>
                <div className="container mx-auto px-24 text-black flex justify-between items-center gap-10 mt-16">
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

            </div>
        </div>
    </div>;
};
export default Page;