import { Twitter, Github, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  const footerSections = [
    {
      title: "Research",
      links: [
        { name: "Research Papers", href: "#" },
        { name: "Publications", href: "#" },
        { name: "Safety Research", href: "#" },
        { name: "Blog", href: "#" }
      ]
    },
    {
      title: "API",
      links: [
        { name: "Overview", href: "#" },
        { name: "Documentation", href: "#" },
        { name: "Pricing", href: "#" },
        { name: "Examples", href: "#" }
      ]
    },
    {
      title: "ChatGPT",
      links: [
        { name: "ChatGPT", href: "#" },
        { name: "ChatGPT Plus", href: "#" },
        { name: "ChatGPT Enterprise", href: "#" },
        { name: "Help Center", href: "#" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About", href: "#" },
        { name: "Careers", href: "#" },
        { name: "Charter", href: "#" },
        { name: "Security", href: "#" }
      ]
    }
  ];

  return (
    <footer className="bg-surface border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold gradient-text mb-4">OpenAI</h3>
            <p className="text-muted-foreground mb-6 max-w-sm">
              Creating AI that benefits all of humanity. We're committed to ensuring that artificial general intelligence is safe and beneficial.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title} className="lg:col-span-1">
              <h4 className="text-foreground font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href} 
                      className="text-muted-foreground hover:text-primary transition-smooth"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center">
          <div className="text-muted-foreground text-sm mb-4 sm:mb-0">
            © 2024 OpenAI. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
              Terms of Use
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
              Usage Policies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;