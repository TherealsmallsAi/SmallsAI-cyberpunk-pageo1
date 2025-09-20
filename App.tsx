
import React, { useState, useEffect } from 'react';
import MatrixCanvas from './components/MatrixCanvas';
import Header from './components/Header';
import Hero from './components/Hero';
import PanelGrid from './components/PanelGrid';
import InteractiveSection from './components/InteractiveSection';
import QuoteSection from './components/QuoteSection';
import Footer from './components/Footer';
import DetailPage from './components/DetailPage';
import SubDetailPage from './components/SubDetailPage';
import { PANELS_DATA, SUB_DETAIL_DATA } from './constants';
import type { PanelData, SubDetailData } from './types';

const App: React.FC = () => {
    const [activePanelId, setActivePanelId] = useState<string | null>(null);
    const [activeSubDetailId, setActiveSubDetailId] = useState<string | null>(null);
    const [isDetailVisible, setIsDetailVisible] = useState(false);
    const [isSubDetailVisible, setIsSubDetailVisible] = useState(false);

    const activePanel: PanelData | null = activePanelId ? PANELS_DATA[activePanelId] : null;
    const activeSubDetail: SubDetailData | null = activeSubDetailId ? SUB_DETAIL_DATA[activeSubDetailId] : null;

    useEffect(() => {
        if (activePanelId || activeSubDetailId) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [activePanelId, activeSubDetailId]);

    const handlePanelClick = (panelId: string) => {
        setActivePanelId(panelId);
        setIsDetailVisible(true);
    };

    const handleFeatureClick = (subDetailId: string) => {
        setIsDetailVisible(false); // Hide detail page before showing sub-detail
        setTimeout(() => {
            setActiveSubDetailId(subDetailId);
            setIsSubDetailVisible(true);
        }, 300); // Allow time for fade out
    };

    const handleClose = () => {
        setIsDetailVisible(false);
        setIsSubDetailVisible(false);
        setTimeout(() => {
            setActivePanelId(null);
            setActiveSubDetailId(null);
        }, 500); // Animation duration
    };

    const handleBackToPanel = () => {
        setIsDetailVisible(false);
        setTimeout(() => setActivePanelId(null), 500);
    };
    
    const handleBackToDetail = () => {
        setIsSubDetailVisible(false);
        setTimeout(() => {
            setActiveSubDetailId(null);
            setIsDetailVisible(true);
        }, 300);
    };

    return (
        <>
            <MatrixCanvas />
            <div className="fixed top-0 left-0 w-full h-full bg-repeat-y bg-[length:100%_4px] opacity-30 pointer-events-none z-[100]" style={{ backgroundImage: 'repeating-linear-gradient(to bottom, transparent 0, rgba(0, 0, 0, 0.1) 1px, transparent 2px)' }}></div>
            <div className="fixed top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_70%,rgba(0,0,0,0.25)_100%)] pointer-events-none z-[99]"></div>
            
            <div className="container mx-auto px-5 relative z-10">
                <Header />
                <main>
                    <Hero />
                    <PanelGrid onPanelClick={handlePanelClick} />
                    <InteractiveSection />
                    <QuoteSection />
                </main>
                <Footer />
            </div>

            {activePanel && (
                <DetailPage 
                    panel={activePanel} 
                    isVisible={isDetailVisible}
                    onClose={handleClose} 
                    onFeatureClick={handleFeatureClick}
                    onBack={handleBackToPanel}
                />
            )}
            
            {activeSubDetail && (
                 <SubDetailPage
                    subDetail={activeSubDetail}
                    isVisible={isSubDetailVisible}
                    onClose={handleClose}
                    onBack={handleBackToDetail}
                 />
            )}
        </>
    );
};

export default App;
