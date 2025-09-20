import { useState, useEffect, useRef } from 'react';
import { Palette, Code2 } from 'lucide-react';

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
    'Figma',
    'Adobe XD', 
    'Canva',
    'User Interviews',
    'Surveys & Questionnaires',
    'Usability Testing',
    'A/B Testing',
    'Card Sorting',
    'Affinity Mapping',
    'Personas & Journey Mapping',
    'Heuristic Evaluation'
  ];

  const techSkills = [
    'Github',
    'Flutter',
    'Firebase',
    'SQLite',
    'Python',
    'Matlab'
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
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 max-w-5xl mx-auto">
            {designSkills.map((skill, index) => (
              <div 
                key={skill}
                className={`bg-background/50 backdrop-blur-sm border border-border rounded-xl p-4 text-center hover-scale transition-all duration-300 ${
                  isVisible ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ 
                  animationDelay: `${index * 100}ms`
                }}
              >
                <span className="text-sm font-medium text-foreground block">
                  {skill}
                </span>
              </div>
            ))}
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
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-3xl mx-auto">
            {techSkills.map((skill, index) => (
              <div 
                key={skill}
                className={`bg-background/50 backdrop-blur-sm border border-border rounded-xl p-4 text-center hover-scale transition-all duration-300 ${
                  isVisible ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ 
                  animationDelay: `${(designSkills.length + index) * 100}ms`
                }}
              >
                <span className="text-sm font-medium text-foreground block">
                  {skill}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;