import { AboutSection } from "../components/AboutSection"
import { ContactMe } from "../components/ContactMe"
import { HeroSections } from "../components/HeroSections"
import { Navbar } from "../components/Navbar"
import { Projects } from "../components/Projects"
import { StarBackground } from "../components/StarBackground"
import { ThemeToggle } from "../components/ThemeToggle"

export const Home = () =>{
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        {/*Toogle button */}
        <ThemeToggle/>
        {/*Background theme */}
        {/* <StarBackground/> */}
        {/*Navbar */}
        <Navbar/>
        {/* Main content */}
        <main>
            <HeroSections/>
            <AboutSection/>
            <Projects/>
            <ContactMe/>
        </main>

        {/*Footer */}
        
        </div>
    )
}