import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { ChevronRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { useLanguage } from "@/contexts/LanguageContext";
import heroBackground from "@/assets/hero-background.png";

const AboutSection = () => {
  const { t } = useLanguage();

  const handleWhatsApp = () => {
    const message = encodeURIComponent(t('whatsapp.message'));
    window.open(`https://wa.me/5522992528361?text=${message}`, "_blank");
  };

  return (
    <section className="section-padding bg-background">
      <div className="container-custom px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div 
            className="aspect-[4/3] rounded-xl overflow-hidden shadow-2xl"
            style={{
              backgroundImage: `url(${heroBackground})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />

          {/* Content */}
          <div>
            <span className="text-foreground uppercase tracking-widest text-sm font-black">
              {t('about.subtitle')}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
              {t('about.title')} <span className="text-primary">{t('about.titleHighlight')}</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>{t('about.text1')}</p>
              <p>{t('about.text2')}</p>
              <p>{t('about.text3')}</p>
            </div>
            <div className="flex flex-wrap gap-4 mt-8">
              <Link to="/quem-somos">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 py-6 font-semibold btn-hover group">
                  {t('about.cta')}
                  <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Button 
                onClick={handleWhatsApp}
                className="bg-[#25D366] hover:bg-[#20BD5A] text-white rounded-full px-8 py-6 font-semibold btn-hover group"
              >
                <FaWhatsapp className="w-5 h-5 mr-2" />
                {t('about.contact')}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
