import { useState, useEffect, useRef } from 'react';
import { Palette, Code2, Pencil, Users, FileText, TestTube, Split, LayoutGrid, Map, UserCircle, CheckCircle, Terminal } from 'lucide-react';

// Import actual logos
import figmaLogo from '@/assets/logos/figma.svg';
import canvaLogo from '@/assets/logos/canva.svg';
import githubLogo from '@/assets/logos/github.svg';
import flutterLogo from '@/assets/logos/flutter.svg';
import firebaseLogo from '@/assets/logos/firebase.svg';
import sqliteLogo from '@/assets/logos/sqlite.svg';
import pythonLogo from '@/assets/logos/python.svg';
import matlabLogo from '@/assets/logos/matlab.svg';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const designSkills = [
    { name: 'Figma', logo: figmaLogo },
    { name: 'Adobe XD', icon: Pencil },
    { name: 'Canva', logo: canvaLogo },
    { name: 'User Interviews', icon: Users },
    { name: 'Surveys & Questionnaires', icon: FileText },
    { name: 'Usability Testing', icon: TestTube },
    { name: 'A/B Testing', icon: Split },
    { name: 'Card Sorting', icon: LayoutGrid },
    { name: 'Affinity Mapping', icon: Map },
    { name: 'Personas & Journey Mapping', icon: UserCircle },
    { name: 'Heuristic Evaluation', icon: CheckCircle }
  ];

  const techSkills = [
    { name: 'Github', logo: githubLogo },
    { name: 'Flutter', logo: flutterLogo },
    { name: 'Firebase', logo: firebaseLogo },
    { name: 'SQLite', logo: sqliteLogo },
    { name: 'Python', logo: pythonLogo },
    { name: 'Matlab', logo: matlabLogo }
  ];

  return (
    <section id="skills" ref={sectionRef} className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground mb-6">
            Design and Tech Stack
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tools and technologies I use to create exceptional digital experiences.
          </p>
        </div>

        {/* Design Stack */}
        <div className="mb-16">
          <div className="flex items-center justify-center mb-8">
            <Palette className="text-primary mr-3" size={32} />
            <h3 className="font-heading font-semibold text-2xl text-foreground">
              Design & User Research Stack
            </h3>
          </div>
          <div className="relative overflow-hidden">
            <div className={`flex gap-6 ${isVisible ? 'animate-scroll' : ''}`}>
              {[...designSkills, ...designSkills].map((skill, index) => (
                <div 
                  key={`${skill.name}-${index}`}
                  className="flex-shrink-0 bg-background/50 backdrop-blur-sm border border-border rounded-xl px-6 py-4 flex items-center gap-3 hover-scale transition-all duration-300"
                >
                  {'logo' in skill ? (
                    <img src={skill.logo} alt={skill.name} className="w-6 h-6" />
                  ) : (
                    <skill.icon className="text-primary" size={24} />
                  )}
                  <span className="text-sm font-medium text-foreground whitespace-nowrap">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tech Stack */}
        <div>
          <div className="flex items-center justify-center mb-8">
            <Code2 className="text-primary mr-3" size={32} />
            <h3 className="font-heading font-semibold text-2xl text-foreground">
              Tech Stack
            </h3>
          </div>
          <div className="relative overflow-hidden">
            <div className={`flex gap-6 ${isVisible ? 'animate-scroll-reverse' : ''}`}>
              {[...techSkills, ...techSkills, ...techSkills].map((skill, index) => (
                <div 
                  key={`${skill.name}-${index}`}
                  className="flex-shrink-0 bg-background/50 backdrop-blur-sm border border-border rounded-xl px-6 py-4 flex items-center gap-3 hover-scale transition-all duration-300"
                >
                  <img src={skill.logo} alt={skill.name} className="w-6 h-6" />
                  <span className="text-sm font-medium text-foreground whitespace-nowrap">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;