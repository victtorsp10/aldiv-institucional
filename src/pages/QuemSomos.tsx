import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactCTA from "@/components/ContactCTA";
import WhatsAppButton from "@/components/WhatsAppButton";
import PageHero from "@/components/PageHero";
import StatsSection from "@/components/StatsSection";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { CheckCircle, Target, Eye, Heart, ArrowRight, Building2 } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import heroBackground from "@/assets/hero-background.png";

const QuemSomos = () => {
  const { t } = useLanguage();

  const valueKeys = [
    'quemsomos.value1', 'quemsomos.value2', 'quemsomos.value3', 'quemsomos.value4',
    'quemsomos.value5', 'quemsomos.value6', 'quemsomos.value7'
  ];

  const proposalKeys = [
    'quemsomos.proposal.item1', 'quemsomos.proposal.item2', 'quemsomos.proposal.item3',
    'quemsomos.proposal.item4', 'quemsomos.proposal.item5', 'quemsomos.proposal.item6'
  ];

  const howWeWork = [
    { step: "01", titleKey: 'quemsomos.step1.title', descKey: 'quemsomos.step1.desc' },
    { step: "02", titleKey: 'quemsomos.step2.title', descKey: 'quemsomos.step2.desc' },
    { step: "03", titleKey: 'quemsomos.step3.title', descKey: 'quemsomos.step3.desc' },
    { step: "04", titleKey: 'quemsomos.step4.title', descKey: 'quemsomos.step4.desc' },
    { step: "05", titleKey: 'quemsomos.step5.title', descKey: 'quemsomos.step5.desc' },
  ];

  const handleWhatsApp = () => {
    const message = encodeURIComponent(t('whatsapp.message'));
    window.open(`https://wa.me/5522992528361?text=${message}`, "_blank");
  };

  return (
    <div className="min-h-screen">
      <TopBar />
      <Header />
      <main>
        {/* Hero Banner */}
        <PageHero 
          title={t('page.about.title')} 
          description={t('page.about.description')} 
        />

        {/* About Content */}
        <section className="section-padding bg-background">
          <div className="container-custom px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div 
                className="aspect-[4/3] rounded-lg overflow-hidden shadow-2xl"
                style={{
                  backgroundImage: `url(${heroBackground})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
              <div>
                <span className="text-foreground uppercase tracking-widest text-sm font-black">{t('quemsomos.about.subtitle')}</span>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
                  {t('about.title')} <span className="text-primary">{t('about.titleHighlight')}</span>
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>{t('quemsomos.about.text1')}</p>
                  <p>{t('quemsomos.about.text2')}</p>
                  <p>{t('quemsomos.about.text3')}</p>
                  <p>{t('quemsomos.about.text4')}</p>
                </div>
                <div className="flex flex-wrap gap-4 mt-8">
                  <Button 
                    onClick={handleWhatsApp}
                    className="bg-[#25D366] hover:bg-[#20BD5A] text-white rounded-full px-8 py-6 font-semibold btn-hover group"
                  >
                    <FaWhatsapp className="w-5 h-5 mr-2" />
                    {t('about.contact')}
                  </Button>
                </div>
                <div className="flex items-center gap-2 mt-6 text-muted-foreground">
                  <Building2 className="w-5 h-5 text-primary" />
                  <span className="font-medium">CNPJ: 50.925.648/0001-47</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <StatsSection />

        {/* Nossa Proposta */}
        <section className="section-padding bg-secondary">
          <div className="container-custom px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground">
                {t('quemsomos.proposal.title')} <span className="text-primary">{t('quemsomos.proposal.highlight')}</span>
              </h2>
              <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                {t('quemsomos.proposal.description')}
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {proposalKeys.map((key, index) => (
                <div key={index} className="flex items-center gap-3 bg-card p-4 rounded-lg shadow">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                  <span className="font-medium text-foreground">{t(key)}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Missão, Visão, Valores */}
        <section className="section-padding bg-background">
          <div className="container-custom px-4">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-primary p-8 rounded-xl text-primary-foreground">
                <Target className="w-12 h-12 mb-4" />
                <h3 className="text-xl font-bold mb-4">{t('quemsomos.mission')}</h3>
                <p className="text-primary-foreground/90">
                  {t('quemsomos.mission.text')}
                </p>
              </div>
              <div className="bg-accent p-8 rounded-xl text-accent-foreground">
                <Eye className="w-12 h-12 mb-4" />
                <h3 className="text-xl font-bold mb-4">{t('quemsomos.vision')}</h3>
                <p className="text-accent-foreground/90">
                  {t('quemsomos.vision.text')}
                </p>
              </div>
              <div className="bg-primary p-8 rounded-xl text-primary-foreground">
                <Heart className="w-12 h-12 mb-4" />
                <h3 className="text-xl font-bold mb-4">{t('quemsomos.values')}</h3>
                <div className="flex flex-wrap gap-2">
                  {valueKeys.map((key, index) => (
                    <span key={index} className="bg-primary-foreground/20 text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                      {t(key)}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Como Atuamos */}
        <section className="section-padding bg-secondary">
          <div className="container-custom px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground">
                {t('quemsomos.howWeWork')} <span className="text-primary">{t('quemsomos.howWeWorkHighlight')}</span>
              </h2>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-4 lg:gap-0">
              {howWeWork.map((item, index) => (
                <div key={index} className="flex items-center">
                  {/* Step Card */}
                  <div className="group relative bg-card p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 w-[200px] text-center">
                    <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg mx-auto mb-4 group-hover:scale-110 transition-transform">
                      {item.step}
                    </div>
                    <h3 className="text-sm font-semibold text-foreground mb-2">{t(item.titleKey)}</h3>
                    <p className="text-xs text-muted-foreground">{t(item.descKey)}</p>
                  </div>
                  
                  {/* Arrow between steps */}
                  {index < howWeWork.length - 1 && (
                    <div className="hidden lg:flex items-center justify-center px-2">
                      <ArrowRight className="w-8 h-8 text-primary animate-pulse" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <ContactCTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default QuemSomos;
