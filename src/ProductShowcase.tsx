import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageSquare, Image, Code, Cpu, ArrowRight, Zap } from "lucide-react";

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

export default ProductShowcase;