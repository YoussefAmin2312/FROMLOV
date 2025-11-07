import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import introImg from '@/assets/about-intro.jpg';
import skill1Img from '@/assets/about-skill-1.jpg';
import skill2Img from '@/assets/about-skill-2.jpg';
import philosophyImg from '@/assets/about-philosophy.jpg';

const About = () => {
  const navigate = useNavigate();

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground mb-6">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          {/* Left Tall Rectangle - Intro */}
          <div className="lg:col-span-4 h-[600px] group relative overflow-hidden">
            <div 
              className="absolute inset-0 bg-cover bg-center transition-all duration-500 grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100"
              style={{ backgroundImage: `url(${introImg})` }}
            />
            <div className="absolute inset-0 bg-gray-400/20 group-hover:bg-transparent transition-all duration-500" />
            <div className="relative h-full flex flex-col justify-end p-8 text-white">
              <h3 className="font-heading font-bold text-2xl mb-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                My Story
              </h3>
              <p className="text-base leading-relaxed opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                A computer engineer passionate about creating meaningful digital experiences through UI/UX design and mobile development. I blend technical expertise with creative vision.
              </p>
            </div>
          </div>

          {/* Middle Column - Two Stacked Rectangles */}
          <div className="lg:col-span-4 flex flex-col gap-8">
            {/* Top Rectangle - Design Focus */}
            <div className="h-[288px] group relative overflow-hidden">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-all duration-500 grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100"
                style={{ backgroundImage: `url(${skill1Img})` }}
              />
              <div className="absolute inset-0 bg-gray-400/20 group-hover:bg-transparent transition-all duration-500" />
              <div className="relative h-full flex flex-col justify-end p-6 text-white">
                <h3 className="font-heading font-bold text-xl mb-3 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  Design Philosophy
                </h3>
                <p className="text-sm leading-relaxed opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                  User-centered design with a focus on accessibility, aesthetics, and intuitive interactions.
                </p>
              </div>
            </div>

            {/* Bottom Rectangle - Development Skills */}
            <div className="h-[288px] group relative overflow-hidden">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-all duration-500 grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100"
                style={{ backgroundImage: `url(${skill2Img})` }}
              />
              <div className="absolute inset-0 bg-gray-400/20 group-hover:bg-transparent transition-all duration-500" />
              <div className="relative h-full flex flex-col justify-end p-6 text-white">
                <h3 className="font-heading font-bold text-xl mb-3 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  Technical Skills
                </h3>
                <p className="text-sm leading-relaxed opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                  Flutter, Firebase, React, and modern development tools to bring designs to life.
                </p>
              </div>
            </div>
          </div>

          {/* Right Tall Rectangle - Philosophy/Photo */}
          <div className="lg:col-span-4 h-[600px] group relative overflow-hidden">
            <div 
              className="absolute inset-0 bg-cover bg-center transition-all duration-500 grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100"
              style={{ backgroundImage: `url(${philosophyImg})` }}
            />
            <div className="absolute inset-0 bg-gray-400/20 group-hover:bg-transparent transition-all duration-500" />
            <div className="relative h-full flex flex-col justify-end p-8 text-white">
              <h3 className="font-heading font-bold text-2xl mb-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                Philosophy
              </h3>
              <p className="text-base leading-relaxed opacity-90 group-hover:opacity-100 transition-opacity duration-300 mb-6">
                I believe in creating digital products that solve real problems while delivering delightful user experiences. Every pixel has a purpose.
              </p>
              <div className="space-y-2 opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                <div className="text-sm">
                  <span className="font-semibold">Location:</span> Open to UAE, Canada & Global
                </div>
                <div className="text-sm">
                  <span className="font-semibold">Education:</span> British University in Egypt
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* See About Me Button */}
        <div className="flex justify-center">
          <Button 
            onClick={() => navigate('/about')}
            size="lg"
            className="bg-gradient-primary hover:opacity-90 text-white font-semibold px-8 py-6 text-lg transition-opacity duration-300"
          >
            See About Me
          </Button>
        </div>
      </div>
    </section>
  );
};

export default About;