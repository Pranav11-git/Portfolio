import { Linkedin, Github, Mail, File } from "lucide-react";


export const ContactMe = () => {
  return (
    <footer id="contact" className="py-6 px-4 relative">
      <div className="text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-2">
          Contact Me
        </h1>
        <p className="font-bold">Feel free to contact me</p>
      </div>
       
      <div className="flex justify-center gap-6 my-10 mb-1">
        <a
          href="https://www.linkedin.com/in/1011-pranav-sharma/"
          target="_blank"
          rel="noopener noreferrer"
          title="LinkedIn"
        >
          <Linkedin
            size={28}
            className="hover:text-primary-foreground hover:scale-110 transition-all duration-200 cursor-pointer"
          />
        </a>

        <a
          href="https://github.com/Pranav11-git"
          target="_blank"
          rel="noopener noreferrer"
          title="GitHub"
        >
          <Github
            size={28}
            className="hover:text-primary-foreground hover:scale-110 transition-all duration-200 cursor-pointer"
          />
        </a>

        <a href="mailto:prs11102004@gmail.com" title="Email">
          <Mail
            size={28}
            className="hover:text-primary-foreground hover:scale-110 transition-all duration-200 cursor-pointer"
          />
        </a>

        <a href={"/assets/Pranav_Resume.pdf"} target="_blank" rel="noopener noreferrer" title="Resume">
          <File
            size={28}
            className="hover:text-primary-foreground hover:scale-110 transition-all duration-200 cursor-pointer"
          />
        </a>
      </div>
    </footer>
  );
};
