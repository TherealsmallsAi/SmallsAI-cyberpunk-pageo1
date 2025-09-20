
import React from 'react';
import type { SubDetailData, SpecData } from '../types';

interface SpecCardProps {
    spec: SpecData;
}

const SpecCard: React.FC<SpecCardProps> = ({ spec }) => (
    <div className="bg-black/30 border border-white/10 rounded-lg p-5 text-center">
        <div className="font-['Orbitron'] text-4xl text-[color:var(--primary)] mb-2" style={{ textShadow: 'var(--glow-primary)' }}>
            {spec.value}
        </div>
        <div className="text-base text-white/70">
            {spec.label}
        </div>
    </div>
);

interface SubDetailPageProps {
    subDetail: SubDetailData;
    isVisible: boolean;
    onClose: () => void;
    onBack: () => void;
}

const SubDetailPage: React.FC<SubDetailPageProps> = ({ subDetail, isVisible, onClose, onBack }) => {
    if (!subDetail) return null;

    const parentPanelName = subDetail.parentId.charAt(0).toUpperCase() + subDetail.parentId.slice(1);

    return (
        <div className={`fixed inset-0 bg-black/80 z-[1001] p-10 overflow-y-auto transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
             <div className="sub-detail-content fade-in-content max-w-3xl mx-auto p-10 bg-black/70 border border-white/10 rounded-2xl backdrop-blur-xl relative">
                <button onClick={onClose} className="absolute top-5 right-5 bg-transparent border-none text-[color:var(--primary)] text-4xl cursor-pointer transition-transform duration-300 ease-in-out hover:rotate-90" style={{ textShadow: 'var(--glow-primary)' }}>
                    &times;
                </button>
                <div className="text-center mb-8">
                    <div className="text-5xl mb-4 text-[color:var(--secondary)]" style={{ textShadow: 'var(--glow-secondary)' }}>
                        <i className={subDetail.icon}></i>
                    </div>
                    <h2 className="font-['Orbitron'] text-4xl mb-5 text-[color:var(--accent)]" style={{ textShadow: 'var(--glow-accent)' }}>
                        {subDetail.title}
                    </h2>
                    <p className="text-lg leading-7 text-white/90">
                        {subDetail.description}
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-5 my-8">
                    {subDetail.specs.map((spec, index) => (
                        <SpecCard key={index} spec={spec} />
                    ))}
                </div>

                <div className="my-8 p-5 border-l-4 border-[color:var(--primary)] bg-black/20">
                    <h3 className="font-['Orbitron'] text-xl mb-4 text-[color:var(--accent)]">
                        {subDetail.techDetails.title}
                    </h3>
                    <ul className="list-disc pl-5 space-y-2 text-white/80">
                        {subDetail.techDetails.items.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>

                <button onClick={onBack} className="block mx-auto mt-8 bg-transparent border-2 border-[color:var(--primary)] text-[color:var(--primary)] py-3 px-8 font-['Orbitron'] text-lg rounded-full cursor-pointer transition-all duration-300 ease-in-out uppercase tracking-wider hover:bg-[color:var(--primary)] hover:text-[color:var(--dark)]" style={{ textShadow: '0 0 5px var(--primary)' }}>
                    {`Back to ${parentPanelName}`}
                </button>
            </div>
        </div>
    );
};

export default SubDetailPage;
