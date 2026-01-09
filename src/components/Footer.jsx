import React from 'react';
import { Shield, Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const services = [
        'Segurança Eletrônica',
        'Câmeras e Alarmes',
        'Motor de Portão',
        'Iluminação em Geral',
        'Elétrica em Geral',
        'Cabeamento Estruturado'
    ];

    const quickLinks = [
        { label: 'Início', href: '#inicio' },
        { label: 'Serviços', href: '#servicos' },
        { label: 'Sobre', href: '#sobre' },
        { label: 'Galeria', href: '#galeria' },
        { label: 'Depoimentos', href: '#depoimentos' },
        { label: 'Contato', href: '#contato' },
    ];

    const scrollToSection = (href) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <footer className="relative overflow-hidden" style={{
            background: 'linear-gradient(180deg, hsl(215 75% 22%) 0%, hsl(215 75% 18%) 100%)'
        }}>
            {/* Top Wave */}
            <div className="absolute top-0 left-0 right-0 rotate-180">
                <svg viewBox="0 0 1440 60" fill="none" className="w-full h-auto">
                    <path 
                        d="M0 60L48 55C96 50 192 40 288 35C384 30 480 30 576 32.5C672 35 768 40 864 42.5C960 45 1056 45 1152 42.5C1248 40 1344 35 1392 32.5L1440 30V60H1392C1344 60 1248 60 1152 60C1056 60 960 60 864 60C768 60 672 60 576 60C480 60 384 60 288 60C192 60 96 60 48 60H0Z" 
                        fill="hsl(0 0% 100%)"
                    />
                </svg>
            </div>

            <div className="container mx-auto px-4 lg:px-8 pt-20 pb-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
                    {/* Brand */}
                    <div className="lg:col-span-1">
                        <a href="#inicio" className="flex items-center gap-2 mb-6" onClick={(e) => {
                            e.preventDefault();
                            scrollToSection('#inicio');
                        }}>
                            <Shield className="h-10 w-10 text-accent" />
                            <div className="flex flex-col">
                                <span className="text-2xl font-heading font-bold text-primary-foreground tracking-wider">
                                    LS<span className="text-accent">Tech</span>
                                </span>
                                <span className="text-[10px] text-primary-foreground/70 -mt-1 tracking-widest uppercase">
                                    Instalação e Manutenção
                                </span>
                            </div>
                        </a>
                        <p className="text-primary-foreground/70 text-sm leading-relaxed mb-6">
                            Especialistas em segurança eletrônica, instalações elétricas e 
                            cabeamento estruturado. Sua segurança é nossa prioridade.
                        </p>
                        {/* Social Links */}
                        <div className="flex gap-3">
                            <a 
                                href="#" 
                                className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center text-primary-foreground/70 hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                            >
                                <Facebook className="h-5 w-5" />
                            </a>
                            <a 
                                href="#" 
                                className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center text-primary-foreground/70 hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                            >
                                <Instagram className="h-5 w-5" />
                            </a>
                            <a 
                                href="#" 
                                className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center text-primary-foreground/70 hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                            >
                                <Linkedin className="h-5 w-5" />
                            </a>
                        </div>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-lg font-heading font-semibold text-primary-foreground mb-6">Nossos Serviços</h4>
                        <ul className="space-y-3">
                            {services.map((service, index) => (
                                <li key={index}>
                                    <a 
                                        href="#servicos"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            scrollToSection('#servicos');
                                        }}
                                        className="text-sm text-primary-foreground/70 hover:text-accent transition-colors"
                                    >
                                        {service}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-heading font-semibold text-primary-foreground mb-6">Links Rápidos</h4>
                        <ul className="space-y-3">
                            {quickLinks.map((link, index) => (
                                <li key={index}>
                                    <a 
                                        href={link.href}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            scrollToSection(link.href);
                                        }}
                                        className="text-sm text-primary-foreground/70 hover:text-accent transition-colors"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-lg font-heading font-semibold text-primary-foreground mb-6">Contato</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <Phone className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                                <div>
                                    <p className="text-sm text-primary-foreground/70">Telefone / WhatsApp</p>
                                    <a 
                                        href="tel:+5586994559144"
                                        className="text-primary-foreground hover:text-accent transition-colors font-medium"
                                    >
                                        (86) 99455-9144
                                    </a>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <Mail className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                                <div>
                                    <p className="text-sm text-primary-foreground/70">E-mail</p>
                                    <a 
                                        href="mailto:contato@lstech.com.br"
                                        className="text-primary-foreground hover:text-accent transition-colors font-medium"
                                    >
                                        contato@lstech.com.br
                                    </a>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <MapPin className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                                <div>
                                    <p className="text-sm text-primary-foreground/70">Localização</p>
                                    <p className="text-primary-foreground font-medium">Piauí, Brasil</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-primary-foreground/10 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-sm text-primary-foreground/60 text-center md:text-left">
                            © {currentYear} ATFWEB - Soluções Tecnologicas. Todos os direitos reservados.
                        </p>
                        <p className="text-sm text-primary-foreground/60">
                            Feito com dedicação no Piauí
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
