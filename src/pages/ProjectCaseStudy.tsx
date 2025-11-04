import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { ArrowLeft, ExternalLink, Github, Calendar, Users, Code, Target, Lightbulb, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import bookHeavenImg from '@/assets/book-heaven-project.jpg';
import mendAiImg from '@/assets/mend-ai-project.jpg';
import theraImg from '@/assets/thera-project.png';
import theraDemoVideo from '@/assets/thera-demo-video.mp4';
import teachlyImg from '@/assets/teachly-project.jpg';
import teachlyHeaderImg from '@/assets/teachly-header.svg';
import yogaSkincareImg from '@/assets/yoga-skincare-project.jpg';
import cyberPhysicalImg from '@/assets/cyber-physical-project.jpg';
import temperatureSensorImg from '@/assets/temperature-sensor-project.jpg';
import portfolioWebsiteImg from '@/assets/portfolio-website-project.jpg';
import theraResearchImg from '@/assets/thera-research-diagram.jpg';
import theraPersonaImg from '@/assets/thera-persona-photo.jpg';
import doubleDiamondImg from '@/assets/double-diamond-diagram.png';
import theraTaskFlowImg from '@/assets/thera-task-flow.png';
import theraWireframeLow1 from '@/assets/thera-wireframe-low-1.png';
import theraWireframeLow2 from '@/assets/thera-wireframe-low-2.png';
import theraWireframeLow3 from '@/assets/thera-wireframe-low-3.png';
import theraWireframeLow4 from '@/assets/thera-wireframe-low-4.png';
import theraWireframeLow5 from '@/assets/thera-wireframe-low-5.png';
import theraWireframeLow6 from '@/assets/thera-wireframe-low-6.png';
import theraWireframeLow7 from '@/assets/thera-wireframe-low-7.png';
import theraWireframeLow8 from '@/assets/thera-wireframe-low-8.png';
import theraWireframeLow9 from '@/assets/thera-wireframe-low-9.png';
import theraWireframeLow10 from '@/assets/thera-wireframe-low-10.png';
import theraHighScreen1 from '@/assets/thera-high-screen-1.png';
import theraHighScreen2 from '@/assets/thera-high-screen-2.png';
import theraHighScreen3 from '@/assets/thera-high-screen-3.png';
import theraHighScreen4 from '@/assets/thera-high-screen-4.png';
import theraHighScreen5 from '@/assets/thera-high-screen-5.png';
import theraHighScreen6 from '@/assets/thera-high-screen-6.png';
import theraHighScreen7 from '@/assets/thera-high-screen-7.png';
import theraHighScreen8 from '@/assets/thera-high-screen-8.png';
import theraHighScreen9 from '@/assets/thera-high-screen-9.png';
import theraHighScreen10 from '@/assets/thera-high-screen-10.png';
import theraInfoArchImg from '@/assets/thera-information-architecture.png';
import teachlyWireframeLow1 from '@/assets/teachly-wireframe-low-1.png';
import teachlyWireframeLow2 from '@/assets/teachly-wireframe-low-2.png';
import teachlyWireframeLow3 from '@/assets/teachly-wireframe-low-3.png';
import teachlyWireframeLow4 from '@/assets/teachly-wireframe-low-4.png';
import teachlyWireframeLow5 from '@/assets/teachly-wireframe-low-5.png';
import teachlyWireframeLow6 from '@/assets/teachly-wireframe-low-6.png';
import teachlyWireframeLow7 from '@/assets/teachly-wireframe-low-7.png';
import teachlyWireframeLow8 from '@/assets/teachly-wireframe-low-8.png';
import teachlyWireframeLow9 from '@/assets/teachly-wireframe-low-9.png';
import teachlyWireframeLow10 from '@/assets/teachly-wireframe-low-10.png';
import teachlyWireframeLow11 from '@/assets/teachly-wireframe-low-11.png';
import teachlyWireframeLow12 from '@/assets/teachly-wireframe-low-12.png';
import teachlyHighScreen1 from '@/assets/teachly-high-screen-1.png';
import teachlyHighScreen2 from '@/assets/teachly-high-screen-2.png';
import teachlyHighScreen3 from '@/assets/teachly-high-screen-3.png';
import teachlyHighScreen4 from '@/assets/teachly-high-screen-4.png';
import teachlyHighScreen5 from '@/assets/teachly-high-screen-5.png';
import teachlyHighScreen6 from '@/assets/teachly-high-screen-6.png';
import teachlyHighScreen7 from '@/assets/teachly-high-screen-7.png';
import teachlyHighScreen8 from '@/assets/teachly-high-screen-8.png';
import teachlyHighScreen9 from '@/assets/teachly-high-screen-9.png';
import teachlyHighScreen10 from '@/assets/teachly-high-screen-10.png';
import teachlyHighScreen11 from '@/assets/teachly-high-screen-11.png';
import teachlyHighScreen12 from '@/assets/teachly-high-screen-12.png';
import designThinkingImg from '@/assets/design-thinking-stages.png';
import teachlyInfoArchImg from '@/assets/teachly-information-architecture.png';
import teachlyUserFlowImg from '@/assets/teachly-user-flow.png';
import teachlyTaskFlowImg from '@/assets/teachly-task-flow.png';

const ProjectCaseStudy = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [projectId]);

  const projects = {
    'book-heaven': {
      title: 'Book Heaven',
      subtitle: 'Flutter Bookstore App with Team Leadership',
      image: bookHeavenImg,
      category: 'Mobile App',
      duration: '3 months',
      team: '4 developers',
      role: 'Team Leader & Flutter Developer',
      technologies: ['Flutter', 'Firebase', 'Real-time Database', 'Authentication'],
      overview: 'Led a team to develop a comprehensive bookstore application during my internship. The app features real-time inventory management, user authentication, and a seamless book discovery experience.',
      challenges: [
        'Managing a diverse team with different skill levels',
        'Implementing real-time inventory synchronization',
        'Creating an intuitive user interface for book discovery'
      ],
      solutions: [
        'Established clear communication protocols and regular team meetings',
        'Implemented Firebase real-time database for instant inventory updates',
        'Conducted user testing sessions to refine the UI/UX design'
      ],
      results: [
        'Successfully delivered the project within the 3-month timeline',
        'Achieved 95% user satisfaction in testing phase',
        'Gained valuable experience in team leadership and project management'
      ]
    },
    'thera': {
      title: 'Thera',
      subtitle: 'Mental Health & Therapy App',
      image: theraImg,
      category: 'UI/UX Design',
      duration: '4 months',
      team: '1 designer',
      role: 'UI/UX Designer',
      technologies: ['Figma', 'User Research', 'Prototyping', 'Usability Testing'],
      overview: 'Thera is a mobile application designed to simplify the process of booking therapy sessions. Users can choose between individual or couples therapy, with the flexibility of online or in-person appointments. The app provides a clear homepage where users can view upcoming sessions and manage their bookings with ease. Thera was created with a strong focus on privacy, accessibility, and cultural sensitivity addressing the unique challenges in the Middle East, where therapy often carries stigma and is not widely accepted. The goal of this project was to design a platform that makes mental health support more approachable, discreet, and user-friendly.',
      problem: 'Accessing therapy is often confusing and intimidating. Many people struggle to find the right therapist, and booking systems are rarely clear or user-friendly. In the Middle East, these challenges are intensified by cultural stigma—particularly for men, where seeking therapy can be perceived as a weakness. This discourages people from reaching out for help, even when they need it most.',
      research: {
        methods: ['User interviews with 12 participants', 'Competitive analysis of 5 therapy apps', 'Survey with 50+ respondents'],
        findings: [
          'Users feel overwhelmed by complex onboarding processes',
          'Privacy and security are top concerns for therapy apps',
          'Users prefer flexible scheduling and communication methods'
        ],
        image: theraResearchImg
      },
      persona: {
        name: 'Ahmed Hassan',
        age: 28,
        occupation: 'Software Engineer',
        bio: 'Ahmed works long hours in a demanding tech role. He often feels stressed and overwhelmed but is hesitant to seek therapy due to social stigma. He prefers discreet solutions and values flexibility, as his schedule is unpredictable. Based in Cairo, Egypt, Ahmed is married and seeking professional support to balance work and personal life.',
        photo: theraPersonaImg,
        goals: [
          'Find a therapist without feeling judged',
          'Easily book and manage sessions online',
          'Balance work and personal life with professional support'
        ],
        frustrations: [
          'Uncertainty about which therapist is the right fit',
          'Booking systems that are unclear or outdated',
          'Cultural stigma — fear of being seen as weak if he seeks help'
        ]
      },
      projectGoals: [
        'Create an intuitive onboarding experience that reduces anxiety',
        'Design a flexible scheduling system that accommodates various lifestyles',
        'Implement clear privacy features that build user trust'
      ],
      userFlow: {
        image: theraTaskFlowImg
      },
      wireframes: {
        low: [
          theraWireframeLow1,
          theraWireframeLow2,
          theraWireframeLow3,
          theraWireframeLow4,
          theraWireframeLow5,
          theraWireframeLow6,
          theraWireframeLow7,
          theraWireframeLow8,
          theraWireframeLow9,
          theraWireframeLow10
        ],
        high: [
          theraHighScreen1,
          theraHighScreen2,
          theraHighScreen3,
          theraHighScreen4,
          theraHighScreen5,
          theraHighScreen6,
          theraHighScreen7,
          theraHighScreen8,
          theraHighScreen9,
          theraHighScreen10
        ]
      },
      usabilityTesting: {
        description: 'I conducted remote usability testing with two participants who matched the app\'s target audience—people seeking accessible and comfortable therapy options. Both were asked to complete key tasks such as creating an account, booking a session, and using the voice-based chat feature.',
        findings: [
          {
            participant: 'Participant 1',
            feedback: 'The booking flow felt slightly confusing when selecting a therapist.'
          },
          {
            participant: 'Participant 2',
            feedback: 'The voice assistant didn\'t feel clear about when it was listening or responding.'
          }
        ],
        improvements: [
          {
            title: 'Simplified Booking Flow',
            description: 'Clearer therapist cards and session details for easier selection'
          },
          {
            title: 'Visual Voice Cues',
            description: 'Added indicators to show when the voice assistant is active'
          },
          {
            title: 'Enhanced Navigation',
            description: 'Improved navigation labels for faster task completion'
          }
        ]
      },
      keyTakeaways: [
        'Early user testing revealed critical pain points that shaped the final design',
        'Clear communication of privacy features significantly increased user trust',
        'Iterative design process led to a 40% improvement in task completion rates'
      ]
    },
    'teachly': {
      title: 'Teachly',
      subtitle: 'Language Learning Platform Connecting Students with Tutors',
      image: teachlyImg,
      category: 'Education',
      duration: '5 months',
      team: '1 designer',
      role: 'UI/UX Designer & Researcher',
      technologies: ['Figma', 'User Research', 'Prototyping', 'User Testing', 'Design Systems'],
      overview: 'Teachly is a modern language learning platform that connects students with qualified tutors for personalized, one-on-one or group lessons. The app is designed to make language learning more flexible, engaging, and accessible by allowing learners to browse tutors based on language, teaching style, price, and availability.\n\nThrough Teachly, students can book sessions, manage their learning schedules, and communicate directly with tutors all within a simple, intuitive interface. The platform emphasizes convenience and personalization, empowering users to learn at their own pace and on their own terms.',
      problem: 'While learning Spanish myself, I realized how difficult it was to find a tutor that truly fit my learning preferences. Most existing platforms felt cluttered, overloaded with information, or required several steps just to book a single lesson. The experience didn\'t feel intuitive or motivating — it felt transactional.\n\nI wanted to design a more seamless and human experience — one that helps learners discover, connect, and schedule lessons with language tutors effortlessly, without unnecessary complexity or distractions.',
      research: {
        framework: 'design-thinking',
        image: designThinkingImg,
        introduction: 'I followed the Design Thinking framework to guide my design process and ensure the final solution directly addressed real learner needs.',
        phases: [
          {
            number: '1',
            title: 'Empathize',
            description: 'I started by researching how learners currently find and book language tutors. Through surveys and informal interviews, I identified key challenges users face:',
            points: [
              'Difficulty finding tutors who match their language goals or schedule.',
              'Overwhelming search interfaces on existing platforms.',
              'Frustration with complex booking and payment steps.'
            ]
          },
          {
            number: '2',
            title: 'Define',
            description: 'After analyzing user feedback, I refined the main problem into a clear statement:',
            quote: '"How might we design a simple and intuitive experience that helps users find suitable tutors quickly and book lessons with minimal effort?"'
          },
          {
            number: '3',
            title: 'Ideate',
            description: 'I brainstormed multiple interface ideas focusing on tutor discovery, filters, and scheduling simplicity. My sketches explored different layouts for tutor profiles, search filters, and the booking process to reduce confusion and clicks.'
          },
          {
            number: '4',
            title: 'Prototype',
            description: 'I created low-fidelity wireframes in Figma that visualized the complete booking journey — from searching for a tutor to confirming a lesson. These prototypes helped identify early usability issues before investing in visuals.'
          },
          {
            number: '5',
            title: 'Test',
            description: 'I conducted usability testing with language learners. Participants were asked to search for a tutor, choose a lesson time, and proceed to payment.',
            points: [
              'Their feedback helped me simplify certain steps, such as improving filter clarity and adjusting button placement on the booking page.'
            ]
          }
        ]
      },
      personas: [
        {
          name: 'Mariam Ahmed',
          age: 24,
          occupation: 'Marketing Executive',
          location: 'Dubai, UAE',
          bio: 'Sara is a young professional who recently started working with international clients. She wants to learn Spanish to communicate better with her company\'s partners and expand her career opportunities. Her busy schedule makes it difficult to attend fixed classes, so she prefers flexible, one-on-one online lessons.',
          goals: [
            'Learn conversational Spanish for professional use.',
            'Find a reliable tutor with flexible hours.',
            'Pay easily and track her upcoming sessions.'
          ],
          frustrations: [
            'Most apps focus on vocabulary, not real conversation.',
            'Hard to know if a tutor fits her learning style before booking.',
            'Complicated scheduling interfaces on other platforms.'
          ]
        },
        {
          name: 'Omar Hassan',
          age: 22,
          occupation: 'University Student',
          location: 'Cairo, Egypt',
          bio: 'Omar is a computer science student who wants to improve his English speaking skills to prepare for internships abroad. He prefers affordable lessons with native speakers and enjoys short, focused sessions that fit into his class schedule.',
          goals: [
            'Improve English speaking confidence.',
            'Filter tutors by price and availability.',
            'Learn through casual, engaging sessions rather than structured courses.'
          ],
          frustrations: [
            'Finds it hard to identify affordable, trustworthy native tutors.',
            'Feels unsure about paying for a full course without knowing if the tutor fits his style.',
            'Payment steps and checkout flows on other platforms are often confusing or unclear.'
          ]
        }
      ],
      projectGoals: [
        'Create an intuitive tutor discovery and filtering system',
        'Design a flexible scheduling interface that accommodates various time zones',
        'Implement clear progress tracking to maintain learner motivation',
        'Build trust through transparent tutor profiles and authentic reviews'
      ],
      informationArchitecture: {
        description: 'The information architecture maps out the core structure of Teachly, organizing the main sections — search, tutor cards, scheduling, messaging, and filters. This hierarchy ensures that learners can quickly navigate between discovering tutors and managing their lessons.',
        image: teachlyInfoArchImg
      },
      userFlow: {
        description: 'This user flow illustrates the complete journey from the splash screen to booking confirmation. It highlights key decision points — whether to message first or book directly — allowing flexibility based on learner preferences.',
        image: teachlyUserFlowImg
      },
      taskFlow: {
        description: 'The task flow breaks down the specific steps for booking a lesson, from searching and filtering tutors to completing payment. Each stage was designed to minimize friction and provide clear feedback throughout the booking process.',
        image: teachlyTaskFlowImg
      },
      wireframes: {
        low: [
          teachlyWireframeLow1,
          teachlyWireframeLow2,
          teachlyWireframeLow3,
          teachlyWireframeLow4,
          teachlyWireframeLow5,
          teachlyWireframeLow6,
          teachlyWireframeLow7,
          teachlyWireframeLow8,
          teachlyWireframeLow9,
          teachlyWireframeLow10,
          teachlyWireframeLow11,
          teachlyWireframeLow12
        ],
        high: [
          teachlyHighScreen1,
          teachlyHighScreen2,
          teachlyHighScreen3,
          teachlyHighScreen4,
          teachlyHighScreen5,
          teachlyHighScreen6,
          teachlyHighScreen7,
          teachlyHighScreen8,
          teachlyHighScreen9,
          teachlyHighScreen10,
          teachlyHighScreen11,
          teachlyHighScreen12
        ]
      },
      usabilityTesting: {
        description: 'I conducted remote usability testing with three participants who were actively trying to learn a new language. Each participant was asked to complete key tasks including browsing tutors, booking a lesson, and viewing their progress dashboard.',
        findings: [
          {
            participant: 'Participant 1',
            feedback: 'The tutor filter options were helpful, but I wanted to filter by teaching methodology (immersive vs. structured).'
          },
          {
            participant: 'Participant 2',
            feedback: 'The booking calendar was intuitive, but I wish I could see my tutor\'s availability for the entire month at once.'
          },
          {
            participant: 'Participant 3',
            feedback: 'The progress dashboard was motivating, but I wanted more granular insights into which skills I need to work on.'
          }
        ],
        improvements: [
          {
            title: 'Enhanced Filter Options',
            description: 'Added teaching methodology filters and specialty tags (business, conversational, exam prep)'
          },
          {
            title: 'Monthly Calendar View',
            description: 'Implemented a monthly availability view with recurring slot suggestions'
          },
          {
            title: 'Detailed Progress Breakdown',
            description: 'Created skill-specific progress charts (speaking, listening, reading, writing)'
          }
        ]
      },
      keyTakeaways: [
        'User research revealed that transparency in tutor qualifications is crucial for trust',
        'Iterative testing improved task completion rates by 45% for first-time bookings',
        'Progress visualization features significantly increased user engagement and retention',
        'Flexible scheduling options were the most valued feature across all user segments'
      ]
    },
    'yoga-skincare': {
      title: 'Yoga Face & Skin Care',
      subtitle: 'Wellness App with Focus on Facial Yoga',
      image: yogaSkincareImg,
      category: 'Wellness',
      duration: '2 months',
      team: '1 developer',
      role: 'UI/UX Designer & Flutter Developer',
      technologies: ['Flutter', 'UI/UX Design', 'Animation Libraries', 'Local Storage'],
      overview: 'Designed and developed a wellness application focused on facial yoga exercises and skincare routines. Emphasized clean design and user engagement through interactive features.',
      challenges: [
        'Creating engaging exercise animations and instructions',
        'Designing an intuitive user flow for wellness routines',
        'Balancing feature richness with simplicity'
      ],
      solutions: [
        'Implemented smooth animations to guide users through exercises',
        'Conducted user research to understand wellness app preferences',
        'Created a minimalist design that promotes relaxation and focus'
      ],
      results: [
        'Delivered a polished wellness app with excellent user feedback',
        'Developed strong skills in wellness-focused UI/UX design',
        'Created a portfolio piece demonstrating design thinking process'
      ]
    },
    'cyber-physical': {
      title: 'Cyber-Physical Systems',
      subtitle: 'Autonomous Vehicle Simulation & Drone Mapping',
      image: cyberPhysicalImg,
      category: 'Engineering',
      duration: '6 months',
      team: '3 engineers',
      role: 'Systems Engineer & Simulation Specialist',
      technologies: ['MATLAB', 'Gazebo', 'RViz', 'ROS', 'Computer Vision'],
      overview: 'Advanced simulation project featuring autonomous vehicle navigation and drone mapping systems. Developed comprehensive cyber-physical systems using industry-standard tools.',
      challenges: [
        'Integrating multiple simulation platforms seamlessly',
        'Developing accurate autonomous navigation algorithms',
        'Creating realistic mapping and visualization systems'
      ],
      solutions: [
        'Created custom interfaces between MATLAB, Gazebo, and RViz',
        'Implemented advanced pathfinding and obstacle avoidance algorithms',
        'Developed real-time mapping visualization with detailed analytics'
      ],
      results: [
        'Successfully demonstrated autonomous vehicle navigation in complex environments',
        'Created accurate drone mapping system with 95% precision',
        'Gained deep expertise in robotics and autonomous systems'
      ]
    },
    'temperature-sensor': {
      title: 'Digital Temperature Sensor',
      subtitle: 'IoT Project with Arduino & Real-time Monitoring',
      image: temperatureSensorImg,
      category: 'IoT',
      duration: '1 month',
      team: '1 developer',
      role: 'IoT Developer & Hardware Integration Specialist',
      technologies: ['Arduino', 'DS18B20 Sensor', 'C++', 'Data Logging', 'Serial Communication'],
      overview: 'IoT project using Arduino and DS18B20 sensor for precise temperature monitoring and data logging with digital display and real-time data visualization.',
      challenges: [
        'Ensuring accurate temperature readings in various conditions',
        'Implementing reliable data logging and storage',
        'Creating an intuitive display for real-time monitoring'
      ],
      solutions: [
        'Calibrated sensors and implemented noise filtering algorithms',
        'Developed efficient data logging system with time-stamped entries',
        'Created clear digital display with trend visualization'
      ],
      results: [
        'Achieved ±0.1°C accuracy in temperature measurements',
        'Successfully logged data continuously for 30+ days',
        'Demonstrated practical IoT application with real-world utility'
      ]
    },
    'portfolio-website': {
      title: 'Portfolio Website',
      subtitle: 'Modern React Portfolio with Smooth Animations',
      image: portfolioWebsiteImg,
      category: 'Web Development',
      duration: '2 weeks',
      team: '1 developer',
      role: 'Full-Stack Developer & Designer',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Responsive Design'],
      overview: 'Modern, responsive portfolio website showcasing design process, development skills, and project case studies with smooth animations and optimal user experience.',
      challenges: [
        'Creating engaging animations without affecting performance',
        'Ensuring perfect responsiveness across all devices',
        'Balancing visual appeal with loading speed'
      ],
      solutions: [
        'Implemented optimized animations using CSS transforms and Framer Motion',
        'Used mobile-first design approach with comprehensive testing',
        'Optimized images and implemented lazy loading for better performance'
      ],
      results: [
        'Achieved 95+ PageSpeed Insights score on all metrics',
        'Created a portfolio that effectively showcases technical skills',
        'Demonstrated modern web development best practices'
      ]
    }
  };

  const project = projects[projectId as keyof typeof projects];
  const isDetailedCaseStudy = projectId === 'thera' || projectId === 'teachly';

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Project Not Found</h1>
          <Button onClick={() => navigate('/')}>
            <ArrowLeft size={16} className="mr-2" />
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

  // Render detailed UX Case Study for Thera and Teachly
  if (isDetailedCaseStudy && ('persona' in project || 'personas' in project)) {
    const isTeachlyProject = projectId === 'teachly';
    const headerImage = isTeachlyProject ? teachlyHeaderImg : project.image;
    
    return (
      <div className="min-h-screen bg-background">
        {/* Hero Header with Cover Image */}
        <div className={`relative w-full ${isTeachlyProject ? 'h-[90vh] min-h-[700px] bg-gradient-to-br from-purple-600 via-purple-400 to-blue-400' : 'h-[50vh] min-h-[400px] max-h-[600px]'}`}>
          {isTeachlyProject ? (
            <div className="w-full h-full flex items-center justify-center">
              <img
                src={headerImage}
                alt={project.title}
                className="max-w-4xl w-full h-auto object-contain px-8"
              />
            </div>
          ) : (
            <>
              <img
                src={headerImage}
                alt={project.title}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-background" />
            </>
          )}
          
          <div className="absolute inset-0 flex flex-col justify-end">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-12">
              <Button 
                variant="outline" 
                onClick={() => navigate('/')}
                className={`mb-6 ${isTeachlyProject ? 'text-white border-white/50 hover:bg-white hover:text-purple-600' : 'text-white border-white/50 hover:bg-white hover:text-black'} backdrop-blur-sm bg-black/20`}
              >
                <ArrowLeft size={16} className="mr-2" />
                Back to Portfolio
              </Button>
              
              <div className="flex items-center gap-4 mb-4">
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                  {project.category}
                </Badge>
                <span className="text-sm text-white/90">{project.duration}</span>
              </div>
              
              <h1 className="font-heading font-bold text-4xl lg:text-6xl text-white mb-4">
                {project.title}
              </h1>
              <p className="text-xl text-white/90 mb-8 max-w-3xl">
                {project.subtitle}
              </p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">

          <div className="max-w-5xl mx-auto space-y-16">
            {/* Project Overview */}
            <section>
              <h2 className="font-heading font-bold text-3xl text-foreground mb-6">
                Project Overview
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                {project.overview}
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-semibold text-foreground mb-2">Role</h3>
                    <p className="text-muted-foreground">{project.role}</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-semibold text-foreground mb-2">Tools</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <Badge key={index} variant="outline">{tech}</Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* The Challenge / Problem */}
            <section>
              <h2 className="font-heading font-bold text-3xl text-foreground mb-6">
                {isTeachlyProject ? 'The Challenge' : 'The Problem'}
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg whitespace-pre-line">
                {project.problem}
              </p>
            </section>

            {/* Research */}
            <section>
              <h2 className="font-heading font-bold text-3xl text-foreground mb-6">
                UX Research
              </h2>
              
              <div className="space-y-8">
                {isTeachlyProject && 'framework' in project.research && project.research.framework === 'design-thinking' ? (
                  // Design Thinking Framework for Teachly
                  <>
                    {/* Framework Introduction */}
                    <div className="bg-muted/50 rounded-lg p-6 border border-border">
                      <p className="text-muted-foreground leading-relaxed">
                        {(project.research as any).introduction}
                      </p>
                    </div>

                    {/* Design Thinking Diagram */}
                    <div className="rounded-lg overflow-hidden shadow-md bg-white p-8">
                      <img
                        src={project.research.image}
                        alt="Design Thinking Framework"
                        className="w-full max-w-4xl mx-auto"
                      />
                    </div>

                    {/* Design Thinking Phases */}
                    <div className="space-y-6">
                      {(project.research as any).phases.map((phase: any, index: number) => (
                        <Card key={index} className="border-l-4 border-l-primary">
                          <CardContent className="pt-6">
                            <div className="flex items-start gap-4 mb-4">
                              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                                <span className="font-bold text-primary text-lg">{phase.number}</span>
                              </div>
                              <div className="flex-1">
                                <h3 className="font-semibold text-xl text-foreground mb-2">{phase.title}</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                  {phase.description}
                                </p>
                                {phase.points && (
                                  <ul className="mt-3 space-y-2">
                                    {phase.points.map((point, idx) => (
                                      <li key={idx} className="flex items-start gap-2">
                                        <span className="text-primary mt-1">•</span>
                                        <span className="text-muted-foreground text-sm">{point}</span>
                                      </li>
                                    ))}
                                  </ul>
                                )}
                                {phase.quote && (
                                  <div className="bg-accent/5 rounded-lg p-4 border-l-2 border-accent mt-3">
                                    <p className="text-foreground italic">
                                      {phase.quote}
                                    </p>
                                  </div>
                                )}
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </>
                ) : (
                  // Double Diamond Framework for Thera
                  <>
                    {/* Framework Introduction */}
                    <div className="bg-muted/50 rounded-lg p-6 border border-border">
                      <p className="text-muted-foreground leading-relaxed">
                        I structured my process using the <span className="font-semibold text-foreground">Double Diamond framework</span>, which separates the design journey into exploring the problem space and then shaping the solution space.
                      </p>
                    </div>

                    {/* Double Diamond Diagram */}
                    <div className="rounded-lg overflow-hidden shadow-md bg-white p-8">
                      <img
                        src={doubleDiamondImg}
                        alt="Double Diamond Framework"
                        className="w-full max-w-3xl mx-auto"
                      />
                    </div>

                    {/* Double Diamond Phases */}
                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Discover Phase */}
                      <Card className="border-l-4 border-l-primary">
                        <CardContent className="pt-6">
                          <div className="flex items-start gap-3 mb-4">
                            <div className="p-2 rounded-lg bg-primary/10">
                              <Lightbulb className="text-primary" size={24} />
                            </div>
                            <div>
                              <h3 className="font-semibold text-xl text-foreground">Discover (Diverge)</h3>
                              <p className="text-sm text-muted-foreground">Exploring the problem space</p>
                            </div>
                          </div>
                          <p className="text-muted-foreground leading-relaxed mb-4">
                            I began by exploring the problem space broadly, conducting user research to understand barriers to therapy. Through surveys and informal interviews, I uncovered two key insights:
                          </p>
                          <ul className="space-y-2">
                            <li className="flex items-start gap-2">
                              <span className="text-primary mt-1">•</span>
                              <span className="text-muted-foreground text-sm">Many users, especially in the Middle East, face cultural stigma around seeking therapy.</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-primary mt-1">•</span>
                              <span className="text-muted-foreground text-sm">Even those willing to seek help struggle with confusing booking processes and lack of transparency about therapists.</span>
                            </li>
                          </ul>
                        </CardContent>
                      </Card>

                      {/* Define Phase */}
                      <Card className="border-l-4 border-l-accent">
                        <CardContent className="pt-6">
                          <div className="flex items-start gap-3 mb-4">
                            <div className="p-2 rounded-lg bg-accent/10">
                              <Target className="text-accent" size={24} />
                            </div>
                            <div>
                              <h3 className="font-semibold text-xl text-foreground">Define (Converge)</h3>
                              <p className="text-sm text-muted-foreground">Synthesizing the problem</p>
                            </div>
                          </div>
                          <p className="text-muted-foreground leading-relaxed mb-4">
                            I synthesized the research into a clear problem statement:
                          </p>
                          <div className="bg-accent/5 rounded-lg p-4 border-l-2 border-accent">
                            <p className="text-foreground italic">
                              "How might we design a platform that makes therapy booking simple, private, and culturally sensitive, so users can feel comfortable seeking mental health support?"
                            </p>
                          </div>
                        </CardContent>
                      </Card>

                      {/* Develop Phase */}
                      <Card className="border-l-4 border-l-secondary">
                        <CardContent className="pt-6">
                          <div className="flex items-start gap-3 mb-4">
                            <div className="p-2 rounded-lg bg-secondary/10">
                              <Code className="text-secondary-foreground" size={24} />
                            </div>
                            <div>
                              <h3 className="font-semibold text-xl text-foreground">Develop (Diverge)</h3>
                              <p className="text-sm text-muted-foreground">Generating solutions</p>
                            </div>
                          </div>
                          <p className="text-muted-foreground leading-relaxed">
                            I generated potential solutions, mapping user flows (booking sessions, managing appointments) and sketching low-fidelity wireframes to explore different design directions.
                          </p>
                        </CardContent>
                      </Card>

                      {/* Deliver Phase */}
                      <Card className="border-l-4 border-l-chart-2">
                        <CardContent className="pt-6">
                          <div className="flex items-start gap-3 mb-4">
                            <div className="p-2 rounded-lg bg-chart-2/10">
                              <AlertCircle className="text-chart-2" size={24} />
                            </div>
                            <div>
                              <h3 className="font-semibold text-xl text-foreground">Deliver (Converge)</h3>
                              <p className="text-sm text-muted-foreground">Refining the solution</p>
                            </div>
                          </div>
                          <p className="text-muted-foreground leading-relaxed">
                            I refined the best solution into high-fidelity prototypes and conducted usability testing. Feedback helped me iterate on the therapist selection flow and homepage scheduling, ensuring the app felt both intuitive and discreet.
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  </>
                )}
              </div>
            </section>

            {/* Persona */}
            <section>
              <h2 className="font-heading font-bold text-3xl text-foreground mb-6">
                User Persona{(project as any).personas ? 's' : ''}
              </h2>
              
              {(project as any).personas ? (
                // Multiple personas (for Teachly)
                <div className="space-y-6">
                  {(project as any).personas.map((persona: any, index: number) => (
                    <Card key={index}>
                      <CardContent className="pt-6">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="flex-shrink-0">
                            <div className="w-32 h-32 rounded-full bg-muted flex items-center justify-center">
                              <Users className="text-muted-foreground" size={48} />
                            </div>
                          </div>
                          <div className="flex-1 space-y-4">
                            <div>
                              <h3 className="font-semibold text-xl text-foreground">
                                {persona.name}
                              </h3>
                              <p className="text-sm text-muted-foreground">
                                {persona.age} years old, {persona.occupation}
                              </p>
                              {persona.location && (
                                <p className="text-sm text-muted-foreground">
                                  {persona.location}
                                </p>
                              )}
                            </div>
                            <p className="text-muted-foreground leading-relaxed">
                              {persona.bio}
                            </p>
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6 mt-6 pt-6 border-t">
                          <div>
                            <h4 className="font-semibold text-foreground mb-3">Goals</h4>
                            <ul className="space-y-2">
                              {persona.goals.map((goal: string, idx: number) => (
                                <li key={idx} className="flex items-start space-x-2">
                                  <span className="text-primary mt-1">✓</span>
                                  <span className="text-muted-foreground text-sm">{goal}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold text-foreground mb-3">Frustrations</h4>
                            <ul className="space-y-2">
                              {persona.frustrations.map((frustration: string, idx: number) => (
                                <li key={idx} className="flex items-start space-x-2">
                                  <AlertCircle className="text-destructive mt-0.5 flex-shrink-0" size={16} />
                                  <span className="text-muted-foreground text-sm">{frustration}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                // Single persona (for Thera and other projects)
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="flex-shrink-0">
                        <img
                          src={(project as any).persona.photo}
                          alt={(project as any).persona.name}
                          className="w-32 h-32 rounded-full object-cover"
                        />
                      </div>
                      <div className="flex-1 space-y-4">
                        <div>
                          <h3 className="font-semibold text-xl text-foreground">
                            {(project as any).persona.name}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {(project as any).persona.age} years old, {(project as any).persona.occupation}
                          </p>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                          {(project as any).persona.bio}
                        </p>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mt-6 pt-6 border-t">
                      <div>
                        <h4 className="font-semibold text-foreground mb-3">Goals</h4>
                        <ul className="space-y-2">
                          {(project as any).persona.goals.map((goal: string, index: number) => (
                            <li key={index} className="flex items-start space-x-2">
                              <span className="text-primary mt-1">✓</span>
                              <span className="text-muted-foreground text-sm">{goal}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-3">Frustrations</h4>
                        <ul className="space-y-2">
                          {(project as any).persona.frustrations.map((frustration: string, index: number) => (
                            <li key={index} className="flex items-start space-x-2">
                              <AlertCircle className="text-destructive mt-0.5 flex-shrink-0" size={16} />
                              <span className="text-muted-foreground text-sm">{frustration}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}
            </section>

            {/* Project Goals */}
            <section>
              <h2 className="font-heading font-bold text-3xl text-foreground mb-6">
                Project Goals
              </h2>
              <ul className="space-y-3">
                {project.projectGoals.map((goal, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <Target className="text-primary mt-1 flex-shrink-0" size={18} />
                    <span className="text-muted-foreground text-lg">{goal}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Information Architecture & Diagrams */}
            {isTeachlyProject && (project as any).informationArchitecture ? (
              // Teachly: Show three separate diagram sections
              <>
                {/* Information Architecture */}
                <section>
                  <h2 className="font-heading font-bold text-3xl text-foreground mb-6">
                    Information Architecture
                  </h2>
                  <div className="space-y-6">
                    <p className="text-muted-foreground leading-relaxed">
                      {(project as any).informationArchitecture.description}
                    </p>
                    <div className="rounded-lg overflow-hidden shadow-md bg-background p-4">
                      <img
                        src={(project as any).informationArchitecture.image}
                        alt="Information Architecture diagram"
                        className="w-full"
                      />
                    </div>
                  </div>
                </section>

                {/* User Flow */}
                <section>
                  <h2 className="font-heading font-bold text-3xl text-foreground mb-6">
                    User Flow
                  </h2>
                  <div className="space-y-6">
                    <p className="text-muted-foreground leading-relaxed">
                      {(project as any).userFlow.description}
                    </p>
                    <div className="rounded-lg overflow-hidden shadow-md bg-background p-4">
                      <img
                        src={project.userFlow.image}
                        alt="User Flow diagram"
                        className="w-full"
                      />
                    </div>
                  </div>
                </section>

                {/* Task Flow */}
                <section>
                  <h2 className="font-heading font-bold text-3xl text-foreground mb-6">
                    Task Flow
                  </h2>
                  <div className="space-y-6">
                    <p className="text-muted-foreground leading-relaxed">
                      {(project as any).taskFlow.description}
                    </p>
                    <div className="rounded-lg overflow-hidden shadow-md bg-background p-4">
                      <img
                        src={(project as any).taskFlow.image}
                        alt="Task Flow diagram"
                        className="w-full"
                      />
                    </div>
                  </div>
                </section>
              </>
            ) : (
              // Thera: Show original Information Architecture and User Flow sections
              <>
                {/* Information Architecture */}
                <section>
                  <h2 className="font-heading font-bold text-3xl text-foreground mb-6">
                    Information Architecture
                  </h2>
                  <div className="space-y-6">
                    <p className="text-muted-foreground leading-relaxed">
                      This information architecture represents the structure of a therapy booking application designed to make it easy for users to connect with therapists either online or in person. The goal was to create a simple, intuitive flow that minimizes friction from login to session booking.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      The flow starts with the authentication process, where users can log in using email or social accounts (Google, Apple, or Facebook), reset their password, or sign up for a new account.
                    </p>
                    <div className="rounded-lg overflow-hidden shadow-md bg-background p-4">
                      <img
                        src={theraInfoArchImg}
                        alt="Information Architecture diagram showing app structure"
                        className="w-full"
                      />
                    </div>
                  </div>
                </section>

                {/* User Flow */}
                <section>
                  <h2 className="font-heading font-bold text-3xl text-foreground mb-6">
                    User Flow / Task Flow
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    The flow includes the search of a specific doctor through filters; the choice of doctor and time slot and finally the checkout.
                  </p>
                  <div className="rounded-lg overflow-hidden shadow-md">
                    <img
                      src={project.userFlow.image}
                      alt="Task flow diagram showing booking journey"
                      className="w-full"
                    />
                  </div>
                </section>
              </>
            )}

            {/* Wireframes */}
            <section>
              <h2 className="font-heading font-bold text-3xl text-foreground mb-6">
                Wireframes
              </h2>
              <div className="space-y-8">
                <div>
                  <h3 className="font-semibold text-xl text-foreground mb-4">Low Fidelity</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {project.wireframes.low.map((wireframe, index) => (
                      <div key={index} className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                        <img
                          src={wireframe}
                          alt={`Low fidelity wireframe ${index + 1}`}
                          className="w-full h-auto"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Final UI Design */}
            {project.wireframes?.high && project.wireframes.high.length > 0 && (
              <section>
                <h2 className="font-heading font-bold text-3xl text-foreground mb-6">
                  Final UI Design
                </h2>
                <div>
                  <h3 className="font-semibold text-xl text-foreground mb-4">High-fidelity Screens</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {project.wireframes.high.map((screen, index) => (
                      <div key={index} className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                        <img
                          src={screen}
                          alt={`High-fidelity screen ${index + 1}`}
                          className="w-full h-auto"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            )}

            {/* Usability Testing */}
            <section>
              <h2 className="font-heading font-bold text-3xl text-foreground mb-6">
                Usability Testing & Iterations
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg mb-8">
                {project.usabilityTesting.description}
              </p>
              
              {/* Participant Findings */}
              <div className="mb-10">
                <h3 className="font-semibold text-2xl text-foreground mb-6 flex items-center gap-2">
                  <AlertCircle className="text-primary" size={24} />
                  Key Findings
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {project.usabilityTesting.findings.map((finding, index) => (
                    <Card key={index} className="border-l-4 border-l-primary/60 bg-card/50">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-3">
                          <div className="bg-primary/10 p-3 rounded-full">
                            <Users className="text-primary" size={20} />
                          </div>
                          <div>
                            <h4 className="font-semibold text-foreground mb-2">{finding.participant}</h4>
                            <p className="text-muted-foreground leading-relaxed">"{finding.feedback}"</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Improvements Made */}
              <div>
                <h3 className="font-semibold text-2xl text-foreground mb-6 flex items-center gap-2">
                  <Lightbulb className="text-primary" size={24} />
                  Improvements Made
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {project.usabilityTesting.improvements.map((improvement, index) => (
                    <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                      <CardContent className="p-6">
                        <div className="mb-4 flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                          <Target className="text-primary" size={24} />
                        </div>
                        <h4 className="font-semibold text-foreground text-lg mb-2">{improvement.title}</h4>
                        <p className="text-muted-foreground leading-relaxed">{improvement.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </section>

            {/* Key Takeaways */}
            <section className="pb-12">
              <h2 className="font-heading font-bold text-3xl text-foreground mb-6">
                Key Takeaways
              </h2>
              <ul className="space-y-3">
                {project.keyTakeaways.map((takeaway, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <Lightbulb className="text-primary mt-1 flex-shrink-0" size={18} />
                    <span className="text-muted-foreground text-lg">{takeaway}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </div>
    );
  }

  // Render traditional project case study
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-muted/30 py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/')}
            className="mb-6"
          >
            <ArrowLeft size={16} className="mr-2" />
            Back to Portfolio
          </Button>
          
          <div className="flex items-center gap-4 mb-4">
            <Badge variant="secondary">{project.category}</Badge>
            <span className="text-sm text-muted-foreground">{project.duration}</span>
          </div>
          
          <h1 className="font-heading font-bold text-4xl lg:text-5xl text-foreground mb-4">
            {project.title}
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl">
            {project.subtitle}
          </p>
        </div>
      </div>

      {/* Project Image */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="rounded-lg overflow-hidden shadow-lg mb-12">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-96 object-cover"
          />
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Overview */}
            <section>
              <h2 className="font-heading font-bold text-2xl text-foreground mb-4">
                Project Overview
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {project.overview}
              </p>
            </section>

            {/* Challenges */}
            {'challenges' in project && (
              <section>
                <h2 className="font-heading font-bold text-2xl text-foreground mb-4">
                  Challenges
                </h2>
                <ul className="space-y-3">
                  {project.challenges.map((challenge, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <Target className="text-primary mt-0.5" size={16} />
                      <span className="text-muted-foreground">{challenge}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Solutions */}
            {'solutions' in project && (
              <section>
                <h2 className="font-heading font-bold text-2xl text-foreground mb-4">
                  Solutions
                </h2>
                <ul className="space-y-3">
                  {project.solutions.map((solution, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <Code className="text-primary mt-0.5" size={16} />
                      <span className="text-muted-foreground">{solution}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Results */}
            {'results' in project && (
              <section>
                <h2 className="font-heading font-bold text-2xl text-foreground mb-4">
                  Results & Impact
                </h2>
                <ul className="space-y-3">
                  {project.results.map((result, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <ExternalLink className="text-primary mt-0.5" size={16} />
                      <span className="text-muted-foreground">{result}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Project Details */}
            <div className="bg-muted/30 rounded-lg p-6">
              <h3 className="font-heading font-semibold text-lg text-foreground mb-4">
                Project Details
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Calendar className="text-primary" size={16} />
                  <div>
                    <p className="text-sm text-muted-foreground">Duration</p>
                    <p className="font-medium text-foreground">{project.duration}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="text-primary" size={16} />
                  <div>
                    <p className="text-sm text-muted-foreground">Team Size</p>
                    <p className="font-medium text-foreground">{project.team}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Code className="text-primary" size={16} />
                  <div>
                    <p className="text-sm text-muted-foreground">My Role</p>
                    <p className="font-medium text-foreground">{project.role}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Technologies */}
            <div className="bg-muted/30 rounded-lg p-6">
              <h3 className="font-heading font-semibold text-lg text-foreground mb-4">
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <Badge key={index} variant="outline">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-3">
              <Button className="w-full">
                <ExternalLink size={16} className="mr-2" />
                View Live Project
              </Button>
              <Button variant="outline" className="w-full">
                <Github size={16} className="mr-2" />
                View Source Code
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCaseStudy;