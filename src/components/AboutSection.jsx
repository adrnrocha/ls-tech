import React from 'react';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { CheckCircle2, Award, Users, Clock, ChevronRight } from 'lucide-react';

const AboutSection = () => {
    const highlights = [
        {
            icon: Award,
            value: '10+',
            label: 'Anos de Experiência',
            description: 'Atuando no mercado'
        },
        {
            icon: Users,
            value: '500+',
            label: 'Clientes Satisfeitos',
            description: 'Em toda a região'
        },
        {
            icon: Clock,
            value: '24h',
            label: 'Suporte Técnico',
            description: 'Atendimento rápido'
        },
    ];

    const benefits = [
        'Profissionais qualificados e certificados',
        'Materiais de alta qualidade',
        'Garantia em todos os serviços',
        'Atendimento personalizado',
        'Orçamento sem compromisso',
        'Pontualidade e comprometimento'
    ];

    const scrollToContact = () => {
        const element = document.querySelector('#contato');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="sobre" className="py-20 lg:py-28 bg-muted/30 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute top-20 left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
                <div className="absolute bottom-20 right-20 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-4 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Image Side */}
                    <div className="relative">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                            <img 
                                src="https://images.pexels.com/photos/8853472/pexels-photo-8853472.jpeg?auto=compress&cs=tinysrgb&w=800" 
                                alt="Profissional LS Tech trabalhando"
                                className="w-full h-[400px] lg:h-[500px] object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent" />
                        </div>

                        {/* Floating Stats Card */}
                        <div className="absolute -bottom-6 -right-6 lg:right-6 bg-card rounded-xl p-6 shadow-lg border border-border max-w-[280px]">
                            <div className="grid grid-cols-3 gap-4">
                                {highlights.map((item, index) => {
                                    const Icon = item.icon;
                                    return (
                                        <div key={index} className="text-center">
                                            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-2">
                                                <Icon className="h-5 w-5 text-primary" />
                                            </div>
                                            <p className="text-lg font-heading font-bold text-foreground">{item.value}</p>
                                            <p className="text-[10px] text-muted-foreground leading-tight">{item.label}</p>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Decorative Element */}
                        <div className="absolute -top-4 -left-4 w-24 h-24 border-4 border-accent/30 rounded-2xl" />
                    </div>

                    {/* Content Side */}
                    <div className="space-y-8">
                        <div>
                            <Badge variant="outline" className="mb-4 px-4 py-1 border-primary/30 text-primary">
                                Sobre Nós
                            </Badge>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
                                Excelência em{' '}
                                <span className="text-primary">Instalação</span>{' '}e{' '}
                                <span className="text-accent">Manutenção</span>
                            </h2>
                            <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
                                A <strong className="text-foreground">LS Tech</strong> é uma empresa especializada em soluções de segurança eletrônica, 
                                instalações elétricas e cabeamento estruturado. Com mais de 10 anos de experiência no mercado, 
                                oferecemos serviços de alta qualidade para residências e empresas.
                            </p>
                        </div>

                        <p className="text-muted-foreground leading-relaxed">
                            Nossa missão é proporcionar tranquilidade e segurança aos nossos clientes através de 
                            soluções tecnológicas modernas e eficientes. Trabalhamos com equipamentos de primeira linha 
                            e profissionais altamente capacitados.
                        </p>

                        {/* Benefits Grid */}
                        <div className="grid sm:grid-cols-2 gap-4">
                            {benefits.map((benefit, index) => (
                                <div 
                                    key={index}
                                    className="flex items-center gap-3 p-3 rounded-lg bg-background border border-border hover:border-primary/30 transition-colors"
                                >
                                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                                    <span className="text-sm text-foreground">{benefit}</span>
                                </div>
                            ))}
                        </div>

                        {/* CTA */}
                        <Button 
                            size="lg"
                            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold group"
                            onClick={scrollToContact}
                        >
                            Solicitar Orçamento
                            <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
