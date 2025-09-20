
import React, { useState, useEffect } from 'react';

const Hero: React.FC = () => {
    const [isGlitching, setIsGlitching] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsGlitching(true);
            setTimeout(() => {
                setIsGlitching(false);
            }, 300);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="text-center py-16 mb-16 relative">
            <h1 className={`${isGlitching ? 'glitch-text' : ''} font-['Orbitron'] text-5xl md:text-7xl font-bold mb-5 uppercase tracking-[5px] relative inline-block`} style={{ textShadow: 'var(--glow-primary)' }}>
                CYBERPUNK AI
                <span className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 w-[200px] h-1 bg-[color:var(--primary)]" style={{ boxShadow: 'var(--glow-primary)' }}></span>
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto mt-7 leading-relaxed text-white/80">
                Digital consciousness in a neon-drenched world. Experience the future today.
            </p>
        </section>
    );
};

export default Hero;
