import { Heart, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
  ];

  const socialLinks = [
    {
      icon: <Github size={20} />,
      href: 'https://github.com',
      label: 'GitHub',
    },
    {
      icon: <Linkedin size={20} />,
      href: 'https://linkedin.com',
      label: 'LinkedIn',
    },
    {
      icon: <Mail size={20} />,
      href: 'mailto:youssef.yasser.1408@gmail.com',
      label: 'Email',
    },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="font-heading font-bold text-2xl">Youssef Yasser</h3>
            <p className="text-background/80 leading-relaxed">
              Computer Engineer, UI/UX Designer, and Mobile App Developer passionate about 
              creating meaningful digital experiences.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-background/70 hover:text-background transition-colors hover:scale-110 transform duration-200"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-heading font-semibold text-lg">Quick Links</h4>
            <nav className="space-y-2">
              {quickLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(link.href)}
                  className="block text-background/80 hover:text-background transition-colors hover:translate-x-1 transform duration-200"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-heading font-semibold text-lg">Get In Touch</h4>
            <div className="space-y-2">
              <p className="text-background/80">
                <span className="font-medium">Email:</span>
                <br />
                <a 
                  href="mailto:youssef.yasser.1408@gmail.com"
                  className="hover:text-background transition-colors"
                >
                  youssef.yasser.1408@gmail.com
                </a>
              </p>
              <p className="text-background/80">
                <span className="font-medium">Location:</span>
                <br />
                Open to opportunities globally
              </p>
              <p className="text-background/80">
                <span className="font-medium">Status:</span>
                <br />
                Available for new opportunities
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-center items-center">
            <p className="text-background/60 text-sm">
              © {currentYear} Youssef Yasser. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;