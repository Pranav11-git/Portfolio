import { WorkExpCard } from "./WorkExpCard"

export const AboutSection = ()=>{
    return <section id="about" className="py-24 px-4 relative">
        <div className="conatiner">
            <h2 className="text-3xl md:text-4xl font-bold mb-5 text-center">
                <span className="text-primary-foreground">About</span> <span className="text-primary">Me</span>
            </h2>
            <h2 className="font-bold text-wrap">I’m Pranav, a software developer skilled in C++, Python, and React, focused on creating efficient, scalable, and innovative solutions.</h2>
        </div>
        <ul>
            <WorkExpCard logo={"src/assets/image.png"} title={"CGC Jhanjeri"} subtitle={"Mohali"} paragraph={"Graduating from Chandigarh Engineering College with courses like operating System, Data Structure and Algorithms, Computer Network,DBMS"} date={"Sept 2022 - May 2026"}/>

            <WorkExpCard logo={"src/assets/image copy.png"} title={"Optus Edtech Solutions"} subtitle={"Jabalpur"} paragraph={"Working as an Techincal mentor and Product Associate , teaching 500+ students Data Structures and Algorithms"} date={"Aug 2025 - Present"}/>

            <WorkExpCard logo={"src/assets/image copy 2.png"} title={"GFG Student Chapter"} subtitle={"Mohali"} paragraph={"Led the technical team, mentored 500+ students, Conducted 10+ events and Workshops"} date={"Sept 2023 - Aug 2024"}/>

        </ul>
    </section>
}