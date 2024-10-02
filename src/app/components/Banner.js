import Image from "next/image";

const Banner = () => {
    return (

        <div
            className="flex justify-center items-center flex-wrap p-6 px-8 bg-blue-200 bg-cover h-screen bg-center bg-no-repeat relative"
            style={{
                backgroundImage: "url('/Rectangle 45.png')",
            }}
        >
            {/* Background overlay */}
            <div className="absolute inset-0 bg-blue-500 opacity-70"></div>

            <div className="container mx-auto flex justify-center items-center relative z-10">
                {/* Left Section */}
                <div className="md:w-1/2 mb-6 md:mb-0 text-white space-y-4">
                    <h4 className="text-2xl font-semibold">Welcome to Memorial Moments Magazine</h4>
                    <h1 className="text-6xl font-bold">
                        Unforgettable Moments, Endless Love
                    </h1>
                    <p className="text-lg mt-4">
                        We understand every funeral is different because every person is unique, and each family situation is different.
                    </p>

                    <div className="flex gap-10 mt-10">
                        <Image height={200} width={300} src={'/Google Play.png'} alt="Google Play" />
                        <Image height={200} width={300} src={'/2.png'} alt="App Store" />
                    </div>
                </div>

                {/* Right Section */}
                <div className="w-full md:w-1/2 flex justify-center">
                    <div className="relative">
                        <Image height={600} width={500} className="p-8" src="/Group 672.png" alt="Memorial Image" />
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Banner;
