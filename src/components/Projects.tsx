import { useNavigate } from 'react-router-dom';
import bookHeavenImg from '@/assets/book-heaven-project.jpg';
import mendAiImg from '@/assets/mend-ai-project.jpg';
import yogaSkincareImg from '@/assets/yoga-skincare-project.jpg';
import cyberPhysicalImg from '@/assets/cyber-physical-project.jpg';
import temperatureSensorImg from '@/assets/temperature-sensor-project.jpg';
import portfolioWebsiteImg from '@/assets/portfolio-website-project.jpg';
const Projects = () => {
  const navigate = useNavigate();
  const projects = [{
    id: 'book-heaven',
    title: 'Book Heaven',
    description: 'Flutter bookstore app developed during internship',
    image: bookHeavenImg,
    category: 'Mobile App'
  }, {
    id: 'mend-ai',
    title: 'Mend - AI Couples Therapy',
    description: 'MVP for a voice-based AI couples therapy app',
    image: mendAiImg,
    category: 'AI/Healthcare'
  }, {
    id: 'yoga-skincare',
    title: 'Yoga Face & Skin Care',
    description: 'Wellness app focusing on facial yoga exercises',
    image: yogaSkincareImg,
    category: 'Wellness'
  }, {
    id: 'cyber-physical',
    title: 'Cyber-Physical Systems',
    description: 'Advanced autonomous vehicle simulation project',
    image: cyberPhysicalImg,
    category: 'Engineering'
  }, {
    id: 'temperature-sensor',
    title: 'Digital Temperature Sensor',
    description: 'IoT project using Arduino and DS18B20 sensor',
    image: temperatureSensorImg,
    category: 'IoT'
  }, {
    id: 'portfolio-website',
    title: 'Portfolio Website',
    description: 'Modern, responsive portfolio website',
    image: portfolioWebsiteImg,
    category: 'Web Development'
  }];
  const handleProjectClick = (projectId: string) => {
    navigate(`/project/${projectId}`);
  };
  return <section id="projects" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground mb-6">Work</h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my work spanning mobile development, AI integration, IoT systems, and user experience design.
          </p>
        </div>

        <div className="space-y-12 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-primary/20 transition-all duration-700 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-[500px] overflow-hidden">
                {/* Large project image */}
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" 
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent"></div>
                
                {/* Content on the left */}
                <div className="absolute inset-0 flex items-center">
                  <div className="px-8 sm:px-12 lg:px-16 max-w-2xl">
                    <span className="inline-block bg-primary/90 backdrop-blur-sm text-primary-foreground px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
                      {project.category}
                    </span>
                    <h3 className="font-heading font-bold text-4xl sm:text-5xl text-white mb-4 transform group-hover:translate-x-2 transition-transform duration-500">
                      {project.title}
                    </h3>
                    <p className="text-white/90 text-lg leading-relaxed mb-8 transform group-hover:translate-x-2 transition-transform duration-500 delay-75">
                      {project.description}
                    </p>
                  </div>
                  
                  {/* Display Case Study button on the right */}
                  <div className="absolute right-8 sm:right-12 lg:right-16">
                    <button
                      onClick={() => handleProjectClick(project.id)}
                      className="bg-white/10 backdrop-blur-md text-white border-2 border-white/30 px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-primary hover:border-white transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl"
                    >
                      Display Case Study
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>;
};
export default Projects;