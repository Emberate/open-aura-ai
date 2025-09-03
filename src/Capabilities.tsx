import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Shield, Zap, Users, Globe, Lightbulb } from "lucide-react";

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

export default Capabilities;