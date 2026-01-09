import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { 
    Shield, 
    Zap, 
    Camera, 
    Lightbulb, 
    Network, 
    DoorOpen,
    AlertTriangle,
    Server,
    Cable,
    ChevronRight,
    CheckCircle
} from 'lucide-react';

const ServicesSection = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const services = [
        {
            icon: Shield,
            title: 'Segurança Eletrônica',
            description: 'Sistemas completos de proteção para sua residência ou empresa.',
            features: ['Cerca Elétrica', 'Sensores de Presença', 'Central de Alarme'],
            color: 'primary',
            badge: 'Popular'
        },
        {
            icon: Camera,
            title: 'Câmeras e Alarmes',
            description: 'Monitoramento 24 horas com tecnologia de ponta.',
            features: ['CFTV Digital', 'Gravação em Nuvem', 'Acesso Remoto'],
            color: 'secondary',
            badge: null
        },
        {
            icon: DoorOpen,
            title: 'Motor de Portão',
            description: 'Automação residencial e comercial com máxima segurança.',
            features: ['Portões Deslizantes', 'Portões Pivotantes', 'Controle Remoto'],
            color: 'accent',
            badge: null
        },
        {
            icon: Lightbulb,
            title: 'Iluminação em Geral',
            description: 'Projetos de iluminação eficientes e econômicos.',
            features: ['LED', 'Automação', 'Projetos Luminotécnicos'],
            color: 'primary',
            badge: null
        },
        {
            icon: Zap,
            title: 'Elétrica em Geral',
            description: 'Instalações e manutenções elétricas residenciais e comerciais.',
            features: ['Quadros Elétricos', 'Aterramento', 'Manutenção Preventiva'],
            color: 'accent',
            badge: null
        },
        {
            icon: Network,
            title: 'Cabeamento Estruturado',
            description: 'Infraestrutura de rede organizada e de alta performance.',
            features: ['Montagem de Rack', 'Organização de Cabos', 'Certificação'],
            color: 'secondary',
            badge: 'Destaque'
        },
    ];

    const getColorClasses = (color) => {
        const colors = {
            primary: {
                bg: 'bg-primary/10',
                text: 'text-primary',
                border: 'border-primary/20',
                badge: 'bg-primary text-primary-foreground'
            },
            secondary: {
                bg: 'bg-secondary/10',
                text: 'text-secondary',
                border: 'border-secondary/20',
                badge: 'bg-secondary text-secondary-foreground'
            },
            accent: {
                bg: 'bg-accent/10',
                text: 'text-accent',
                border: 'border-accent/20',
                badge: 'bg-accent text-accent-foreground'
            }
        };
        return colors[color] || colors.primary;
    };

    const scrollToContact = () => {
        const element = document.querySelector('#contato');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="servicos" className="py-20 lg:py-28 bg-background relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

            <div className="container mx-auto px-4 lg:px-8 relative z-10">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <Badge variant="outline" className="mb-4 px-4 py-1 border-primary/30 text-primary">
                        Nossos Serviços
                    </Badge>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
                        Soluções Completas em{' '}
                        <span className="text-primary">Tecnologia</span>
                    </h2>
                    <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
                        Oferecemos serviços especializados para garantir a segurança e o funcionamento 
                        perfeito de suas instalações elétricas e sistemas de proteção.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {services.map((service, index) => {
                        const colors = getColorClasses(service.color);
                        const Icon = service.icon;
                        
                        return (
                            <Card 
                                key={index}
                                className={`service-card group border-2 bg-card hover:border-primary/30 cursor-pointer flex flex-col ${
                                    hoveredIndex === index ? 'border-primary/30' : 'border-transparent'
                                }`}
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                            >
                                <CardHeader className="pb-4">
                                    <div className="flex items-start justify-between mb-4">
                                        <div className={`w-14 h-14 rounded-xl ${colors.bg} flex items-center justify-center transition-transform duration-300 group-hover:scale-110`}>
                                            <Icon className={`h-7 w-7 ${colors.text}`} />
                                        </div>
                                        {service.badge && (
                                            <Badge className={`${colors.badge} text-xs`}>
                                                {service.badge}
                                            </Badge>
                                        )}
                                    </div>
                                    <CardTitle className="text-xl font-heading font-semibold text-foreground group-hover:text-primary transition-colors">
                                        {service.title}
                                    </CardTitle>
                                    <CardDescription className="text-muted-foreground">
                                        {service.description}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="pt-0 flex flex-col flex-grow">
                                    <ul className="space-y-2 mb-6">
                                        {service.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                                                <CheckCircle className={`h-4 w-4 ${colors.text}`} />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                    <Button 
                                        variant="ghost" 
                                        className="w-full mt-auto justify-between group-hover:bg-primary/5 group-hover:text-primary transition-all"
                                        onClick={scrollToContact}
                                    >
                                        Saiba mais
                                        <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                                    </Button>
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>

                {/* CTA Section */}
                <div className="mt-16 text-center">
                    <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 rounded-2xl bg-muted/50 border border-border">
                        <p className="text-foreground font-medium">
                            Precisa de um serviço personalizado?
                        </p>
                        <Button 
                            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                            onClick={scrollToContact}
                        >
                            Fale Conosco
                            <ChevronRight className="ml-2 h-4 w-4" />
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
