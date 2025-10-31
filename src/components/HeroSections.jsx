import { ArrowBigDown, File, Github, Linkedin, Mail, MoveDown } from "lucide-react"



export const HeroSections = ()=>{
    return <section id="hero" className="realtive min-h-screen flex flex-col items-center justify-center px-4">
        <div className="container max-w-4xl mx-auto text-center z-10">
            <div className="space-y-6">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                    <span className="opacity-0 animate-fade-in">Hi, I'm</span>
                    <span className="text-primary-foreground opacity-0 animate-fade-in-delay-1"> Pranav</span>
                    <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2"> Sharma</span>
                </h1>
                <div className="flex items-center justify-center space-x-5">
                    <span title="LinkedIn">
                       <a href="https://www.linkedin.com/in/1011-pranav-sharma/" target="_blank"><Linkedin size={24} className="hover:text-primary-foreground hover:cursor-pointer" /></a> 
                    </span>
                    <span title="GitHub">
                        <a href="https://github.com/Pranav11-git" target="_blank"><Github size={24} className="hover:text-primary-foreground hover:cursor-pointer" /></a>
                    </span>
                    <span title="Email">
                        <a href="mailto:prs11102004@gmail.com" ><Mail size={24} className="hover:text-primary-foreground hover:cursor-pointer" /></a>
                        
                    </span>
                    <span title="Resume">
                        <a href="src/assets/Pranav_Resume (14).pdf" target="_blank"><File size={24} className="hover:text-primary-foreground hover:cursor-pointer" /></a>
                    </span>
                </div>

            </div>

        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce cursor-pointer">
                <a href="#about">
                    <span className="text-sm text-muted-foreground mb-2">Scroll</span>
                <ArrowBigDown  className="text-primary h-5 w-5"/>
                </a>
                
        </div>

    </section>
}