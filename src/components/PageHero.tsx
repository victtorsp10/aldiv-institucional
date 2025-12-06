import heroBackground from "@/assets/hero-background.png";

interface PageHeroProps {
  title: string;
  description: string;
}

const PageHero = ({ title, description }: PageHeroProps) => {
  return (
    <section className="relative min-h-[400px] md:min-h-[450px] flex items-center justify-center -mt-[72px] pt-[72px]">
      {/* Background */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(to right, hsl(var(--accent) / 0.85), hsl(var(--accent) / 0.5)), url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Content */}
      <div className="container-custom relative z-10 px-4 py-16 text-center">
        <div className="max-w-3xl mx-auto animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed max-w-2xl mx-auto">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default PageHero;
