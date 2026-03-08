import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "CP", href: "#competitive" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-border/30"
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <a href="#home" className="text-xl font-bold">
          <span className="gradient-text">Imtiaz</span>
          <span className="text-primary"> .</span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://drive.google.com/file/d/1PcEgF_tGDw7RxRpfEHqYgtwXgI_Q5Pbe/view"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="sm" className="glow-border gap-2">
              <Download className="w-4 h-4" />
              Download CV
            </Button>
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-foreground"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
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
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors py-1"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://drive.google.com/file/d/1PcEgF_tGDw7RxRpfEHqYgtwXgI_Q5Pbe/view"
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