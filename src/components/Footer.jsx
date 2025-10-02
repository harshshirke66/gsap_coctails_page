import { useGSAP } from '@gsap/react';
import { SplitText } from 'gsap/all';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Instagram, Linkedin, Github, Globe } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const socials = [
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/_harsh_shirke/',
      icon: Instagram,
      color: 'from-pink-500 to-purple-600'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/harsh-shirke-990a572b1/',
      icon: Linkedin,
      color: 'from-blue-500 to-blue-700'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/harshshirke66',
      icon: Github,
      color: 'from-gray-600 to-gray-800'
    },
    {
      name: 'Portfolio',
      url: 'https://harshportfoliowebsite.vercel.app',
      icon: Globe,
      color: 'from-emerald-500 to-teal-600'
    }
  ];

  useGSAP(() => {
    const titleSplit = SplitText.create('#footer-main-title', { type: 'words' });

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: '#portfolio-footer',
        start: 'top center',
      }
    });

    timeline
      .from(titleSplit.words, {
        opacity: 0,
        y: 50,
        stagger: 0.08,
        duration: 0.8,
        ease: 'power2.out'
      })
      .from('.footer-divider', {
        scaleX: 0,
        duration: 1,
        ease: 'power2.inOut'
      }, '-=0.4')
      .from('.social-card', {
        opacity: 0,
        y: 30,
        stagger: 0.1,
        duration: 0.6,
        ease: 'back.out(1.5)'
      }, '-=0.6')
      .from('.footer-bottom', {
        opacity: 0,
        y: 20,
        duration: 0.6
      }, '-=0.3');

    // Subtle floating animation
    gsap.to('.floating-shape-1', {
      y: -20,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    });

    gsap.to('.floating-shape-2', {
      y: 20,
      duration: 5,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    });
  });

  return (
    <footer id="portfolio-footer" className="relative bg-black text-white py-16 px-6 overflow-hidden">
      {/* Subtle Background Shapes */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="floating-shape-1 absolute top-10 left-10 w-48 h-48 bg-purple-600/20 rounded-full blur-3xl"></div>
        <div className="floating-shape-2 absolute bottom-10 right-10 w-56 h-56 bg-blue-600/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Title Section */}
        <div className="text-center mb-12">
          <h2 id="footer-main-title" className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400">
            Let's Connect & Collaborate
          </h2>
          <div className="footer-divider w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full"></div>
        </div>

        {/* Social Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto">
          {socials.map((social) => {
            const IconComponent = social.icon;
            return (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-card group"
              >
                <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:scale-105 hover:bg-white/10 hover:border-white/20 hover:shadow-lg hover:shadow-purple-500/20">
                  <div className="flex flex-col items-center">
                    <IconComponent className="w-8 h-8 mb-3 transform group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-base font-semibold text-white mb-1">
                      {social.name}
                    </h3>
                    <div className={`w-8 h-0.5 bg-gradient-to-r ${social.color} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}></div>
                  </div>
                </div>
              </a>
            );
          })}
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8"></div>

        {/* Footer Bottom */}
        <div className="footer-bottom text-center space-y-2">
          <p className="text-base font-semibold">
            Made with <span className="text-red-500">❤</span> by{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
              Harsh Shirke
            </span>
          </p>
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;