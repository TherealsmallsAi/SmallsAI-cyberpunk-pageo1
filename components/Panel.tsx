
import React, { useState, useEffect } from 'react';

interface PanelProps {
    id: string;
    icon: string;
    title: string;
    description: string;
    onClick: (id: string) => void;
}

const Panel: React.FC<PanelProps> = ({ id, icon, title, description, onClick }) => {
    const [isPulsing, setIsPulsing] = useState(false);

    useEffect(() => {
        const randomDelay = Math.random() * 5000 + 2000;
        const interval = setInterval(() => {
            setIsPulsing(true);
            setTimeout(() => {
                setIsPulsing(false);
            }, 2000);
        }, 3000 + randomDelay);

        return () => clearInterval(interval);
    }, []);


    return (
        <div 
            className={`neon-border relative bg-black/30 border border-white/10 rounded-lg p-8 overflow-hidden transition-all duration-300 ease-in-out backdrop-blur-sm shadow-lg shadow-black/50 cursor-pointer hover:-translate-y-2.5 hover:shadow-2xl hover:shadow-black/70 hover:border-[color:var(--primary)] ${isPulsing ? 'pulse' : ''}`}
            onClick={() => onClick(id)}
        >
            <div className="absolute top-0 left-0 w-full h-1.5 bg-[color:var(--primary)]" style={{ boxShadow: 'var(--glow-primary)' }}></div>
            <div className="panel-icon text-5xl mb-5 text-[color:var(--secondary)]" style={{ textShadow: 'var(--glow-secondary)' }}>
                <i className={icon}></i>
            </div>
            <h3 className="font-['Orbitron'] text-2xl mb-5 text-[color:var(--accent)]" style={{ textShadow: 'var(--glow-accent)' }}>
                {title}
            </h3>
            <p className="text-lg leading-relaxed text-white/80">
                {description}
            </p>
        </div>
    );
};

export default Panel;
