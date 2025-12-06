import { Link } from "react-router-dom";
import { 
  Building2, 
  Shield, 
  Wrench, 
  Users, 
  FileText, 
  Briefcase,
  ClipboardCheck,
  HeadphonesIcon
} from "lucide-react";
import { Button } from "./ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { FaWhatsapp } from "react-icons/fa";
import serviceReception from "@/assets/service-reception.jpg";
import serviceSecurity from "@/assets/service-security.jpg";
import serviceMaintenance from "@/assets/service-maintenance.jpg";

const ServicesSection = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Building2,
      titleKey: "servicesHome.facilities",
      descKey: "servicesHome.facilities.desc",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80",
    },
    {
      icon: Wrench,
      titleKey: "servicesHome.maintenance",
      descKey: "servicesHome.maintenance.desc",
      image: serviceMaintenance,
    },
    {
      icon: FileText,
      titleKey: "servicesHome.admin",
      descKey: "servicesHome.admin.desc",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&q=80",
    },
    {
      icon: Users,
      titleKey: "servicesHome.workforce",
      descKey: "servicesHome.workforce.desc",
      image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&q=80",
    },
    {
      icon: Shield,
      titleKey: "servicesHome.security",
      descKey: "servicesHome.security.desc",
      image: serviceSecurity,
    },
    {
      icon: Briefcase,
      titleKey: "servicesHome.consulting",
      descKey: "servicesHome.consulting.desc",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80",
    },
    {
      icon: ClipboardCheck,
      titleKey: "servicesHome.inspections",
      descKey: "servicesHome.inspections.desc",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
    },
    {
      icon: HeadphonesIcon,
      titleKey: "servicesHome.support",
      descKey: "servicesHome.support.desc",
      image: serviceReception,
    },
  ];

  const handleWhatsApp = (service: string) => {
    const message = encodeURIComponent(`${t('whatsapp.message')} ${service}.`);
    window.open(`https://wa.me/5522992528361?text=${message}`, "_blank");
  };

  return (
    <section className="section-padding bg-secondary">
      <div className="container-custom px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t('servicesHome.title')}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t('servicesHome.description')}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
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
              <div className="absolute inset-0 bg-primary/80 group-hover:bg-primary/90 transition-colors" />
              
              {/* Content */}
              <div className="relative h-full p-5 flex flex-col justify-end text-primary-foreground">
                <service.icon className="w-10 h-10 mb-3" />
                <h3 className="text-lg font-bold mb-2 leading-tight">
                  {t(service.titleKey)}
                </h3>
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

        <div className="text-center mt-12">
          <Link to="/servicos">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 py-6 font-semibold btn-hover">
              {t('servicesHome.cta')}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
