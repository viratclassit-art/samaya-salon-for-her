import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import salonHero from "@/assets/salon-hero.jpg";
import nailStudio from "@/assets/nail-studio.jpg";
import hairService from "@/assets/hair-service.jpg";
import makeupService from "@/assets/makeup-service.jpg";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: salonHero,
      title: "Transform Your Beauty Journey",
      subtitle: "Professional salon services with a touch of elegance"
    },
    {
      image: hairService,
      title: "Expert Hair Styling",
      subtitle: "Cut, color, and style by certified professionals"
    },
    {
      image: nailStudio,
      title: "Nail Art & Classes",
      subtitle: "Beautiful nails and professional training"
    },
    {
      image: makeupService,
      title: "Makeup & Beauty",
      subtitle: "Enhance your natural beauty with our expert touch"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {/* Carousel */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-salon-purple/20 to-salon-purple-light/15" />
          </div>
        ))}

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-salon-purple/30 backdrop-blur-sm hover:bg-salon-purple/50 transition-colors"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-salon-purple/30 backdrop-blur-sm hover:bg-salon-purple/50 transition-colors"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? "bg-white" : "bg-white/50"
              }`}
            />
          ))}
        </div>

        {/* Content Overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4 max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
              {slides[currentSlide].title}
            </h1>
            <p className="text-xl md:text-2xl mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              {slides[currentSlide].subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <Button size="lg" className="bg-white text-salon-purple hover:bg-white/90 shadow-elegant">
                Book Appointment
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-salon-purple">
                View Services
              </Button>
            </div>
            
            {/* Quick Stats */}
            <div className="flex justify-center mt-12 gap-8 text-center">
              <div className="animate-fade-in" style={{ animationDelay: "0.6s" }}>
                <div className="flex items-center justify-center mb-2">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="text-2xl font-bold ml-1">4.9</span>
                </div>
                <p className="text-sm opacity-90">Average Rating</p>
              </div>
              <div className="animate-fade-in" style={{ animationDelay: "0.8s" }}>
                <div className="text-2xl font-bold mb-2">500+</div>
                <p className="text-sm opacity-90">Happy Clients</p>
              </div>
              <div className="animate-fade-in" style={{ animationDelay: "1s" }}>
                <div className="text-2xl font-bold mb-2">15+</div>
                <p className="text-sm opacity-90">Services</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;