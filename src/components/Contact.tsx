import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, MessageCircle, Instagram, Mail } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["123 Beauty Street", "Salon District, City 12345"],
      action: () => window.open('https://goo.gl/maps/YOUR_LOCATION', '_blank')
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+91 98765 43210", "+91 98765 43211"],
      action: () => window.open('tel:+919876543210', '_self')
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: ["Mon-Sat: 10:00 AM - 8:00 PM", "Sunday: 11:00 AM - 6:00 PM"],
    }
  ];

  const socialLinks = [
    {
      icon: MessageCircle,
      name: "WhatsApp",
      description: "Quick booking & queries",
      action: () => window.open('https://wa.me/919876543210?text=Hi! I would like to book an appointment at Samaya Salon.', '_blank'),
      color: "bg-green-500"
    },
    {
      icon: Instagram,
      name: "Instagram",
      description: "Follow our latest work",
      action: () => window.open('https://instagram.com/samayasalon', '_blank'),
      color: "bg-pink-500"
    },
    {
      icon: Mail,
      name: "Email",
      description: "info@samayasalon.com",
      action: () => window.open('mailto:info@samayasalon.com', '_self'),
      color: "bg-blue-500"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-salon-gradient bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to transform your look? Contact us today to book your appointment or learn more about our services
          </p>
        </div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((info, index) => {
            const IconComponent = info.icon;
            return (
              <Card 
                key={index} 
                className={`text-center hover:shadow-elegant transition-all duration-300 ${
                  info.action ? 'cursor-pointer hover:-translate-y-2' : ''
                }`}
                onClick={info.action}
              >
                <CardHeader>
                  <div className="w-16 h-16 mx-auto bg-salon-gradient rounded-full flex items-center justify-center mb-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">{info.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-muted-foreground">
                      {detail}
                    </p>
                  ))}
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Quick Contact Options */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">Quick Contact</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {socialLinks.map((link, index) => {
              const IconComponent = link.icon;
              return (
                <Card 
                  key={index}
                  className="cursor-pointer hover:shadow-elegant transition-all duration-300 hover:-translate-y-2"
                  onClick={link.action}
                >
                  <CardContent className="flex items-center p-6">
                    <div className={`w-12 h-12 ${link.color} rounded-full flex items-center justify-center mr-4`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold">{link.name}</h4>
                      <p className="text-sm text-muted-foreground">{link.description}</p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Map Section */}
        <div className="bg-card rounded-2xl p-8 shadow-elegant">
          <h3 className="text-2xl font-bold text-center mb-8">Find Us</h3>
          <div className="aspect-video bg-muted rounded-xl flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-16 h-16 text-salon-purple mx-auto mb-4" />
              <p className="text-lg font-semibold mb-2">Samaya Salon</p>
              <p className="text-muted-foreground mb-4">123 Beauty Street, Salon District, City 12345</p>
              <Button 
                onClick={() => window.open('https://goo.gl/maps/YOUR_LOCATION', '_blank')}
                className="bg-salon-gradient hover:bg-salon-gradient-dark"
              >
                Open in Google Maps
              </Button>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="max-w-2xl mx-auto mb-8">
            <h3 className="text-3xl font-bold mb-4">Ready to Book?</h3>
            <p className="text-muted-foreground">
              Don't wait! Our calendar fills up quickly. Book your appointment now and let us create 
              the perfect look for you.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-salon-gradient hover:bg-salon-gradient-dark shadow-elegant"
              onClick={() => window.open('https://wa.me/919876543210?text=Hi! I would like to book an appointment at Samaya Salon.', '_blank')}
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Book via WhatsApp
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-salon-purple text-salon-purple hover:bg-salon-purple hover:text-white"
              onClick={() => window.open('tel:+919876543210', '_self')}
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;