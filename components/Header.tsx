
import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
    const [dateString, setDateString] = useState('');

    useEffect(() => {
        const updateDate = () => {
            const now = new Date();
            const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: '2-digit', day: '2-digit' };
            const formattedDate = now.toLocaleDateString('en-CA', options).replace(/-/g, '.');

            const start = new Date(now.getFullYear(), 0, 0);
            const diff = now.getTime() - start.getTime();
            const oneDay = 1000 * 60 * 60 * 24;
            const dayOfYear = Math.floor(diff / oneDay);

            setDateString(`DAY ${String(dayOfYear).padStart(2, '0')} | ${formattedDate}`);
        };

        updateDate();
        const intervalId = setInterval(updateDate, 60000); // Update every minute

        return () => clearInterval(intervalId);
    }, []);

    return (
        <header className="flex flex-col md:flex-row justify-between items-center py-5 border-b border-white/10 mb-10">
            <div className="logo glitch-text font-['Orbitron'] text-4xl font-bold uppercase tracking-[3px] relative" style={{ textShadow: 'var(--glow-primary)' }}>
                Smalls
                <span className="absolute -top-2 -right-8 text-base text-[color:var(--secondary)]" style={{ textShadow: 'var(--glow-secondary)' }}>AI</span>
            </div>
            <div className="date-display font-['Orbitron'] text-lg tracking-[2px] text-[color:var(--accent)] mt-5 md:mt-0" style={{ textShadow: 'var(--glow-accent)' }}>
                {dateString}
            </div>
        </header>
    );
};

export default Header;
