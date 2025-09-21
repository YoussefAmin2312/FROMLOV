import { GraduationCap, Award, MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const certifications = [
    'CCNA Certification',
    'Flutter Development Certificate',
    'UX Design Training',
  ];

  return (
    <section id="about" className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground mb-6">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bio Content */}
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I am a computer engineer with practical experience in UI/UX and mobile app development. 
              I have built apps with real-time data, authentication, and clean UI/UX design principles.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              My expertise spans across Flutter development, Firebase integration, and user-centered 
              design methodologies. I believe in creating digital experiences that are not only 
              functional but also intuitive and delightful for users.
            </p>

            {/* Education & Location */}
            <div className="space-y-4 pt-6">
              <div className="flex items-center space-x-3">
                <GraduationCap className="text-primary" size={24} />
                <div>
                  <h4 className="font-semibold text-foreground">British University in Egypt</h4>
                  <p className="text-muted-foreground">Dual certificate with London South Bank University</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <MapPin className="text-primary" size={24} />
                <div>
                  <p className="text-muted-foreground">Open to opportunities in UAE, Canada, and globally</p>
                </div>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="space-y-6">
            <h3 className="font-heading font-semibold text-2xl text-foreground mb-6">
              Certifications & Training
            </h3>
            
            <div className="grid gap-4">
              {certifications.map((cert, index) => (
                <Card key={index} className="hover-lift bg-background/50 backdrop-blur-sm border-0">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="bg-gradient-primary p-3 rounded-full">
                        <Award className="text-white" size={24} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">{cert}</h4>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Key Highlights */}
            <div className="bg-gradient-primary p-6 rounded-xl text-white mt-8">
              <h4 className="font-heading font-semibold text-xl mb-4">Key Highlights</h4>
              <ul className="space-y-2">
                <li className="flex items-start space-x-2">
                  <span className="text-white/80">•</span>
                  <span>Led team projects during Flutter internship</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-white/80">•</span>
                  <span>Experience with real-time data and authentication systems</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-white/80">•</span>
                  <span>Strong foundation in networking and database systems</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-white/80">•</span>
                  <span>Business exposure through car dealership work</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;