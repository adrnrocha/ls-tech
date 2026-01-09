import React, { useState } from 'react';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Card, CardContent } from './ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, CheckCircle } from 'lucide-react';
import { toast } from 'sonner';

const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        service: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const services = [
        'Segurança Eletrônica',
        'Câmeras e Alarmes',
        'Motor de Portão',
        'Iluminação em Geral',
        'Elétrica em Geral',
        'Cabeamento Estruturado',
        'Outro'
    ];

    const contactInfo = [
        {
            icon: Phone,
            title: 'Telefone / WhatsApp',
            value: '(86) 99455-9144',
            link: 'tel:+5586994559144'
        },
        {
            icon: Mail,
            title: 'E-mail',
            value: 'contato@lstech.com.br',
            link: 'mailto:contato@lstech.com.br'
        },
        {
            icon: MapPin,
            title: 'Localização',
            value: 'Piauí, Brasil',
            link: null
        },
        {
            icon: Clock,
            title: 'Horário',
            value: 'Seg - Sáb: 8h às 18h',
            link: null
        },
    ];

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleServiceChange = (value) => {
        setFormData(prev => ({ ...prev, service: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 1500));

        setIsSubmitting(false);
        setIsSubmitted(true);
        toast.success('Mensagem enviada com sucesso! Entraremos em contato em breve.');

        // Reset form after delay
        setTimeout(() => {
            setFormData({
                name: '',
                phone: '',
                email: '',
                service: '',
                message: ''
            });
            setIsSubmitted(false);
        }, 3000);
    };

    const openWhatsApp = () => {
        const message = encodeURIComponent('Olá! Gostaria de solicitar um orçamento.');
        window.open(`https://wa.me/5586994559144?text=${message}`, '_blank');
    };

    return (
        <section id="contato" className="py-20 lg:py-28 bg-background relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

            <div className="container mx-auto px-4 lg:px-8 relative z-10">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <Badge variant="outline" className="mb-4 px-4 py-1 border-primary/30 text-primary">
                        Contato
                    </Badge>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
                        Entre em{' '}
                        <span className="text-primary">Contato</span>
                    </h2>
                    <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
                        Solicite um orçamento sem compromisso. Estamos prontos para atender 
                        suas necessidades em segurança e instalações elétricas.
                    </p>
                </div>

                <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
                    {/* Contact Info */}
                    <div className="lg:col-span-2 space-y-6">
                        <div className="space-y-4">
                            {contactInfo.map((info, index) => {
                                const Icon = info.icon;
                                return (
                                    <Card key={index} className="border-border bg-card hover:border-primary/30 transition-colors">
                                        <CardContent className="p-4 flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                                                <Icon className="h-5 w-5 text-primary" />
                                            </div>
                                            <div>
                                                <p className="text-sm text-muted-foreground">{info.title}</p>
                                                {info.link ? (
                                                    <a 
                                                        href={info.link}
                                                        className="font-semibold text-foreground hover:text-primary transition-colors"
                                                    >
                                                        {info.value}
                                                    </a>
                                                ) : (
                                                    <p className="font-semibold text-foreground">{info.value}</p>
                                                )}
                                            </div>
                                        </CardContent>
                                    </Card>
                                );
                            })}
                        </div>

                        {/* WhatsApp CTA */}
                        <Card className="border-success/30 bg-success/5">
                            <CardContent className="p-6">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 rounded-full bg-success/20 flex items-center justify-center">
                                        <MessageCircle className="h-5 w-5 text-success" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-foreground">Atendimento Rápido</p>
                                        <p className="text-sm text-muted-foreground">Resposta em até 30 min</p>
                                    </div>
                                </div>
                                <Button 
                                    className="w-full bg-success hover:bg-success/90 text-success-foreground font-semibold"
                                    onClick={openWhatsApp}
                                >
                                    <MessageCircle className="mr-2 h-5 w-5" />
                                    Chamar no WhatsApp
                                </Button>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Contact Form */}
                    <Card className="lg:col-span-3 border-border">
                        <CardContent className="p-6 lg:p-8">
                            {isSubmitted ? (
                                <div className="text-center py-12">
                                    <div className="w-16 h-16 rounded-full bg-success/20 flex items-center justify-center mx-auto mb-4">
                                        <CheckCircle className="h-8 w-8 text-success" />
                                    </div>
                                    <h3 className="text-xl font-heading font-semibold text-foreground mb-2">
                                        Mensagem Enviada!
                                    </h3>
                                    <p className="text-muted-foreground">
                                        Entraremos em contato em breve.
                                    </p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid sm:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="name">Nome Completo</Label>
                                            <Input 
                                                id="name"
                                                name="name"
                                                placeholder="Seu nome"
                                                value={formData.name}
                                                onChange={handleInputChange}
                                                required
                                                className="bg-background"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="phone">Telefone / WhatsApp</Label>
                                            <Input 
                                                id="phone"
                                                name="phone"
                                                type="tel"
                                                placeholder="(00) 00000-0000"
                                                value={formData.phone}
                                                onChange={handleInputChange}
                                                required
                                                className="bg-background"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid sm:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="email">E-mail</Label>
                                            <Input 
                                                id="email"
                                                name="email"
                                                type="email"
                                                placeholder="seu@email.com"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                required
                                                className="bg-background"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="service">Serviço de Interesse</Label>
                                            <Select onValueChange={handleServiceChange} value={formData.service}>
                                                <SelectTrigger className="bg-background">
                                                    <SelectValue placeholder="Selecione um serviço" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    {services.map((service) => (
                                                        <SelectItem key={service} value={service}>
                                                            {service}
                                                        </SelectItem>
                                                    ))}
                                                </SelectContent>
                                            </Select>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="message">Mensagem</Label>
                                        <Textarea 
                                            id="message"
                                            name="message"
                                            placeholder="Descreva seu projeto ou necessidade..."
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            required
                                            rows={5}
                                            className="bg-background resize-none"
                                        />
                                    </div>

                                    <Button 
                                        type="submit"
                                        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin mr-2" />
                                                Enviando...
                                            </>
                                        ) : (
                                            <>
                                                <Send className="mr-2 h-5 w-5" />
                                                Enviar Mensagem
                                            </>
                                        )}
                                    </Button>
                                </form>
                            )}
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
