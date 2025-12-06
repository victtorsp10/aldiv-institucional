import brazilMap from "@/assets/brazil-map.png";

const BrazilMapSection = () => {
  const locations = [
    { top: "15%", left: "60%", delay: "0s" },
    { top: "25%", left: "75%", delay: "0.2s" },
    { top: "35%", left: "50%", delay: "0.4s" },
    { top: "45%", left: "65%", delay: "0.6s" },
    { top: "55%", left: "55%", delay: "0.8s" },
    { top: "65%", left: "60%", delay: "1s" },
    { top: "75%", left: "50%", delay: "1.2s" },
    { top: "40%", left: "35%", delay: "1.4s" },
    { top: "30%", left: "45%", delay: "1.6s" },
  ];

  return (
    <section className="section-padding bg-background overflow-hidden">
      <div className="container-custom px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Presente em <span className="text-primary">Todo o Brasil</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Atendo empresas em todo o território brasileiro, oferecendo soluções personalizadas 
              independente da localização do seu negócio. Minha estrutura permite atender com a mesma 
              qualidade e excelência em todas as regiões.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-secondary p-4 rounded-lg">
                <p className="text-3xl font-bold text-primary">27</p>
                <p className="text-sm text-muted-foreground">Estados Atendidos</p>
              </div>
              <div className="bg-secondary p-4 rounded-lg">
                <p className="text-3xl font-bold text-primary">5</p>
                <p className="text-sm text-muted-foreground">Regiões do Brasil</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mt-6">
              {["Norte", "Nordeste", "Centro-Oeste", "Sudeste", "Sul"].map((region) => (
                <span 
                  key={region}
                  className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium"
                >
                  {region}
                </span>
              ))}
            </div>
          </div>

          {/* Map */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative max-w-md mx-auto animate-fade-in-up">
              <img 
                src={brazilMap} 
                alt="Mapa do Brasil" 
                className="w-full h-auto drop-shadow-2xl"
              />
              
              {/* Animated Location Points */}
              {locations.map((loc, index) => (
                <div
                  key={index}
                  className="absolute"
                  style={{ top: loc.top, left: loc.left }}
                >
                  <div 
                    className="relative"
                    style={{ animationDelay: loc.delay }}
                  >
                    <div className="w-4 h-4 bg-primary rounded-full animate-ping absolute" />
                    <div className="w-4 h-4 bg-primary rounded-full relative shadow-lg" />
                  </div>
                </div>
              ))}

              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-radial from-primary/20 to-transparent rounded-full blur-3xl -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrazilMapSection;
