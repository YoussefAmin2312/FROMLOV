import { Card, CardContent } from '@/components/ui/card';

const Experience = () => {
  const experiences = [
    {
      title: 'UI/UX Designer Intern',
      company: 'Uneeq',
      period: 'July 2025 – September 2025',
      location: 'Remote',
    },
    {
      title: 'UI/UX Designer Intern',
      company: 'USAM',
      period: 'August 2025 – September 2025',
      location: 'Remote',
    },
    {
      title: 'Mobile Developer Intern & Team Leader',
      company: 'Telecom Egypt',
      period: 'July 2024 – September 2024',
      location: 'Nasr City',
    },
    {
      title: 'Network Engineering Intern',
      company: 'WE-Telecom',
      period: 'September 2023 – October 2023',
      location: 'Nasr City',
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground mb-6">
            Experience
          </h2>
        </div>

        {/* Horizontal scrollable experience cards */}
        <div className="overflow-x-auto pb-6">
          <div className="flex gap-6 min-w-max">
            {experiences.map((experience, index) => (
              <Card 
                key={index} 
                className="hover-lift bg-card border border-border shadow-md min-w-[320px] transition-all duration-300 hover:shadow-lg"
              >
                <CardContent className="p-6">
                  <h3 className="font-heading font-semibold text-xl text-foreground mb-2">
                    {experience.title}
                  </h3>
                  <p className="text-primary font-medium text-lg mb-1">
                    {experience.company}
                  </p>
                  <p className="text-muted-foreground text-sm mb-1">
                    {experience.period}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    {experience.location}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;