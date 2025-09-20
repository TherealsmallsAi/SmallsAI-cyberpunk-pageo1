
export interface FeatureData {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface PanelData {
  id: string;
  icon: string;
  title: string;
  description: string;
  detail: {
    title: string;
    description: string;
    features: FeatureData[];
  };
}

export interface SpecData {
  value: string;
  label: string;
}

export interface SubDetailData {
  id: string;
  parentId: string;
  icon: string;
  title: string;
  description: string;
  specs: SpecData[];
  techDetails: {
    title: string;
    items: string[];
  };
}

export interface Panels {
  [key: string]: PanelData;
}

export interface SubDetails {
  [key: string]: SubDetailData;
}
