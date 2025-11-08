import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Footer from '@/components/Footer';
import aboutIntroImg from '@/assets/about-intro.jpg';
import aboutPhilosophyImg from '@/assets/about-philosophy.jpg';

const AboutPage = () => {
  const navigate = useNavigate();

  return <div className="min-h-screen bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Button
          onClick={() => navigate('/')}
          variant="ghost"
          className="group"
        >
          <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Back to Portfolio
        </Button>
      </div>
      
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl text-foreground mb-6">
              About Me
            </h1>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          </div>

          {/* Main Story Section with Images */}
          <div className="grid lg:grid-cols-12 gap-8 items-start max-w-7xl mx-auto">
            {/* Left Tall Image */}
            <div className="lg:col-span-3 order-2 lg:order-1">
              <div className="sticky top-24">
                <img src={aboutIntroImg} alt="Youssef Yasser" className="w-full h-[600px] object-cover rounded-2xl shadow-elegant hover-lift" loading="eager" />
              </div>
            </div>

            {/* Center Content */}
            <div className="lg:col-span-6 order-1 lg:order-2 space-y-8">
              <div className="space-y-6">
                <p className="text-xl text-foreground leading-relaxed font-medium">
                  I'm <span className="text-primary font-semibold">Youssef Yasser</span>, a UI/UX designer and developer from Egypt, born in the UAE in 2003. My passion for design started early through drawing and creating — it naturally evolved into a fascination with how art and engineering intersect to shape meaningful user experiences.
                </p>
                
                <p className="text-xl text-foreground leading-relaxed">
                  I believe great design starts with visual connection. The way something looks is what first captures attention, and that moment of attention is where impact begins. My work focuses on creating interfaces that are both functional and visually balanced.
                </p>

                <p className="text-xl text-foreground leading-relaxed">
                  Inspired by architecture like the Burj Khalifa and traditional Egyptian art, my design philosophy blends heritage with modern minimalism, reflecting a harmony between culture, modesty, and innovation.
                </p>

                <p className="text-xl text-foreground leading-relaxed italic border-l-4 border-primary pl-6">
                  Design, to me, is a way of communicating values — connecting the past to the future through clarity and purpose.
                </p>
              </div>

              {/* Design Philosophy Highlight */}
              <div className="bg-gradient-card p-8 rounded-2xl border border-border/50 shadow-card mt-12">
                <h3 className="font-heading font-semibold text-2xl text-foreground mb-6">
                  Design Philosophy
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <p className="text-lg text-foreground leading-relaxed">Visual connection as the foundation of engagement</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <p className="text-lg text-foreground leading-relaxed">Balance between functionality and aesthetics</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <p className="text-lg text-foreground leading-relaxed">Traditonal ways meets modern minimalism</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <p className="text-lg text-foreground leading-relaxed">Purposeful design that communicates values</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Tall Image */}
            <div className="lg:col-span-3 order-3">
              <div className="sticky top-24">
                <img src={aboutPhilosophyImg} alt="Design Philosophy" className="w-full h-[600px] object-cover rounded-2xl shadow-elegant hover-lift" loading="eager" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default AboutPage;