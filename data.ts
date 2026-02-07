import { Drug, DrugClass, AugmentationStrategy } from './types';

export const ANTIDEPRESSANTS: Drug[] = [
  // --- SSRIs ---
  {
    id: 'fluoxetine',
    name: 'Prozac',
    genericName: 'Fluoxetine',
    class: DrugClass.SSRI,
    mechanism: 'Selective Serotonin Reuptake Inhibitor; 5-HT2C antagonist',
    fdaIndications: ['MDD', 'OCD', 'Bulimia', 'Panic Disorder', 'PMDD'],
    offLabelIndications: ['Binge Eating Disorder', 'Body Dysmorphic Disorder'],
    dosing: {
      starting: '20 mg/day (10mg for anxiety)',
      therapeutic: '20-60 mg/day',
      max: '80 mg/day',
      notes: 'Long half-life (active metabolite norfluoxetine 7-15 days), no taper needed.'
    },
    sideEffects: {
      common: ['Insomnia', 'Nausea', 'Headache', 'Sexual dysfunction', 'Anxiety'],
      serious: ['Serotonin syndrome', 'Mania induction', 'Suicidality in youth']
    },
    blackBoxWarning: 'Increased risk of suicidal thoughts and behaviors in pediatric and young adult patients.',
    contraindications: ['MAOI use within 14 days (needs 5 weeks washout due to half-life)', 'Pimozide', 'Thioridazine'],
    pharmacokinetics: {
      halfLife: '4-6 days (parent), 4-16 days (metabolite)',
      metabolism: 'CYP2D6 (Potent Inhibitor), 2C19'
    },
    clinicalPearls: ['Activating - good for fatigue.', 'Longest half-life, "self-tapering".', 'Can inhibit metabolism of other meds (2D6).'],
    clinicalThought: "I think of fluoxetine as the most forgiving SSRI because of its long half-life, patients can miss doses without much consequence and discontinuation syndrome is rarely an issue."
  },
  {
    id: 'sertraline',
    name: 'Zoloft',
    genericName: 'Sertraline',
    class: DrugClass.SSRI,
    mechanism: 'SSRI; mild DAT inhibition',
    fdaIndications: ['MDD', 'OCD', 'PTSD', 'Panic Disorder', 'Social Anxiety Disorder', 'PMDD'],
    offLabelIndications: ['Generalized Anxiety Disorder'],
    dosing: {
      starting: '50 mg/day (25mg for anxiety/panic/elderly)',
      therapeutic: '100-200 mg/day',
      max: '200 mg/day',
      notes: 'Food increases absorption.'
    },
    sideEffects: {
      common: ['GI upset ("Squirtraline")', 'Insomnia/Somnolence', 'Sexual dysfunction', 'Headache'],
      serious: ['Serotonin syndrome', 'Hyponatremia', 'Bleeding risk']
    },
    blackBoxWarning: 'Suicidality in children/young adults.',
    contraindications: ['MAOI use', 'Disulfiram (liquid concentrate only)'],
    pharmacokinetics: {
      halfLife: '26 hours',
      metabolism: 'CYP2B6, 2C19, 2C9, 2D6, 3A4 (Weak inhibitor)'
    },
    clinicalPearls: ['First-line for cardiac patients.', 'GI side effects common initially.', 'Preferred in pregnancy/breastfeeding.'],
    clinicalThought: "I think of sertraline as the Swiss army knife of SSRIs, it covers a wide range of conditions and tends to be well-tolerated with a favorable drug interaction profile."
  },
  {
    id: 'escitalopram',
    name: 'Lexapro',
    genericName: 'Escitalopram',
    class: DrugClass.SSRI,
    mechanism: 'SSRI (S-enantiomer of citalopram)',
    fdaIndications: ['MDD', 'GAD'],
    offLabelIndications: ['Panic Disorder', 'OCD', 'PTSD', 'SAD'],
    dosing: {
      starting: '10 mg/day (5mg in elderly/hepatic imp)',
      therapeutic: '10-20 mg/day',
      max: '20 mg/day (some experts go to 30-40mg for OCD)',
    },
    sideEffects: {
      common: ['Nausea', 'Fatigue', 'Sexual dysfunction', 'Sweating'],
      serious: ['QT prolongation (dose dependent)', 'Serotonin syndrome']
    },
    blackBoxWarning: 'Suicidality in children/young adults.',
    contraindications: ['MAOI use', 'Pimozide', 'Citalopram use'],
    pharmacokinetics: {
      halfLife: '27-32 hours',
      metabolism: 'CYP2C19, 3A4'
    },
    clinicalPearls: ['Most selective SSRI.', 'Cleanest side effect profile generally.', 'Watch QT > 20mg.'],
    clinicalThought: "I think of escitalopram as the refined version of citalopram, it's just the active enantiomer so you get the same effect at half the dose with arguably fewer side effects."
  },
  {
    id: 'citalopram',
    name: 'Celexa',
    genericName: 'Citalopram',
    class: DrugClass.SSRI,
    mechanism: 'SSRI',
    fdaIndications: ['MDD'],
    offLabelIndications: ['Anxiety disorders', 'Agitation in dementia'],
    dosing: {
      starting: '20 mg/day',
      therapeutic: '20-40 mg/day',
      max: '40 mg/day (20 mg/day in >60yo due to QT)',
    },
    sideEffects: {
      common: ['Sedation', 'Nausea', 'Dry mouth', 'Sweating'],
      serious: ['QT Prolongation (Boxed Warning context)', 'Serotonin syndrome']
    },
    blackBoxWarning: 'Suicidality in children/young adults.',
    contraindications: ['Congenital long QT syndrome', 'MAOI use'],
    pharmacokinetics: {
      halfLife: '35 hours',
      metabolism: 'CYP2C19, 3A4'
    },
    clinicalPearls: ['Limited dose in elderly (20mg max) due to QT risk.', 'Mild antihistamine effect (R-enantiomer).'],
    clinicalThought: "I think of citalopram as the clean and simple SSRI, very few drug interactions but you have to watch the QTc at higher doses."
  },
  {
    id: 'paroxetine',
    name: 'Paxil',
    genericName: 'Paroxetine',
    class: DrugClass.SSRI,
    mechanism: 'SSRI; mild anticholinergic',
    fdaIndications: ['MDD', 'OCD', 'Panic', 'SAD', 'GAD', 'PTSD', 'Vasomotor symptoms (low dose)'],
    offLabelIndications: ['Premature ejaculation'],
    dosing: {
      starting: '20 mg/day (10mg for panic/elderly)',
      therapeutic: '20-50 mg/day',
      max: '60 mg/day (MDD)',
      notes: 'CR formulation available.'
    },
    sideEffects: {
      common: ['Sedation', 'Weight gain', 'Sexual dysfunction (highest among SSRIs)', 'Dry mouth', 'Constipation'],
      serious: ['Severe withdrawal syndrome', 'Teratogenicity (cardiac defects)']
    },
    blackBoxWarning: 'Suicidality in children/young adults.',
    contraindications: ['MAOI use', 'Pregnancy (Category D/Warning)'],
    pharmacokinetics: {
      halfLife: '21 hours',
      metabolism: 'CYP2D6 (Potent Inhibitor)'
    },
    clinicalPearls: ['Most sedating, most weight gain.', 'Short half-life = severe withdrawal.', 'Potent CYP2D6 inhibitor.', 'Avoid in women of childbearing age if possible.'],
    clinicalThought: "I think of paroxetine as the 'sticky' SSRI, it's potent and great for anxiety but has the hardest discontinuation syndrome, so you really have to taper carefully."
  },
  {
    id: 'fluvoxamine',
    name: 'Luvox',
    genericName: 'Fluvoxamine',
    class: DrugClass.SSRI,
    mechanism: 'SSRI; Sigma-1 agonist',
    fdaIndications: ['OCD'],
    offLabelIndications: ['MDD', 'SAD', 'Panic'],
    dosing: {
      starting: '50 mg qhs',
      therapeutic: '100-200 mg/day',
      max: '300 mg/day (divided doses >100mg)',
    },
    sideEffects: {
      common: ['Nausea (high)', 'Sedation', 'Insomnia'],
      serious: ['Serotonin syndrome']
    },
    blackBoxWarning: 'Suicidality in children/young adults.',
    contraindications: ['Tizanidine', 'Thioridazine', 'Alosetron', 'Ramelteon', 'Caffeine (high intake)'],
    pharmacokinetics: {
      halfLife: '15 hours',
      metabolism: 'CYP1A2 (Potent Inhibitor), 2C19, 3A4'
    },
    clinicalPearls: ['Potent CYP1A2 inhibitor (interacts with caffeine, theophylline, olanzapine, clozapine).', 'Sigma-1 agonism may help with psychotic depression or anxiety.'],
    clinicalThought: "I think of fluvoxamine as the OCD specialist, it doesn't get much attention for depression but it's reliable for obsessive symptoms and has some interesting sigma-1 receptor activity."
  },

  // --- SNRIs ---
  {
    id: 'venlafaxine',
    name: 'Effexor',
    genericName: 'Venlafaxine',
    class: DrugClass.SNRI,
    mechanism: 'Serotonin Norepinephrine Reuptake Inhibitor (SSRI at <150mg)',
    fdaIndications: ['MDD', 'GAD', 'SAD', 'Panic'],
    offLabelIndications: ['Neuropathic pain', 'Migraine prophylaxis', 'Vasomotor symptoms'],
    dosing: {
      starting: '37.5-75 mg/day',
      therapeutic: '75-225 mg/day',
      max: '375 mg/day (IR), 225 mg/day (XR outpatient)',
    },
    sideEffects: {
      common: ['Nausea', 'Sweating', 'Hypertension (dose related)', 'Insomnia'],
      serious: ['Discontinuation syndrome (Brain zaps)', 'Hypertensive crisis (rare)', 'Hepatotoxicity']
    },
    blackBoxWarning: 'Suicidality in children/young adults.',
    contraindications: ['MAOI use', 'Uncontrolled narrow-angle glaucoma'],
    pharmacokinetics: {
      halfLife: '5 hours (parent), 11 hours (metabolite)',
      metabolism: 'CYP2D6'
    },
    clinicalPearls: ['"Prozac with a punch" but watch the BP.', 'Notorious withdrawal syndrome.', 'Functions as SSRI at lower doses (<150mg).'],
    clinicalThought: "I think of venlafaxine as the SNRI that only earns the 'N' at higher doses, below 150mg it's essentially an SSRI, and it's notorious for withdrawal symptoms if stopped abruptly."
  },
  {
    id: 'duloxetine',
    name: 'Cymbalta',
    genericName: 'Duloxetine',
    class: DrugClass.SNRI,
    mechanism: 'SNRI (balanced 5-HT and NE inhibition)',
    fdaIndications: ['MDD', 'GAD', 'Diabetic Peripheral Neuropathy', 'Fibromyalgia', 'Chronic Musculoskeletal Pain'],
    offLabelIndications: ['Stress urinary incontinence'],
    dosing: {
      starting: '30 mg/day',
      therapeutic: '60 mg/day',
      max: '120 mg/day (little benefit >60mg for MDD)',
    },
    sideEffects: {
      common: ['Nausea', 'Dry mouth', 'Constipation', 'Fatigue', 'Sweating'],
      serious: ['Hepatotoxicity (monitor LFTs)', 'Orthostatic hypotension']
    },
    blackBoxWarning: 'Suicidality in children/young adults.',
    contraindications: ['MAOI use', 'Uncontrolled narrow-angle glaucoma', 'Hepatic impairment', 'Heavy alcohol use'],
    pharmacokinetics: {
      halfLife: '12 hours',
      metabolism: 'CYP1A2, 2D6'
    },
    clinicalPearls: ['Excellent for painful depression or chronic pain comorbidity.', 'Avoid in liver disease/alcoholics.'],
    clinicalThought: "I think of duloxetine as the dual-purpose SNRI, it pulls double duty for depression and chronic pain conditions like fibromyalgia and diabetic neuropathy."
  },
  {
    id: 'desvenlafaxine',
    name: 'Pristiq',
    genericName: 'Desvenlafaxine',
    class: DrugClass.SNRI,
    mechanism: 'SNRI (active metabolite of venlafaxine)',
    fdaIndications: ['MDD'],
    offLabelIndications: ['Vasomotor symptoms'],
    dosing: {
      starting: '50 mg/day',
      therapeutic: '50 mg/day',
      max: '100 mg/day (usually no benefit >50mg)',
    },
    sideEffects: {
      common: ['Nausea', 'Sweating', 'Dizziness', 'Insomnia'],
      serious: ['Discontinuation syndrome']
    },
    blackBoxWarning: 'Suicidality in children/young adults.',
    contraindications: ['MAOI use'],
    pharmacokinetics: {
      halfLife: '11 hours',
      metabolism: 'Phase II conjugation (O-glucuronidation) - Bypass CYP2D6'
    },
    clinicalPearls: ['Good option if patient is CYP2D6 poor metabolizer.', 'Simpler dosing (start at therapeutic dose).', 'Often leaves ghost pill in stool.'],
    clinicalThought: "I think of desvenlafaxine as venlafaxine's active metabolite, it skips the CYP2D6 step so dosing is more predictable across patients."
  },
  {
    id: 'levomilnacipran',
    name: 'Fetzima',
    genericName: 'Levomilnacipran',
    class: DrugClass.SNRI,
    mechanism: 'SNRI (More NE potency than 5-HT, 2:1 ratio)',
    fdaIndications: ['MDD'],
    offLabelIndications: [],
    dosing: {
      starting: '20 mg/day',
      therapeutic: '40-120 mg/day',
      max: '120 mg/day',
    },
    sideEffects: {
      common: ['Nausea', 'Hyperhidrosis', 'Increased heart rate', 'Erectile dysfunction', 'Urinary hesitation'],
      serious: ['Hypertension', 'Tachycardia']
    },
    blackBoxWarning: 'Suicidality in children/young adults.',
    contraindications: ['MAOI use', 'Uncontrolled narrow-angle glaucoma'],
    pharmacokinetics: {
      halfLife: '12 hours',
      metabolism: 'CYP3A4'
    },
    clinicalPearls: ['Most noradrenergic SNRI.', 'Good for lethargy/low energy.', 'Watch for urinary retention (prostate issues).'],
    clinicalThought: "I think of levomilnacipran as the most norepinephrine-forward SNRI, which theoretically helps with fatigue and motivation but also means more activation side effects."
  },

  // --- Atypicals / Novel ---
  {
    id: 'bupropion',
    name: 'Wellbutrin',
    genericName: 'Bupropion',
    class: DrugClass.Atypical,
    mechanism: 'Norepinephrine Dopamine Reuptake Inhibitor (NDRI)',
    fdaIndications: ['MDD', 'SAD', 'Smoking Cessation'],
    offLabelIndications: ['ADHD', 'Sexual dysfunction antidote', 'Bipolar depression (lower switch risk)'],
    dosing: {
      starting: '150 mg XL qAM',
      therapeutic: '300 mg XL qAM',
      max: '450 mg/day',
    },
    sideEffects: {
      common: ['Insomnia', 'Dry mouth', 'Tremor', 'Anxiety', 'Weight loss'],
      serious: ['Seizures (dose dependent)', 'Hypertension']
    },
    blackBoxWarning: 'Suicidality; Neuropsychiatric reactions in smoking cessation.',
    contraindications: ['Seizure disorder', 'Eating disorders (Bulimia/Anorexia)', 'Abrupt alcohol/benzo withdrawal', 'MAOI'],
    pharmacokinetics: {
      halfLife: '21 hours (biphasic)',
      metabolism: 'CYP2B6'
    },
    clinicalPearls: ['No sexual dysfunction.', 'Neutral/Weight loss.', 'Activating.', 'Lowers seizure threshold.', 'False positive amphetamine urine screen possible.'],
    clinicalThought: "I think of bupropion as the antidepressant that does its own thing, no serotonin means no sexual dysfunction or weight gain, plus it helps people quit smoking."
  },
  {
    id: 'mirtazapine',
    name: 'Remeron',
    genericName: 'Mirtazapine',
    class: DrugClass.Atypical,
    mechanism: 'Alpha-2 antagonist (increases NE/5-HT); 5-HT2/3 antagonist; H1 antagonist',
    fdaIndications: ['MDD'],
    offLabelIndications: ['Insomnia', 'Anxiety', 'Appetite stimulation'],
    dosing: {
      starting: '15 mg qhs',
      therapeutic: '15-45 mg/day',
      max: '45 mg/day',
    },
    sideEffects: {
      common: ['Sedation (inverse dose response)', 'Increased appetite/Weight gain', 'Dry mouth', 'Dizziness'],
      serious: ['Agranulocytosis (rare)', 'Neutropenia']
    },
    blackBoxWarning: 'Suicidality in children/young adults.',
    contraindications: ['MAOI use'],
    pharmacokinetics: {
      halfLife: '20-40 hours',
      metabolism: 'CYP1A2, 2D6, 3A4'
    },
    clinicalPearls: ['Good for insomnia and elderly with weight loss.', 'Lower doses (7.5-15) more sedating than higher doses (30-45) due to increased NE at high doses overpowering H1 blockade.', 'Low sexual dysfunction.'],
    clinicalThought: "I think of mirtazapine as the 'hungry and sleepy' antidepressant, which sounds like a side effect profile until you meet a depressed patient with insomnia who can't eat."
  },
  {
    id: 'vortioxetine',
    name: 'Trintellix',
    genericName: 'Vortioxetine',
    class: DrugClass.Atypical,
    mechanism: 'Serotonin Modulator/Stimulator (SSRI + 5-HT1A agonist, 5-HT3/7 antagonist)',
    fdaIndications: ['MDD'],
    offLabelIndications: ['GAD', 'Cognitive dysfunction in depression'],
    dosing: {
      starting: '10 mg/day (5 mg if sensitive)',
      therapeutic: '10-20 mg/day',
      max: '20 mg/day',
    },
    sideEffects: {
      common: ['Nausea (very common)', 'Vomiting', 'Constipation'],
      serious: ['Serotonin syndrome']
    },
    blackBoxWarning: 'Suicidality in children/young adults.',
    contraindications: ['MAOI use'],
    pharmacokinetics: {
      halfLife: '66 hours',
      metabolism: 'CYP2D6'
    },
    clinicalPearls: ['Pro-cognitive benefits.', 'Less sexual dysfunction than standard SSRIs.', 'Nausea is main barrier (take with food/at night).'],
    clinicalThought: "I think of vortioxetine as the 'cognitive' antidepressant, it has a multimodal mechanism and some decent data for helping with the brain fog that comes with depression."
  },
  {
    id: 'vilazodone',
    name: 'Viibryd',
    genericName: 'Vilazodone',
    class: DrugClass.Atypical,
    mechanism: 'SPARI (Serotonin Partial Agonist Reuptake Inhibitor) - SSRI + 5-HT1A partial agonist',
    fdaIndications: ['MDD'],
    offLabelIndications: ['Anxiety'],
    dosing: {
      starting: '10 mg/day x 7 days',
      therapeutic: '20-40 mg/day',
      max: '40 mg/day',
      notes: 'MUST take with food for absorption.'
    },
    sideEffects: {
      common: ['Diarrhea', 'Nausea', 'Insomnia'],
      serious: ['Serotonin syndrome', 'Pancreatitis (rare)']
    },
    blackBoxWarning: 'Suicidality in children/young adults.',
    contraindications: ['MAOI use'],
    pharmacokinetics: {
      halfLife: '25 hours',
      metabolism: 'CYP3A4'
    },
    clinicalPearls: ['"Sertraline + Buspirone" in one pill.', 'Less sexual dysfunction.', 'GI side effects significant.', 'Bioavailability drops 50% without food.'],
    clinicalThought: "I think of vilazodone as an SSRI with built-in buspirone, the 5HT1A partial agonism might help with sexual side effects and anxiety."
  },
  {
    id: 'auvelity',
    name: 'Auvelity',
    genericName: 'Dextromethorphan-Bupropion',
    class: DrugClass.NMDA,
    mechanism: 'NMDA antagonist (DXM) + NDRI/CYP2D6 inhibitor (Bupropion)',
    fdaIndications: ['MDD'],
    offLabelIndications: [],
    dosing: {
      starting: '1 tablet (45mg/105mg) qAM x 3 days',
      therapeutic: '1 tablet BID',
      max: '2 tablets/day',
    },
    sideEffects: {
      common: ['Dizziness', 'Headache', 'Diarrhea', 'Somnolence', 'Dry mouth'],
      serious: ['Seizures', 'Psychosis', 'Serotonin Syndrome']
    },
    blackBoxWarning: 'Suicidality.',
    contraindications: ['Seizure disorder', 'Bulimia/Anorexia', 'MAOI', 'Alcohol withdrawal'],
    pharmacokinetics: {
      halfLife: '22 hours (Bupropion extends DXM half life)',
      metabolism: 'CYP2D6'
    },
    clinicalPearls: ['Rapid onset of action (approx 1 week).', 'Glutamate modulation.', 'Bupropion boosts DXM levels by inhibiting 2D6.']
  },
   {
    id: 'gepirone',
    name: 'Exxua',
    genericName: 'Gepirone',
    class: DrugClass.Novel,
    mechanism: '5-HT1A agonist',
    fdaIndications: ['MDD'],
    offLabelIndications: [],
    dosing: {
      starting: '18.2 mg/day',
      therapeutic: '18.2 - 72.6 mg/day',
      max: '72.6 mg/day',
      notes: 'Take with food.'
    },
    sideEffects: {
      common: ['Dizziness', 'Nausea', 'Abdominal pain'],
      serious: ['QT prolongation (specific warnings regarding interactions)']
    },
    blackBoxWarning: 'Suicidality.',
    contraindications: ['Congenital Long QT', 'Use with strong CYP3A4 inhibitors'],
    pharmacokinetics: {
      halfLife: '5 hours',
      metabolism: 'CYP3A4'
    },
    clinicalPearls: ['Approved 2023.', 'No sexual dysfunction mechanism.', 'No weight gain.'],
    clinicalThought: "I think of gepirone as buspirone's relative that actually works as a standalone antidepressant, it's a 5HT1A agonist that took decades to finally get approved."
  },
  {
    id: 'zuranolone',
    name: 'Zurzuvae',
    genericName: 'Zuranolone',
    class: DrugClass.GABA,
    mechanism: 'Neuroactive steroid; GABAA receptor positive allosteric modulator',
    fdaIndications: ['Postpartum Depression (PPD)'],
    offLabelIndications: ['MDD (failed FDA approval for MDD in 2023)'],
    dosing: {
      starting: '50 mg qhs for 14 days',
      therapeutic: '50 mg/day',
      max: '50 mg/day',
      notes: 'Taken as a 14-day course only.'
    },
    sideEffects: {
      common: ['Somnolence', 'Dizziness', 'Diarrhea', 'Fatigue'],
      serious: ['CNS Depression', 'Impaired driving']
    },
    blackBoxWarning: 'Impaired ability to drive/operate machinery.',
    contraindications: [],
    pharmacokinetics: {
      halfLife: '20 hours',
      metabolism: 'CYP3A4'
    },
    clinicalPearls: ['First oral medication for PPD.', 'Rapid acting.', 'Short course treatment (2 weeks).'],
    clinicalThought: "I think of zuranolone as brexanolone in pill form, it's the first oral neuroactive steroid for postpartum depression and works in just two weeks of dosing."
  },

  // --- TCAs (Selected) ---
  {
    id: 'nortriptyline',
    name: 'Pamelor',
    genericName: 'Nortriptyline',
    class: DrugClass.TCA,
    mechanism: 'Inhibits NE > 5-HT reuptake; Anticholinergic, Anti-adrenergic, Anti-histaminergic',
    fdaIndications: ['MDD'],
    offLabelIndications: ['Neuropathic pain', 'Migraine prophylaxis', 'Smoking cessation'],
    dosing: {
      starting: '25 mg qhs',
      therapeutic: '50-150 mg/day',
      max: '150 mg/day',
      notes: 'Therapeutic window 50-150 ng/mL.'
    },
    sideEffects: {
      common: ['Dry mouth', 'Constipation', 'Urinary retention', 'Sedation', 'Orthostasis'],
      serious: ['Arrhythmias', 'QRS prolongation', 'Seizures', 'Lethal in overdose']
    },
    blackBoxWarning: 'Suicidality.',
    contraindications: ['Recent MI', 'Bundle branch block', 'MAOI', 'Narrow angle glaucoma'],
    pharmacokinetics: {
      halfLife: '26 hours',
      metabolism: 'CYP2D6'
    },
    clinicalPearls: ['Secondary amine TCA (less side effects than Tertiary like Amitriptyline).', '"Therapeutic Window" exists.', 'Gold standard for ECT augmentation?'],
    clinicalThought: "I think of nortriptyline as the better-tolerated TCA, it's amitriptyline's metabolite with less anticholinergic burden, and we actually have therapeutic drug levels to guide dosing."
  },
  {
    id: 'amitriptyline',
    name: 'Elavil',
    genericName: 'Amitriptyline',
    class: DrugClass.TCA,
    mechanism: 'Inhibits 5-HT and NE reuptake (Tertiary amine)',
    fdaIndications: ['MDD'],
    offLabelIndications: ['Pain', 'Migraine', 'Insomnia', 'Fibromyalgia'],
    dosing: {
      starting: '25-50 mg qhs',
      therapeutic: '100-300 mg/day (Depression)',
      max: '300 mg/day',
    },
    sideEffects: {
      common: ['Highly anticholinergic', 'Sedation', 'Weight gain', 'Orthostasis'],
      serious: ['Arrhythmias', 'Heart block', 'Seizures']
    },
    blackBoxWarning: 'Suicidality.',
    contraindications: ['Recent MI', 'MAOI'],
    pharmacokinetics: {
      halfLife: '21 hours',
      metabolism: 'CYP2D6, 2C19'
    },
    clinicalPearls: ['Rarely used for MDD now due to side effects.', 'Metabolizes to Nortriptyline.', 'High lethality in overdose.'],
    clinicalThought: "I think of amitriptyline as the TCA that mostly works for everything except depression these days, it's more commonly prescribed for migraines, neuropathic pain, and insomnia."
  },

  // --- MAOIs (Selected) ---
  {
    id: 'phenelzine',
    name: 'Nardil',
    genericName: 'Phenelzine',
    class: DrugClass.MAOI,
    mechanism: 'Irreversible non-selective MAO-A and MAO-B inhibitor',
    fdaIndications: ['Atypical Depression (MDD)'],
    offLabelIndications: ['Treatment resistant anxiety'],
    dosing: {
      starting: '15 mg TID',
      therapeutic: '60-90 mg/day',
      max: '90 mg/day',
    },
    sideEffects: {
      common: ['Orthostasis (severe)', 'Weight gain', 'Edema', 'Sexual dysfunction', 'Insomnia'],
      serious: ['Hypertensive Crisis (Tyramine reaction)', 'Serotonin Syndrome', 'Hepatotoxicity']
    },
    blackBoxWarning: 'Suicidality.',
    contraindications: ['Tyramine rich foods', 'SSRIs/SNRIs/TCAs', 'Meperidine', 'Dextromethorphan', 'Sympathomimetics'],
    pharmacokinetics: {
      halfLife: '11 hours (but clinical effect lasts 2 weeks)',
      metabolism: 'Acetylation (Watch slow acetylators)'
    },
    clinicalPearls: ['"Nardil for Nerves" (good for anxiety).', 'Requires strict low-tyramine diet.', 'Washout period 2 weeks before starting/stopping (5 weeks for Fluoxetine).'],
    clinicalThought: "I think of phenelzine as the MAOI you reach for when nothing else has worked, it's remarkably effective for atypical depression and treatment-resistant cases if patients can handle the dietary restrictions."
  },
  {
    id: 'tranylcypromine',
    name: 'Parnate',
    genericName: 'Tranylcypromine',
    class: DrugClass.MAOI,
    mechanism: 'Irreversible non-selective MAO inhibitor; amphetamine-like structure',
    fdaIndications: ['Atypical Depression (MDD)'],
    offLabelIndications: [],
    dosing: {
      starting: '10 mg BID',
      therapeutic: '30-60 mg/day',
      max: '60 mg/day',
    },
    sideEffects: {
      common: ['Insomnia', 'Agitation', 'Orthostasis', 'Dry mouth'],
      serious: ['Hypertensive Crisis', 'Intracranial hemorrhage']
    },
    blackBoxWarning: 'Suicidality.',
    contraindications: ['Cerebrovascular defect', 'Tyramine foods', 'SSRIs', 'Pheochromocytoma'],
    pharmacokinetics: {
      halfLife: '2.5 hours',
      metabolism: 'CYP2C19'
    },
    clinicalPearls: ['Activating (amphetamine derivative).', 'Less weight gain than Phenelzine.'],
    clinicalThought: "I think of tranylcypromine as the more activating MAOI with some mild amphetamine-like properties, which can be helpful or problematic depending on the patient."
  },
  {
    id: 'selegiline',
    name: 'Emsam',
    genericName: 'Selegiline Transdermal',
    class: DrugClass.MAOI,
    mechanism: 'Selective MAO-B inhibitor (low dose), Non-selective (high dose)',
    fdaIndications: ['MDD'],
    offLabelIndications: [],
    dosing: {
      starting: '6 mg/24hr patch',
      therapeutic: '6-12 mg/24hr',
      max: '12 mg/24hr',
    },
    sideEffects: {
      common: ['Application site reaction', 'Insomnia', 'Diarrhea'],
      serious: ['Hypertensive crisis (less risk at 6mg)']
    },
    blackBoxWarning: 'Suicidality.',
    contraindications: ['SSRIs', 'Pheochromocytoma'],
    pharmacokinetics: {
      halfLife: '18-25 hours',
      metabolism: 'CYP'
    },
    clinicalPearls: ['6mg patch does NOT require tyramine diet (bypasses gut MAO-A).', 'Diet required for 9mg and 12mg.', 'Expensive.'],
    clinicalThought: "I think of the selegiline patch as the MAOI for patients wary of dietary restrictions, at the lowest dose you can skip them entirely because it avoids gut MAO-A inhibition."
  }
];

export const ANXIOLYTICS: Drug[] = [
  {
    id: 'alprazolam',
    name: 'Xanax',
    genericName: 'Alprazolam',
    class: DrugClass.Benzodiazepine,
    mechanism: 'GABA-A Receptor Allosteric Modulator (Increases frequency of chloride channel opening)',
    fdaIndications: ['GAD', 'Panic Disorder'],
    offLabelIndications: ['Phobias', 'Situational Anxiety'],
    dosing: {
      starting: '0.25-0.5 mg TID',
      therapeutic: '1-4 mg/day',
      max: '4 mg/day (up to 10mg in Panic trials)',
      notes: 'Short acting. High abuse potential.'
    },
    sideEffects: {
      common: ['Sedation', 'Dizziness', 'Cognitive Impairment', 'Ataxia'],
      serious: ['Respiratory depression (with opioids)', 'Dependency', 'Withdrawal seizures']
    },
    blackBoxWarning: 'Concomitant use with opioids may result in profound sedation, respiratory depression, coma, and death. Risk of abuse, misuse, and addiction. Physical dependence and withdrawal reactions.',
    contraindications: ['Acute narrow-angle glaucoma', 'Ketoconazole/Itraconazole (Strong CYP3A4 inhibitors)'],
    pharmacokinetics: {
      halfLife: '11 hours',
      metabolism: 'CYP3A4'
    },
    clinicalPearls: ['Rapid onset, high potency.', 'Notorious for inter-dose rebound anxiety.', 'Difficult to taper due to potency/short half-life.']
  },
  {
    id: 'lorazepam',
    name: 'Ativan',
    genericName: 'Lorazepam',
    class: DrugClass.Benzodiazepine,
    mechanism: 'GABA-A Receptor Allosteric Modulator',
    fdaIndications: ['Anxiety Disorders', 'Insomnia (short-term)', 'Status Epilepticus'],
    offLabelIndications: ['Catatonia', 'Agitation', 'Alcohol Withdrawal'],
    dosing: {
      starting: '0.5-1 mg BID/TID',
      therapeutic: '2-6 mg/day',
      max: '10 mg/day',
    },
    sideEffects: {
      common: ['Sedation', 'Weakness', 'Unsteadiness'],
      serious: ['Respiratory depression', 'Dependency']
    },
    blackBoxWarning: 'Concomitant use with opioids; Abuse/Misuse; Dependence/Withdrawal.',
    contraindications: ['Acute narrow-angle glaucoma'],
    pharmacokinetics: {
      halfLife: '12 hours',
      metabolism: 'Glucuronidation (No CYP interactions)'
    },
    clinicalPearls: ['"LOT" benzo (Lorazepam, Oxazepam, Temazepam) - Safe for liver failure/elderly as it bypasses CYP metabolism.', 'Preferred IM agent for agitation.']
  },
  {
    id: 'clonazepam',
    name: 'Klonopin',
    genericName: 'Clonazepam',
    class: DrugClass.Benzodiazepine,
    mechanism: 'GABA-A Receptor Allosteric Modulator',
    fdaIndications: ['Panic Disorder', 'Seizure Disorders'],
    offLabelIndications: ['GAD', 'REM Sleep Behavior Disorder', 'Social Anxiety'],
    dosing: {
      starting: '0.25-0.5 mg BID',
      therapeutic: '1-4 mg/day',
      max: '4 mg/day (Panic)',
    },
    sideEffects: {
      common: ['Somnolence', 'Depression', 'Dizziness', 'Coordination problems'],
      serious: ['Respiratory depression', 'Dependency']
    },
    blackBoxWarning: 'Concomitant use with opioids; Abuse/Misuse; Dependence/Withdrawal.',
    contraindications: ['Significant liver disease', 'Acute narrow-angle glaucoma'],
    pharmacokinetics: {
      halfLife: '30-40 hours',
      metabolism: 'CYP3A4'
    },
    clinicalPearls: ['Longer acting, often preferred for smoother coverage than alprazolam.', 'Easier to taper than Xanax.']
  },
  {
    id: 'diazepam',
    name: 'Valium',
    genericName: 'Diazepam',
    class: DrugClass.Benzodiazepine,
    mechanism: 'GABA-A Receptor Allosteric Modulator',
    fdaIndications: ['Anxiety', 'Alcohol Withdrawal', 'Muscle Spasm', 'Seizures'],
    offLabelIndications: [],
    dosing: {
      starting: '2-5 mg BID-QID',
      therapeutic: '2-40 mg/day',
      max: '40 mg/day',
    },
    sideEffects: {
      common: ['Sedation', 'Fatigue', 'Muscle weakness'],
      serious: ['Respiratory depression', 'Dependency']
    },
    blackBoxWarning: 'Concomitant use with opioids; Abuse/Misuse; Dependence/Withdrawal.',
    contraindications: ['Myasthenia gravis', 'Severe respiratory insufficiency', 'Sleep apnea'],
    pharmacokinetics: {
      halfLife: '20-100 hours (active metabolites)',
      metabolism: 'CYP3A4, 2C19'
    },
    clinicalPearls: ['Lipophilic (acts fast) but long duration due to metabolites.', 'Accumulates in elderly - avoid.', 'Used for tapers due to long half-life.']
  },
  {
    id: 'buspirone',
    name: 'Buspar',
    genericName: 'Buspirone',
    class: DrugClass.Azapirone,
    mechanism: '5-HT1A Partial Agonist',
    fdaIndications: ['GAD'],
    offLabelIndications: ['Augmentation in depression', 'Bruxism'],
    dosing: {
      starting: '7.5 mg BID',
      therapeutic: '20-60 mg/day',
      max: '60 mg/day',
      notes: 'Consistency with food matters (food increases bioavailability).'
    },
    sideEffects: {
      common: ['Dizziness', 'Nausea', 'Headache', 'Nervousness'],
      serious: ['Serotonin syndrome (rare)']
    },
    blackBoxWarning: '', // No black box
    contraindications: ['MAOI use'],
    pharmacokinetics: {
      halfLife: '2-3 hours',
      metabolism: 'CYP3A4'
    },
    clinicalPearls: ['Not a benzo - no sedation, no addiction.', 'Takes 2-4 weeks to work.', 'Can help SSRI-induced sexual dysfunction.']
  },
  {
    id: 'hydroxyzine',
    name: 'Vistaril',
    genericName: 'Hydroxyzine',
    class: DrugClass.Antihistamine,
    mechanism: 'H1 Receptor Antagonist; 5-HT2A antagonist',
    fdaIndications: ['Anxiety', 'Pruritus', 'Sedation'],
    offLabelIndications: ['Insomnia'],
    dosing: {
      starting: '25-50 mg PRN',
      therapeutic: '50-100 mg/day',
      max: '400 mg/day',
    },
    sideEffects: {
      common: ['Sedation', 'Dry mouth', 'Dizziness'],
      serious: ['QT Prolongation', 'Torsades de Pointes (rare)']
    },
    blackBoxWarning: '',
    contraindications: ['Early pregnancy', 'Prolonged QT interval'],
    pharmacokinetics: {
      halfLife: '14-25 hours',
      metabolism: 'CYP2D6'
    },
    clinicalPearls: ['Non-addictive PRN option.', 'Anticholinergic burden.', 'Good for patients with substance history.']
  },
  {
    id: 'gabapentin',
    name: 'Neurontin',
    genericName: 'Gabapentin',
    class: DrugClass.Gabapentinoid,
    mechanism: 'Inhibits Alpha-2-Delta subunit of voltage-gated calcium channels',
    fdaIndications: ['Seizures', 'Postherpetic Neuralgia'],
    offLabelIndications: ['Anxiety', 'Insomnia', 'Alcohol Withdrawal', 'Neuropathic Pain'],
    dosing: {
      starting: '300 mg TID',
      therapeutic: '900-1800 mg/day',
      max: '3600 mg/day',
      notes: 'Renal dosing required.'
    },
    sideEffects: {
      common: ['Sedation', 'Dizziness', 'Edema', 'Ataxia'],
      serious: ['Respiratory depression (with opioids)']
    },
    blackBoxWarning: '', // Only warnings
    contraindications: [],
    pharmacokinetics: {
      halfLife: '5-7 hours',
      metabolism: 'Renal excretion (unchanged)'
    },
    clinicalPearls: ['Absorption is saturable (taking >600mg at once reduces % absorbed).', 'Popular off-label anxiety treatment.', 'Increasing concern for misuse.']
  },
  {
    id: 'pregabalin',
    name: 'Lyrica',
    genericName: 'Pregabalin',
    class: DrugClass.Gabapentinoid,
    mechanism: 'Inhibits Alpha-2-Delta subunit of voltage-gated calcium channels',
    fdaIndications: ['Neuropathic pain', 'Fibromyalgia', 'GAD (Europe only, off-label US)'],
    offLabelIndications: ['GAD', 'Social Anxiety'],
    dosing: {
      starting: '50-75 mg BID',
      therapeutic: '150-600 mg/day',
      max: '600 mg/day',
    },
    sideEffects: {
      common: ['Dizziness', 'Somnolence', 'Weight gain', 'Edema'],
      serious: ['Angioedema', 'Hypersensitivity']
    },
    blackBoxWarning: '',
    contraindications: [],
    pharmacokinetics: {
      halfLife: '6 hours',
      metabolism: 'Renal excretion'
    },
    clinicalPearls: ['Controlled substance (CV) due to euphoria.', 'Better bioavailability than Gabapentin (linear).', 'Renal dose adjustment needed.']
  },
  {
    id: 'propranolol',
    name: 'Inderal',
    genericName: 'Propranolol',
    class: DrugClass.BetaBlocker,
    mechanism: 'Non-selective Beta Adrenergic Antagonist',
    fdaIndications: ['Hypertension', 'Migraine', 'Essential Tremor'],
    offLabelIndications: ['Performance Anxiety', 'Akathisia'],
    dosing: {
      starting: '10 mg PRN',
      therapeutic: '10-40 mg/dose',
      max: 'variable',
    },
    sideEffects: {
      common: ['Bradycardia', 'Hypotension', 'Fatigue', 'Cold extremities'],
      serious: ['Bronchospasm (Asthma)', 'Heart block']
    },
    blackBoxWarning: 'Do not abrupt discontinue (risk of ischemia/angina).',
    contraindications: ['Asthma/COPD', 'Bradycardia', 'Heart block'],
    pharmacokinetics: {
      halfLife: '3-6 hours',
      metabolism: 'Hepatic'
    },
    clinicalPearls: ['Gold standard for performance anxiety (treats physical symptoms).', 'Lipophilic - crosses BBB (nightmares possible).']
  }
];

export const ANTIPSYCHOTICS: Drug[] = [
  {
    id: 'clozapine',
    name: 'Clozaril',
    genericName: 'Clozapine',
    class: DrugClass.Antipsychotic,
    mechanism: 'D2/5-HT2A Antagonist (Low D2 affinity, High D4, Muscarinic, Histaminic, Adrenergic)',
    fdaIndications: ['Treatment Resistant Schizophrenia', 'Recurrent Suicidality in Schizophrenia'],
    offLabelIndications: ['Treatment Resistant Bipolar', 'Psychosis in Parkinson\'s'],
    dosing: {
      starting: '12.5 mg QD/BID',
      therapeutic: '300-450 mg/day',
      max: '900 mg/day',
      notes: 'Slow titration to prevent seizures/orthostasis.'
    },
    sideEffects: {
      common: ['Sialorrhea (Drooling)', 'Sedation', 'Constipation (can be fatal)', 'Weight gain', 'Tachycardia'],
      serious: ['Agranulocytosis (REMS)', 'Myocarditis', 'Seizures (dose related)']
    },
    blackBoxWarning: 'Severe Neutropenia; Orthostatic Hypotension; Seizures; Myocarditis/Cardiomyopathy; Increased mortality in dementia.',
    contraindications: ['History of clozapine-induced agranulocytosis'],
    pharmacokinetics: {
      halfLife: '12 hours',
      metabolism: 'CYP1A2'
    },
    clinicalPearls: ['Most effective antipsychotic.', 'Reduces suicide risk.', 'REMS monitoring required (ANC).', 'Treats Tardive Dyskinesia.'],
    clinicalThought: "I think of clozapine as the antipsychotic of last resort that probably should be used sooner, it's the only one proven superior for treatment-resistant schizophrenia and reduces suicidality."
  },
  {
    id: 'risperidone',
    name: 'Risperdal',
    genericName: 'Risperidone',
    class: DrugClass.Antipsychotic,
    mechanism: 'D2/5-HT2A Antagonist (High D2 potency)',
    fdaIndications: ['Schizophrenia', 'Bipolar I', 'Autism Irritability'],
    offLabelIndications: ['Dementia Agitation', 'PTSD'],
    dosing: {
      starting: '1-2 mg/day',
      therapeutic: '2-6 mg/day',
      max: '16 mg/day (rarely >6-8mg)',
    },
    sideEffects: {
      common: ['Sedation', 'Increased appetite', 'Rhinitis', 'EPS (dose dependent)'],
      serious: ['Hyperprolactinemia (Gynecomastia/Galactorrhea)', 'NMS', 'TD']
    },
    blackBoxWarning: 'Increased mortality in elderly with dementia.',
    contraindications: [],
    pharmacokinetics: {
      halfLife: '20 hours (active moiety)',
      metabolism: 'CYP2D6'
    },
    clinicalPearls: ['Most "typical" of the atypicals (high D2 affinity).', 'Highest risk of prolactin elevation.', 'Metabolizes to Paliperidone.'],
    clinicalThought: "I think of risperidone as the atypical that acts the most like a typical, it's effective and well-studied but the potent D2 blockade means more EPS and prolactin elevation than others."
  },
  {
    id: 'paliperidone',
    name: 'Invega',
    genericName: 'Paliperidone',
    class: DrugClass.Antipsychotic,
    mechanism: 'D2/5-HT2A Antagonist (active metabolite of risperidone)',
    fdaIndications: ['Schizophrenia', 'Schizoaffective Disorder'],
    offLabelIndications: [],
    dosing: {
      starting: '6 mg/day',
      therapeutic: '6-12 mg/day',
      max: '12 mg/day',
      notes: 'OROS delivery system (ghost pill).'
    },
    sideEffects: {
      common: ['EPS', 'Hyperprolactinemia', 'Tachycardia', 'Headache'],
      serious: ['NMS', 'TD', 'QT prolongation']
    },
    blackBoxWarning: 'Increased mortality in elderly with dementia.',
    contraindications: [],
    pharmacokinetics: {
      halfLife: '23 hours',
      metabolism: 'Renal (59% unchanged)'
    },
    clinicalPearls: ['Active metabolite of Risperidone.', 'Renal excretion (good for liver failure).', 'Popular Long Acting Injectables (Sustenna, Trinza, Hafyera).'],
    clinicalThought: "I think of paliperidone as risperidone's active metabolite with a simpler metabolic pathway, its main advantage is the long-acting injectable formulations. LAIs are great."
  },
  {
    id: 'olanzapine',
    name: 'Zyprexa',
    genericName: 'Olanzapine',
    class: DrugClass.Antipsychotic,
    mechanism: 'D2/5-HT2A Antagonist (High 5-HT2A affinity)',
    fdaIndications: ['Schizophrenia', 'Bipolar I', 'Treatment Resistant Depression (with Fluoxetine)', 'Agitation (IM)'],
    offLabelIndications: ['Anorexia Nervosa', 'Chemo-induced Nausea'],
    dosing: {
      starting: '5-10 mg/day',
      therapeutic: '10-20 mg/day',
      max: '20 mg/day (often higher in practice)',
    },
    sideEffects: {
      common: ['Weight gain (Severe)', 'Sedation', 'Increased Appetite', 'Dry mouth'],
      serious: ['Metabolic Syndrome (Highest risk)', 'DRESS syndrome']
    },
    blackBoxWarning: 'Increased mortality in elderly with dementia. Post-injection delirium/sedation (Relprevv).',
    contraindications: [],
    pharmacokinetics: {
      halfLife: '30 hours',
      metabolism: 'CYP1A2'
    },
    clinicalPearls: ['Most effective atypical (besides Clozapine) but worst metabolic profile.', 'Smokers metabolize it faster (CYP1A2 induction).'],
    clinicalThought: "I think of olanzapine as the most effective antipsychotic you'll love inpatient but not so much outpatient, it works well but the metabolic consequences are no joke."
  },
  {
    id: 'quetiapine',
    name: 'Seroquel',
    genericName: 'Quetiapine',
    class: DrugClass.Antipsychotic,
    mechanism: 'D2/5-HT2A Antagonist; H1 antagonist; alpha-1 antagonist',
    fdaIndications: ['Schizophrenia', 'Bipolar Mania', 'Bipolar Depression', 'MDD Augmentation (XR)'],
    offLabelIndications: ['Insomnia', 'Anxiety', 'Agitation'],
    dosing: {
      starting: '25-50 mg/day',
      therapeutic: '300 mg (Bipolar Dep), 400-800 mg (Psychosis)',
      max: '800 mg/day',
      notes: 'Low doses (<100mg) primarily antihistamine/sedative.'
    },
    sideEffects: {
      common: ['Sedation', 'Weight gain', 'Dry mouth', 'Orthostasis', 'Dizziness'],
      serious: ['Metabolic Syndrome', 'Cataracts (Beagles only?)', 'NMS', 'TD']
    },
    blackBoxWarning: 'Increased mortality in elderly with dementia. Suicidality.',
    contraindications: [],
    pharmacokinetics: {
      halfLife: '6 hours (IR)',
      metabolism: 'CYP3A4'
    },
    clinicalPearls: ['"The Baby Bear" drug: Antihistamine at low dose, Antidepressant at medium dose, Antipsychotic at high dose.', 'Preferred in Parkinson\'s (low EPS).'],
    clinicalThought: "I think of quetiapine as the antipsychotic that moonlights as everything else, at low doses it's a sleep aid and antihistamine, you need to get to 400mg+ before you're really treating psychosis."
  },
  {
    id: 'ziprasidone',
    name: 'Geodon',
    genericName: 'Ziprasidone',
    class: DrugClass.Antipsychotic,
    mechanism: 'D2/5-HT2A Antagonist; SNRI properties',
    fdaIndications: ['Schizophrenia', 'Bipolar I'],
    offLabelIndications: ['Schizoaffective Disorder'],
    dosing: {
      starting: '20-40 mg BID',
      therapeutic: '60-80 mg BID',
      max: '160 mg/day',
      notes: 'MUST take with 500 calories of food.'
    },
    sideEffects: {
      common: ['Somnolence', 'Restlessness', 'Nausea'],
      serious: ['QT Prolongation', 'DRESS syndrome']
    },
    blackBoxWarning: 'Increased mortality in elderly with dementia.',
    contraindications: ['Recent MI', 'Uncompensated Heart Failure', 'QT Prolongation'],
    pharmacokinetics: {
      halfLife: '7 hours',
      metabolism: 'CYP3A4'
    },
    clinicalPearls: ['Absorption drops 50% without food.', 'Metabolically weight neutral.', 'Twice daily dosing.'],
    clinicalThought: "I think of ziprasidone as the weight-neutral option that never caught on, the twice-daily dosing with food requirement and QTc concerns made it less convenient than competitors."
  },
  {
    id: 'aripiprazole',
    name: 'Abilify',
    genericName: 'Aripiprazole',
    class: DrugClass.Antipsychotic,
    mechanism: 'Partial D2 Agonist, 5-HT1A Agonist, 5-HT2A Antagonist',
    fdaIndications: ['Schizophrenia', 'Bipolar I (Manic/Mixed)', 'MDD Augmentation', 'Autism Irritability', 'Tourette\'s'],
    offLabelIndications: ['Bipolar Depression'],
    dosing: {
      starting: '2-5 mg/day (MDD), 10-15 mg/day (Psychosis)',
      therapeutic: '2-15 mg (MDD), 10-30 mg (Psychosis)',
      max: '30 mg/day',
    },
    sideEffects: {
      common: ['Akathisia (High)', 'Insomnia', 'Nausea', 'Anxiety'],
      serious: ['Impulse Control Disorders (Gambling)', 'Neuroleptic Malignant Syndrome', 'TD']
    },
    blackBoxWarning: 'Increased mortality in elderly patients with dementia-related psychosis. Suicidality in children/young adults.',
    contraindications: [],
    pharmacokinetics: {
      halfLife: '75 hours',
      metabolism: 'CYP2D6, 3A4'
    },
    clinicalPearls: ['Less metabolic risk and sedation than others.', 'High rate of akathisia.', 'Partial agonist ("Dopamine Stabilizer").'],
    clinicalThought: "I think of aripiprazole as the partial agonist that changed how we think about antipsychotics, it has a favorable metabolic profile but akathisia can be a problem."
  },
  {
    id: 'brexpiprazole',
    name: 'Rexulti',
    genericName: 'Brexpiprazole',
    class: DrugClass.Antipsychotic,
    mechanism: 'Partial D2 Agonist (Stronger 5-HT1A and 5-HT2A activity than Aripiprazole)',
    fdaIndications: ['Schizophrenia', 'MDD Augmentation', 'Agitation in Alzheimer\'s'],
    offLabelIndications: [],
    dosing: {
      starting: '0.5-1 mg/day',
      therapeutic: '2-4 mg/day',
      max: '4 mg/day',
    },
    sideEffects: {
      common: ['Weight gain', 'Akathisia (less than Abilify)', 'Headache'],
      serious: ['NMS', 'TD']
    },
    blackBoxWarning: 'Increased mortality in elderly with dementia. Suicidality.',
    contraindications: [],
    pharmacokinetics: {
      halfLife: '91 hours',
      metabolism: 'CYP3A4, 2D6'
    },
    clinicalPearls: ['"Abilify 2.0".', 'Less akathisia and insomnia than aripiprazole, but more weight gain.'],
    clinicalThought: "I think of brexpiprazole as aripiprazole's mellower sibling, similar mechanism but reportedly less akathisia, though it's mostly used as an adjunct for depression rather than primary psychosis."
  },
  {
    id: 'cariprazine',
    name: 'Vraylar',
    genericName: 'Cariprazine',
    class: DrugClass.Antipsychotic,
    mechanism: 'Partial D2/D3 Agonist (High D3 affinity)',
    fdaIndications: ['Schizophrenia', 'Bipolar I (Manic/Mixed)', 'Bipolar Depression', 'MDD Augmentation'],
    offLabelIndications: [],
    dosing: {
      starting: '1.5 mg/day',
      therapeutic: '1.5-6 mg/day',
      max: '6 mg/day',
    },
    sideEffects: {
      common: ['Akathisia', 'EPS', 'Nausea', 'Insomnia'],
      serious: ['NMS', 'TD']
    },
    blackBoxWarning: 'Increased mortality in elderly with dementia. Suicidality.',
    contraindications: [],
    pharmacokinetics: {
      halfLife: '2-4 days (Active metabolites 1-3 weeks)',
      metabolism: 'CYP3A4'
    },
    clinicalPearls: ['Unique D3 affinity (pro-cognitive? negative symptoms?).', 'Very long half-life (missed doses matter less).', 'Akathisia is common.'],
    clinicalThought: "I think of cariprazine as the D3-preferring partial agonist with an extremely long half-life, it has good data for bipolar depression and may help with negative symptoms of schizophrenia."
  },
  {
    id: 'lurasidone',
    name: 'Latuda',
    genericName: 'Lurasidone',
    class: DrugClass.Antipsychotic,
    mechanism: 'D2/5-HT2A Antagonist; 5-HT7 Antagonist',
    fdaIndications: ['Schizophrenia', 'Bipolar Depression'],
    offLabelIndications: ['MDD with mixed features'],
    dosing: {
      starting: '20-40 mg/day',
      therapeutic: '40-80 mg/day (Bipolar), 40-160 mg/day (Schiz)',
      max: '160 mg/day',
      notes: 'MUST take with 350 calories.'
    },
    sideEffects: {
      common: ['Akathisia', 'Nausea', 'Somnolence'],
      serious: ['NMS', 'TD']
    },
    blackBoxWarning: 'Increased mortality in elderly with dementia. Suicidality.',
    contraindications: ['Strong CYP3A4 inducers/inhibitors'],
    pharmacokinetics: {
      halfLife: '18 hours',
      metabolism: 'CYP3A4'
    },
    clinicalPearls: ['Gold standard for Bipolar Depression.', 'Low metabolic risk.', 'Pregnancy Category B (often used).'],
    clinicalThought: "I think of lurasidone as the metabolically friendly option with solid bipolar depression data, the main catch is it needs to be taken with 350+ calories or absorption drops significantly."
  },
  {
    id: 'iloperidone',
    name: 'Fanapt',
    genericName: 'Iloperidone',
    class: DrugClass.Antipsychotic,
    mechanism: 'D2/5-HT2A Antagonist; Alpha-1 antagonist',
    fdaIndications: ['Schizophrenia'],
    offLabelIndications: [],
    dosing: {
      starting: '1 mg BID',
      therapeutic: '6-12 mg BID',
      max: '24 mg/day',
      notes: 'Slow titration required to avoid hypotension.'
    },
    sideEffects: {
      common: ['Dizziness', 'Dry mouth', 'Somnolence', 'Nasal congestion'],
      serious: ['Orthostatic Hypotension', 'QT Prolongation']
    },
    blackBoxWarning: 'Increased mortality in elderly with dementia.',
    contraindications: [],
    pharmacokinetics: {
      halfLife: '18-33 hours',
      metabolism: 'CYP2D6, 3A4'
    },
    clinicalPearls: ['Low risk of akathisia/EPS.', 'Titration schedule is annoying.', 'Significant alpha-blockade.'],
    clinicalThought: "I think of iloperidone as the slow-titration antipsychotic, it has low EPS but the alpha blockade means significant orthostatic hypotension and you can't load it quickly."
  },
  {
    id: 'asenapine',
    name: 'Saphris',
    genericName: 'Asenapine',
    class: DrugClass.Antipsychotic,
    mechanism: 'D2/5-HT2A Antagonist',
    fdaIndications: ['Schizophrenia', 'Bipolar I (Manic/Mixed)'],
    offLabelIndications: [],
    dosing: {
      starting: '5 mg BID (Sublingual)',
      therapeutic: '5-10 mg BID',
      max: '10 mg BID',
      notes: 'No food/drink for 10 mins after admin.'
    },
    sideEffects: {
      common: ['Oral hypoesthesia (Numbness)', 'Dysgeusia (Bad taste)', 'Somnolence'],
      serious: ['Hypersensitivity reactions', 'NMS']
    },
    blackBoxWarning: 'Increased mortality in elderly with dementia.',
    contraindications: ['Severe hepatic impairment'],
    pharmacokinetics: {
      halfLife: '24 hours',
      metabolism: 'CYP1A2, UGT1A4'
    },
    clinicalPearls: ['Sublingual only (swallowed bioavailability <2%).', 'Can cause mouth numbing.', 'Rapid onset.'],
    clinicalThought: "I think of asenapine as the sublingual antipsychotic that numbs your mouth, it has a broad receptor profile but the formulation and twice-daily dosing limit its appeal."
  },
  {
    id: 'lumateperone',
    name: 'Caplyta',
    genericName: 'Lumateperone',
    class: DrugClass.Antipsychotic,
    mechanism: '5-HT2A Antagonist; Post-synaptic D2 antagonist/Pre-synaptic partial agonist; SERT inhibitor',
    fdaIndications: ['Schizophrenia', 'Bipolar Depression'],
    offLabelIndications: [],
    dosing: {
      starting: '42 mg/day',
      therapeutic: '42 mg/day',
      max: '42 mg/day',
    },
    sideEffects: {
      common: ['Somnolence', 'Dry mouth', 'Nausea'],
      serious: ['NMS', 'TD (Low risk)']
    },
    blackBoxWarning: 'Increased mortality in elderly with dementia. Suicidality.',
    contraindications: [],
    pharmacokinetics: {
      halfLife: '18 hours',
      metabolism: 'CYP3A4'
    },
    clinicalPearls: ['"One dose fits all" (42mg).', 'Very favorable metabolic and motor profile.', 'Can be taken with or without food.'],
    clinicalThought: "I think of lumateperone as the low-dose, multi-mechanism newcomer, it modulates serotonin, dopamine, and glutamate at just 42mg and has a clean side effect profile for bipolar depression."
  },
  {
    id: 'pimavanserin',
    name: 'Nuplazid',
    genericName: 'Pimavanserin',
    class: DrugClass.Antipsychotic,
    mechanism: 'Selective 5-HT2A Inverse Agonist (No D2 blockade)',
    fdaIndications: ['Parkinson\'s Disease Psychosis'],
    offLabelIndications: ['Dementia-related psychosis'],
    dosing: {
      starting: '34 mg/day',
      therapeutic: '34 mg/day',
      max: '34 mg/day',
    },
    sideEffects: {
      common: ['Peripheral edema', 'Nausea', 'Confusion'],
      serious: ['QT Prolongation']
    },
    blackBoxWarning: 'Increased mortality in elderly with dementia.',
    contraindications: ['QT prolongation'],
    pharmacokinetics: {
      halfLife: '57 hours',
      metabolism: 'CYP3A4'
    },
    clinicalPearls: ['Does NOT block dopamine (safe for motor symptoms).', 'Takes weeks to work.', 'Specific indication.'],
    clinicalThought: "I think of pimavanserin as the Parkinson's psychosis specialist, it's a selective 5HT2A inverse agonist with no dopamine blockade, so it treats hallucinations without worsening motor symptoms."
  },
  {
    id: 'cobenfy',
    name: 'Cobenfy',
    genericName: 'Xanomeline-Trospium',
    class: DrugClass.Antipsychotic,
    mechanism: 'M1/M4 Muscarinic Agonist (Xanomeline) + Peripheral Muscarinic Antagonist (Trospium)',
    fdaIndications: ['Schizophrenia'],
    offLabelIndications: [],
    dosing: {
      starting: '50mg/20mg BID',
      therapeutic: '100mg/20mg - 125mg/30mg BID',
      max: '125mg/30mg BID',
      notes: 'Take 1 hour before or 2 hours after food.'
    },
    sideEffects: {
      common: ['Nausea', 'Dyspepsia', 'Vomiting', 'Constipation', 'Hypertension'],
      serious: ['Urinary retention', 'Angioedema']
    },
    blackBoxWarning: 'Contraindicated in urinary retention, moderate/severe hepatic impairment, gastric retention, untreated narrow-angle glaucoma.',
    contraindications: ['Urinary retention', 'Hepatic impairment', 'Glaucoma'],
    pharmacokinetics: {
      halfLife: 'Xanomeline (5h), Trospium (20h)',
      metabolism: 'CYP2D6, 3A4'
    },
    clinicalPearls: ['First new mechanism in decades (No D2 blockade).', 'No EPS/TD risk.', 'GI side effects are common.'],
    clinicalThought: "I think of Cobenfy as the first genuinely new mechanism in antipsychotics in decades, it works through muscarinic receptors instead of dopamine, which sidesteps the traditional movement and metabolic issues."
  }
];

export const AUGMENTATION_STRATEGIES: AugmentationStrategy[] = [
  {
    id: 'lithium',
    agent: 'Lithium',
    type: 'Medication',
    dosing: 'Start 300mg qhs or BID. Target level 0.6-0.8 mEq/L.',
    monitoring: 'Kidney function (Cr/eGFR), TSH, Lithium levels.',
    evidenceLevel: 'High',
    notes: 'Gold standard for suicide prevention. Most robust evidence for TCA/SSRI augmentation.'
  },
  {
    id: 'aripiprazole',
    agent: 'Aripiprazole (Abilify)',
    type: 'Medication',
    dosing: '2-5 mg/day (Low dose). Max 15mg for augmentation.',
    monitoring: 'Metabolic panel (Lipids, Glucose), Akathisia.',
    evidenceLevel: 'High',
    notes: 'Partial D2 agonist. Watch for akathisia (can worsen suicide risk if missed).'
  },
  {
    id: 'quetiapine',
    agent: 'Quetiapine (Seroquel)',
    type: 'Medication',
    dosing: '150-300 mg XR qhs (Lower doses <100 are just antihistamines).',
    monitoring: 'Metabolic syndrome (Weight, Glucose, Lipids).',
    evidenceLevel: 'Moderate',
    notes: 'Helpful for insomnia/anxiety. Active metabolite N-desalkylquetiapine is an NRI.'
  },
  {
    id: 'brexpiprazole',
    agent: 'Brexpiprazole (Rexulti)',
    type: 'Medication',
    dosing: '0.5 - 1 mg/day. Max 3mg.',
    monitoring: 'Metabolic, Akathisia (less than aripiprazole).',
    evidenceLevel: 'High',
    notes: 'Less akathisia than aripiprazole. FDA approved for MDD augmentation.'
  },
  {
    id: 't3',
    agent: 'Liothyronine (T3)',
    type: 'Hormone',
    dosing: '25-50 mcg/day.',
    monitoring: 'TSH (will suppress), Cardiac symptoms.',
    evidenceLevel: 'Moderate',
    notes: 'STAR*D Level 3 option. Accelerates response. Better than T4.'
  },
  {
    id: 'buspirone',
    agent: 'Buspirone',
    type: 'Medication',
    dosing: '15-60 mg/day (divided).',
    monitoring: 'None specific.',
    evidenceLevel: 'Low/Emerging',
    notes: 'STAR*D option. 5-HT1A partial agonist. Helps anxiety/bruxism/sexual dysfunction.'
  },
  {
    id: 'lamotrigine',
    agent: 'Lamotrigine',
    type: 'Medication',
    dosing: 'Titrate slowly to 100-200 mg. (25mg x 2wks, 50mg x 2wks...).',
    monitoring: 'Rash (SJS).',
    evidenceLevel: 'Moderate',
    notes: 'Better for Bipolar Depression, but used in unipolar TRD.'
  },
  {
    id: 'stimulants',
    agent: 'Lisdexamfetamine/Methylphenidate',
    type: 'Medication',
    dosing: 'Low doses.',
    monitoring: 'Vitals, Abuse potential.',
    evidenceLevel: 'Low/Emerging',
    notes: 'Palliative, geriatric depression, or residual fatigue/concentration deficits.'
  }
];