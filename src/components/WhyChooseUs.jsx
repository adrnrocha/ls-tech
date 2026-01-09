import React from 'react';
import { Badge } from './ui/badge';
import { ShieldCheck, Clock, ThumbsUp, Wrench, HeadphonesIcon, BadgeCheck } from 'lucide-react';

const WhyChooseUs = () => {
    const reasons = [
        {
            icon: ShieldCheck,
            title: 'Garantia de Qualidade',
            description: 'Todos os nossos serviços possuem garantia. Trabalhamos apenas com materiais de primeira linha.'
        },
        {
            icon: Clock,
            title: 'Pontualidade',
            description: 'Respeitamos prazos e horários. Sua obra não vai atrasar por nossa causa.'
        },
        {
            icon: ThumbsUp,
            title: 'Satisfação Garantida',
            description: 'Mais de 500 clientes satisfeitos em toda a região. Sua satisfação é nossa prioridade.'
        },
        {
            icon: Wrench,
            title: 'Equipe Especializada',
            description: 'Profissionais treinados e certificados para garantir o melhor resultado.'
        },
        {
            icon: HeadphonesIcon,
            title: 'Suporte 24 Horas',
            description: 'Estamos disponíveis para emergências. Entre em contato a qualquer momento.'
        },
        {
            icon: BadgeCheck,
            title: 'Orçamento Justo',
            description: 'Preços competitivos e transparentes. Sem surpresas na hora de pagar.'
        },
    ];

    return (
        <section className="py-20 lg:py-28 relative overflow-hidden" style={{
            background: 'linear-gradient(180deg, hsl(215 75% 22%) 0%, hsl(215 75% 28%) 50%, hsl(205 65% 35%) 100%)'
        }}>
            {/* Background Pattern */}
            <div className="absolute inset-0 hero-pattern opacity-40" />
            
            {/* Grid Pattern */}
            <div 
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                                      linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                    backgroundSize: '60px 60px'
                }}
            />

            <div className="container mx-auto px-4 lg:px-8 relative z-10">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <Badge variant="outline" className="mb-4 px-4 py-1 border-primary-foreground/30 text-primary-foreground bg-primary-foreground/10">
                        Por Que Nos Escolher
                    </Badge>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-primary-foreground mb-6">
                        Compromisso com a{' '}
                        <span className="text-accent">Excelência</span>
                    </h2>
                    <p className="text-base lg:text-lg text-primary-foreground/80 leading-relaxed">
                        Conheça os motivos que fazem da LS Tech a melhor escolha para seus projetos 
                        de segurança e instalações elétricas.
                    </p>
                </div>

                {/* Reasons Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {reasons.map((reason, index) => {
                        const Icon = reason.icon;
                        return (
                            <div 
                                key={index}
                                className="group p-6 lg:p-8 rounded-2xl bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 hover:bg-primary-foreground/10 hover:border-accent/30 transition-all duration-300"
                            >
                                <div className="w-14 h-14 rounded-xl bg-accent/20 flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110">
                                    <Icon className="h-7 w-7 text-accent" />
                                </div>
                                <h3 className="text-xl font-heading font-semibold text-primary-foreground mb-3 group-hover:text-accent transition-colors">
                                    {reason.title}
                                </h3>
                                <p className="text-primary-foreground/70 leading-relaxed">
                                    {reason.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
