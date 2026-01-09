import React, { useState } from 'react';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogTrigger } from './ui/dialog';
import { ZoomIn, X } from 'lucide-react';

const GallerySection = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const galleryImages = [
        {
            src: 'https://images.pexels.com/photos/96612/pexels-photo-96612.jpeg?auto=compress&cs=tinysrgb&w=800',
            alt: 'Sistema de câmeras de segurança',
            category: 'CFTV'
        },
        {
            src: 'https://images.pexels.com/photos/430208/pexels-photo-430208.jpeg?auto=compress&cs=tinysrgb&w=800',
            alt: 'Câmera de vigilância instalada',
            category: 'Segurança'
        },
        {
            src: 'https://images.pexels.com/photos/3205737/pexels-photo-3205737.jpeg?auto=compress&cs=tinysrgb&w=800',
            alt: 'Câmera de monitoramento',
            category: 'CFTV'
        },
        {
            src: 'https://images.pexels.com/photos/8853472/pexels-photo-8853472.jpeg?auto=compress&cs=tinysrgb&w=800',
            alt: 'Instalação elétrica profissional',
            category: 'Elétrica'
        },
        {
            src: 'https://images.pexels.com/photos/8853500/pexels-photo-8853500.jpeg?auto=compress&cs=tinysrgb&w=800',
            alt: 'Trabalho de instalação',
            category: 'Instalação'
        },
        {
            src: 'https://images.pexels.com/photos/18186205/pexels-photo-18186205.jpeg?auto=compress&cs=tinysrgb&w=800',
            alt: 'Tecnologia de segurança',
            category: 'Tecnologia'
        },
    ];

    return (
        <section id="galeria" className="py-20 lg:py-28 bg-background relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />

            <div className="container mx-auto px-4 lg:px-8 relative z-10">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <Badge variant="outline" className="mb-4 px-4 py-1 border-primary/30 text-primary">
                        Nosso Trabalho
                    </Badge>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
                        Galeria de{' '}
                        <span className="text-primary">Projetos</span>
                    </h2>
                    <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
                        Conheça alguns dos nossos trabalhos realizados. Cada projeto é executado com 
                        máxima dedicação e qualidade.
                    </p>
                </div>

                {/* Gallery Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
                    {galleryImages.map((image, index) => (
                        <Dialog key={index}>
                            <DialogTrigger asChild>
                                <div 
                                    className={`relative group cursor-pointer rounded-xl overflow-hidden ${
                                        index === 0 ? 'col-span-2 lg:col-span-1 row-span-2' : ''
                                    }`}
                                >
                                    <img 
                                        src={image.src}
                                        alt={image.alt}
                                        className={`w-full object-cover transition-transform duration-500 group-hover:scale-110 ${
                                            index === 0 ? 'h-[300px] lg:h-full' : 'h-[200px] lg:h-[250px]'
                                        }`}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    
                                    {/* Overlay Content */}
                                    <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                                        <div className="w-12 h-12 rounded-full bg-primary-foreground/20 backdrop-blur-sm flex items-center justify-center mb-3">
                                            <ZoomIn className="h-6 w-6 text-primary-foreground" />
                                        </div>
                                        <Badge className="bg-accent text-accent-foreground">
                                            {image.category}
                                        </Badge>
                                    </div>
                                </div>
                            </DialogTrigger>
                            <DialogContent className="max-w-4xl p-0 bg-transparent border-none">
                                <div className="relative rounded-xl overflow-hidden">
                                    <img 
                                        src={image.src}
                                        alt={image.alt}
                                        className="w-full h-auto max-h-[80vh] object-contain"
                                    />
                                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-primary/90 to-transparent">
                                        <Badge className="bg-accent text-accent-foreground mb-2">
                                            {image.category}
                                        </Badge>
                                        <p className="text-primary-foreground font-medium">{image.alt}</p>
                                    </div>
                                </div>
                            </DialogContent>
                        </Dialog>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default GallerySection;
