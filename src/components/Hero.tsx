import React, { useEffect, useRef } from 'react';
import { ChevronDown, Download } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

const RainWord = ({ word, delay, x, duration, fontSize, fontWeight, initialY }: { 
  word: string; 
  delay: number; 
  x: string; 
  duration: number;
  fontSize: number;
  fontWeight: number;
  initialY: number;
}) => (
  <motion.div
    initial={{ y: `${initialY}vh`, opacity: 0.6 }}
    animate={{ 
      y: "calc(100vh + 50px)",
      opacity: [0.6, 0.6, 0.6, 0.3, 0],
    }}
    transition={{ 
      duration: duration,
      delay: delay,
      repeat: Infinity,
      repeatDelay: 0,
      ease: "linear"
    }}
    className="absolute text-gray-400/50 dark:text-gray-500/50 font-mono whitespace-nowrap pointer-events-none select-none"
    style={{ 
      left: x,
      fontSize: `${fontSize}px`,
      fontWeight: fontWeight,
      textShadow: "0 0 8px rgba(0,0,0,0.2)",
      letterSpacing: "0.05em"
    }}
  >
    {word}
  </motion.div>
);

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  
  const words = [
    "UI/UX", "Flutter", "Design", "Mobile", "App", "Firebase",
    "React", "TypeScript", "JavaScript", "Node.js", "Python",
    "Innovation", "Creativity", "Development", "Code", "User Experience",
    "Interface", "Animation", "Responsive", "Modern", "Clean Code",
    "Performance", "Accessibility", "Design Systems", "Typography",
    "Mobile Apps", "App Design", "Frontend", "Backend", "Full Stack",
    "Software", "Engineering", "Architecture", "Solutions", "Quality",
    "Testing", "Deployment", "Optimization", "Security", "Scalability",
    "APIs", "Database", "Cloud", "Figma", "Agile", "DevOps", "Docker",
    "Git", "Vue", "Angular", "Swift", "Kotlin", "Dart", "HTML", "CSS"
  ];
  
  // Generate rain words with random positions and timings - instant start
  const rainWords = Array.from({ length: 40 }, (_, index) => ({
    word: words[Math.floor(Math.random() * words.length)],
    x: `${Math.random() * 100}%`,
    delay: Math.random() * 2,
    duration: 20 + Math.random() * 15,
    fontSize: Math.random() * 8 + 12,
    fontWeight: Math.random() > 0.7 ? 600 : 400,
    initialY: -Math.random() * 100
  }));

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = e;
      const { left, top, width, height } = heroRef.current.getBoundingClientRect();
      
      const x = (clientX - left) / width;
      const y = (clientY - top) / height;
      
      heroRef.current.style.setProperty('--mouse-x', `${x}`);
      heroRef.current.style.setProperty('--mouse-y', `${y}`);
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section 
      id="home"
      ref={heroRef}
      className="min-h-screen flex items-center relative overflow-hidden pt-16"
      style={{
        '--mouse-x': '0.5',
        '--mouse-y': '0.5',
      } as React.CSSProperties}
    >
      {/* Rain Effect - Tech Words */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
        {rainWords.map((rainWord, index) => (
          <RainWord
            key={index}
            word={rainWord.word}
            x={rainWord.x}
            delay={rainWord.delay}
            duration={rainWord.duration}
            fontSize={rainWord.fontSize}
            fontWeight={rainWord.fontWeight}
            initialY={rainWord.initialY}
          />
        ))}
      </div>

      {/* Content */}
      <motion.div 
        className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20"
        style={{ y, opacity }}
      >
        <div className="flex justify-center lg:justify-start">
          <motion.div 
            className="space-y-6 text-center lg:text-left max-w-xl"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="space-y-3"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight whitespace-nowrap">
                Hi, I am <motion.span 
                  className="relative inline-block"
                  animate={{ 
                    color: ['#6B7280', '#4B5563', '#6B7280']
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut"
                  }}
                >
                  Youssef Yasser
                </motion.span>
              </h1>
              
              <div className="h-14 text-lg md:text-xl text-gray-600 dark:text-gray-300">
                <TypeAnimation
                  sequence={[
                    'UI/UX Designer',
                    2000,
                    'Mobile App Developer',
                    2000,
                  ]}
                  wrapper="div"
                  speed={50}
                  repeat={Infinity}
                  className="min-h-[3.5rem] flex items-center lg:justify-start justify-center"
                />
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-lg">
                I am a computer engineer passionate about UI/UX design and mobile app development.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex lg:justify-start justify-center gap-4 pt-4 flex-wrap"
            >
              <a 
                href="https://drive.google.com/uc?export=download&id=1XEllYypZs2UoznEDjtleIBsd16wAQl8Z" 
                download="Youssef_Yasser_Resume.pdf"
              >
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 px-8 py-3.5 rounded-[2rem] hover:bg-gray-800 dark:hover:bg-gray-200 transition-all relative group overflow-hidden shadow-lg inline-flex items-center gap-2"
                >
                  <Download size={20} className="relative z-10" />
                  <span className="relative z-10">Download Resume</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-900 dark:from-gray-200 dark:to-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.button>
              </a>
              <a 
                href="https://mail.google.com/mail/?view=cm&fs=1&to=youssef.yasser.1408@gmail.com" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3.5 rounded-[2rem] transition-all relative group overflow-hidden border-2 border-gray-900 dark:border-gray-100 hover:border-gray-700 dark:hover:border-gray-200"
                >
                  <span className="relative z-10 text-gray-900 dark:text-gray-100">Contact Me</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.button>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.a 
          animate={{ y: [0, 8, 0] }}
          transition={{ 
            duration: 1.5, 
            repeat: Infinity,
            repeatType: "loop" 
          }}
          href="#projects" 
          className="flex flex-col items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <span className="mb-2">Scroll</span>
          <ChevronDown size={20} />
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Hero;
