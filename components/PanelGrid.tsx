
import React from 'react';
import Panel from './Panel';
import { PANELS_DATA } from '../constants';

interface PanelGridProps {
    onPanelClick: (panelId: string) => void;
}

const PanelGrid: React.FC<PanelGridProps> = ({ onPanelClick }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {Object.values(PANELS_DATA).map(panel => (
                <Panel 
                    key={panel.id}
                    id={panel.id}
                    icon={panel.icon}
                    title={panel.title}
                    description={panel.description}
                    onClick={onPanelClick}
                />
            ))}
        </div>
    );
};

export default PanelGrid;
