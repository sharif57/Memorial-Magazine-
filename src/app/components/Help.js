import Image from "next/image";

const Help = () => {
    return <div className="text-black mt-14 flex justify-between items-center container mx-auto">
        <div className="w-2/5">
            <h1 className='text-6xl font-semibold '>We are here to <br></br> help you </h1>
            <h1 className="mt-6">The experienced funeral directors at Name Funeral Home will guide you through the aspects of the funeral service with compassion, dignity, and respect.</h1>
        </div>
        <Image width={300} height={500} className="w-[600px] h-[700px]" src={'/Group 672.png '}></Image>
    </div>;
};
export default Help;