import { ProjectsCard } from "./ProjectsCard"

export const Projects = ()=>{
    return <section id="projects">
        <div className="container">
            <h1 className="text-3xl md:text-4xl font-bold text-primary mb-5">Projects</h1>
            <h2 className="font-bold">Checkout my <a className="underline" href="https://github.com/Pranav1102004">Github</a> Profile for more</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6   mx-auto place-items-center">
            <ProjectsCard title={"Git Pusher"} image={"src/assets/image copy 2.png"} description={"Git pusher"} gitLink={"https://www.google.com"}/>
            <ProjectsCard title={"Git Pusher"} image={"src/assets/image copy 2.png"} description={"Git pusher"} gitLink={"https://www.google.com"}/>
            <ProjectsCard title={"Git Pusher"} image={"src/assets/image copy 2.png"} description={"Git pusher"} gitLink={"https://www.google.com"}/>
            <ProjectsCard title={"Git Pusher"} image={"src/assets/image copy 2.png"} description={"Git pusher"} gitLink={"https://www.google.com"}/>
        </div>
    </section>
}