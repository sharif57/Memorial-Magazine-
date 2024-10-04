import Image from "next/image";

const Testimonials = () => {
    return <div className=" bg-[#f3faff] text-black">
        <div className="container mx-auto text-center text-black py-16 ">
            <div className="flex flex-col justify-center items-center space-y-8">
                <p className="text-2xl font-serif">Our Clients</p>
                <h1 className="text-5xl font-semibold">Testimonials</h1>
                <Image height={100} width={300} src={'/Line (1).png'}></Image>
                <p className="w-1/2 mx-auto">Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do
                    what you believe is great work. And the only way to do great work is to love what you do. If you
                    haven't found it yet, keep Peopeative are the luckiest people.</p>
                <h2 className="text-3xl font-serif text-blue-500">Kazi Warner, CEO it</h2>
                <Image height={100} width={300} src={'/Slide.png'}></Image>
            </div>
        </div>
    </div>;
};
export default Testimonials;