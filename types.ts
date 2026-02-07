export enum DrugClass {
  SSRI = 'SSRI',
  SNRI = 'SNRI',
  TCA = 'TCA',
  MAOI = 'MAOI',
  Atypical = 'Atypical',
  SARI = 'SARI',
  SMS = 'SMS', // Serotonin Modulator and Stimulator
  NMDA = 'NMDA Antagonist',
  GABA = 'GABAergic',
  Novel = 'Novel Mechanism',
  Benzodiazepine = 'Benzodiazepine',
  Gabapentinoid = 'Gabapentinoid',
  Antihistamine = 'Antihistamine',
  BetaBlocker = 'Beta Blocker',
  Azapirone = 'Azapirone',
  Antipsychotic = 'Atypical Antipsychotic'
}

export interface Drug {
  id: string;
  name: string;
  genericName: string;
  class: DrugClass;
  mechanism: string;
  fdaIndications: string[];
  offLabelIndications: string[];
  dosing: {
    starting: string;
    therapeutic: string;
    max: string;
    notes?: string;
  };
  sideEffects: {
    common: string[];
    serious: string[];
  };
  blackBoxWarning: string;
  contraindications: string[];
  pharmacokinetics: {
    halfLife: string;
    metabolism: string; // CYP enzymes
  };
  clinicalPearls: string[]; // Resident specific tips
  clinicalThought?: string; // The "I think of..." intro sentence
}

export interface AugmentationStrategy {
  id: string;
  agent: string;
  type: 'Medication' | 'Hormone' | 'Supplement' | 'Device';
  dosing: string;
  monitoring: string;
  evidenceLevel: 'High' | 'Moderate' | 'Low/Emerging';
  notes: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}