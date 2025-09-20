
import React from 'react';

const THEMES = [
    { id: 'neon-green', name: 'Neon Green', colors: { primary: '#00ff41', secondary: '#ff00ff', accent: '#00ffff' } },
    { id: 'holographic-pink', name: 'Holographic Pink', colors: { primary: '#ff00c8', secondary: '#00ffff', accent: '#ffcc00' } },
    { id: 'blue-data-stream', name: 'Blue Data Stream', colors: { primary: '#0066ff', secondary: '#00ffcc', accent: '#ff3300' } },
    { id: 'purple-synthwave', name: 'Purple Synthwave', colors: { primary: '#9d00ff', secondary: '#ff00aa', accent: '#00ffcc' } },
];

const ThemeButton: React.FC<{ name: string; onClick: () => void; }> = ({ name, onClick }) => (
    <button
        onClick={onClick}
        className="bg-transparent border-2 border-[color:var(--primary)] text-[color:var(--primary)] py-3 px-6 font-['Orbitron'] text-lg rounded-full cursor-pointer transition-all duration-300 ease-in-out uppercase tracking-wider hover:bg-[color:var(--primary)] hover:text-[color:var(--dark)]"
        style={{ boxShadow: 'var(--glow-primary)' }}
    >
        {name}
    </button>
);


const InteractiveSection: React.FC = () => {
    const changeTheme = (colors: { primary: string; secondary: string; accent: string; }) => {
        document.documentElement.style.setProperty('--primary', colors.primary);
        document.documentElement.style.setProperty('--secondary', colors.secondary);
        document.documentElement.style.setProperty('--accent', colors.accent);
    };

    return (
        <section className="bg-black/40 border border-white/10 rounded-lg p-10 text-center mb-16 backdrop-blur-sm">
            <h2 className="font-['Orbitron'] text-4xl mb-6 text-[color:var(--primary)]" style={{ textShadow: 'var(--glow-primary)' }}>
                THEME GENERATOR
            </h2>
            <p className="text-lg mb-8 text-white/80">Experience different cyberpunk aesthetics with our interactive theme generator</p>
            <div className="flex justify-center gap-5 flex-wrap my-8">
                {THEMES.map(theme => (
                    <ThemeButton key={theme.id} name={theme.name} onClick={() => changeTheme(theme.colors)} />
                ))}
            </div>
        </section>
    );
};

export default InteractiveSection;
