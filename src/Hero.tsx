import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

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

export default Hero;