import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import heroBackground from "@/assets/hero-background.png";

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-[600px] md:min-h-[700px] flex items-center -mt-[72px] pt-[72px]">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(to right, hsl(var(--accent) / 0.85), hsl(var(--accent) / 0.5)), url(${heroBackground})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Left panel for md+ (out of center, over the background) */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 z-20 hidden md:block">
      <div className="max-w-[520px] md:max-w-[40vw] bg-transparent border-transparent rounded-lg px-6 py-8 animate-fade-in-up">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground leading-tight tracking-tight mb-4">
              <span className="inline-block px-0 py-0 md:max-w-[32ch]">
                <span className="block">{t("hero.title").split(",")[0]},</span>
                <span className="block text-primary">{t("hero.title").split(",")[1]}</span>
              </span>
            </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-6 leading-relaxed tracking-normal">
            {t("hero.description")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-start">
            <Link to="/servicos">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-6 py-3 text-base font-semibold btn-hover">
                {t("hero.cta1")}
              </Button>
            </Link>
            <span className="hidden sm:flex items-center text-primary-foreground/60 font-medium rounded-full px-4 py-2">{t("hero.or")}</span>
            <Link to="/contato">
              <Button
                variant="outline"
                className="border-2 border-primary-foreground/30 text-primary-foreground bg-transparent hover:bg-primary-foreground/10 rounded-full px-6 py-3 text-base font-semibold btn-hover"
              >
                {t("hero.cta2")}
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Centered content for small screens */}
      <div className="container-custom relative z-10 px-4 py-16 md:hidden">
        <div className="max-w-xl animate-fade-in-up">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground leading-tight tracking-tight mb-6">
            <span className="inline-block px-0 py-0 md:max-w-[32ch]">
              <span className="block">{t("hero.title").split(",")[0]},</span>
              <span className="block text-primary">{t("hero.title").split(",")[1]}</span>
            </span>
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 leading-relaxed tracking-normal">{t("hero.description")}</p>
          <div className="flex flex-col sm:flex-row gap-4 items-start">
            <Link to="/servicos">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-6 py-3 text-base font-semibold btn-hover">
                {t("hero.cta1")}
              </Button>
            </Link>
            <span className="hidden sm:flex items-center text-primary-foreground/60 font-medium rounded-full px-4 py-2">{t("hero.or")}</span>
            <Link to="/contato">
              <Button
                variant="outline"
                className="border-2 border-primary-foreground/30 text-primary-foreground bg-transparent hover:bg-primary-foreground/10 rounded-full px-6 py-3 text-base font-semibold btn-hover"
              >
                {t("hero.cta2")}
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-2 border-primary-foreground/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
