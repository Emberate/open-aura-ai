import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold gradient-text">OpenAI</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <div className="relative group">
                <button className="text-foreground hover:text-primary transition-smooth flex items-center">
                  Research
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
              </div>
              <div className="relative group">
                <button className="text-foreground hover:text-primary transition-smooth flex items-center">
                  API
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
              </div>
              <div className="relative group">
                <button className="text-foreground hover:text-primary transition-smooth flex items-center">
                  ChatGPT
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
              </div>
              <a href="#" className="text-foreground hover:text-primary transition-smooth">
                Safety
              </a>
              <a href="#" className="text-foreground hover:text-primary transition-smooth">
                Company
              </a>
            </div>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="text-foreground hover:text-primary">
              Log in
            </Button>
            <Button className="gradient-hero text-white font-medium hover:shadow-glow transition-smooth">
              Sign up
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-surface-secondary rounded-lg mt-2">
              <a href="#" className="block px-3 py-2 text-foreground hover:text-primary transition-smooth">
                Research
              </a>
              <a href="#" className="block px-3 py-2 text-foreground hover:text-primary transition-smooth">
                API
              </a>
              <a href="#" className="block px-3 py-2 text-foreground hover:text-primary transition-smooth">
                ChatGPT
              </a>
              <a href="#" className="block px-3 py-2 text-foreground hover:text-primary transition-smooth">
                Safety
              </a>
              <a href="#" className="block px-3 py-2 text-foreground hover:text-primary transition-smooth">
                Company
              </a>
              <div className="flex flex-col space-y-2 px-3 pt-4">
                <Button variant="ghost" className="text-foreground hover:text-primary justify-start">
                  Log in
                </Button>
                <Button className="gradient-hero text-white font-medium hover:shadow-glow transition-smooth">
                  Sign up
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;