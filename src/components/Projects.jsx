import { ProjectsCard } from "./ProjectsCard"

export const Projects = ()=>{
    return <section id="projects">
        <div className="container">
            <h1 className="text-3xl md:text-4xl font-bold text-primary mb-5">Projects</h1>
            <h2 className="font-bold">Checkout my <a className="underline" href="https://github.com/Pranav11-git" target="_blank">Github</a> Profile for more</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6   mx-auto place-items-center">
            <ProjectsCard title={"Git Pusher"} image={"src/assets/Screenshot from 2025-10-23 11-42-57.png"} description={`Simplified GitHub project uploading with a GUI, reducing steps by 50%.
Automated repo creation and file uploads via PyGitHub.`} gitLink={"https://github.com/Pranav11-git/GitPusher"}/>
            <ProjectsCard title={"Sheild"} image={"src/assets/Screenshot from 2025-10-23 11-54-52.png"} description={`SHEild is an open-source, non-profit initiative dedicated to creating a safer environment for women in workplaces and society. By leveraging advanced machine learning and computer vision technologies, SHEild detects incidents of sexual harassment in real-time via CCTV cameras, automatically generating reports that are sent to the nearest authorities for swift action.`} gitLink={"https://github.com/geeksahilthakur/sheild"}/>
            <ProjectsCard title={"MindWaves"} image={"src/assets/Screenshot from 2025-10-23 11-59-33.png"} description={`Created a Flask API to generate binaural beats and built a frontend to interact with it.
Implemented dynamic playback/download, managed CORS and API communication.`} gitLink={"https://github.com/Pranav11-git/binaural-frontend"}/>
            <ProjectsCard title={"Password generator"} image={"src/assets/Screenshot from 2025-10-23 11-57-57.png"} description={`Built a responsive password generator with customization options.
Deployed the app using Netlify and practiced real-world version control.`} gitLink={"https://github.com/Pranav11-git/Password-generator"}/>
        </div>
    </section>
}