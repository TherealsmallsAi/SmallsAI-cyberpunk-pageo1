
import React from 'react';

const socialLinks = [
    { icon: 'fab fa-twitter', href: '#' },
    { icon: 'fab fa-instagram', href: '#' },
    { icon: 'fab fa-discord', href: '#' },
    { icon: 'fab fa-github', href: '#' },
];

const SocialIcon: React.FC<{ icon: string; href: string }> = ({ icon, href }) => (
    <a
        href={href}
        className="w-12 h-12 rounded-full flex items-center justify-center bg-white/10 text-xl transition-all duration-300 ease-in-out border border-white/10 hover:-translate-y-1 hover:bg-[color:var(--primary)] hover:text-[color:var(--dark)]"
        style={{ boxShadow: 'var(--glow-primary)' }}
    >
        <i className={icon}></i>
    </a>
);

const Footer: React.FC = () => {
    return (
        <footer className="flex flex-col md:flex-row justify-between items-center py-8 border-t border-white/10">
            <div className="social-icons flex gap-5">
                {socialLinks.map((link, index) => (
                    <SocialIcon key={index} icon={link.icon} href={link.href} />
                ))}
            </div>
            <div className="copyright text-base text-white/60 mt-5 md:mt-0">
                © 2024 Smalls AI. All systems operational.
            </div>
        </footer>
    );
};

export default Footer;
