import React, { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';

const WhatsAppButton = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [showTooltip, setShowTooltip] = useState(false);

    useEffect(() => {
        // Show button after scroll
        const handleScroll = () => {
            setIsVisible(window.scrollY > 300);
        };

        window.addEventListener('scroll', handleScroll);
        
        // Show tooltip after 5 seconds
        const tooltipTimer = setTimeout(() => {
            setShowTooltip(true);
        }, 5000);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            clearTimeout(tooltipTimer);
        };
    }, []);

    const openWhatsApp = () => {
        const message = encodeURIComponent('Olá! Gostaria de solicitar um orçamento para os serviços da LS Tech.');
        window.open(`https://wa.me/5586994559144?text=${message}`, '_blank');
    };

    const dismissTooltip = (e) => {
        e.stopPropagation();
        setShowTooltip(false);
    };

    return (
        <>
            {/* WhatsApp Button */}
            <button
                onClick={openWhatsApp}
                className={`whatsapp-button pulse-animation ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
                }`}
                style={{ transition: 'opacity 0.3s, transform 0.3s' }}
                aria-label="Contato via WhatsApp"
            >
                <MessageCircle className="h-7 w-7 text-success-foreground" />
            </button>

            {/* Tooltip */}
            {showTooltip && isVisible && (
                <div 
                    className="fixed bottom-24 right-6 z-50 animate-fade-in"
                    style={{ maxWidth: '250px' }}
                >
                    <div className="relative bg-card rounded-xl p-4 shadow-lg border border-border">
                        {/* Close button */}
                        <button
                            onClick={dismissTooltip}
                            className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-muted-foreground hover:text-muted transition-colors"
                        >
                            <X className="h-3 w-3" />
                        </button>
                        
                        <p className="text-sm text-foreground font-medium mb-1">
                            Precisa de ajuda?
                        </p>
                        <p className="text-xs text-muted-foreground">
                            Clique aqui para falar conosco pelo WhatsApp!
                        </p>
                        
                        {/* Arrow */}
                        <div className="absolute -bottom-2 right-8 w-4 h-4 bg-card border-r border-b border-border transform rotate-45" />
                    </div>
                </div>
            )}
        </>
    );
};

export default WhatsAppButton;
