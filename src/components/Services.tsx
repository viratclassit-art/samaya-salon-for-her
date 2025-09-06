import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Scissors, Palette, Sparkles, Heart, Crown, Zap } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Scissors,
      title: "Hair Cut & Styling",
      description: "Professional haircuts and styling for all hair types",
      price: "$45 - $85",
      duration: "45-60 min"
    },
    {
      icon: Palette,
      title: "Hair Coloring",
      description: "Expert hair coloring, highlights, and balayage",
      price: "$80 - $150",
      duration: "90-120 min"
    },
    {
      icon: Sparkles,
      title: "Nail Art & Manicure",
      description: "Beautiful nail designs and professional manicures",
      price: "$25 - $65",
      duration: "30-60 min"
    },
    {
      icon: Heart,
      title: "Pedicure",
      description: "Relaxing pedicure with foot massage and nail care",
      price: "$35 - $55",
      duration: "45 min"
    },
    {
      icon: Crown,
      title: "Makeup & Beauty",
      description: "Professional makeup for special occasions",
      price: "$60 - $120",
      duration: "60-90 min"
    },
    {
      icon: Zap,
      title: "Hair Treatment",
      description: "Deep conditioning and hair restoration treatments",
      price: "$40 - $80",
      duration: "60 min"
    },
    {
      icon: Sparkles,
      title: "Eyebrow Threading",
      description: "Precise eyebrow shaping and threading",
      price: "$20 - $30",
      duration: "20 min"
    },
    {
      icon: Heart,
      title: "Facial Treatment",
      description: "Rejuvenating facial treatments for all skin types",
      price: "$50 - $90",
      duration: "60 min"
    },
    {
      icon: Crown,
      title: "Bridal Package",
      description: "Complete bridal beauty package",
      price: "$200 - $350",
      duration: "3-4 hours"
    }
  ];

  return (
    <section id="services" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-salon-gradient bg-clip-text text-transparent">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience luxury and professionalism with our comprehensive range of beauty services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 border-salon-purple-light/20"
              >
                <CardHeader className="text-center">
                  <div className="w-16 h-16 mx-auto bg-salon-gradient rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-semibold">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <div className="flex justify-between items-center mb-4 text-sm">
                    <span className="font-semibold text-salon-purple">{service.price}</span>
                    <span className="text-muted-foreground">{service.duration}</span>
                  </div>
                  <Button 
                    variant="outline" 
                    className="w-full border-salon-purple text-salon-purple hover:bg-salon-purple hover:text-white"
                  >
                    Book Now
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="bg-salon-gradient hover:bg-salon-gradient-dark shadow-elegant">
            View All Services & Prices
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;