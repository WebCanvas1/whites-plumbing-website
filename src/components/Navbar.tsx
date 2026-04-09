import { useState } from "react";
import { Phone, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const links = ["Services", "Why Us", "Gallery", "FAQ", "Contact"];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-md border-b border-primary-foreground/10">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        <a href="#" className="font-heading text-xl font-bold text-primary-foreground tracking-tight">
          White's <span className="text-accent">Plumbing</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(" ", "-")}`}
              className="text-sm font-medium text-primary-foreground/80 hover:text-accent transition-colors"
            >
              {link}
            </a>
          ))}
        </div>

        <a
          href="tel:+15551234567"
          className="hidden md:flex items-center gap-2 bg-accent text-accent-foreground px-4 py-2 rounded-lg font-semibold text-sm hover:brightness-110 transition"
        >
          <Phone className="w-4 h-4" />
          (555) 123-4567
        </a>

        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-primary-foreground">
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-primary overflow-hidden"
          >
            <div className="px-4 py-4 flex flex-col gap-3">
              {links.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase().replace(" ", "-")}`}
                  onClick={() => setIsOpen(false)}
                  className="text-primary-foreground/80 hover:text-accent py-2 font-medium"
                >
                  {link}
                </a>
              ))}
              <a
                href="tel:+15551234567"
                className="flex items-center justify-center gap-2 bg-accent text-accent-foreground px-4 py-3 rounded-lg font-semibold mt-2"
              >
                <Phone className="w-4 h-4" />
                (555) 123-4567
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
