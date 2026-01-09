import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import AboutSection from './components/AboutSection';
import WhyChooseUs from './components/WhyChooseUs';
import GallerySection from './components/GallerySection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
    return (
        <div className="min-h-screen bg-background">
            <Navbar />
            <main>
                <HeroSection />
                <ServicesSection />
                <AboutSection />
                <WhyChooseUs />
                <GallerySection />
                <TestimonialsSection />
                <ContactSection />
            </main>
            <Footer />
            <WhatsAppButton />
        </div>
    );
}

export default App;
