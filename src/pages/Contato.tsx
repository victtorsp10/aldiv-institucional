import { useState } from "react";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import PageHero from "@/components/PageHero";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, Clock, MapPin, Building2 } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const Contato = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Olá! Meu nome é ${formData.name}.%0A%0AEmail: ${formData.email}%0ATelefone: ${formData.phone}%0AAssunto: ${formData.subject}%0A%0AMensagem: ${formData.message}`;
    window.open(`https://wa.me/5522992528361?text=${text}`, "_blank");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen">
      <TopBar />
      <Header />
      <main>
        {/* Hero */}
        <PageHero 
          title={t('page.contact.title')} 
          description={t('page.contact.description')} 
        />

        {/* Contact Info Cards */}
        <section className="section-padding bg-background">
          <div className="container-custom px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
              <div className="bg-card p-6 rounded-xl shadow-lg text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{t('contact.address')}</h3>
                <p className="text-muted-foreground text-sm">
                  Rua Jorge Ulrick, 285 - Costazul, Rio das Ostras - RJ, 28.895-262
                </p>
              </div>
              <div className="bg-card p-6 rounded-xl shadow-lg text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{t('contact.phone')}</h3>
                <a href="tel:+5522992528361" className="text-muted-foreground hover:text-primary transition-colors">
                  (22) 99252-8361
                </a>
              </div>
              <div className="bg-card p-6 rounded-xl shadow-lg text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{t('contact.email')}</h3>
                <a href="mailto:dayane.lage@aldiv.com.br" className="text-muted-foreground hover:text-primary transition-colors">
                  dayane.lage@aldiv.com.br
                </a>
              </div>
              <div className="bg-card p-6 rounded-xl shadow-lg text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{t('contact.hours')}</h3>
                <p className="text-muted-foreground">
                  {t('contact.hoursValue')}
                </p>
              </div>
              <div className="bg-card p-6 rounded-xl shadow-lg text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building2 className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">CNPJ</h3>
                <p className="text-muted-foreground">
                  50.925.648/0001-47
                </p>
              </div>
            </div>

            {/* Form Section */}
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  {t('contact.getInTouch')} <span className="text-primary">{t('contact.getInTouchHighlight')}</span>
                </h2>
                <p className="text-muted-foreground mb-8">
                  {t('contact.formDescription')}
                </p>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Input
                      name="name"
                      placeholder={t('contact.name')}
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                    <Input
                      name="email"
                      type="email"
                      placeholder={t('contact.emailPlaceholder')}
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Input
                      name="phone"
                      placeholder={t('contact.phonePlaceholder')}
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                    <Input
                      name="subject"
                      placeholder={t('contact.subject')}
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <Textarea
                    name="message"
                    placeholder={t('contact.message')}
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                  <Button 
                    type="submit" 
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-full py-6 font-semibold flex items-center justify-center gap-2"
                  >
                    <FaWhatsapp className="w-5 h-5" />
                    {t('contact.sendViaWhatsApp')}
                  </Button>
                </form>
              </div>

              <div className="bg-secondary rounded-xl p-8">
                <h3 className="text-xl font-bold text-foreground mb-6">{t('contact.responsible')}</h3>
                <div className="space-y-4">
                  <p className="text-foreground font-semibold text-lg">Dayane Lage</p>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Phone className="w-5 h-5 text-primary" />
                    <span>(22) 99252-8361</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Mail className="w-5 h-5 text-primary" />
                    <span>dayane.lage@aldiv.com.br</span>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-border">
                  <h4 className="font-semibold text-foreground mb-4">{t('contact.talkNow')}</h4>
                  <a
                    href="https://wa.me/5522992528361?text=Olá! Vim através do site e gostaria de mais informações."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20BA5C] text-white px-6 py-3 rounded-full font-semibold transition-colors"
                  >
                    <FaWhatsapp className="w-5 h-5" />
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="bg-secondary py-16">
          <div className="container-custom px-4">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                {t('contact.location')} <span className="text-primary">{t('contact.locationHighlight')}</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Rua Jorge Ulrick, 285 - Costazul, Rio das Ostras - RJ, 28.895-262
              </p>
            </div>
            <div className="rounded-xl overflow-hidden shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3681.8661095270355!2d-41.94858572396908!3d-22.527897036146784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9696e7e8f8a4c5%3A0x8e4f2a3b5c6d7e8f!2sRua%20Jorge%20Ulrick%2C%20285%20-%20Costazul%2C%20Rio%20das%20Ostras%20-%20RJ%2C%2028895-262!5e0!3m2!1spt-BR!2sbr!4v1701789600000!5m2!1spt-BR!2sbr"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="ALDIV Location"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Contato;
