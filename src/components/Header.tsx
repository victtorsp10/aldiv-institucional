import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronRight, Mail, Phone } from "lucide-react";
import { FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { Button } from "./ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import logoSymbol from "@/assets/logo-symbol.png";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const navItems = [
    { labelKey: "nav.home", href: "/" },
    { labelKey: "nav.about", href: "/quem-somos" },
    { labelKey: "nav.services", href: "/servicos" },
    { labelKey: "nav.contact", href: "/contato" },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background shadow-md' : 'bg-transparent'}`}>
      <div className="container-custom flex items-center justify-between py-4 px-4">
        <Link to="/" className="flex items-center gap-3">
          <img src={logoSymbol} alt="ALDIV" className="h-10 sm:h-12 w-auto" />
          <div className="flex flex-col">
            <span className={`text-lg sm:text-xl md:text-2xl font-extrabold tracking-wide transition-colors ${isScrolled ? 'text-accent' : 'text-primary-foreground'}`}>
              ALDIV
            </span>
            <span className={`text-[10px] sm:text-xs font-semibold -mt-1 transition-colors ${isScrolled ? 'text-primary' : 'text-primary'}`}>
              Gestão Integrada
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.labelKey}
              to={item.href}
              className={`font-bold transition-colors relative group ${
                isScrolled 
                  ? "text-foreground hover:text-foreground" 
                  : "text-primary-foreground hover:text-primary-foreground"
              }`}
            >
              {t(item.labelKey)}
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all ${
                isActive(item.href) ? "w-full" : "w-0 group-hover:w-full"
              }`} />
            </Link>
          ))}
        </nav>

        <Link to="/contato">
          <Button className={`hidden lg:flex items-center gap-2 rounded-full px-6 border-2 transition-all ${
            isScrolled 
              ? 'bg-primary text-primary-foreground hover:bg-primary/90 border-primary' 
              : 'bg-transparent text-primary-foreground border-primary-foreground/50 hover:bg-primary-foreground/10'
          }`}>
            {t('nav.cta')}
            <ChevronRight className="w-4 h-4" />
          </Button>
        </Link>

        {/* Mobile Menu - Sheet Sidebar */}
        <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
          <SheetTrigger asChild>
            <button
              className={`lg:hidden transition-colors ${isScrolled ? 'text-foreground' : 'text-primary-foreground'}`}
              aria-label="Toggle menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[350px] p-0 bg-background border-l border-border">
            <div className="flex flex-col h-full">
              {/* Header with Logo */}
              <div className="bg-accent p-6">
                <Link to="/" className="flex items-center gap-3" onClick={() => setIsMenuOpen(false)}>
                  <img src={logoSymbol} alt="ALDIV" className="h-12 w-auto" />
                  <div className="flex flex-col">
                    <span className="text-xl font-extrabold tracking-wide text-primary-foreground">
                      ALDIV
                    </span>
                    <span className="text-xs font-semibold -mt-1 text-primary">
                      Gestão Integrada
                    </span>
                  </div>
                </Link>
              </div>

              {/* Navigation Links */}
              <nav className="flex-1 p-6">
                <div className="flex flex-col gap-2">
                  {navItems.map((item) => (
                    <Link
                      key={item.labelKey}
                      to={item.href}
                      className={`flex items-center justify-between py-4 px-4 rounded-lg font-medium transition-all ${
                        isActive(item.href) 
                          ? "bg-primary text-primary-foreground" 
                          : "text-foreground hover:bg-muted hover:text-primary"
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <span>{t(item.labelKey)}</span>
                      <ChevronRight className="w-4 h-4" />
                    </Link>
                  ))}
                </div>

                {/* CTA Button */}
                <div className="mt-6">
                  <Link to="/contato" onClick={() => setIsMenuOpen(false)}>
                    <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-full py-6 text-base font-semibold">
                      {t('nav.cta')}
                      <ChevronRight className="w-5 h-5 ml-2" />
                    </Button>
                  </Link>
                </div>
              </nav>

              {/* Contact Info Footer */}
              <div className="border-t border-border p-6 bg-muted/50">
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-4 font-semibold">Contato</p>
                <div className="flex flex-col gap-3">
                  <a href="mailto:dayane.lage@aldiv.com.br" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors text-sm">
                    <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center">
                      <Mail className="w-4 h-4 text-primary" />
                    </div>
                    <span>dayane.lage@aldiv.com.br</span>
                  </a>
                  <a href="tel:+5522992528361" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors text-sm">
                    <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center">
                      <Phone className="w-4 h-4 text-primary" />
                    </div>
                    <span>(22) 99252-8361</span>
                  </a>
                  <a href="https://wa.me/5522992528361" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors text-sm">
                    <div className="w-9 h-9 rounded-full bg-green-500/10 flex items-center justify-center">
                      <FaWhatsapp className="w-4 h-4 text-green-500" />
                    </div>
                    <span>WhatsApp</span>
                  </a>
                </div>

                {/* Social Icons */}
                <div className="mt-6 pt-4 border-t border-border">
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-3 font-semibold">Redes Sociais</p>
                  <div className="flex items-center gap-3">
                    <a href="#" className="w-10 h-10 rounded-full bg-foreground/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors" aria-label="Facebook">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"/></svg>
                    </a>
                    <a href="https://www.instagram.com/aldiv_gestao/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-foreground/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors" aria-label="Instagram">
                      <FaInstagram className="w-4 h-4" />
                    </a>
                    <a href="https://www.linkedin.com/company/110355849/admin/dashboard/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-foreground/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors" aria-label="LinkedIn">
                      <FaLinkedinIn className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
