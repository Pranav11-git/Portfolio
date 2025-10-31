import { href } from "react-router-dom"
import { cn } from "../lib/utils"
import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"


const navItems = [
    {name :"Home", href:"#hero"},
    {name :"About", href:"#about"},
    {name :"Projects", href:"#projects"},
    {name :"Contact", href:"#contact"},
]


export const Navbar = ()=>{
    const [isScrolled,setScrolled] = useState(false)

    const [isMenuOpen,setMenuOpen] = useState(false)
useEffect(() => {
  const handleScroll = () => {
    setScrolled(window.scrollY > 10);
    if(isMenuOpen){
      setMenuOpen(false)
    }
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, [isMenuOpen]);

return (
  <nav
    className={cn(
      "fixed w-full z-40 transition-all duration-300",
      isScrolled
        ? "py-3 bg-background/80 backdrop-blur-md shadow-xs"
        : "py-5"
    )}
  >
    <div className="container flex items-center justify-between">
      <a
        className="text-xl font-bold text-primary flex items-center justify-between"
        href="#hero"
      >
        <span className="relative z-10">
          <span className="text-primary-foreground text-2xl">Pranav</span> <span className="text-2xl">Sharma</span>
        </span>
      </a>

      {/* Desktop navbar */}
      <div className="hidden md:flex space-x-8">
        {navItems.map((item, key) => (
          <a
            key={key}
            href={item.href}
            className="text-foreground/80 hover:text-primary transition-colors duration-300"
          >
            {item.name}
          </a>
        ))}
      </div>

      {/* Mobile navbar */}
      <button
        className="md:hidden p-2 text-foreground z-50"
        aria-label={isMenuOpen ? "close Menu" : "open Menu"}
        onClick={() => setMenuOpen((prev) => !prev)}
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <div
        className={cn(
          "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
          "transition-all duration-300 md:hidden",
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
      >
        <div className="flex flex-col space-y-8 text-xl">
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className="text-foreground/80 hover:text-primary transition-colors duration-300"
              onClick={() => setMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  </nav>
);
}