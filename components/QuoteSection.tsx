
import React from 'react';

const QuoteSection: React.FC = () => {
    return (
        <section className="bg-black/40 border border-white/10 rounded-lg p-10 text-center mb-16 backdrop-blur-sm relative overflow-hidden">
            <div className="absolute -top-12 left-5 font-['Orbitron'] text-[15rem] text-white/5 z-0 select-none">
                "
            </div>
            <p className="font-['Orbitron'] text-3xl italic mb-5 relative z-10 text-[color:var(--accent)]" style={{ textShadow: 'var(--glow-accent)' }}>
                "The future is not something we enter. The future is something we create."
            </p>
            <p className="text-xl relative z-10 text-[color:var(--secondary)]" style={{ textShadow: 'var(--glow-secondary)' }}>
                - Peter Drucker
            </p>
        </section>
    );
};

export default QuoteSection;
