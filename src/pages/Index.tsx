import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Menu, 
  X, 
  ChevronDown, 
  ArrowRight, 
  Play, 
  MessageSquare, 
  Image, 
  Code, 
  Cpu, 
  Zap,
  Brain,
  Shield,
  Users,
  Globe,
  Lightbulb,
  Twitter,
  Github,
  Linkedin,
  Youtube
} from "lucide-react";

// Navbar Component
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

// Hero Component
const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 pt-16">
      <div className="max-w-6xl mx-auto text-center">
        <div className="animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-surface-secondary border border-border mb-8">
            <span className="text-sm text-muted-foreground">
              Introducing GPT-4 Turbo and GPT-4
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            <span className="gradient-text">Creating AI</span>
            <br />
            <span className="text-foreground">that benefits</span>
            <br />
            <span className="text-foreground">all of humanity</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed">
            We're an AI research company that develops and deploys artificial intelligence systems. 
            Our mission is to ensure that artificial general intelligence benefits all of humanity.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              size="lg" 
              className="gradient-hero text-white font-medium px-8 py-4 text-lg hover:shadow-glow transition-smooth group"
            >
              Try ChatGPT
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="px-8 py-4 text-lg border-border hover:bg-surface-secondary transition-smooth group"
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text mb-2">100M+</div>
              <div className="text-muted-foreground">Weekly active users</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text mb-2">2M+</div>
              <div className="text-muted-foreground">Developers building</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text mb-2">92%</div>
              <div className="text-muted-foreground">Fortune 500 adoption</div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Effects */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 gradient-hero rounded-full blur-3xl opacity-10 animate-float"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 gradient-accent rounded-full blur-3xl opacity-10 animate-float" style={{ animationDelay: '1s' }}></div>
      </div>
    </section>
  );
};

// Product Showcase Component
const products = [
  {
    icon: MessageSquare,
    title: "ChatGPT",
    description: "A conversational AI that can help with writing, analysis, coding, and more.",
    features: ["Natural conversation", "Code generation", "Writing assistance", "Problem solving"],
    gradient: "gradient-hero",
    link: "#"
  },
  {
    icon: Image,
    title: "DALL·E 3",
    description: "Create realistic images and art from natural language descriptions.",
    features: ["Text to image", "Style transfer", "Image editing", "Creative art"],
    gradient: "gradient-accent",
    link: "#"
  },
  {
    icon: Code,
    title: "Codex",
    description: "Translates natural language to code in dozens of programming languages.",
    features: ["Code completion", "Bug fixing", "Code explanation", "Multiple languages"],
    gradient: "bg-gradient-to-br from-purple-500 to-pink-500",
    link: "#"
  },
  {
    icon: Cpu,
    title: "GPT-4",
    description: "Our most capable and aligned model, with improved reasoning and safety.",
    features: ["Advanced reasoning", "Multimodal input", "Better accuracy", "Safety focused"],
    gradient: "bg-gradient-to-br from-orange-500 to-red-500",
    link: "#"
  }
];

const ProductShowcase = () => {
  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Our Products</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our suite of AI tools designed to enhance creativity, productivity, and innovation across industries.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {products.map((product, index) => (
            <Card 
              key={product.title} 
              className="group hover:shadow-elegant transition-all duration-500 border-border bg-surface-secondary/50 backdrop-blur-sm overflow-hidden relative"
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity ${product.gradient}`}></div>
              
              <CardHeader className="relative">
                <div className="flex items-center space-x-4 mb-4">
                  <div className={`p-3 rounded-xl ${product.gradient} text-white shadow-glow`}>
                    <product.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl font-bold text-foreground group-hover:gradient-text transition-all">
                      {product.title}
                    </CardTitle>
                  </div>
                </div>
                <CardDescription className="text-muted-foreground text-lg">
                  {product.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="relative">
                <div className="space-y-3 mb-6">
                  {product.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <Zap className="h-4 w-4 text-primary" />
                      <span className="text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  className="w-full group/btn hover:shadow-glow transition-all"
                  variant="outline"
                >
                  Explore {product.title}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="inline-flex items-center space-x-4 p-6 rounded-2xl bg-surface-secondary border border-border">
            <div className="text-left">
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Ready to get started?
              </h3>
              <p className="text-muted-foreground">
                Join millions of users building with OpenAI
              </p>
            </div>
            <Button className="gradient-hero text-white font-medium hover:shadow-glow transition-smooth">
              Start building
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

// Capabilities Component
const capabilities = [
  {
    icon: Brain,
    title: "Advanced Reasoning",
    description: "Complex problem-solving with human-like understanding and analysis across multiple domains."
  },
  {
    icon: Shield,
    title: "Safety First",
    description: "Built with comprehensive safety measures and alignment techniques to ensure responsible AI behavior."
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Optimized for speed and efficiency, delivering real-time responses without compromising quality."
  },
  {
    icon: Users,
    title: "Human-Centered",
    description: "Designed to augment human capabilities and enhance productivity across industries and use cases."
  },
  {
    icon: Globe,
    title: "Global Scale",
    description: "Serving millions of users worldwide with reliable, scalable infrastructure and 99.9% uptime."
  },
  {
    icon: Lightbulb,
    title: "Creative Intelligence",
    description: "Enabling breakthrough innovations in writing, coding, art, and scientific research."
  }
];

const Capabilities = () => {
  return (
    <section className="py-24 px-4 bg-surface/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Built for the </span>
            <span className="gradient-text">future</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our AI systems are designed with cutting-edge capabilities that push the boundaries of what's possible while maintaining safety and reliability.
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((capability, index) => (
            <Card 
              key={capability.title}
              className="group hover:shadow-elegant transition-all duration-500 border-border bg-card/50 backdrop-blur-sm relative overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <CardHeader className="relative">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 rounded-xl gradient-hero text-white shadow-glow group-hover:scale-110 transition-transform">
                    <capability.icon className="h-6 w-6" />
                  </div>
                </div>
                <CardTitle className="text-xl font-bold text-foreground group-hover:gradient-text transition-all">
                  {capability.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="relative">
                <p className="text-muted-foreground group-hover:text-foreground transition-colors">
                  {capability.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-20 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div>
              <div className="text-4xl font-bold gradient-text mb-2">99.9%</div>
              <div className="text-muted-foreground">Uptime</div>
            </div>
            <div>
              <div className="text-4xl font-bold gradient-text mb-2">&lt;200ms</div>
              <div className="text-muted-foreground">Response Time</div>
            </div>
            <div>
              <div className="text-4xl font-bold gradient-text mb-2">175+</div>
              <div className="text-muted-foreground">Countries</div>
            </div>
            <div>
              <div className="text-4xl font-bold gradient-text mb-2">24/7</div>
              <div className="text-muted-foreground">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Footer Component
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

const Footer = () => {
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

// Main Index Component
const Index = () => {
  return (
    <div className="min-h-screen bg-background font-inter">
      <Navbar />
      <Hero />
      <ProductShowcase />
      <Capabilities />
      <Footer />
    </div>
  );
};

export default Index;