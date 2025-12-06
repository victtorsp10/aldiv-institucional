import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactCTA from "@/components/ContactCTA";
import WhatsAppButton from "@/components/WhatsAppButton";
import PageHero from "@/components/PageHero";
import { useLanguage } from "@/contexts/LanguageContext";
import { 
  Building2, 
  Shield, 
  Wrench, 
  Users, 
  FileText, 
  Briefcase,
  Sparkles,
  DoorOpen,
  Zap,
  AlertTriangle,
  HardHat,
  Leaf,
  Building,
  Scale
} from "lucide-react";
import serviceReception from "@/assets/service-reception.jpg";
import serviceSecurity from "@/assets/service-security.jpg";
import serviceMaintenance from "@/assets/service-maintenance.jpg";
import { FaWhatsapp } from "react-icons/fa";

const Servicos = () => {
  const { t } = useLanguage();

  const serviceAreas = [
    {
      titleKey: 'area.facilities',
      descKey: 'area.facilities.desc',
      color: 'bg-primary',
      services: [
        { icon: Sparkles, titleKey: 'service.cleaning', descKey: 'service.cleaning.desc', image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&q=80' },
        { icon: DoorOpen, titleKey: 'service.reception', descKey: 'service.reception.desc', image: serviceReception },
        { icon: Users, titleKey: 'service.operational', descKey: 'service.operational.desc', image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&q=80' },
        { icon: Shield, titleKey: 'service.security', descKey: 'service.security.desc', image: serviceSecurity },
        { icon: Wrench, titleKey: 'service.building', descKey: 'service.building.desc', image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80' },
        { icon: Zap, titleKey: 'service.electrical', descKey: 'service.electrical.desc', image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&q=80' },
        { icon: Building2, titleKey: 'service.corrective', descKey: 'service.corrective.desc', image: serviceMaintenance },
        { icon: AlertTriangle, titleKey: 'service.inspections', descKey: 'service.inspections.desc', image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80' },
      ]
    },
    {
      titleKey: 'area.admin',
      descKey: 'area.admin.desc',
      color: 'bg-accent',
      services: [
        { icon: FileText, titleKey: 'service.admin', descKey: 'service.admin.desc', image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&q=80' },
        { icon: Building, titleKey: 'service.outsourcing', descKey: 'service.outsourcing.desc', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80' },
        { icon: Users, titleKey: 'service.support', descKey: 'service.support.desc', image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&q=80' },
        { icon: HardHat, titleKey: 'service.workforce', descKey: 'service.workforce.desc', image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80' },
        { icon: Leaf, titleKey: 'service.environmental', descKey: 'service.environmental.desc', image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&q=80' },
        { icon: Building2, titleKey: 'service.public', descKey: 'service.public.desc', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80' },
        { icon: Scale, titleKey: 'service.consulting', descKey: 'service.consulting.desc', image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80' },
      ]
    }
  ];

  const differentialKeys = ['diff.1', 'diff.2', 'diff.3', 'diff.4', 'diff.5'];
  const segmentKeys = ['seg.industries', 'seg.condos', 'seg.hospitals', 'seg.schools', 'seg.offices', 'seg.logistics', 'seg.retail'];

  const handleWhatsApp = (service: string) => {
    const message = encodeURIComponent(`${t('whatsapp.message')} ${service}.`);
    window.open(`https://wa.me/5522992528361?text=${message}`, "_blank");
  };

  return (
    <div className="min-h-screen">
      <TopBar />
      <Header />
      <main>
        {/* Hero */}
        <PageHero 
          title={t('page.services.title')} 
          description={t('page.services.description')} 
        />

        {/* Service Areas */}
        {serviceAreas.map((area, areaIndex) => (
          <section key={areaIndex} className={`section-padding ${areaIndex % 2 === 0 ? 'bg-background' : 'bg-secondary'}`}>
            <div className="container-custom px-4">
              {/* Area Header */}
              <div className="mb-10">
                <div className={`inline-block ${area.color} text-primary-foreground px-4 py-2 rounded-lg mb-4`}>
                  <h2 className="text-xl md:text-2xl font-bold">{t(area.titleKey)}</h2>
                </div>
                <p className="text-muted-foreground max-w-2xl">{t(area.descKey)}</p>
              </div>

              {/* Services Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {area.services.map((service, index) => (
                  <div
                    key={index}
                    className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer h-[260px]"
                    onClick={() => handleWhatsApp(t(service.titleKey))}
                  >
                    {/* Background Image */}
                    <div 
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                      style={{ backgroundImage: `url(${service.image})` }}
                    />
                    
                    {/* Overlay */}
                    <div className={`absolute inset-0 transition-colors ${
                      areaIndex === 0 
                        ? 'bg-primary/80 group-hover:bg-primary/90' 
                        : 'bg-accent/80 group-hover:bg-accent/90'
                    }`} />
                    
                    {/* Content */}
                    <div className="relative h-full p-5 flex flex-col justify-end text-primary-foreground">
                      <service.icon className="w-10 h-10 mb-3" />
                      <h3 className="text-lg font-bold mb-2 leading-tight">{t(service.titleKey)}</h3>
                      <p className="text-primary-foreground/80 text-xs mb-3 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        {t(service.descKey)}
                      </p>
                      <div className="flex items-center gap-2 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                        <FaWhatsapp className="w-4 h-4" />
                        <span>{t('services.requestQuote')}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* Diferenciais */}
        <section className="section-padding bg-accent">
          <div className="container-custom px-4">
            <h2 className="text-3xl font-bold text-accent-foreground text-center mb-12">
              {t('services.differentials')}
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {differentialKeys.map((key, index) => (
                <div key={index} className="bg-accent-foreground/10 backdrop-blur p-6 rounded-xl text-center">
                  <p className="font-semibold text-accent-foreground">{t(key)}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Segmentos */}
        <section className="section-padding bg-background">
          <div className="container-custom px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground">
                {t('services.segments')} <span className="text-primary">{t('services.segmentsHighlight')}</span>
              </h2>
            </div>
            <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
              {segmentKeys.map((key, index) => (
                <div 
                  key={index} 
                  className="bg-secondary px-6 py-3 rounded-full text-foreground font-medium hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                >
                  {t(key)}
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

export default Servicos;
