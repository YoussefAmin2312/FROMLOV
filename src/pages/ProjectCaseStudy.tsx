import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ArrowLeft, ExternalLink, Github, Users, Code, Target, Lightbulb, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import ImageZoomDialog from '@/components/ImageZoomDialog';
import Navigation from '@/components/Navigation';

import vernxCoverImg from '@/assets/vernx-cover.jpg';
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
import theraInfoArchImg from '@/assets/thera-information-architecture-new.png';
import multipwrInfoArchImg from '@/assets/multipwr-information-architecture.png';
import multipwrUserFlowImg from '@/assets/multipwr-user-flow.png';
import multipwrTaskFlowImg from '@/assets/multipwr-task-flow.png';
import multipwrHighScreen1 from '@/assets/multipwr-high-screen-1.png';
import multipwrHighScreen2 from '@/assets/multipwr-high-screen-2.png';
import multipwrHighScreen3 from '@/assets/multipwr-high-screen-3.png';
import multipwrHighScreen4 from '@/assets/multipwr-high-screen-4.png';
import multipwrHighScreen5 from '@/assets/multipwr-high-screen-5.png';
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
import leanUxDiagramImg from '@/assets/lean-ux-diagram.png';
import vernxInfoArchImg from '@/assets/vernx-information-architecture.png';
import vernxTaskFlowImg from '@/assets/vernx-task-flow.png';
import vernxUserFlowImg from '@/assets/vernx-user-flow.png';
import vernxWireframe1 from '@/assets/vernx-wireframe-1.png';
import vernxWireframe2 from '@/assets/vernx-wireframe-2.png';
import vernxWireframe3 from '@/assets/vernx-wireframe-3.png';
import vernxWireframe4 from '@/assets/vernx-wireframe-4.png';
import vernxWireframe5 from '@/assets/vernx-wireframe-5.png';
import vernxWireframe6 from '@/assets/vernx-wireframe-6.png';
import vernxHighHome from '@/assets/vernx-high-home.png';
import vernxHighFeaturedProperties from '@/assets/vernx-high-featured-properties.png';
import vernxHighReviews from '@/assets/vernx-high-reviews.png';
import vernxHighPropertyDetail from '@/assets/vernx-high-property-detail.png';
import vernxHighContact from '@/assets/vernx-high-contact.png';

const ProjectCaseStudy = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const [zoomImage, setZoomImage] = useState<{ src: string; alt: string } | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [projectId]);

  const handleImageClick = (src: string, alt: string) => {
    setZoomImage({ src, alt });
  };

  const projects = {
    'multipwr': {
      title: 'MultiPWR',
      subtitle: 'AI Productivity Tools Platform',
      image: vernxCoverImg,
      category: 'UI/UX Design',
      team: '1 designer',
      role: 'UI/UX Designer',
      technologies: ['Figma'],
      overview: 'MultiPWR is an AI-powered productivity platform that combines email generation, grammar checking, and meeting notes in one seamless interface. The platform eliminates the need to switch between multiple tools, offering a consistent design system, easy navigation, and transparent feature explanations.',
      problem: 'Most AI productivity tools are scattered across different platforms. Users constantly switch tabs between email generators, grammar checkers, and meeting note-taking apps. This slows down productivity and creates an inconsistent experience. MultiPWR solves this by offering all three tools in one place, with a consistent design system, easy navigation, and transparent feature explanations.',
      researchMethodology: 'Lean UX',
      leanUxDiagram: leanUxDiagramImg,
      leanUxPhases: [
        {
          title: '1. Think',
          description: 'I started by understanding what the core users needed: fast writing support, clean proofreading, and reliable meeting summaries. The goal was to remove unnecessary complexity and present the tools in a simple, intuitive layout.'
        },
        {
          title: '2. Make',
          description: 'I quickly built low-fidelity wireframes for the homepage, feature pages, and the individual AI tool screens. Instead of over-polishing early, I focused on rapid prototypes that allowed quick feedback on layout and hierarchy.'
        },
        {
          title: '3. Check',
          description: 'After testing the prototype, I adjusted button placement, simplified the feature descriptions, and improved the layout of the Meeting AI tool to make the note-taking interaction feel more natural. These small refinements made the experience smoother and reduced friction for first-time users.'
        }
      ],
      projectGoals: [
        'Create a platform where users can access all tools in one simple flow',
        'Keep the interface minimal and intuitive, with no feature overload',
        'Make the Meeting AI tool accessible and easy to use for students and professionals',
        'Clearly communicate what each AI does through clean UI and microcopy',
        'Ensure a consistent design system across all AI feature pages'
      ],
      informationArchitecture: multipwrInfoArchImg,
      taskFlow: multipwrTaskFlowImg,
      userFlow: {
        image: multipwrUserFlowImg
      },
      highFidelityScreens: [
        {
          image: multipwrHighScreen1,
          description: 'Landing page showcasing the three core AI tools: Mail AI for professional email generation, Live Translator AI for real-time multilingual translation, and Remind AI for smart scheduling.'
        },
        {
          image: multipwrHighScreen2,
          description: 'Productivity kit overview with WriteMail.ai feature demonstrating email composition with key points input, template selection, and automated email generation.'
        },
        {
          image: multipwrHighScreen3,
          description: 'Meeting.ai interface showing language selection from 30+ languages and the note-taking workflow with automatic transcription and recording capabilities.'
        },
        {
          image: multipwrHighScreen4,
          description: 'Pricing structure presenting three tiers: Standard (Free) for personal work, Pro ($10) for solo users, and Business ($20) for small teams with advanced collaboration features.'
        },
        {
          image: multipwrHighScreen5,
          description: 'Contact page with two support channels: sales and help & support, both offering early access to the Superhuman suite for Enterprise customers.'
        }
      ],
      persona: {
        name: 'Omar Hassan',
        age: 22,
        occupation: 'Business Student',
        bio: 'Omar spends most of his time writing emails to professors, preparing assignments, and attending group meetings. He wants AI tools that are fast, reliable, and easy to understand.',
        photo: theraPersonaImg,
        goals: [
          'Write clear, professional emails quickly',
          'Fix grammar mistakes without switching apps',
          'Get accurate meeting notes — especially when the meeting is in another language'
        ],
        frustrations: [
          'Switching between multiple different tools',
          'Apps that feel complicated or cluttered',
          'Unclear feature descriptions and hidden limitations'
        ]
      },
      highFidelityUI: [
        {
          description: 'Homepage design featuring the main AI tool options.',
          image: vernxCoverImg
        }
      ],
      usabilityTesting: {
        description: 'I conducted usability tests with three participants to evaluate the platform\'s ease of use and clarity.',
        findings: [
          {
            participant: 'Participant 1',
            feedback: 'The website is clean but I think the feature descriptions could be a bit shorter.'
          },
          {
            participant: 'Participant 2',
            feedback: 'I like the Meeting AI — the translation part is super useful.'
          },
          {
            participant: 'Participant 3',
            feedback: 'I didn\'t notice the Start button at first. It should be slightly more visible.'
          }
        ],
        improvements: [
          {
            title: 'Shorter Descriptions',
            description: 'Shortened the feature descriptions to improve scannability.'
          },
          {
            title: 'Enhanced Button Visibility',
            description: 'Moved the "Start Now" button higher for better visibility.'
          },
          {
            title: 'Improved Spacing',
            description: 'Enhanced spacing and hierarchy on the Meeting AI page.'
          },
          {
            title: 'Better Differentiation',
            description: 'Clarified the difference between Mail AI and Grammar AI through icons.'
          }
        ]
      },
      keyTakeaways: [
        'Users prefer simple, clean layouts when dealing with productivity tools',
        'Combining multiple AI tools into one flow reduces friction and improves efficiency',
        'Small visual tweaks (button position, spacing, icons) greatly improve usability',
        'Consistency across the design system helps users trust the platform'
      ]
    },
    'thera': {
      title: 'Thera',
      subtitle: 'Mental Health & Therapy App',
      image: theraImg,
      category: 'UI/UX Design',
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
        description: 'I conducted remote usability testing with two participants who matched the app\'s target audience—people seeking accessible and comfortable therapy options. Both were asked to complete key tasks such as creating an account and booking a session.',
        findings: [
          {
            participant: 'Participant 1',
            feedback: 'The booking flow felt slightly confusing when selecting a therapist.'
          },
          {
            participant: 'Participant 2',
            feedback: 'The session details page felt overwhelming'
          }
        ],
        improvements: [
          {
            title: 'Simplified Booking Flow',
            description: 'Clearer therapist cards and session details for easier selection'
          },
          {
            title: 'Enhanced Navigation',
            description: 'Improved navigation labels for faster task completion'
          }
        ]
      },
      keyTakeaways: [
        'Early user testing revealed critical pain points that shaped the final design',
        'Iterative design process led to a 40% improvement in task completion rates'
      ]
    },
    'teachly': {
      title: 'Teachly',
      subtitle: 'Language Learning Platform Connecting Students with Tutors',
      image: teachlyImg,
      category: 'Education',
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
            feedback: 'The app looks clean, but I wasn\'t sure what happens after clicking \'Book a Lesson\'—maybe add a clearer confirmation or step indicator.'
          },
          {
            participant: 'Participant 2',
            feedback: 'I liked the tutor cards, but I wish there was a way to see available times before clicking into the full profile.'
          },
          {
            participant: 'Participant 3',
            feedback: 'The Apple Pay confirmation screen felt realistic, but the loading screen could last a bit shorter—it made me think it froze.'
          }
        ],
        improvements: [
          {
            title: 'Clearer Booking Feedback',
            description: 'Added a short confirmation step before payment to reassure users about selected time and tutor.'
          },
          {
            title: 'Preview of Tutor Availability',
            description: 'Included small availability tags (e.g., "Available today" or "Next available: Thursday") on tutor cards for faster decision-making.'
          },
          {
            title: 'Faster Loading Simulation',
            description: 'Reduced the Apple Pay mimic loading duration and added a smooth transition animation to improve perceived responsiveness.'
          }
        ]
      },
      keyTakeaways: [
        'Users highly valued clarity in the booking process—every step needed to feel confirmed and predictable.',
        'Transparency and tutor information (rating, cost, reviews) were the main factors influencing booking decisions.',
        'Small details like smooth transitions and feedback screens significantly improved user trust and perceived quality.'
      ]
    },
    'yoga-skincare': {
      title: 'Yoga Face & Skin Care',
      subtitle: 'Wellness App with Focus on Facial Yoga',
      image: yogaSkincareImg,
      category: 'Wellness',
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
  const isDetailedCaseStudy = projectId === 'thera' || projectId === 'teachly' || projectId === 'multipwr';

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

  // Render detailed UX Case Study for Thera, Teachly, and VernX
  if (isDetailedCaseStudy && ('persona' in project || 'personas' in project || 'researchMethodology' in project)) {
    const isTeachlyProject = projectId === 'teachly';
    const headerImage = isTeachlyProject ? teachlyHeaderImg : project.image;
    
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        
        <ImageZoomDialog
          open={!!zoomImage}
          onOpenChange={(open) => !open && setZoomImage(null)}
          imageSrc={zoomImage?.src || ''}
          imageAlt={zoomImage?.alt || ''}
        />

        {/* Hero Header with Cover Image */}
        <div className={`relative w-full mt-16 ${isTeachlyProject ? 'h-[50vh] min-h-[400px] max-h-[600px] bg-gradient-to-br from-purple-600 via-purple-400 to-blue-400' : 'h-[50vh] min-h-[400px] max-h-[600px]'}`}>
          {isTeachlyProject ? (
            <>
              <div className="w-full h-full flex items-center justify-center px-8">
                <img
                  src={headerImage}
                  alt={project.title}
                  className="max-w-xs w-full h-auto object-contain"
                  loading="eager"
                  decoding="async"
                  fetchPriority="high"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-background pointer-events-none" />
            </>
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
              <p className="text-foreground text-[19.5px] leading-[1.9] tracking-[0.25px] mb-6 font-medium">
                {project.overview}
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-semibold text-foreground text-lg mb-2">Role</h3>
                    <p className="text-foreground text-base">{project.role}</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-semibold text-foreground text-lg mb-2">Tools</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <Badge key={index} variant="outline">{tech}</Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
              {isTeachlyProject && (
                <div className="flex justify-center mt-12">
                  <Button 
                    onClick={() => {
                      const prototypeSection = document.getElementById('prototype-section');
                      prototypeSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }}
                    className="group bg-gradient-primary hover:opacity-90 text-white font-inter font-semibold text-lg px-10 py-7 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105"
                  >
                    <span className="flex items-center gap-3">
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="w-6 h-6 transition-transform duration-300 group-hover:rotate-12" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Test Interactive Prototype
                    </span>
                  </Button>
                </div>
              )}
            </section>

            {/* The Challenge / Problem */}
            {'problem' in project && (
            <section>
              <h2 className="font-heading font-bold text-3xl text-foreground mb-6">
                {isTeachlyProject ? 'The Challenge' : 'The Problem'}
              </h2>
              <p className="text-foreground text-[19.5px] leading-[1.9] tracking-[0.25px] whitespace-pre-line font-medium">
                {(project as any).problem}
              </p>
            </section>
            )}

            {/* Research */}
            <section>
              <h2 className="font-heading font-bold text-3xl text-foreground mb-6">
                UX Research
              </h2>
              
              <div className="space-y-8">
                {'researchMethodology' in project && (project as any).researchMethodology === 'Lean UX' ? (
                  // Lean UX Framework for VernX
                  <>
                    {/* Lean UX Diagram */}
                    <div className="rounded-lg overflow-hidden shadow-md bg-white p-8 cursor-pointer hover:shadow-xl transition-shadow" onClick={() => handleImageClick((project as any).leanUxDiagram, 'Lean UX Framework')}>
                      <img
                        src={(project as any).leanUxDiagram}
                        alt="Lean UX Framework"
                        className="w-full max-w-4xl mx-auto"
                      />
                    </div>

                    {/* Lean UX Phases */}
                    <div className="space-y-6">
                      {(project as any).leanUxPhases.map((phase: any, index: number) => (
                        <Card key={index} className="border-l-4 border-l-primary">
                          <CardContent className="pt-6">
                            <h3 className="font-semibold text-xl text-foreground mb-3">{phase.title}</h3>
                            <p className="text-foreground text-[19.5px] leading-[1.9] tracking-[0.25px] font-medium">
                              {phase.description}
                            </p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </>
                ) : isTeachlyProject && 'research' in project && 'framework' in (project as any).research && (project as any).research.framework === 'design-thinking' ? (
                  // Design Thinking Framework for Teachly
                  <>
                    {/* Framework Introduction */}
                    <div className="bg-muted/50 rounded-lg p-6 border border-border">
                      <p className="text-foreground text-[19.5px] leading-[1.9] tracking-[0.25px] font-medium">
                        {(project as any).research.introduction}
                      </p>
                    </div>

                    {/* Design Thinking Diagram */}
                    <div className="rounded-lg overflow-hidden shadow-md bg-white p-8 cursor-pointer hover:shadow-xl transition-shadow" onClick={() => handleImageClick((project as any).research.image, 'Design Thinking Framework')}>
                      <img
                        src={(project as any).research.image}
                        alt="Design Thinking Framework"
                        className="w-full max-w-4xl mx-auto"
                      />
                    </div>

                    {/* Design Thinking Phases */}
                    <div className="space-y-6">
                      {(project as any).research.phases.map((phase: any, index: number) => (
                        <Card key={index} className="border-l-4 border-l-primary">
                          <CardContent className="pt-6">
                            <div className="flex items-start gap-4 mb-4">
                              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                                <span className="font-bold text-primary text-lg">{phase.number}</span>
                              </div>
                              <div className="flex-1">
                                <h3 className="font-semibold text-xl text-foreground mb-2">{phase.title}</h3>
                                <p className="text-foreground text-[19.5px] leading-[1.9] tracking-[0.25px] font-medium">
                                  {phase.description}
                                </p>
                                {phase.points && (
                                  <ul className="mt-3 space-y-2">
                                    {phase.points.map((point, idx) => (
                                      <li key={idx} className="flex items-start gap-2">
                                        <span className="text-primary mt-1">•</span>
                                        <span className="text-foreground text-base">{point}</span>
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
                      <p className="text-foreground text-[19.5px] leading-[1.9] tracking-[0.25px] font-medium">
                        I structured my process using the <span className="font-semibold text-foreground">Double Diamond framework</span>, which separates the design journey into exploring the problem space and then shaping the solution space.
                      </p>
                    </div>

                    {/* Double Diamond Diagram */}
                    <div className="rounded-lg overflow-hidden shadow-md bg-white p-8 cursor-pointer hover:shadow-xl transition-shadow" onClick={() => handleImageClick(doubleDiamondImg, 'Double Diamond Framework')}>
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
                              <p className="text-base text-foreground">Exploring the problem space</p>
                            </div>
                          </div>
                          <p className="text-foreground text-[19.5px] leading-[1.9] tracking-[0.25px] font-medium mb-4">
                            I began by exploring the problem space broadly, conducting user research to understand barriers to therapy. Through surveys and informal interviews, I uncovered two key insights:
                          </p>
                          <ul className="space-y-2">
                            <li className="flex items-start gap-2">
                              <span className="text-primary mt-1">•</span>
                              <span className="text-foreground text-base">Many users, especially in the Middle East, face cultural stigma around seeking therapy.</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-primary mt-1">•</span>
                              <span className="text-foreground text-base">Even those willing to seek help struggle with confusing booking processes and lack of transparency about therapists.</span>
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
                              <p className="text-base text-foreground">Synthesizing the problem</p>
                            </div>
                          </div>
                          <p className="text-foreground text-[19.5px] leading-[1.9] tracking-[0.25px] font-medium mb-4">
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
                              <p className="text-base text-foreground">Generating solutions</p>
                            </div>
                          </div>
                          <p className="text-foreground text-[19.5px] leading-[1.9] tracking-[0.25px] font-medium">
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
                              <p className="text-base text-foreground">Refining the solution</p>
                            </div>
                          </div>
                          <p className="text-foreground text-[19.5px] leading-[1.9] tracking-[0.25px] font-medium">
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
            {('persona' in project || 'personas' in project) && (
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
                              <p className="text-base text-foreground">
                                {persona.age} years old, {persona.occupation}
                              </p>
                              {persona.location && (
                                <p className="text-base text-foreground">
                                  {persona.location}
                                </p>
                              )}
                            </div>
                            <p className="text-foreground text-[19.5px] leading-[1.9] tracking-[0.25px] font-medium">
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
                                  <span className="text-foreground text-base">{goal}</span>
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
                                  <span className="text-foreground text-base">{frustration}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : 'persona' in project && (
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
                          <p className="text-base text-foreground">
                            {(project as any).persona.age} years old, {(project as any).persona.occupation}
                          </p>
                        </div>
                        <p className="text-foreground text-[19.5px] leading-[1.9] tracking-[0.25px] font-medium">
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
                              <span className="text-foreground text-base">{goal}</span>
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
                              <span className="text-foreground text-base">{frustration}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}
            </section>
            )}

            {/* Project Goals */}
            {'projectGoals' in project && (
            <section>
              <h2 className="font-heading font-bold text-3xl text-foreground mb-6">
                Project Goals
              </h2>
              <ul className="space-y-3">
                {(project as any).projectGoals.map((goal: string, index: number) => (
                  <li key={index} className="flex items-start space-x-3">
                    <Target className="text-primary mt-1 flex-shrink-0" size={18} />
                    <span className="text-foreground text-[19.5px] leading-[1.9] tracking-[0.25px] font-medium">{goal}</span>
                  </li>
                ))}
              </ul>
            </section>
            )}

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
                    <p className="text-foreground text-[19.5px] leading-[1.9] tracking-[0.25px] font-medium">
                      {(project as any).informationArchitecture.description}
                    </p>
                    <div className="rounded-lg overflow-hidden shadow-md bg-background p-4 cursor-pointer hover:shadow-xl transition-shadow" onClick={() => handleImageClick((project as any).informationArchitecture.image, 'Information Architecture diagram')}>
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
                    <p className="text-foreground text-[19.5px] leading-[1.9] tracking-[0.25px] font-medium">
                      {(project as any).userFlow.description}
                    </p>
                    <div className="rounded-lg overflow-hidden shadow-md bg-background p-4 cursor-pointer hover:shadow-xl transition-shadow" onClick={() => handleImageClick((project as any).userFlow.image, 'User Flow diagram')}>
                      <img
                        src={(project as any).userFlow.image}
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
                    <p className="text-foreground text-[19.5px] leading-[1.9] tracking-[0.25px] font-medium">
                      {(project as any).taskFlow.description}
                    </p>
                    <div className="rounded-lg overflow-hidden shadow-md bg-background p-4 cursor-pointer hover:shadow-xl transition-shadow" onClick={() => handleImageClick((project as any).taskFlow.image, 'Task Flow diagram')}>
                      <img
                        src={(project as any).taskFlow.image}
                        alt="Task Flow diagram"
                        className="w-full"
                      />
                    </div>
                  </div>
                </section>
              </>
            ) : (projectId === 'multipwr' && 'informationArchitecture' in project ? (
              // VernX: Show three separate diagram sections without descriptions
              <>
                {/* Information Architecture */}
                <section>
                  <h2 className="font-heading font-bold text-3xl text-foreground mb-6">
                    Information Architecture
                  </h2>
                  <p className="text-foreground text-base mb-6">
                    This diagram illustrates the hierarchical structure of VernX's navigation, showing how users can access different sections from the home page and navigate to property details through the Rent and Buy options.
                  </p>
                  <div className="rounded-lg overflow-hidden shadow-md bg-background p-4 cursor-pointer hover:shadow-xl transition-shadow" onClick={() => handleImageClick((project as any).informationArchitecture, 'Information Architecture diagram')}>
                    <img
                      src={(project as any).informationArchitecture}
                      alt="Information Architecture diagram"
                      className="w-full"
                    />
                  </div>
                </section>

                {/* Task Flow */}
                {'taskFlow' in project && (
                <section>
                  <h2 className="font-heading font-bold text-3xl text-foreground mb-6">
                    Task Flow
                  </h2>
                  <p className="text-foreground text-base mb-6">
                    The task flow outlines the step-by-step process users follow to complete key actions on VernX, from browsing properties to scheduling viewings or making inquiries.
                  </p>
                  <div className="rounded-lg overflow-hidden shadow-md bg-background p-4 cursor-pointer hover:shadow-xl transition-shadow" onClick={() => handleImageClick((project as any).taskFlow, 'Task Flow diagram')}>
                    <img
                      src={(project as any).taskFlow}
                      alt="Task Flow diagram"
                      className="w-full"
                    />
                  </div>
                </section>
                )}

                {/* User Flow */}
                {'userFlow' in project && (
                <section>
                  <h2 className="font-heading font-bold text-3xl text-foreground mb-6">
                    User Flow
                  </h2>
                  <p className="text-foreground text-base mb-6">
                    This flow maps the user's journey through VernX, highlighting decision points and interactions as they search, filter, and engage with property listings.
                  </p>
                  <div className="rounded-lg overflow-hidden shadow-md bg-background p-4 cursor-pointer hover:shadow-xl transition-shadow" onClick={() => handleImageClick((project as any).userFlow.image, 'User Flow diagram')}>
                    <img
                      src={(project as any).userFlow.image}
                      alt="User Flow diagram"
                      className="w-full"
                    />
                  </div>
                </section>
                )}
              </>
            ) : ('userFlow' in project ? (
              // Thera: Show original Information Architecture and User Flow sections
              <>
                {/* Information Architecture */}
                <section>
                  <h2 className="font-heading font-bold text-3xl text-foreground mb-6">
                    Information Architecture
                  </h2>
                  <div className="space-y-6">
                    <p className="text-foreground text-[19.5px] leading-[1.9] tracking-[0.25px] font-medium">
                      This information architecture represents the structure of a therapy booking application designed to make it easy for users to connect with therapists either online or in person. The goal was to create a simple, intuitive flow that minimizes friction from login to session booking.
                    </p>
                    <p className="text-foreground text-[19.5px] leading-[1.9] tracking-[0.25px] font-medium">
                      The flow starts with the authentication process, where users can log in using email or social accounts (Google, Apple, or Facebook), reset their password, or sign up for a new account.
                    </p>
                    <div className="rounded-lg overflow-hidden shadow-md bg-background p-4 cursor-pointer hover:shadow-xl transition-shadow" onClick={() => handleImageClick(theraInfoArchImg, 'Information Architecture diagram showing app structure')}>
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
                  <p className="text-foreground text-[19.5px] leading-[1.9] tracking-[0.25px] font-medium mb-6">
                    The flow includes the search of a specific doctor through filters; the choice of doctor and time slot and finally the checkout.
                  </p>
                  <div className="rounded-lg overflow-hidden shadow-md cursor-pointer hover:shadow-xl transition-shadow" onClick={() => handleImageClick((project as any).userFlow.image, 'Task flow diagram showing booking journey')}>
                    <img
                      src={(project as any).userFlow.image}
                      alt="Task flow diagram showing booking journey"
                      className="w-full"
                    />
                  </div>
                </section>
              </>
            ) : null))}

            {/* MultiPWR Wireframes - Not displayed */}
            {projectId === 'multipwr' && (project as any).wireframes && (
              <section>
                <h2 className="font-heading font-bold text-3xl text-foreground mb-6">
                  Wireframes
                </h2>
                <p className="text-foreground text-[19.5px] leading-[1.9] tracking-[0.25px] font-medium mb-8">
                  These wireframes showcase the foundational layout and structure of the VernX platform. Each screen was designed to prioritize clarity and ease of navigation, ensuring users can browse properties and access key information without unnecessary complexity.
                </p>
                <div className="space-y-8">
                  {(project as any).wireframes.map((wireframe: any, index: number) => (
                    <div key={index} className="space-y-4">
                      <p className="text-foreground text-[19.5px] leading-[1.9] tracking-[0.25px] font-medium">
                        {wireframe.description}
                      </p>
                      <div className="rounded-lg overflow-hidden shadow-md bg-background p-4 cursor-pointer hover:shadow-xl transition-shadow" onClick={() => handleImageClick(wireframe.image, `Wireframe ${index + 1}`)}>
                        <img
                          src={wireframe.image}
                          alt={`Wireframe ${index + 1}`}
                          className="w-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* MultiPWR High-Fidelity UI */}
            {projectId === 'multipwr' && (project as any).highFidelityUI && (
              <section>
                <h2 className="font-heading font-bold text-3xl text-foreground mb-6">
                  High-Fidelity UI Design
                </h2>
                <p className="text-foreground text-[19.5px] leading-[1.9] tracking-[0.25px] font-medium mb-8">
                  The high-fidelity designs showcase MultiPWR's clean and minimal interface, designed to help users access AI productivity tools without friction or complexity.
                </p>
                <div className="space-y-8">
                  {(project as any).highFidelityUI.map((screen: any, index: number) => (
                    <div key={index} className="space-y-4">
                      <p className="text-foreground text-[19.5px] leading-[1.9] tracking-[0.25px] font-medium">
                        {screen.description}
                      </p>
                      <div className="rounded-lg overflow-hidden shadow-md bg-background cursor-pointer hover:shadow-xl transition-shadow" onClick={() => handleImageClick(screen.image, `High-fidelity UI ${index + 1}`)}>
                        <img
                          src={screen.image}
                          alt={`High-fidelity UI ${index + 1}`}
                          className="w-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Wireframes (Thera/Teachly only) */}
            {'wireframes' in project && projectId !== 'multipwr' && (
            <section>
              <h2 className="font-heading font-bold text-3xl text-foreground mb-6">
                Wireframes
              </h2>
              <div className="space-y-8">
                <div>
                  <h3 className="font-semibold text-xl text-foreground mb-4">Low Fidelity</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {(project as any).wireframes.low.map((wireframe: string, index: number) => (
                      <div key={index} className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow cursor-pointer" onClick={() => handleImageClick(wireframe, `Low fidelity wireframe ${index + 1}`)}>
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
            )}

            {/* Final UI Design (Thera/Teachly only) */}
            {'wireframes' in project && projectId !== 'multipwr' && (project as any).wireframes?.high && (project as any).wireframes.high.length > 0 && (
              <section>
                <h2 className="font-heading font-bold text-3xl text-foreground mb-6">
                  Final UI Design
                </h2>
                <div>
                  <h3 className="font-semibold text-xl text-foreground mb-4">High-fidelity Screens</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {(project as any).wireframes.high.map((screen: string, index: number) => (
                      <div key={index} className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow cursor-pointer" onClick={() => handleImageClick(screen, `High-fidelity screen ${index + 1}`)}>
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

            {/* Interactive Prototype (Teachly only) */}
            {isTeachlyProject && (
              <section id="prototype-section">
                <h2 className="font-heading font-bold text-3xl text-foreground mb-6">
                  Interactive Prototype
                </h2>
                <p className="text-foreground text-[19.5px] leading-[1.9] tracking-[0.25px] font-medium mb-8">
                  Explore the interactive Figma prototype to experience the complete user flow and interactions designed for Teachly.
                </p>
                <div className="rounded-lg overflow-hidden shadow-xl bg-background border border-border flex justify-center items-center py-8">
                  <iframe 
                    style={{ border: 'none' }} 
                    width="100%" 
                    height="1000" 
                    src="https://embed.figma.com/proto/7UPul8PJEAA3bzqQhhRcYE/Untitled?page-id=0%3A1&node-id=5-3&viewport=550%2C-195%2C0.13&scaling=scale-down&content-scaling=fixed&starting-point-node-id=5%3A3&show-proto-sidebar=1&embed-host=share" 
                    allowFullScreen
                  />
                </div>
              </section>
            )}

            {/* Usability Testing */}
            {'usabilityTesting' in project && (
            <section>
              <h2 className="font-heading font-bold text-3xl text-foreground mb-6">
                Usability Testing & Iterations
              </h2>
              <p className="text-foreground text-[19.5px] leading-[1.9] tracking-[0.25px] font-medium mb-8">
                {(project as any).usabilityTesting.description}
              </p>
              
              {/* Participant Findings */}
              <div className="mb-10">
                <h3 className="font-semibold text-2xl text-foreground mb-6 flex items-center gap-2">
                  <AlertCircle className="text-primary" size={24} />
                  Key Findings
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {(project as any).usabilityTesting.findings.map((finding: any, index: number) => (
                    <Card key={index} className="border-l-4 border-l-primary/60 bg-card/50">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-3">
                          <div className="bg-primary/10 p-3 rounded-full">
                            <Users className="text-primary" size={20} />
                          </div>
                          <div>
                            <h4 className="font-semibold text-foreground mb-2">{finding.participant}</h4>
                            <p className="text-foreground text-[19.5px] leading-[1.9] tracking-[0.25px] font-medium">"{finding.feedback}"</p>
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
                  {(project as any).usabilityTesting.improvements.map((improvement: any, index: number) => (
                    <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                      <CardContent className="p-6">
                        <div className="mb-4 flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                          <Target className="text-primary" size={24} />
                        </div>
                        <h4 className="font-semibold text-foreground text-lg mb-2">{improvement.title}</h4>
                        <p className="text-foreground text-[19.5px] leading-[1.9] tracking-[0.25px] font-medium">{improvement.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </section>
            )}

            {/* Key Takeaways */}
            {'keyTakeaways' in project && (
            <section className="pb-12">
              <h2 className="font-heading font-bold text-3xl text-foreground mb-6">
                Key Takeaways
              </h2>
              <ul className="space-y-3">
                {(project as any).keyTakeaways.map((takeaway: string, index: number) => (
                  <li key={index} className="flex items-start space-x-3">
                    <Lightbulb className="text-primary mt-1 flex-shrink-0" size={18} />
                    <span className="text-foreground text-[19.5px] leading-[1.9] tracking-[0.25px] font-medium">{takeaway}</span>
                  </li>
                ))}
              </ul>
            </section>
            )}
          </div>
        </div>
      </div>
    );
  }

  // Render traditional project case study
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header */}
      <div className="bg-muted/30 py-8 mt-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex items-center gap-4 mb-4">
            <Badge variant="secondary">{project.category}</Badge>
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
              <p className="text-foreground text-[19.5px] leading-[1.9] tracking-[0.25px] font-medium">
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