import Image from "next/image";

const Team = () => {
    return <div className="bg-[#ebf3fc]">
        <div className="container mx-auto text-black  py-8">
            <h1 className="text-6xl text-center my-14 font-bold">Our Team</h1>
            <div className="flex gap-8">
                <div className="flex flex-col items-center space-y-3">
                    <Image height={200} width={400} src={'/Ellipse 7.png'}></Image>
                    <h1 className="text-3xl font-bold">JESSY ROY</h1>
                    <p>CEO</p>
                </div>
                <div className="flex flex-col items-center space-y-3">
                    <Image height={200} width={400} src={'/Ellipse 7 (1).png'}></Image>
                    <h1 className="text-3xl font-bold">KAZI FAHIM</h1>
                    <p>Director</p>
                </div>
                <div className="flex flex-col items-center space-y-3">
                    <Image height={200} width={400} src={'/Ellipse 7 (2).png'}></Image>
                    <h1 className="text-3xl font-bold">DAIZY NEO</h1>
                    <p>Manager</p>
                </div>
                <div className="flex flex-col items-center space-y-3">
                    <Image height={200} width={400} src={'/Ellipse 7 (3).png'}></Image>
                    <h1 className="text-3xl font-bold">JESSY ROY</h1>
                    <p>Founder</p>
                </div>
            </div>
        </div>
    </div>;
};
export default Team;