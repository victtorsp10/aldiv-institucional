import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'pt' | 'en' | 'es';

type Translations = {
  [key: string]: {
    pt: string;
    en: string;
    es: string;
  };
};

export const translations: Translations = {
  // Navigation
  'nav.home': { pt: 'Início', en: 'Home', es: 'Inicio' },
  'nav.about': { pt: 'Quem Somos', en: 'About Us', es: 'Quiénes Somos' },
  'nav.services': { pt: 'Serviços', en: 'Services', es: 'Servicios' },
  'nav.contact': { pt: 'Contato', en: 'Contact', es: 'Contacto' },
  'nav.cta': { pt: 'Fale conosco', en: 'Contact us', es: 'Contáctenos' },

  // Hero Page Titles
  'page.services.title': { pt: 'Serviços', en: 'Services', es: 'Servicios' },
  'page.services.description': { pt: 'Prazo, custo e qualidade: nossa prioridade é oferecer serviços com excelência, entregas pontuais e preços justos.', en: 'Deadline, cost and quality: our priority is to offer excellent services, timely deliveries and fair prices.', es: 'Plazo, costo y calidad: nuestra prioridad es ofrecer servicios con excelencia, entregas puntuales y precios justos.' },
  'page.about.title': { pt: 'Quem Somos', en: 'About Us', es: 'Quiénes Somos' },
  'page.about.description': { pt: 'Conheça a ALDIV Gestão Integrada e descubra como podemos ser seu parceiro estratégico para o sucesso.', en: 'Meet ALDIV Integrated Management and discover how we can be your strategic partner for success.', es: 'Conozca ALDIV Gestión Integrada y descubra cómo podemos ser su socio estratégico para el éxito.' },
  'page.contact.title': { pt: 'Contato', en: 'Contact', es: 'Contacto' },
  'page.contact.description': { pt: 'Estamos prontos para atender sua empresa. Entre em contato e descubra como podemos ajudar.', en: 'We are ready to serve your company. Contact us and discover how we can help.', es: 'Estamos listos para atender su empresa. Contáctenos y descubra cómo podemos ayudar.' },

  // Services Page
  'services.title': { pt: 'Serviços', en: 'Services', es: 'Servicios' },
  'services.subtitle': { pt: 'Nossas Soluções', en: 'Our Solutions', es: 'Nuestras Soluciones' },
  'services.description': { pt: 'Prazo, custo e qualidade: nossa prioridade é oferecer serviços com excelência, entregas pontuais e preços justos.', en: 'Deadline, cost and quality: our priority is to offer excellent services, timely deliveries and fair prices.', es: 'Plazo, costo y calidad: nuestra prioridad es ofrecer servicios con excelencia, entregas puntuales y precios justos.' },
  'services.requestQuote': { pt: 'Solicitar orçamento', en: 'Request quote', es: 'Solicitar presupuesto' },
  'services.differentials': { pt: 'Nossos Diferenciais', en: 'Our Differentials', es: 'Nuestros Diferenciales' },
  'services.segments': { pt: 'Segmentos', en: 'Segments', es: 'Segmentos' },
  'services.segmentsHighlight': { pt: 'Atendidos', en: 'Served', es: 'Atendidos' },

  // Service Areas
  'area.facilities': { pt: 'Gestão de Facilities', en: 'Facilities Management', es: 'Gestión de Facilities' },
  'area.facilities.desc': { pt: 'Soluções completas para gestão de instalações e operações', en: 'Complete solutions for facilities and operations management', es: 'Soluciones completas para gestión de instalaciones y operaciones' },
  'area.admin': { pt: 'Gestão Administrativa', en: 'Administrative Management', es: 'Gestión Administrativa' },
  'area.admin.desc': { pt: 'Suporte administrativo, consultoria e terceirização de processos', en: 'Administrative support, consulting and process outsourcing', es: 'Soporte administrativo, consultoría y tercerización de procesos' },

  // Services - Facilities
  'service.cleaning': { pt: 'Limpeza profissional e conservação', en: 'Professional cleaning and conservation', es: 'Limpieza profesional y conservación' },
  'service.cleaning.desc': { pt: 'Serviços de limpeza profissional e conservação para ambientes corporativos, industriais e comerciais com equipes treinadas e produtos de qualidade.', en: 'Professional cleaning and conservation services for corporate, industrial and commercial environments with trained teams and quality products.', es: 'Servicios de limpieza profesional y conservación para ambientes corporativos, industriales y comerciales con equipos capacitados y productos de calidad.' },
  'service.reception': { pt: 'Portaria e recepção', en: 'Doorman and reception', es: 'Portería y recepción' },
  'service.reception.desc': { pt: 'Profissionais qualificados para atendimento, controle de acesso e recepção de visitantes com cordialidade e eficiência.', en: 'Qualified professionals for service, access control and visitor reception with cordiality and efficiency.', es: 'Profesionales calificados para atención, control de acceso y recepción de visitantes con cordialidad y eficiencia.' },
  'service.operational': { pt: 'Apoio operacional', en: 'Operational support', es: 'Apoyo operacional' },
  'service.operational.desc': { pt: 'Equipes de apoio para suporte às operações diárias do seu negócio.', en: 'Support teams for your business daily operations.', es: 'Equipos de apoyo para soporte a las operaciones diarias de su negocio.' },
  'service.security': { pt: 'Segurança Patrimonial', en: 'Property Security', es: 'Seguridad Patrimonial' },
  'service.security.desc': { pt: 'Proteção e monitoramento de patrimônio com vigilantes treinados e sistemas de segurança modernos.', en: 'Property protection and monitoring with trained guards and modern security systems.', es: 'Protección y monitoreo de patrimonio con vigilantes capacitados y sistemas de seguridad modernos.' },
  'service.building': { pt: 'Manutenção Predial e Técnica', en: 'Building and Technical Maintenance', es: 'Mantenimiento Edilicio y Técnico' },
  'service.building.desc': { pt: 'Serviços de manutenção elétrica, hidráulica, preventiva e corretiva para garantir o funcionamento perfeito das instalações.', en: 'Electrical, hydraulic, preventive and corrective maintenance services to ensure perfect operation of facilities.', es: 'Servicios de mantenimiento eléctrico, hidráulico, preventivo y correctivo para garantizar el funcionamiento perfecto de las instalaciones.' },
  'service.electrical': { pt: 'Elétrica e hidráulica', en: 'Electrical and plumbing', es: 'Eléctrica e hidráulica' },
  'service.electrical.desc': { pt: 'Instalações, reparos e manutenção em sistemas elétricos e hidráulicos com profissionais especializados.', en: 'Installations, repairs and maintenance on electrical and hydraulic systems with specialized professionals.', es: 'Instalaciones, reparaciones y mantenimiento en sistemas eléctricos e hidráulicos con profesionales especializados.' },
  'service.corrective': { pt: 'Manutenção corretiva e preventiva', en: 'Corrective and preventive maintenance', es: 'Mantenimiento correctivo y preventivo' },
  'service.corrective.desc': { pt: 'Manutenção programada e corretiva para garantir a longevidade das instalações.', en: 'Scheduled and corrective maintenance to ensure facilities longevity.', es: 'Mantenimiento programado y correctivo para garantizar la longevidad de las instalaciones.' },
  'service.inspections': { pt: 'Inspeções técnicas e suporte emergencial', en: 'Technical inspections and emergency support', es: 'Inspecciones técnicas y soporte de emergencia' },
  'service.inspections.desc': { pt: 'Inspeções técnicas especializadas e suporte emergencial 24 horas para situações críticas.', en: 'Specialized technical inspections and 24-hour emergency support for critical situations.', es: 'Inspecciones técnicas especializadas y soporte de emergencia 24 horas para situaciones críticas.' },

  // Services - Admin
  'service.admin': { pt: 'Apoio administrativo', en: 'Administrative support', es: 'Apoyo administrativo' },
  'service.admin.desc': { pt: 'Terceirização de processos administrativos, suporte a RH, financeiro e atendimento ao cliente.', en: 'Outsourcing of administrative processes, HR support, financial and customer service.', es: 'Tercerización de procesos administrativos, soporte a RH, financiero y atención al cliente.' },
  'service.outsourcing': { pt: 'Terceirização de processos', en: 'Process outsourcing', es: 'Tercerización de procesos' },
  'service.outsourcing.desc': { pt: 'Terceirização completa de processos administrativos e operacionais.', en: 'Complete outsourcing of administrative and operational processes.', es: 'Tercerización completa de procesos administrativos y operativos.' },
  'service.support': { pt: 'Suporte a RH, financeiro e atendimento', en: 'HR, financial and customer support', es: 'Soporte a RH, financiero y atención' },
  'service.support.desc': { pt: 'Suporte especializado para departamentos de RH, financeiro e atendimento ao cliente.', en: 'Specialized support for HR, finance and customer service departments.', es: 'Soporte especializado para departamentos de RH, financiero y atención al cliente.' },
  'service.workforce': { pt: 'Mão de obra especializada', en: 'Specialized workforce', es: 'Mano de obra especializada' },
  'service.workforce.desc': { pt: 'Equipes qualificadas para diversas funções operacionais e técnicas conforme a necessidade do seu negócio.', en: 'Qualified teams for various operational and technical functions according to your business needs.', es: 'Equipos calificados para diversas funciones operativas y técnicas según las necesidades de su negocio.' },
  'service.environmental': { pt: 'Consultoria para Licenciamento ambiental', en: 'Environmental licensing consulting', es: 'Consultoría para Licenciamiento ambiental' },
  'service.environmental.desc': { pt: 'Consultoria especializada em licenciamento e questões ambientais.', en: 'Specialized consulting in licensing and environmental issues.', es: 'Consultoría especializada en licenciamiento y cuestiones ambientales.' },
  'service.public': { pt: 'Prestação de serviços em repartição pública', en: 'Public agency services', es: 'Prestación de servicios en repartición pública' },
  'service.public.desc': { pt: 'Serviços especializados para órgãos e repartições públicas.', en: 'Specialized services for public agencies and departments.', es: 'Servicios especializados para órganos y reparticiones públicas.' },
  'service.consulting': { pt: 'Consultoria jurídica, assessoria contábil, projetos de engenharia e etc.', en: 'Legal consulting, accounting, engineering projects, etc.', es: 'Consultoría jurídica, asesoría contable, proyectos de ingeniería, etc.' },
  'service.consulting.desc': { pt: 'Consultoria completa incluindo jurídica, contábil e projetos de engenharia.', en: 'Complete consulting including legal, accounting and engineering projects.', es: 'Consultoría completa incluyendo jurídica, contable y proyectos de ingeniería.' },

  // Differentials
  'diff.1': { pt: 'Soluções modulares e personalizadas', en: 'Modular and customized solutions', es: 'Soluciones modulares y personalizadas' },
  'diff.2': { pt: 'Atendimento ágil e flexível', en: 'Agile and flexible service', es: 'Atención ágil y flexible' },
  'diff.3': { pt: 'Equipes treinadas e qualificadas', en: 'Trained and qualified teams', es: 'Equipos capacitados y calificados' },
  'diff.4': { pt: 'Tecnologia e controle de qualidade', en: 'Technology and quality control', es: 'Tecnología y control de calidad' },
  'diff.5': { pt: 'Foco em resultados e na satisfação do cliente', en: 'Focus on results and customer satisfaction', es: 'Enfoque en resultados y satisfacción del cliente' },

  // Segments
  'seg.industries': { pt: 'Indústrias', en: 'Industries', es: 'Industrias' },
  'seg.condos': { pt: 'Condomínios residenciais e comerciais', en: 'Residential and commercial condos', es: 'Condominios residenciales y comerciales' },
  'seg.hospitals': { pt: 'Hospitais e clínicas', en: 'Hospitals and clinics', es: 'Hospitales y clínicas' },
  'seg.schools': { pt: 'Escolas e universidades', en: 'Schools and universities', es: 'Escuelas y universidades' },
  'seg.offices': { pt: 'Escritórios corporativos', en: 'Corporate offices', es: 'Oficinas corporativas' },
  'seg.logistics': { pt: 'Logística e centros de distribuição', en: 'Logistics and distribution centers', es: 'Logística y centros de distribución' },
  'seg.retail': { pt: 'Varejo e serviços', en: 'Retail and services', es: 'Comercio minorista y servicios' },

  // WhatsApp
  'whatsapp.message': { pt: 'Olá! Vim através do site e gostaria de mais informações sobre o serviço de', en: 'Hello! I came through the website and would like more information about the service of', es: '¡Hola! Llegué a través del sitio web y me gustaría más información sobre el servicio de' },

  // CTA
  'cta.subtitle': { pt: 'Fale Conosco', en: 'Contact Us', es: 'Contáctenos' },
  'cta.title': { pt: 'Solicite um Orçamento', en: 'Request a Quote', es: 'Solicite un Presupuesto' },
  'cta.description': { pt: 'Entre em contato conosco e descubra como podemos ajudar sua empresa a alcançar melhores resultados com nossas soluções integradas.', en: 'Contact us and discover how we can help your company achieve better results with our integrated solutions.', es: 'Contáctenos y descubra cómo podemos ayudar a su empresa a alcanzar mejores resultados con nuestras soluciones integradas.' },
  'cta.button': { pt: 'ENTRE EM CONTATO', en: 'GET IN TOUCH', es: 'CONTÁCTENOS' },

  // Footer
  'footer.tagline': { pt: 'Conectando soluções, potencializando resultados.', en: 'Connecting solutions, empowering results.', es: 'Conectando soluciones, potenciando resultados.' },
  'footer.coverage': { pt: 'Atuação', en: 'Coverage', es: 'Cobertura' },
  'footer.coverageText': { pt: 'Atendemos em todo o território brasileiro com soluções personalizadas.', en: 'We serve throughout Brazil with customized solutions.', es: 'Atendemos en todo el territorio brasileño con soluciones personalizadas.' },
  'footer.menu': { pt: 'Menu', en: 'Menu', es: 'Menú' },
  'footer.contact': { pt: 'Contato', en: 'Contact', es: 'Contacto' },
  'footer.rights': { pt: 'Copyright © 2025 ALDIV Gestão Integrada. Todos os direitos reservados.', en: 'Copyright © 2025 ALDIV Integrated Management. All rights reserved.', es: 'Copyright © 2025 ALDIV Gestión Integrada. Todos los derechos reservados.' },
  'footer.privacy': { pt: 'Políticas de Privacidade', en: 'Privacy Policy', es: 'Política de Privacidad' },
  'footer.terms': { pt: 'Termos de uso', en: 'Terms of use', es: 'Términos de uso' },

  // Hero
  'hero.title': { pt: 'Conectando soluções, potencializando resultados.', en: 'Connecting solutions, empowering results.', es: 'Conectando soluciones, potenciando resultados.' },
  'hero.description': { pt: 'Soluções completas em gestão administrativa e operacional, com foco em gestão personalizada, agilidade e excelência para o sucesso do seu negócio.', en: 'Complete solutions in administrative and operational management, focused on personalized management, agility and excellence for your business success.', es: 'Soluciones completas en gestión administrativa y operativa, con enfoque en gestión personalizada, agilidad y excelencia para el éxito de su negocio.' },
  'hero.cta1': { pt: 'Nossos Serviços', en: 'Our Services', es: 'Nuestros Servicios' },
  'hero.cta2': { pt: 'Fale Conosco', en: 'Contact Us', es: 'Contáctenos' },
  'hero.or': { pt: 'Ou', en: 'Or', es: 'O' },

  // About Section
  'about.subtitle': { pt: 'Quem Somos', en: 'About Us', es: 'Sobre Nosotros' },
  'about.title': { pt: 'ALDIV', en: 'ALDIV', es: 'ALDIV' },
  'about.titleHighlight': { pt: 'Gestão Integrada', en: 'Integrated Management', es: 'Gestión Integrada' },
  'about.text1': { pt: 'A ALDIV Gestão Integrada oferece soluções completas em gestão administrativa e operacional, com foco em gestão personalizada, agilidade e excelência.', en: 'ALDIV Integrated Management offers complete solutions in administrative and operational management, focused on personalized management, agility and excellence.', es: 'ALDIV Gestión Integrada ofrece soluciones completas en gestión administrativa y operativa, con enfoque en gestión personalizada, agilidad y excelencia.' },
  'about.text2': { pt: 'Atuamos como parceiros estratégicos para empresas que desejam melhorar processos, reduzir custos e obter mais eficiência em suas operações.', en: 'We act as strategic partners for companies that want to improve processes, reduce costs and achieve more efficiency in their operations.', es: 'Actuamos como socios estratégicos para empresas que desean mejorar procesos, reducir costos y obtener más eficiencia en sus operaciones.' },
  'about.text3': { pt: 'Nosso trabalho é cuidar da estrutura, da rotina e dos bastidores, para que sua empresa possa focar no que realmente importa: crescer com segurança, produtividade e organização.', en: 'Our work is to take care of the structure, routine and backstage, so your company can focus on what really matters: growing with security, productivity and organization.', es: 'Nuestro trabajo es cuidar de la estructura, la rutina y los bastidores, para que su empresa pueda enfocarse en lo que realmente importa: crecer con seguridad, productividad y organización.' },
  'about.cta': { pt: 'Saiba Mais', en: 'Learn More', es: 'Sepa Más' },
  'about.contact': { pt: 'Entrar em Contato', en: 'Get in Touch', es: 'Ponerse en Contacto' },

  // Stats Section
  'stats.experience': { pt: 'Anos de Experiência', en: 'Years of Experience', es: 'Años de Experiencia' },
  'stats.clients': { pt: 'Clientes Satisfeitos', en: 'Satisfied Clients', es: 'Clientes Satisfechos' },
  'stats.projects': { pt: 'Projetos Concluídos', en: 'Completed Projects', es: 'Proyectos Concluidos' },
  'stats.states': { pt: 'Estados Atendidos', en: 'States Served', es: 'Estados Atendidos' },

  // Services Section (Home)
  'servicesHome.subtitle': { pt: 'O Que Fazemos', en: 'What We Do', es: 'Qué Hacemos' },
  'servicesHome.title': { pt: 'Nossos Serviços', en: 'Our Services', es: 'Nuestros Servicios' },
  'servicesHome.description': { pt: 'Soluções integradas com foco em qualidade, eficiência e satisfação do cliente.', en: 'Integrated solutions focused on quality, efficiency and customer satisfaction.', es: 'Soluciones integradas con enfoque en calidad, eficiencia y satisfacción del cliente.' },
  'servicesHome.cta': { pt: 'VER TODOS OS SERVIÇOS', en: 'SEE ALL SERVICES', es: 'VER TODOS LOS SERVICIOS' },
  'servicesHome.facilities': { pt: 'Gestão de Facilities', en: 'Facilities Management', es: 'Gestión de Facilities' },
  'servicesHome.facilities.desc': { pt: 'Limpeza, portaria, apoio operacional e segurança patrimonial.', en: 'Cleaning, reception, operational support and property security.', es: 'Limpieza, portería, apoyo operacional y seguridad patrimonial.' },
  'servicesHome.maintenance': { pt: 'Manutenção Predial', en: 'Building Maintenance', es: 'Mantenimiento Edilicio' },
  'servicesHome.maintenance.desc': { pt: 'Elétrica, hidráulica, manutenção preventiva e corretiva.', en: 'Electrical, plumbing, preventive and corrective maintenance.', es: 'Eléctrica, hidráulica, mantenimiento preventivo y correctivo.' },
  'servicesHome.admin': { pt: 'Gestão Administrativa', en: 'Administrative Management', es: 'Gestión Administrativa' },
  'servicesHome.admin.desc': { pt: 'Terceirização de processos e suporte administrativo.', en: 'Process outsourcing and administrative support.', es: 'Tercerización de procesos y soporte administrativo.' },
  'servicesHome.workforce': { pt: 'Mão de Obra Especializada', en: 'Specialized Workforce', es: 'Mano de Obra Especializada' },
  'servicesHome.workforce.desc': { pt: 'Equipes qualificadas para diversas funções.', en: 'Qualified teams for various functions.', es: 'Equipos calificados para diversas funciones.' },
  'servicesHome.security': { pt: 'Segurança Patrimonial', en: 'Property Security', es: 'Seguridad Patrimonial' },
  'servicesHome.security.desc': { pt: 'Proteção e monitoramento de patrimônio.', en: 'Property protection and monitoring.', es: 'Protección y monitoreo de patrimonio.' },
  'servicesHome.consulting': { pt: 'Consultoria', en: 'Consulting', es: 'Consultoría' },
  'servicesHome.consulting.desc': { pt: 'Licenciamento ambiental, jurídico e contábil.', en: 'Environmental licensing, legal and accounting.', es: 'Licenciamiento ambiental, jurídico y contable.' },
  'servicesHome.inspections': { pt: 'Inspeções Técnicas', en: 'Technical Inspections', es: 'Inspecciones Técnicas' },
  'servicesHome.inspections.desc': { pt: 'Inspeções técnicas e suporte emergencial.', en: 'Technical inspections and emergency support.', es: 'Inspecciones técnicas y soporte de emergencia.' },
  'servicesHome.support': { pt: 'Suporte Contínuo', en: 'Continuous Support', es: 'Soporte Continuo' },
  'servicesHome.support.desc': { pt: 'Relacionamento próximo e suporte dedicado.', en: 'Close relationship and dedicated support.', es: 'Relación cercana y soporte dedicado.' },

  // Quem Somos Page
  'quemsomos.about.subtitle': { pt: 'Quem Somos', en: 'About Us', es: 'Quiénes Somos' },
  'quemsomos.about.text1': { pt: 'A ALDIV Gestão Integrada oferece soluções completas em gestão administrativa e operacional, com foco em gestão personalizada, agilidade e excelência.', en: 'ALDIV Integrated Management offers complete solutions in administrative and operational management, focused on personalized management, agility and excellence.', es: 'ALDIV Gestión Integrada ofrece soluciones completas en gestión administrativa y operativa, con enfoque en gestión personalizada, agilidad y excelencia.' },
  'quemsomos.about.text2': { pt: 'Atuamos como parceiros estratégicos para empresas que desejam melhorar processos, reduzir custos e obter mais eficiência em suas operações.', en: 'We act as strategic partners for companies that want to improve processes, reduce costs and achieve more efficiency in their operations.', es: 'Actuamos como socios estratégicos para empresas que desean mejorar procesos, reducir costos y obtener más eficiencia en sus operaciones.' },
  'quemsomos.about.text3': { pt: 'Nascemos com o propósito de ser um parceiro estratégico para nossos clientes, oferecendo suporte inteligente e eficaz nas áreas de facilities, segurança, manutenção, limpeza, administração predial, terceirização de serviços administrativos e muito mais.', en: 'We were born with the purpose of being a strategic partner for our clients, offering intelligent and effective support in the areas of facilities, security, maintenance, cleaning, building administration, outsourcing of administrative services and much more.', es: 'Nacimos con el propósito de ser un socio estratégico para nuestros clientes, ofreciendo soporte inteligente y eficaz en las áreas de facilities, seguridad, mantenimiento, limpieza, administración edilicia, tercerización de servicios administrativos y mucho más.' },
  'quemsomos.about.text4': { pt: 'Nosso trabalho é cuidar da estrutura, da rotina e dos bastidores, para que sua empresa possa focar no que realmente importa: crescer com segurança, produtividade e organização.', en: 'Our work is to take care of the structure, routine and backstage, so your company can focus on what really matters: growing with security, productivity and organization.', es: 'Nuestro trabajo es cuidar de la estructura, la rutina y los bastidores, para que su empresa pueda enfocarse en lo que realmente importa: crecer con seguridad, productividad y organización.' },
  'quemsomos.proposal.title': { pt: 'Nossa Proposta de', en: 'Our Value', es: 'Nuestra Propuesta de' },
  'quemsomos.proposal.highlight': { pt: 'Valor', en: 'Proposition', es: 'Valor' },
  'quemsomos.proposal.description': { pt: 'Na ALDIV, acreditamos que cada cliente é único — por isso, atuamos com planos sob medida, adaptando nossas soluções à realidade e aos objetivos do seu negócio.', en: 'At ALDIV, we believe that each client is unique — that\'s why we work with tailored plans, adapting our solutions to the reality and objectives of your business.', es: 'En ALDIV, creemos que cada cliente es único — por eso actuamos con planes a medida, adaptando nuestras soluciones a la realidad y objetivos de su negocio.' },
  'quemsomos.proposal.item1': { pt: 'Eficiência operacional', en: 'Operational efficiency', es: 'Eficiencia operacional' },
  'quemsomos.proposal.item2': { pt: 'Padronização de processos', en: 'Process standardization', es: 'Estandarización de procesos' },
  'quemsomos.proposal.item3': { pt: 'Redução de custos', en: 'Cost reduction', es: 'Reducción de costos' },
  'quemsomos.proposal.item4': { pt: 'Qualidade e conformidade', en: 'Quality and compliance', es: 'Calidad y conformidad' },
  'quemsomos.proposal.item5': { pt: 'Atendimento ágil e humanizado', en: 'Agile and humanized service', es: 'Atención ágil y humanizada' },
  'quemsomos.proposal.item6': { pt: 'Gestão transparente', en: 'Transparent management', es: 'Gestión transparente' },
  'quemsomos.mission': { pt: 'Missão', en: 'Mission', es: 'Misión' },
  'quemsomos.mission.text': { pt: 'Fornecer soluções integradas e eficientes em gestão administrativa e operacional, contribuindo diretamente para o desempenho e a tranquilidade de nossos clientes.', en: 'Provide integrated and efficient solutions in administrative and operational management, directly contributing to the performance and peace of mind of our clients.', es: 'Proporcionar soluciones integradas y eficientes en gestión administrativa y operativa, contribuyendo directamente al desempeño y tranquilidad de nuestros clientes.' },
  'quemsomos.vision': { pt: 'Visão', en: 'Vision', es: 'Visión' },
  'quemsomos.vision.text': { pt: 'Ser referência em gestão inteligente e serviços integrados no Brasil.', en: 'Be a reference in intelligent management and integrated services in Brazil.', es: 'Ser referencia en gestión inteligente y servicios integrados en Brasil.' },
  'quemsomos.values': { pt: 'Valores', en: 'Values', es: 'Valores' },
  'quemsomos.value1': { pt: 'Comprometimento', en: 'Commitment', es: 'Compromiso' },
  'quemsomos.value2': { pt: 'Eficiência', en: 'Efficiency', es: 'Eficiencia' },
  'quemsomos.value3': { pt: 'Inovação', en: 'Innovation', es: 'Innovación' },
  'quemsomos.value4': { pt: 'Qualidade', en: 'Quality', es: 'Calidad' },
  'quemsomos.value5': { pt: 'Confiança', en: 'Trust', es: 'Confianza' },
  'quemsomos.value6': { pt: 'Ética', en: 'Ethics', es: 'Ética' },
  'quemsomos.value7': { pt: 'Foco no cliente', en: 'Customer focus', es: 'Enfoque en el cliente' },
  'quemsomos.howWeWork': { pt: 'Como', en: 'How We', es: 'Cómo' },
  'quemsomos.howWeWorkHighlight': { pt: 'Atuamos', en: 'Work', es: 'Actuamos' },
  'quemsomos.step1.title': { pt: 'Diagnóstico personalizado', en: 'Personalized diagnosis', es: 'Diagnóstico personalizado' },
  'quemsomos.step1.desc': { pt: 'Analisamos suas necessidades específicas', en: 'We analyze your specific needs', es: 'Analizamos sus necesidades específicas' },
  'quemsomos.step2.title': { pt: 'Montagem da solução integrada', en: 'Integrated solution assembly', es: 'Montaje de la solución integrada' },
  'quemsomos.step2.desc': { pt: 'Criamos a solução ideal para você', en: 'We create the ideal solution for you', es: 'Creamos la solución ideal para usted' },
  'quemsomos.step3.title': { pt: 'Contrato e cronograma sob medida', en: 'Custom contract and schedule', es: 'Contrato y cronograma a medida' },
  'quemsomos.step3.desc': { pt: 'Flexibilidade total no atendimento', en: 'Total flexibility in service', es: 'Flexibilidad total en la atención' },
  'quemsomos.step4.title': { pt: 'Acompanhamento e relatórios', en: 'Monitoring and reports', es: 'Seguimiento e informes' },
  'quemsomos.step4.desc': { pt: 'Transparência em cada etapa', en: 'Transparency at every step', es: 'Transparencia en cada etapa' },
  'quemsomos.step5.title': { pt: 'Suporte contínuo', en: 'Continuous support', es: 'Soporte continuo' },
  'quemsomos.step5.desc': { pt: 'Relacionamento próximo e dedicado', en: 'Close and dedicated relationship', es: 'Relación cercana y dedicada' },

  // Contact Page
  'contact.phone': { pt: 'Telefone', en: 'Phone', es: 'Teléfono' },
  'contact.email': { pt: 'E-mail', en: 'Email', es: 'Correo electrónico' },
  'contact.hours': { pt: 'Horário', en: 'Hours', es: 'Horario' },
  'contact.hoursValue': { pt: 'Seg - Sex: 08h às 18h', en: 'Mon - Fri: 8am to 6pm', es: 'Lun - Vie: 8am a 6pm' },
  'contact.getInTouch': { pt: 'Entre em', en: 'Get in', es: 'Ponerse en' },
  'contact.getInTouchHighlight': { pt: 'Contato', en: 'Touch', es: 'Contacto' },
  'contact.formDescription': { pt: 'Preencha o formulário abaixo e entraremos em contato o mais breve possível. Ou se preferir, fale diretamente conosco pelo WhatsApp.', en: 'Fill out the form below and we will contact you as soon as possible. Or if you prefer, speak directly to us via WhatsApp.', es: 'Complete el formulario a continuación y nos pondremos en contacto lo antes posible. O si prefiere, hable directamente con nosotros por WhatsApp.' },
  'contact.name': { pt: 'Seu nome', en: 'Your name', es: 'Su nombre' },
  'contact.emailPlaceholder': { pt: 'Seu e-mail', en: 'Your email', es: 'Su correo' },
  'contact.phonePlaceholder': { pt: 'Seu telefone', en: 'Your phone', es: 'Su teléfono' },
  'contact.subject': { pt: 'Assunto', en: 'Subject', es: 'Asunto' },
  'contact.message': { pt: 'Sua mensagem', en: 'Your message', es: 'Su mensaje' },
  'contact.sendViaWhatsApp': { pt: 'Enviar via WhatsApp', en: 'Send via WhatsApp', es: 'Enviar vía WhatsApp' },
  'contact.responsible': { pt: 'Responsável', en: 'Contact Person', es: 'Responsable' },
  'contact.talkNow': { pt: 'Fale Conosco Agora', en: 'Talk to Us Now', es: 'Hable con Nosotros Ahora' },
  'contact.address': { pt: 'Endereço', en: 'Address', es: 'Dirección' },
  'contact.location': { pt: 'Nossa', en: 'Our', es: 'Nuestra' },
  'contact.locationHighlight': { pt: 'Localização', en: 'Location', es: 'Ubicación' },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('pt');

  const t = (key: string): string => {
    const translation = translations[key];
    if (!translation) return key;
    return translation[language] || translation.pt;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
