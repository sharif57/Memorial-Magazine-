const Contact = () => {
    return <div className="text-black">
        <div className="container mx-auto py-16">

            <div className="w-1/2 mx-auto text-center space-y-4">
                <h1 className="text-5xl font-semibold">Contact Us</h1>
                <p className="w-3/4/2 mx-auto">We offer a wide range of funeral services and arrangements to help you honor and celebrate the life of your loved one.</p>
            </div>
            <div className="space-y-8 mt-10">
                <div className="flex gap-10">
                    <input
                        type="text"
                        placeholder="Full name"
                        className="input border-2 border-blue-500 w-full bg-white px-4 py-8 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                        type="text"
                        placeholder="Phone Number"
                        className="input border-2 border-blue-500 w-full bg-white px-4 py-8 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />

                </div>
                <div className="flex gap-10">
                    <input
                        type="text"
                        placeholder="Email"
                        className="input border-2 border-blue-500 w-full bg-white px-4 py-8 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                        type="text"
                        placeholder="Address"
                        className="input border-2 border-blue-500 w-full bg-white px-4 py-8 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />

                </div>
                <textarea className="textarea textarea-primary w-full h-[250px] bg-white" placeholder="Message"></textarea>
                <div className="flex justify-center">
                    <button className="btn btn-primary text-white">SEND MASSAGE</button>

                </div>
            </div>
        </div>
    </div>;
};
export default Contact;