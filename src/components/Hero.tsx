import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroBackground from '@/assets/hero-bg.jpg';
import profileAvatar from '@/assets/profile-avatar.jpg';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 hero-gradient"></div>
      
      {/* Background image overlay */}
      <div 
        className="absolute inset-0 opacity-20 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      ></div>
      
      {/* Glass overlay */}
      <div className="absolute inset-0 glass"></div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl ml-auto mr-8 text-left">

          {/* Main heading */}
          <h1 className="font-heading font-bold text-4xl sm:text-6xl lg:text-7xl text-white mb-6 fade-in-delay-1">
            Youssef Yasser
          </h1>

          {/* Subtitle */}
          <p className="font-heading text-xl sm:text-2xl lg:text-3xl text-white/90 mb-4 fade-in-delay-2">
            UI/UX Designer & Mobile App Developer
          </p>

          {/* Tagline */}
          <p className="text-lg sm:text-xl text-white/80 mb-12 max-w-2xl fade-in-delay-2">
            I design and develop user-centered experiences that are both functional and visually engaging.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16 fade-in-delay-3">
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-white/30 text-white hover:bg-white/10 hover:scale-105 transition-all duration-300 font-semibold px-8 py-3 text-lg backdrop-blur-sm"
            >
              Download Resume
            </Button>
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-white/90 hover:scale-105 transition-all duration-300 font-semibold px-8 py-3 text-lg shadow-lg"
            >
              Contact
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;