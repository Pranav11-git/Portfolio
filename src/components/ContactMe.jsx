
export const ContactMe = ()=>{
    return <section id="contact" className="py-24 px-4 relative">
        <div className="">
            <h1 className="text-3xl md:text-4xl font-bold text-primary mb-2">Contact Me</h1>
            <p className="font-bold ">Fell free to contact me </p>
            <div className="grid grid-cols-1 md:grid-cols-2 place-items-center mt-3">
                {/* its for full name and email */}
                <div className="w-full md:p-10">
                    <h1 className="p-4 md:text-2xl font-semibold">Full Name</h1>
                    <input className="border-2 border-primary rounded-xl w-full h-10  md:h-15" type="text" required />
                </div>

                <div className="w-full md:p-10" >
                    <h1 className="p-4 md:text-2xl font-semibold">Email</h1>
                    <input className="border-2 border-primary rounded-xl w-full h-10 md:h-15" type="email" name="" id="" required />
                </div>
            </div>
            <div className=" w-full md:p-10">
                {/* message */}
                <h1 className="p-4 md:text-2xl font-semibold">Message</h1>
                <textarea className="border-2 border-primary rounded-xl w-full h-10 md:w-full md:h-20"name="text" id="" required></textarea>
            </div>

            <button className="w-50 h-10 rounded-2xl text-2xl m-3 hover:cursor-pointer hover:bg-primary/80 bg-primary text-primary-foreground">Submit</button>
        </div>
    </section>
}