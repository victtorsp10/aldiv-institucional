import { Mail, Phone } from "lucide-react";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { useLanguage, Language } from "@/contexts/LanguageContext";

const TopBar = () => {
  const { language, setLanguage } = useLanguage();

  const flags: { lang: Language; src: string; title: string }[] = [
    { lang: 'es', src: 'https://flagcdn.com/w40/es.png', title: 'Español' },
    { lang: 'en', src: 'https://flagcdn.com/w40/us.png', title: 'English' },
    { lang: 'pt', src: 'https://flagcdn.com/w40/br.png', title: 'Português' },
  ];

  return (
    <div className="bg-background border-b border-border py-2 px-4">
      <div className="container-custom flex flex-row justify-between items-center text-sm">
        {/* Language Flags - Always Left */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {flags.map((flag) => (
            <button
              key={flag.lang}
              onClick={() => setLanguage(flag.lang)}
              className={`w-6 h-4 sm:w-7 sm:h-5 rounded overflow-hidden hover:scale-110 transition-transform ${
                language === flag.lang ? 'ring-2 ring-primary' : ''
              }`}
              title={flag.title}
            >
              <img src={flag.src} alt={flag.title} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>

        {/* Social + Contact - Always Right */}
        <div className="flex items-center gap-2 sm:gap-6">
          {/* Social Icons */}
          <div className="flex items-center gap-1.5 sm:gap-3">
            <a href="#" className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-foreground/20 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-primary-foreground transition-colors" aria-label="Facebook">
              <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"/></svg>
            </a>
            <a href="https://www.instagram.com/aldiv_gestao/" target="_blank" rel="noopener noreferrer" className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-foreground/20 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-primary-foreground transition-colors" aria-label="Instagram">
              <FaInstagram className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </a>
            <a href="#" className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-foreground/20 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-primary-foreground transition-colors" aria-label="LinkedIn">
              <FaLinkedinIn className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </a>
          </div>
          
          {/* Contact Info - Hidden on Mobile */}
          <div className="hidden md:flex items-center gap-6 text-foreground">
            <a href="mailto:dayane.lage@aldiv.com.br" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Mail className="w-4 h-4" />
              <span>dayane.lage@aldiv.com.br</span>
            </a>
            <a href="tel:+5522992528361" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Phone className="w-4 h-4" />
              <span>(22) 99252-8361</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
