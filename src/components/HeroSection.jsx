import React, { useEffect, useState } from 'react';
import { Button } from './ui/button';
import { Shield, Zap, Camera, Wifi, ChevronRight, CheckCircle2 } from 'lucide-react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const features = [
    'Segurança Eletrônica',
    'Instalações Elétricas',
    'Cabeamento Estruturado',
  ];

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background:
          'linear-gradient(180deg, hsl(215 75% 22%) 0%, hsl(215 75% 28%) 40%, hsl(205 65% 35%) 100%)',
      }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 hero-pattern opacity-60" />

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-secondary/10 rounded-full blur-3xl float-animation" />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl float-animation"
          style={{ animationDelay: '-3s' }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-3xl" />
      </div>

      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
      />

      <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className={`space-y-8 ${isVisible ? 'slide-in-left' : 'opacity-0'}`}>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-full px-4 py-2">
              <Shield className="h-4 w-4 text-accent" />
              <span className="text-sm font-medium text-primary-foreground/90">
                Proteção Profissional para seu Patrimônio
              </span>
            </div>

            {/* Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground leading-tight">
                Soluções em{' '}
                <span className="relative">
                  <span className="text-accent">Segurança</span>
                  <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                    <path
                      d="M2 10C50 2 150 2 198 10"
                      stroke="hsl(40 95% 55%)"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>{' '}
                e <span className="text-secondary">Tecnologia</span>
              </h1>
              <p className="text-base lg:text-lg text-primary-foreground/80 max-w-xl leading-relaxed">
                Especialistas em instalação e manutenção de sistemas de segurança eletrônica,
                elétrica e cabeamento estruturado. Proteja o que é mais importante para você.
              </p>
            </div>

            {/* Features List */}
            <div className="flex flex-wrap gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 text-primary-foreground/90"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CheckCircle2 className="h-5 w-5 text-accent" />
                  <span className="text-sm font-medium">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold shadow-accent text-base px-8 transition-all duration-300 hover:scale-105 group"
                onClick={() => scrollToSection('#contato')}
              >
                Solicitar Orçamento
                <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>

              {/* ✅ BOTÃO CORRIGIDO: azul + texto preto + mesmo efeito */}
              <Button
                size="lg"
                className="bg-secondary hover:bg-secondary/90 text-black font-semibold shadow-glow text-base px-8 transition-all duration-300 hover:scale-105"
                onClick={() => scrollToSection('#servicos')}
              >
                Nossos Serviços
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="flex items-center gap-6 pt-4">
              <div className="text-center">
                <p className="text-2xl lg:text-3xl font-heading font-bold text-accent">500+</p>
                <p className="text-xs text-primary-foreground/70">Clientes Atendidos</p>
              </div>
              <div className="w-px h-12 bg-primary-foreground/20" />
              <div className="text-center">
                <p className="text-2xl lg:text-3xl font-heading font-bold text-accent">10+</p>
                <p className="text-xs text-primary-foreground/70">Anos de Experiência</p>
              </div>
              <div className="w-px h-12 bg-primary-foreground/20" />
              <div className="text-center">
                <p className="text-2xl lg:text-3xl font-heading font-bold text-accent">24h</p>
                <p className="text-xs text-primary-foreground/70">Suporte Técnico</p>
              </div>
            </div>
          </div>

          {/* Hero Image/Visual */}
          <div className={`relative ${isVisible ? 'slide-in-right' : 'opacity-0'}`}>
            <div className="relative">
              {/* Main Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/96612/pexels-photo-96612.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Câmeras de Segurança Profissionais"
                  className="w-full h-[400px] lg:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
              </div>

              {/* Floating Cards */}
              <div
                className="absolute -top-6 -left-6 bg-card/95 backdrop-blur-lg rounded-xl p-4 shadow-lg float-animation border border-border/50"
                style={{ animationDelay: '-1s' }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Camera className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">CFTV</p>
                    <p className="text-xs text-muted-foreground">Monitoramento 24h</p>
                  </div>
                </div>
              </div>

              <div
                className="absolute -bottom-4 -right-4 bg-card/95 backdrop-blur-lg rounded-xl p-4 shadow-lg float-animation border border-border/50"
                style={{ animationDelay: '-2s' }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Zap className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">Elétrica</p>
                    <p className="text-xs text-muted-foreground">Instalação Completa</p>
                  </div>
                </div>
              </div>

              <div className="absolute top-1/2 -right-8 transform -translate-y-1/2 bg-card/95 backdrop-blur-lg rounded-xl p-4 shadow-lg float-animation hidden lg:block border border-border/50">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center">
                    <Wifi className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">Rede</p>
                    <p className="text-xs text-muted-foreground">Cabeamento</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" className="w-full h-auto">
          <path
            d="M0 120L48 110C96 100 192 80 288 70C384 60 480 60 576 65C672 70 768 80 864 85C960 90 1056 90 1152 85C1248 80 1344 70 1392 65L1440 60V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0Z"
            fill="hsl(210 50% 98%)"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
