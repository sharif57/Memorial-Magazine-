import Image from "next/image";
import { GiBookAura } from "react-icons/gi";
import { TbShoppingBagEdit } from "react-icons/tb";



const Help = () => {
    return <div className="text-black mt-14 flex justify-between items-center container mx-auto">
        <div className="w-2/5">
            <h1 className='text-6xl font-semibold '>We are here to <br></br> help you </h1>
            <h1 className="mt-6">The experienced funeral directors at Name Funeral Home will guide you through the aspects of the funeral service with compassion, dignity, and respect.</h1>

            <div className="flex gap-8 mt-8">
                <GiBookAura className="size-10 text-blue-400"/>
                <div>
                    <h1 className="text-2xl font-semibold">Pre-planning</h1>
                    <p className="pt-3">The best way to spare your loved ones the emotional and financial strain.</p>
                </div>
            </div>
            <div className="flex gap-8 mt-8">
                <TbShoppingBagEdit                 className="size-10 text-blue-400"/>
                <div>
                    <h1 className="text-2xl font-semibold">Quality services</h1>
                    <p className="pt-3">We offer high-quality services for families to create healing moments after loss.</p>
                </div>
            </div>
        </div>
        <Image width={300} height={500} className="w-[600px] h-[700px]" src={'/Group 672.png '}></Image>
    </div>;
};
export default Help;