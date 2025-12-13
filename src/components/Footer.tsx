import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";
import { FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { useLanguage } from "@/contexts/LanguageContext";
import logoSymbol from "@/assets/logo-symbol.png";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-footer-bg text-primary-foreground">
      <div className="container-custom px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & About */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logoSymbol} alt="ALDIV" className="h-12 w-auto brightness-0 invert" />
              <div className="flex flex-col">
                <span className="text-xl font-extrabold tracking-wide text-primary-foreground">
                  ALDIV
                </span>
                <span className="text-xs text-primary font-semibold -mt-1">
                  {t('about.titleHighlight')}
                </span>
              </div>
            </div>
            <p className="text-primary-foreground/70 text-sm mb-6">
              {t('footer.tagline')}
            </p>
            <div className="flex gap-4">
              <a 
                href="https://wa.me/5522992528361" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="WhatsApp"
              >
                <FaWhatsapp className="w-4 h-4" />
              </a>
              <a 
                href="https://www.instagram.com/aldiv_gestao/" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/company/110355849/admin/dashboard/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Atuação */}
          <div>
            <h4 className="font-semibold text-lg mb-6">{t('footer.coverage')}</h4>
            <div className="flex items-start gap-3 text-primary-foreground/70">
              <MapPin className="w-5 h-5 flex-shrink-0 mt-1" />
              <p>{t('footer.coverageText')}</p>
            </div>
          </div>

          {/* Menu */}
          <div>
            <h4 className="font-semibold text-lg mb-6">{t('footer.menu')}</h4>
            <nav className="flex flex-col gap-3">
              <Link to="/" className="text-primary-foreground/70 hover:text-primary transition-colors">{t('nav.home')}</Link>
              <Link to="/quem-somos" className="text-primary-foreground/70 hover:text-primary transition-colors">{t('nav.about')}</Link>
              <Link to="/servicos" className="text-primary-foreground/70 hover:text-primary transition-colors">{t('nav.services')}</Link>
              <Link to="/contato" className="text-primary-foreground/70 hover:text-primary transition-colors">{t('nav.contact')}</Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-6">{t('footer.contact')}</h4>
            <div className="flex flex-col gap-4">
              <a href="tel:+5522992528361" className="flex items-center gap-3 text-primary-foreground/70 hover:text-primary transition-colors">
                <Phone className="w-5 h-5" />
                (22) 99252-8361
              </a>
              <a href="https://wa.me/5522992528361" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-primary-foreground/70 hover:text-primary transition-colors">
                <FaWhatsapp className="w-5 h-5" />
                WhatsApp
              </a>
              <a href="mailto:dayane.lage@aldiv.com.br" className="flex items-center gap-3 text-primary-foreground/70 hover:text-primary transition-colors">
                <Mail className="w-5 h-5" />
                dayane.lage@aldiv.com.br
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container-custom px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/50">
            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
              <p>{t('footer.rights')}</p>
              <span className="hidden md:inline">|</span>
              <p>CNPJ: 50.925.648/0001-47</p>
            </div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-primary transition-colors">{t('footer.privacy')}</a>
              <a href="#" className="hover:text-primary transition-colors">{t('footer.terms')}</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
