import { useNavigate } from 'react-router-dom';
import bookHeavenImg from '@/assets/book-heaven-project.jpg';
import mendAiImg from '@/assets/mend-ai-project.jpg';
import yogaSkincareImg from '@/assets/yoga-skincare-project.jpg';
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

        <div className="space-y-16 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="flex items-center gap-8 lg:gap-12 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Project Image */}
              <div 
                onClick={() => handleProjectClick(project.id)}
                className="group cursor-pointer flex-shrink-0 w-full lg:w-[55%] overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500"
              >
                <div className="relative h-[400px] overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                  />
                  
                  {/* Title overlay at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                    <h3 className="font-heading font-bold text-3xl text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-white/90 text-base">
                      {project.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* View Case Study Button */}
              <div className="hidden lg:flex flex-1 justify-center">
                <button
                  onClick={() => handleProjectClick(project.id)}
                  className="bg-white/10 backdrop-blur-xl border border-white/20 text-foreground px-10 py-5 rounded-2xl font-semibold text-lg hover:bg-white/20 hover:border-white/30 transition-all duration-300 hover:scale-105 shadow-elegant hover:shadow-2xl"
                >
                  View Case Study
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>;
};
export default Projects;