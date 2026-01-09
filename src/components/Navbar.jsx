import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { Menu, X, Phone, Shield } from 'lucide-react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { href: '#inicio', label: 'Início' },
        { href: '#servicos', label: 'Serviços' },
        { href: '#sobre', label: 'Sobre' },
        { href: '#galeria', label: 'Galeria' },
        { href: '#depoimentos', label: 'Depoimentos' },
        { href: '#contato', label: 'Contato' },
    ];

    const scrollToSection = (href) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsOpen(false);
    };

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isScrolled
                    ? 'bg-primary/95 backdrop-blur-lg shadow-lg py-2'
                    : 'bg-transparent py-4'
            }`}
        >
            <div className="container mx-auto px-4 lg:px-8">
                <nav className="flex items-center justify-between">
                    {/* Logo */}
                    <a 
                        href="#inicio" 
                        className="flex items-center gap-2 group"
                        onClick={(e) => {
                            e.preventDefault();
                            scrollToSection('#inicio');
                        }}
                    >
                        <div className="relative">
                            <Shield className="h-10 w-10 text-accent transition-transform duration-300 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-accent/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-2xl font-heading font-bold text-primary-foreground tracking-wider">
                                LS<span className="text-accent">Tech</span>
                            </span>
                            <span className="text-[10px] text-primary-foreground/80 -mt-1 tracking-widest uppercase">
                                Instalação e Manutenção
                            </span>
                        </div>
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={(e) => {
                                    e.preventDefault();
                                    scrollToSection(link.href);
                                }}
                                className="px-4 py-2 text-sm font-medium text-primary-foreground/90 hover:text-accent transition-colors duration-200 relative group"
                            >
                                {link.label}
                                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-3/4 rounded-full" />
                            </a>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <div className="hidden lg:flex items-center gap-4">
                        <a 
                            href="tel:+5586994559144"
                            className="flex items-center gap-2 text-primary-foreground/90 hover:text-accent transition-colors"
                        >
                            <Phone className="h-4 w-4" />
                            <span className="text-sm font-medium">(86) 99455-9144</span>
                        </a>
                        <Button 
                            className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold shadow-accent transition-all duration-300 hover:scale-105"
                            onClick={() => scrollToSection('#contato')}
                        >
                            Orçamento Grátis
                        </Button>
                    </div>

                    {/* Mobile Menu */}
                    <Sheet open={isOpen} onOpenChange={setIsOpen}>
                        <SheetTrigger asChild className="lg:hidden">
                            <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-foreground/10">
                                <Menu className="h-6 w-6" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="bg-primary border-primary w-80">
                            <div className="flex flex-col h-full py-6">
                                {/* Mobile Logo */}
                                <div className="flex items-center gap-2 mb-8">
                                    <Shield className="h-8 w-8 text-accent" />
                                    <span className="text-xl font-heading font-bold text-primary-foreground">
                                        LS<span className="text-accent">Tech</span>
                                    </span>
                                </div>

                                {/* Mobile Links */}
                                <nav className="flex flex-col gap-1">
                                    {navLinks.map((link) => (
                                        <a
                                            key={link.href}
                                            href={link.href}
                                            onClick={(e) => {
                                                e.preventDefault();
                                                scrollToSection(link.href);
                                            }}
                                            className="px-4 py-3 text-lg font-medium text-primary-foreground/90 hover:text-accent hover:bg-primary-foreground/5 rounded-lg transition-all duration-200"
                                        >
                                            {link.label}
                                        </a>
                                    ))}
                                </nav>

                                {/* Mobile CTA */}
                                <div className="mt-auto space-y-4">
                                    <a 
                                        href="tel:+5586994559144"
                                        className="flex items-center gap-3 px-4 py-3 text-primary-foreground/90 hover:text-accent transition-colors"
                                    >
                                        <Phone className="h-5 w-5" />
                                        <span className="font-medium">(86) 99455-9144</span>
                                    </a>
                                    <Button 
                                        className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
                                        onClick={() => scrollToSection('#contato')}
                                    >
                                        Orçamento Grátis
                                    </Button>
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
