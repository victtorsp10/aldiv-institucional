import { useLanguage } from "@/contexts/LanguageContext";
import heroBackground from "@/assets/hero-background.png";

const StatsSection = () => {
  const { t } = useLanguage();

  const stats = [
    { value: "14", suffix: "+", label: t('stats.experience') },
    { value: "8", suffix: "K+", label: t('stats.clients') },
    { value: "17", suffix: "K+", label: t('stats.projects') },
    { value: "27", suffix: "", label: t('stats.states') },
  ];

  return (
    <section className="relative py-16 md:py-20 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      
      {/* Dark Overlay with primary color tint */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-primary/90" />
      
      {/* Content */}
      <div className="relative container-custom px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center border-r border-primary-foreground/20 last:border-r-0 px-4"
            >
              <div className="flex items-start justify-center">
                <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground">
                  {stat.value}
                </span>
                <span className="text-2xl md:text-3xl font-bold text-primary-foreground ml-1">
                  {stat.suffix}
                </span>
              </div>
              <p className="text-primary-foreground/80 text-sm md:text-base mt-2 font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
