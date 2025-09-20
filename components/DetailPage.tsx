
import React from 'react';
import type { PanelData, FeatureData } from '../types';

interface FeatureCardProps {
    feature: FeatureData;
    onClick: (id: string) => void;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ feature, onClick }) => (
    <div 
        className="bg-black/20 border border-white/10 rounded-lg p-6 text-center transition-all duration-300 ease-in-out cursor-pointer hover:-translate-y-1.5 hover:border-[color:var(--secondary)] hover:shadow-lg hover:shadow-black/50"
        onClick={() => onClick(feature.id)}
    >
        <div className="feature-icon text-4xl mb-4 text-[color:var(--secondary)]" style={{ textShadow: 'var(--glow-secondary)' }}>
            <i className={feature.icon}></i>
        </div>
        <h3 className="font-['Orbitron'] text-xl mb-4 text-[color:var(--accent)]">
            {feature.title}
        </h3>
        <p className="text-base text-white/80">
            {feature.description}
        </p>
    </div>
);

interface DetailPageProps {
    panel: PanelData;
    isVisible: boolean;
    onClose: () => void;
    onFeatureClick: (subDetailId: string) => void;
    onBack: () => void;
}

const DetailPage: React.FC<DetailPageProps> = ({ panel, isVisible, onClose, onFeatureClick, onBack }) => {
    if (!panel) return null;

    const detail = panel.detail;

    return (
        <div className={`fixed inset-0 bg-black/80 z-[1000] p-10 overflow-y-auto transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
            <div className={`detail-content fade-in-content max-w-4xl mx-auto p-10 bg-black/60 border border-white/10 rounded-2xl backdrop-blur-lg relative`}>
                <button onClick={onClose} className="absolute top-5 right-5 bg-transparent border-none text-[color:var(--primary)] text-4xl cursor-pointer transition-transform duration-300 ease-in-out hover:rotate-90" style={{ textShadow: 'var(--glow-primary)' }}>
                    &times;
                </button>
                <div className="text-center mb-10">
                    <div className="text-6xl mb-5 text-[color:var(--accent)]" style={{ textShadow: 'var(--glow-accent)' }}>
                        <i className={panel.icon}></i>
                    </div>
                    <h2 className="font-['Orbitron'] text-5xl mb-5 text-[color:var(--primary)]" style={{ textShadow: 'var(--glow-primary)' }}>
                        {detail.title}
                    </h2>
                    <p className="text-xl leading-8 text-white/90">
                        {detail.description}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-10">
                    {detail.features.map(feature => (
                        <FeatureCard key={feature.id} feature={feature} onClick={onFeatureClick} />
                    ))}
                </div>

                <button onClick={onBack} className="block mx-auto mt-8 bg-transparent border-2 border-[color:var(--primary)] text-[color:var(--primary)] py-3 px-8 font-['Orbitron'] text-lg rounded-full cursor-pointer transition-all duration-300 ease-in-out uppercase tracking-wider hover:bg-[color:var(--primary)] hover:text-[color:var(--dark)]" style={{ textShadow: '0 0 5px var(--primary)' }}>
                    Back to Panels
                </button>
            </div>
        </div>
    );
};

export default DetailPage;
