"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "CP", id: "competitive" },
  { label: "Projects", id: "projects" },
  { label: "Education", id: "education" },
  { label: "Contact", id: "contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-border/30 px-5"
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => scrollToSection("home")}
          className="text-xl font-bold"
        >
          <span className="gradient-text">Imtiaz</span>
          <span className="text-primary"> .</span>
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="text-sm text-muted-foreground hover:font-bold transition-all duration-300 border-b-2 border-transparent hover:border-primary hover:text-primary  pb-1"
            >
              {link.label}
            </button>
          ))}

          <a
            href="https://drive.google.com/file/d/1ZKTNGcqFb8jcZmUZ_raGN02aWoeRwdXA/view"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="sm" className="glow-border gap-2 ">
              <Download className="w-4 h-4" />
              Download CV
            </Button>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-foreground"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-card border-t border-border/30"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-3">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => {
                    scrollToSection(link.id);
                    setIsOpen(false);
                  }}
                  className="text-sm text-left text-muted-foreground hover:text-primary transition-all duration-300 border-b border-transparent hover:border-primary pb-1"
                >
                  {link.label}
                </button>
              ))}

              <a
                href="https://drive.google.com/file/d/1ZKTNGcqFb8jcZmUZ_raGN02aWoeRwdXA/view"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="sm" className="glow-border gap-2 w-full">
                  <Download className="w-4 h-4" />
                  Download CV
                </Button>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;