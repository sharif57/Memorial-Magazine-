import Image from "next/image";

const Banner = () => {
    return (
        <div className="relative h-screen flex items-center justify-center">
            {/* Background Image */}
            <div className="absolute inset-0 bg-[url('/Rectangle 45.png')] bg-cover bg-center z-[-1]"></div>

            {/* Foreground Image */}
            {/* <Image height={300} width={500} src={'/Rectangle 45.png'} alt="Banner Image" /> */}
        </div>
    );
};

export default Banner;
