import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const ContactCTA = () => {
  const { t } = useLanguage();

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-hero-bg"
        style={{
          backgroundImage: `linear-gradient(to right, hsl(var(--hero-bg) / 0.95), hsl(var(--hero-bg) / 0.85)), url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      />

      <div className="container-custom relative z-10 px-4 text-center">
        <span className="text-primary font-semibold text-sm uppercase tracking-wider">
          {t('cta.subtitle')}
        </span>
        <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mt-2 mb-4">
          {t('cta.title')}
        </h2>
        <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
          {t('cta.description')}
        </p>
        <Link to="/contato">
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-10 py-6 text-lg font-semibold btn-hover group">
            {t('cta.button')}
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default ContactCTA;
