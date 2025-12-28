import { ArrowDown, Linkedin, Mail, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroBackground from '@/assets/hero-bg.jpg';
import profileAvatar from '@/assets/profile-avatar.jpg';
const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 hero-gradient"></div>
      
      {/* Background image overlay */}
      <div className="absolute inset-0 opacity-20 bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: `url(${heroBackground})`
    }}></div>
      
      {/* Glass overlay */}
      <div className="absolute inset-0 glass"></div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl ml-8 text-left">

          {/* Subtitle */}
          <p className="font-heading text-xl sm:text-2xl lg:text-4xl text-white/90 mb-6 fade-in-delay-2">I'm Youssef, A Computer Engineer, UI/UX Designer & Mobile App Developer</p>

          {/* Tagline */}
          <p className="text-lg sm:text-xl text-white/80 mb-12 max-w-2xl fade-in-delay-2">
            I design and develop user-centered experiences that are both functional and visually engaging.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16 fade-in-delay-3">
            <Button asChild size="lg" className="bg-white/10 border-2 border-white text-white backdrop-blur-sm hover:bg-white/20 hover:text-white hover:scale-105 transition-all duration-300 font-semibold px-8 py-3 text-lg shadow-lg">
              <a href="https://drive.google.com/uc?export=download&id=1XEllYypZs2UoznEDjtleIBsd16wAQl8Z" download="Youssef_Yasser_Resume.pdf" className="inline-flex items-center gap-2">
                <Download size={20} />
                Download Resume
              </a>
            </Button>
            <Button asChild size="lg" className="bg-white/10 border-2 border-white text-white backdrop-blur-sm hover:bg-white/20 hover:text-white hover:scale-105 transition-all duration-300 font-semibold px-8 py-3 text-lg shadow-lg">
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=youssef.yasser.1408@gmail.com" target="_blank" rel="noopener noreferrer">
                Contact Me
              </a>
            </Button>
          </div>

        </div>
      </div>
    </section>;
};
export default Hero;