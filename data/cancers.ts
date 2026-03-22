export type CancerCategory =
  | "common"
  | "childhood"
  | "rare"
  | "blood"
  | "gynecologic"
  | "head-neck";

export interface CancerResource {
  label: string;
  url: string;
}

export interface Cancer {
  id: string;
  name: string;
  fullName: string;
  category: CancerCategory;
  summary: string;
  overview: string;
  howItDevelops: string;
  symptoms: string[];
  diagnosisMethods: string[];
  treatmentOptions: string[];
  survivalRate?: string;
  incidence?: string;
  riskFactors: string[];
  isRare: boolean;
  resources?: CancerResource[];
}

export const CANCERS: Cancer[] = [
  // ── COMMON ──────────────────────────────────────────────────────────────────
  {
    id: "breast-cancer",
    name: "Breast Cancer",
    fullName: "Breast Cancer",
    category: "common",
    summary: "The most common cancer in women worldwide, forming in breast tissue cells.",
    overview:
      "Breast cancer occurs when cells in the breast grow uncontrollably. It can form in different parts of the breast — most often in the ducts or lobules. It affects primarily women but can occur in men. Early detection through screening has dramatically improved survival rates over the past decades.",
    howItDevelops:
      "Breast cancer begins when DNA mutations cause normal breast cells to grow and divide uncontrollably. These mutations can be inherited (BRCA1/BRCA2 genes) or acquired over a lifetime through hormonal exposure, radiation, or unknown factors. The cells form a tumor that can invade surrounding tissue and spread to lymph nodes or distant organs.",
    symptoms: [
      "New lump or mass in the breast or underarm",
      "Swelling, thickening, or changes in breast shape",
      "Skin irritation or dimpling (peau d'orange)",
      "Nipple pain or retraction (turning inward)",
      "Nipple discharge other than breast milk",
      "Redness or flaky skin on the breast or nipple",
    ],
    diagnosisMethods: [
      "Mammography (screening and diagnostic)",
      "Breast ultrasound",
      "MRI for high-risk individuals",
      "Biopsy (core needle or surgical)",
      "Genetic testing for BRCA mutations",
      "PET or bone scan for staging",
    ],
    treatmentOptions: [
      "Surgery (lumpectomy or mastectomy)",
      "Radiation therapy",
      "Chemotherapy",
      "Hormone therapy (tamoxifen, aromatase inhibitors)",
      "Targeted therapy (HER2-positive: trastuzumab/Herceptin)",
      "Immunotherapy",
    ],
    survivalRate: "5-year survival rate: ~91% (all stages combined); Stage I: 99%",
    incidence: "~300,000 new US cases per year",
    riskFactors: [
      "Female sex and increasing age",
      "BRCA1 or BRCA2 gene mutations",
      "Dense breast tissue",
      "Previous breast cancer or radiation",
      "Hormone replacement therapy",
      "Obesity and alcohol use",
    ],
    isRare: false,
    resources: [
      { label: "National Breast Cancer Foundation", url: "https://www.nationalbreastcancer.org" },
      { label: "Breastcancer.org", url: "https://www.breastcancer.org" },
    ],
  },
  {
    id: "lung-cancer",
    name: "Lung Cancer",
    fullName: "Lung Cancer",
    category: "common",
    summary: "The leading cause of cancer death in the US, originating in the lungs' airways or alveoli.",
    overview:
      "Lung cancer is the number one cancer killer in both men and women in the United States, claiming more lives annually than breast, prostate, and colorectal cancers combined. It begins in the lungs and is primarily divided into two major types: non-small cell lung cancer (NSCLC, ~85% of cases) and small cell lung cancer (SCLC).",
    howItDevelops:
      "Most lung cancers are caused by carcinogens — primarily tobacco smoke — that repeatedly damage the DNA of cells lining the airways. Over years of cumulative DNA damage, mutations disable tumor suppressor genes (like TP53) and activate oncogenes, leading to unchecked cellular growth. Radon gas, asbestos, air pollution, and genetic factors also play roles.",
    symptoms: [
      "Persistent cough that worsens over time",
      "Coughing up blood (hemoptysis)",
      "Chest pain, especially when breathing deeply",
      "Shortness of breath or wheezing",
      "Hoarseness",
      "Unintentional weight loss and fatigue",
      "Recurring pneumonia or bronchitis",
    ],
    diagnosisMethods: [
      "Low-dose CT scan (LDCT) for high-risk screening",
      "Chest X-ray",
      "Sputum cytology",
      "Bronchoscopy with biopsy",
      "CT-guided needle biopsy",
      "PET scan and bone scan for staging",
      "Molecular/genomic testing (EGFR, ALK, ROS1, PD-L1)",
    ],
    treatmentOptions: [
      "Surgery (lobectomy, pneumonectomy)",
      "Radiation therapy (including SBRT for early-stage)",
      "Chemotherapy",
      "Targeted therapy (EGFR, ALK, ROS1 inhibitors)",
      "Immunotherapy (checkpoint inhibitors)",
      "Combination chemo-immunotherapy",
    ],
    survivalRate: "5-year survival rate: ~26% (all stages); Stage IA: 92%",
    incidence: "~238,000 new US cases per year",
    riskFactors: [
      "Cigarette, cigar, and pipe smoking",
      "Secondhand smoke exposure",
      "Radon gas exposure (leading cause in non-smokers)",
      "Asbestos, arsenic, or diesel exhaust exposure",
      "Family history of lung cancer",
      "Air pollution",
    ],
    isRare: false,
    resources: [
      { label: "Lung Cancer Research Foundation", url: "https://www.lcrf.org" },
      { label: "GO2 Foundation for Lung Cancer", url: "https://go2foundation.org" },
    ],
  },
  {
    id: "colorectal-cancer",
    name: "Colorectal Cancer",
    fullName: "Colorectal Cancer",
    category: "common",
    summary: "Cancer of the colon or rectum, highly preventable through early screening.",
    overview:
      "Colorectal cancer (CRC) is the third most common cancer in both men and women. It begins in the inner lining of the colon or rectum. Most cases develop from polyps — small growths inside the colon — which is why colonoscopy screening is so powerful: finding and removing polyps prevents cancer before it starts. Rates are rising alarmingly in adults under 50.",
    howItDevelops:
      "Most CRCs develop from adenomatous polyps over 10–15 years. Mutations accumulate in the APC tumor suppressor gene and later in KRAS, TP53, and other genes, transforming normal colon cells into cancer. Inflammatory bowel disease accelerates this process, and Lynch syndrome (inherited mismatch repair deficiency) dramatically increases lifetime risk.",
    symptoms: [
      "Change in bowel habits (diarrhea, constipation, narrowing of stool)",
      "Rectal bleeding or blood in stool",
      "Persistent abdominal cramping or pain",
      "Feeling that the bowel doesn't fully empty",
      "Weakness, fatigue, or unexplained weight loss",
    ],
    diagnosisMethods: [
      "Colonoscopy (gold standard)",
      "Sigmoidoscopy",
      "Stool DNA test (Cologuard)",
      "Fecal immunochemical test (FIT)",
      "CT colonography",
      "CT scan, MRI, and PET for staging",
    ],
    treatmentOptions: [
      "Surgery (colectomy, colostomy if needed)",
      "Radiation therapy (mainly for rectal cancer)",
      "Chemotherapy (FOLFOX, FOLFIRI)",
      "Targeted therapy (bevacizumab, cetuximab)",
      "Immunotherapy (for MSI-H/dMMR tumors)",
    ],
    survivalRate: "5-year survival rate: ~65% (all stages); Stage I: 90%+",
    incidence: "~153,000 new US cases per year",
    riskFactors: [
      "Age over 50 (but rates rising in younger adults)",
      "Personal or family history of colorectal cancer or polyps",
      "Inflammatory bowel disease (Crohn's, ulcerative colitis)",
      "Lynch syndrome or familial adenomatous polyposis (FAP)",
      "High-fat, low-fiber diet; red and processed meat",
      "Obesity, physical inactivity, smoking, heavy alcohol use",
    ],
    isRare: false,
    resources: [
      { label: "Colorectal Cancer Alliance", url: "https://www.ccalliance.org" },
      { label: "Fight Colorectal Cancer", url: "https://fightcolorectalcancer.org" },
    ],
  },
  {
    id: "prostate-cancer",
    name: "Prostate Cancer",
    fullName: "Prostate Cancer",
    category: "common",
    summary: "The most common cancer in men, forming in the walnut-sized prostate gland.",
    overview:
      "Prostate cancer is the most common non-skin cancer in American men. It forms in the cells of the prostate gland, which produces seminal fluid. The vast majority of prostate cancers are adenocarcinomas. Most grow slowly and may never cause harm, but aggressive forms can spread rapidly and become life-threatening.",
    howItDevelops:
      "Prostate cancer begins when cells in the prostate accumulate DNA mutations — particularly in the androgen receptor and PTEN tumor suppressor pathways. Because prostate cell growth is driven by androgens (testosterone, DHT), hormonal signaling plays a central role in both tumor initiation and treatment. Elevated PSA levels often signal early-stage disease.",
    symptoms: [
      "Frequent or difficult urination",
      "Weak or interrupted urine flow",
      "Blood in urine or semen",
      "Pain or burning during urination",
      "Painful ejaculation",
      "Pain in the lower back, hips, or pelvis (advanced stage)",
    ],
    diagnosisMethods: [
      "PSA (prostate-specific antigen) blood test",
      "Digital rectal exam (DRE)",
      "Prostate biopsy (guided by MRI-fusion)",
      "MRI of the prostate",
      "Bone scan and CT for staging",
      "Genomic tests (Oncotype DX Prostate, Decipher)",
    ],
    treatmentOptions: [
      "Active surveillance (for low-risk disease)",
      "Surgery (radical prostatectomy, robotic-assisted)",
      "Radiation therapy (external beam or brachytherapy)",
      "Hormone therapy (androgen deprivation)",
      "Chemotherapy (docetaxel for advanced disease)",
      "Immunotherapy and PARP inhibitors",
    ],
    survivalRate: "5-year survival rate: ~98% (all stages); nearly 100% for localized disease",
    incidence: "~300,000 new US cases per year",
    riskFactors: [
      "Age over 50",
      "African American heritage (higher risk and worse outcomes)",
      "Family history of prostate or BRCA-linked cancers",
      "BRCA1/BRCA2 or Lynch syndrome mutations",
      "High-fat diet",
    ],
    isRare: false,
    resources: [
      { label: "Prostate Cancer Foundation", url: "https://www.pcf.org" },
      { label: "ZERO Prostate Cancer", url: "https://zerocancer.org" },
    ],
  },
  {
    id: "melanoma",
    name: "Melanoma",
    fullName: "Melanoma",
    category: "common",
    summary: "The deadliest form of skin cancer, arising from melanocytes in the skin.",
    overview:
      "Melanoma is the most dangerous form of skin cancer. Though it accounts for only about 1% of skin cancer cases, it causes the vast majority of skin cancer deaths. It arises from melanocytes, the pigment-producing cells in the skin. When detected early, it is highly treatable — but once it spreads to lymph nodes or organs, treatment becomes far more challenging.",
    howItDevelops:
      "UV radiation from sunlight or tanning beds damages melanocyte DNA, particularly causing mutations in the BRAF gene (present in ~50% of melanomas). These mutations activate growth signaling pathways that drive uncontrolled proliferation. Melanoma can arise from existing moles or develop in seemingly normal skin. It spreads via lymphatic and blood vessels.",
    symptoms: [
      "A mole that changes in size, shape, or color",
      "A lesion with an irregular border or multiple colors",
      "A new growth on the skin that looks unusual",
      "A sore that doesn't heal",
      "Spread of pigment from the border into surrounding skin",
      "Redness, swelling, or satellite nodules (advanced)",
    ],
    diagnosisMethods: [
      "Skin examination (dermatoscopy)",
      "Excisional biopsy (gold standard)",
      "Sentinel lymph node biopsy",
      "CT, MRI, and PET scan for staging",
      "Genetic testing (BRAF, NRAS, c-KIT mutations)",
    ],
    treatmentOptions: [
      "Wide surgical excision",
      "Targeted therapy (BRAF/MEK inhibitors: vemurafenib, dabrafenib)",
      "Immunotherapy (checkpoint inhibitors: pembrolizumab, nivolumab, ipilimumab)",
      "Combination targeted + immunotherapy",
      "Radiation therapy (for brain metastases)",
      "Isolated limb perfusion (for limb melanoma)",
    ],
    survivalRate: "5-year survival rate: ~93% (localized); ~35% (distant metastases)",
    incidence: "~100,000 new US cases per year",
    riskFactors: [
      "UV radiation from sun or tanning beds",
      "Fair skin, light eyes, and red or blonde hair",
      "History of sunburns, especially in childhood",
      "Large number of moles or atypical moles",
      "Family or personal history of melanoma",
      "Weakened immune system",
    ],
    isRare: false,
    resources: [
      { label: "Melanoma Research Foundation", url: "https://www.melanoma.org" },
      { label: "Skin Cancer Foundation", url: "https://www.skincancer.org" },
    ],
  },
  {
    id: "bladder-cancer",
    name: "Bladder Cancer",
    fullName: "Bladder Cancer",
    category: "common",
    summary: "Cancer arising in the lining of the bladder, with a high recurrence rate.",
    overview:
      "Bladder cancer is the sixth most common cancer in the US. It begins in the urothelial cells lining the bladder. The most common type, transitional cell carcinoma (urothelial carcinoma), has one of the highest recurrence rates of any cancer — meaning regular monitoring is required for life. Smoking is the single biggest risk factor.",
    howItDevelops:
      "Carcinogens concentrated in urine — particularly from tobacco — repeatedly damage the DNA of urothelial cells. Mutations in FGFR3, TP53, and RB1 are common. Most bladder cancers begin as non-muscle-invasive tumors confined to the inner lining; if left untreated or recurrent, they can become muscle-invasive and life-threatening.",
    symptoms: [
      "Blood in the urine (hematuria) — often painless",
      "Frequent urination or urge to urinate",
      "Painful urination",
      "Back or pelvic pain (advanced disease)",
    ],
    diagnosisMethods: [
      "Urinalysis and urine cytology",
      "Cystoscopy (direct visualization)",
      "Transurethral resection of bladder tumor (TURBT) for diagnosis and treatment",
      "CT urography",
      "MRI for muscle invasion assessment",
    ],
    treatmentOptions: [
      "TURBT (transurethral resection)",
      "Intravesical therapy (BCG or chemotherapy directly into bladder)",
      "Radical cystectomy (bladder removal for muscle-invasive disease)",
      "Systemic chemotherapy (cisplatin-based)",
      "Immunotherapy (atezolizumab, pembrolizumab)",
      "Targeted therapy (erdafitinib for FGFR mutations)",
    ],
    survivalRate: "5-year survival rate: ~77% (all stages); Stage 0: 95%+",
    incidence: "~83,000 new US cases per year",
    riskFactors: [
      "Cigarette smoking (single biggest risk factor)",
      "Exposure to industrial chemicals (arylamines, benzene)",
      "Chronic bladder infections or inflammation",
      "Prior bladder cancer (high recurrence)",
      "Age over 55 and male sex",
    ],
    isRare: false,
    resources: [
      { label: "Bladder Cancer Advocacy Network", url: "https://www.bcan.org" },
    ],
  },

  // ── CHILDHOOD ─────────────────────────────────────────────────────────────
  {
    id: "all-leukemia",
    name: "ALL",
    fullName: "Acute Lymphoblastic Leukemia",
    category: "childhood",
    summary: "The most common childhood cancer — a fast-growing blood cancer of immature lymphocytes.",
    overview:
      "Acute Lymphoblastic Leukemia (ALL) is the most common cancer in children, making up ~25% of all childhood cancers. It is a cancer of the blood and bone marrow that begins in immature lymphocytes (a type of white blood cell). With modern treatment, childhood ALL has a cure rate of approximately 90% — one of the great success stories of pediatric oncology.",
    howItDevelops:
      "ALL begins when a single lymphoid progenitor cell acquires genetic mutations (often chromosomal rearrangements like the ETV6-RUNX1 fusion) that block normal maturation. This cell then proliferates rapidly, overwhelming the bone marrow and crowding out normal blood cell production, leading to anemia, infection susceptibility, and bleeding.",
    symptoms: [
      "Fatigue, pallor, and weakness (anemia)",
      "Frequent infections (low white blood cells)",
      "Easy bruising or bleeding (low platelets)",
      "Bone or joint pain",
      "Swollen lymph nodes, liver, or spleen",
      "Fever without obvious cause",
    ],
    diagnosisMethods: [
      "Complete blood count (CBC) with differential",
      "Bone marrow biopsy and aspiration",
      "Flow cytometry (immunophenotyping)",
      "Cytogenetics and FISH for chromosomal abnormalities",
      "Lumbar puncture (CNS involvement assessment)",
      "MRD (minimal residual disease) testing",
    ],
    treatmentOptions: [
      "Multi-agent induction chemotherapy (vincristine, prednisone, asparaginase)",
      "CNS-directed therapy (intrathecal chemo)",
      "Consolidation and maintenance phases (2–3 years total)",
      "Targeted therapy (tyrosine kinase inhibitors for Ph+ ALL)",
      "CAR-T cell therapy (tisagenlecleucel for relapsed/refractory)",
      "Stem cell transplant for high-risk relapsed disease",
    ],
    survivalRate: "5-year survival rate: ~90% in children; ~40% in adults",
    incidence: "~3,500 new US cases in children per year",
    riskFactors: [
      "Down syndrome",
      "Certain inherited genetic conditions",
      "Prior radiation exposure",
      "Certain infections (Epstein-Barr virus in some cases)",
      "Unknown factors (most cases have no clear cause)",
    ],
    isRare: false,
    resources: [
      { label: "Leukemia & Lymphoma Society", url: "https://www.lls.org" },
      { label: "St. Baldrick's Foundation", url: "https://www.stbaldricks.org" },
    ],
  },
  {
    id: "pediatric-brain-tumors",
    name: "Pediatric Brain Tumors",
    fullName: "Pediatric Brain Tumors",
    category: "childhood",
    summary: "The most common solid tumors in children, arising in the brain or spinal cord.",
    overview:
      "Brain and central nervous system tumors are the most common solid tumors in children. They encompass a wide range of tumor types — from low-grade gliomas (often curable) to highly aggressive tumors like DIPG. Treatment is complicated by the need to protect a developing brain, making pediatric neuro-oncology one of the most challenging fields in medicine.",
    howItDevelops:
      "Pediatric brain tumors arise from different cell types — astrocytes, oligodendrocytes, ependymal cells, or embryonic cells — with distinct mutations. Many childhood brain tumors harbor specific driver mutations (e.g., BRAF fusions in low-grade gliomas, H3K27M in DIPG) that are targets for new therapies. Location within the brain often determines treatment difficulty more than tumor type alone.",
    symptoms: [
      "Headaches, especially in the morning",
      "Vomiting without nausea",
      "Vision, hearing, or speech problems",
      "Balance problems or clumsiness",
      "Seizures",
      "Personality or behavior changes",
      "Head size increase (in infants)",
    ],
    diagnosisMethods: [
      "MRI of the brain and spine with contrast",
      "CT scan",
      "Surgical biopsy or tumor resection",
      "Molecular and genetic tumor profiling",
      "Cerebrospinal fluid analysis",
    ],
    treatmentOptions: [
      "Surgery (extent depends on tumor location)",
      "Radiation therapy (3D conformal, IMRT, proton beam)",
      "Chemotherapy (carboplatin, vincristine, temozolomide)",
      "Targeted therapy (BRAF inhibitors for BRAF-mutated tumors)",
      "ONC201 (for DIPG with H3K27M mutation)",
      "Clinical trial enrollment strongly encouraged",
    ],
    survivalRate: "Varies widely by type: Low-grade glioma: 90%+ | DIPG: <5%",
    incidence: "~3,700 new US pediatric cases per year",
    riskFactors: [
      "Prior radiation to the head",
      "Certain genetic syndromes (NF1, Li-Fraumeni, Turcot)",
      "Most cases have no known cause",
    ],
    isRare: false,
    resources: [
      { label: "Pediatric Brain Tumor Foundation", url: "https://www.curethekids.org" },
      { label: "National Brain Tumor Society", url: "https://www.braintumor.org" },
    ],
  },
  {
    id: "neuroblastoma",
    name: "Neuroblastoma",
    fullName: "Neuroblastoma",
    category: "childhood",
    summary: "A cancer of immature nerve cells, most common in infants and young children.",
    overview:
      "Neuroblastoma is the most common extracranial solid cancer in infants. It develops from immature nerve cells (neuroblasts) of the sympathetic nervous system — most often in the adrenal glands above the kidneys, but also along the spine, chest, and neck. It has remarkable biological diversity: some cases spontaneously regress; others are deadly despite intensive treatment.",
    howItDevelops:
      "Neuroblastoma arises from neural crest cells that fail to mature. Mutations in MYCN (amplified in ~20% of cases and associated with poor prognosis), ALK, and PHOX2B are key drivers. High-risk disease is characterized by aggressive spread to bone marrow and distant organs at the time of diagnosis.",
    symptoms: [
      "Abdominal swelling or lump",
      "Bone pain or limping",
      "Proptosis (bulging eyes) or bruising around eyes",
      "High blood pressure, rapid heartbeat",
      "Unusual eye movements (opsoclonus-myoclonus)",
      "Weight loss and irritability",
    ],
    diagnosisMethods: [
      "CT or MRI of abdomen and chest",
      "MIBG scan (metaiodobenzylguanidine)",
      "Bone marrow biopsy",
      "Urine catecholamines (vanillylmandelic acid)",
      "Tumor biopsy with MYCN analysis",
      "PET scan",
    ],
    treatmentOptions: [
      "Surgery",
      "Chemotherapy (induction: cyclophosphamide, doxorubicin, cisplatin)",
      "High-dose chemotherapy with autologous stem cell rescue",
      "Radiation therapy and MIBG therapy",
      "Immunotherapy (dinutuximab)",
      "Differentiation therapy (isotretinoin/Accutane)",
    ],
    survivalRate: "5-year survival: ~95% (low-risk) to ~50% (high-risk)",
    incidence: "~700 new US cases per year, mostly in children under 5",
    riskFactors: [
      "Age under 5",
      "Family history (rare germline ALK or PHOX2B mutations)",
      "Most cases are sporadic with no known cause",
    ],
    isRare: false,
    resources: [
      { label: "Neuroblastoma Children's Cancer Society", url: "https://www.neuroblastoma.org" },
      { label: "Alex's Lemonade Stand Foundation", url: "https://www.alexslemonade.org" },
    ],
  },
  {
    id: "wilms-tumor",
    name: "Wilms Tumor",
    fullName: "Wilms Tumor (Nephroblastoma)",
    category: "childhood",
    summary: "The most common kidney cancer in children, typically diagnosed around age 3–4.",
    overview:
      "Wilms tumor, or nephroblastoma, is the most common kidney cancer in children and one of the most successfully treated childhood cancers. It accounts for ~5% of all childhood cancers. Most children are diagnosed between ages 3 and 4. With modern multimodal treatment, the overall 5-year survival rate exceeds 90%.",
    howItDevelops:
      "Wilms tumor arises from embryonic kidney cells (metanephric blastema) that fail to differentiate normally. Mutations in WT1 (Wilms tumor suppressor gene), WTX, and CTNNB1 are found in a subset of cases. Bilateral disease occurs in about 5–8% of cases and is more often associated with genetic syndromes.",
    symptoms: [
      "Abdominal mass or swelling (often painless)",
      "Abdominal pain",
      "Blood in the urine",
      "High blood pressure",
      "Fever",
      "Loss of appetite",
    ],
    diagnosisMethods: [
      "Abdominal ultrasound",
      "CT of abdomen and chest",
      "MRI",
      "Biopsy (usually after surgical resection)",
      "Genetic testing for WT1 and associated syndromes",
    ],
    treatmentOptions: [
      "Nephrectomy (kidney removal)",
      "Chemotherapy (vincristine, actinomycin D, doxorubicin)",
      "Radiation therapy for higher-stage disease",
      "Bilateral disease: neoadjuvant chemo before bilateral partial nephrectomy",
    ],
    survivalRate: "5-year survival rate: >90% overall; Stage I/II: 95%+",
    incidence: "~500 new US cases per year",
    riskFactors: [
      "Beckwith-Wiedemann syndrome",
      "WAGR syndrome (WT1 deletion)",
      "Denys-Drash syndrome",
      "Age 3–4 (peak incidence)",
    ],
    isRare: false,
    resources: [
      { label: "National Wilms Tumor Study Group", url: "https://www.cancer.gov" },
      { label: "Alex's Lemonade Stand Foundation", url: "https://www.alexslemonade.org" },
    ],
  },
  {
    id: "osteosarcoma",
    name: "Osteosarcoma",
    fullName: "Osteosarcoma",
    category: "childhood",
    summary: "The most common bone cancer in children and adolescents, typically affecting the long bones.",
    overview:
      "Osteosarcoma is the most common primary bone cancer and most often affects children and adolescents during periods of rapid bone growth. It typically develops near the growth plates of the long bones — the knee (distal femur, proximal tibia) and the shoulder (proximal humerus). Treatment requires surgery and chemotherapy, and outcomes depend heavily on whether the cancer has spread at diagnosis.",
    howItDevelops:
      "Osteosarcoma arises from osteoblasts (bone-forming cells) that develop mutations, often involving the RB1 and TP53 tumor suppressor genes. The adolescent growth spurt — with its rapid bone remodeling — creates conditions where these mutations can emerge. Prior radiation exposure and genetic syndromes significantly increase risk.",
    symptoms: [
      "Pain and swelling near a bone or joint",
      "Bone pain that worsens at night or with activity",
      "A lump or mass on a bone",
      "Fracture from minor injury (pathologic fracture)",
      "Limited range of motion in a joint",
    ],
    diagnosisMethods: [
      "X-ray (sunburst pattern is characteristic)",
      "MRI for local extent",
      "CT of chest (for lung metastases)",
      "Bone scan or PET",
      "Bone biopsy (open or needle)",
      "Alkaline phosphatase and LDH blood tests",
    ],
    treatmentOptions: [
      "Neoadjuvant chemotherapy (MAP: methotrexate, doxorubicin, cisplatin)",
      "Surgery (limb-sparing resection or amputation)",
      "Adjuvant chemotherapy",
      "Lung resection for pulmonary metastases",
      "Clinical trials (immunotherapy, targeted therapy)",
    ],
    survivalRate: "5-year survival: ~70% (localized); ~25% (metastatic)",
    incidence: "~800 new US cases per year",
    riskFactors: [
      "Adolescence and male sex",
      "Tall stature and rapid bone growth",
      "Retinoblastoma (germline RB1 mutation)",
      "Li-Fraumeni syndrome (TP53 mutation)",
      "Prior radiation therapy",
    ],
    isRare: false,
    resources: [
      { label: "Liddy Shriver Sarcoma Initiative", url: "https://sarcomahelp.org" },
      { label: "Osteosarcoma Institute", url: "https://osteosarcomainstitute.org" },
    ],
  },
  {
    id: "ewing-sarcoma",
    name: "Ewing Sarcoma",
    fullName: "Ewing Sarcoma",
    category: "childhood",
    summary: "An aggressive bone and soft tissue cancer driven by a single chromosomal fusion.",
    overview:
      "Ewing sarcoma is a highly malignant bone and soft tissue cancer that primarily affects children and young adults. Unlike most cancers, Ewing sarcoma is defined by a specific chromosomal translocation: t(11;22) producing the EWSR1-FLI1 fusion protein in ~85% of cases. This discovery has been critical for diagnosis and offers a unique therapeutic target.",
    howItDevelops:
      "The hallmark EWSR1-FLI1 fusion acts as an aberrant transcription factor, dysregulating hundreds of target genes and blocking normal cell differentiation. This creates rapidly proliferating tumor cells that can arise in bone or soft tissue. The pelvis and long bones are most commonly affected. Micrometastases are present at diagnosis in most patients, even when imaging appears localized.",
    symptoms: [
      "Pain and swelling at tumor site",
      "Fever and fatigue",
      "Weight loss",
      "Fracture through a weakened bone",
    ],
    diagnosisMethods: [
      "MRI and CT of the primary tumor",
      "CT chest and bone scan/PET for staging",
      "Biopsy with cytogenetics (FISH for EWSR1 rearrangement)",
      "Bone marrow biopsy",
      "RT-PCR for fusion transcript",
    ],
    treatmentOptions: [
      "Induction chemotherapy (VDC/IE: vincristine, doxorubicin, cyclophosphamide / ifosfamide, etoposide)",
      "Local control: surgery and/or radiation",
      "Consolidation chemotherapy",
      "High-dose chemotherapy with stem cell rescue for high-risk disease",
      "Clinical trials targeting EWSR1-FLI1",
    ],
    survivalRate: "5-year survival: ~70% (localized); ~20–30% (metastatic)",
    incidence: "~200 new US cases per year",
    riskFactors: [
      "Age 10–20 (peak incidence)",
      "Non-Hispanic white ethnicity (rare in Black and Asian populations)",
      "No known modifiable risk factors",
    ],
    isRare: true,
    resources: [
      { label: "Ewing Sarcoma Research Foundation", url: "https://ewingresearch.org" },
    ],
  },

  // ── RARE ──────────────────────────────────────────────────────────────────
  {
    id: "dipg",
    name: "DIPG",
    fullName: "Diffuse Intrinsic Pontine Glioma",
    category: "rare",
    summary: "A catastrophically fatal childhood brain tumor located in the brainstem. Survival is rare.",
    overview:
      "DIPG (Diffuse Intrinsic Pontine Glioma) is a devastating malignant brain tumor arising in the pons — the part of the brainstem that controls vital functions like breathing and heart rate. It primarily strikes children between ages 5 and 10. Because of its location, surgical removal is impossible. Median survival after diagnosis is just 9–11 months, and fewer than 1% of children survive 5 years. DIPG is one of the most urgent unmet needs in pediatric oncology.",
    howItDevelops:
      "In ~80% of cases, DIPG is driven by a specific mutation: H3K27M — a point mutation in the histone H3 gene that rewires the epigenetic landscape of the cell, silencing tumor suppressor genes across the genome. This mutation is found almost exclusively in pediatric diffuse midline gliomas and is now a diagnostic marker. There is no proven curative treatment.",
    symptoms: [
      "Cranial nerve palsies (double vision, facial weakness, difficulty swallowing)",
      "Difficulty walking or balance problems (ataxia)",
      "Weakness in arms or legs",
      "Morning headaches and vomiting",
      "Behavioral or personality changes",
    ],
    diagnosisMethods: [
      "MRI of the brainstem (diagnosis can often be made by imaging alone)",
      "Liquid biopsy or tumor biopsy (increasingly done for molecular profiling)",
      "H3K27M mutation testing",
    ],
    treatmentOptions: [
      "Radiation therapy (palliative — provides temporary relief in ~80% of children)",
      "ONC201 (FDA-approved for H3K27M-mutant disease — first targeted therapy)",
      "Clinical trials (the standard of care recommendation for all DIPG patients)",
      "No curative treatment currently exists",
    ],
    survivalRate: "Median survival: 9–11 months from diagnosis. <1% survive 5 years.",
    incidence: "~300 new US cases per year",
    riskFactors: [
      "Age 5–10 (peak incidence)",
      "No known modifiable risk factors",
      "Sporadic — occurs without family history in nearly all cases",
    ],
    isRare: true,
    resources: [
      { label: "DIPG Advocacy Group", url: "https://www.dipg.org" },
      { label: "Michael Mosier Defeat DIPG Foundation", url: "https://defeatdipg.org" },
      { label: "ChadTough Defeat DIPG Foundation", url: "https://chadtough.org" },
    ],
  },
  {
    id: "merkel-cell-carcinoma",
    name: "Merkel Cell Carcinoma",
    fullName: "Merkel Cell Carcinoma",
    category: "rare",
    summary: "An aggressive skin cancer driven by a polyomavirus, with a high recurrence rate.",
    overview:
      "Merkel cell carcinoma (MCC) is a rare but highly aggressive form of skin cancer that arises from Merkel cells — mechanoreceptors in the skin involved in touch sensation. About 80% of cases are caused by the Merkel cell polyomavirus (MCPyV). MCC has a recurrence rate of about 40% and is three to five times more likely to be fatal than melanoma.",
    howItDevelops:
      "MCPyV integrates into the host genome and expresses viral oncoproteins (Large T antigen and Small T antigen) that inactivate RB1 and drive proliferation. In virus-negative cases (20%), UV-induced mutations in TP53 and RB1 are the predominant drivers. Immunosuppression dramatically increases risk, as the immune system normally controls MCPyV.",
    symptoms: [
      "Flesh-colored or bluish-red painless nodule, usually on sun-exposed skin",
      "Rapid growth of a skin lesion",
      "Lesion on the head, neck, or arms (most common sites)",
    ],
    diagnosisMethods: [
      "Skin biopsy with immunohistochemistry (CK20 staining)",
      "MCPyV serology",
      "Sentinel lymph node biopsy",
      "CT, MRI, or PET for staging",
    ],
    treatmentOptions: [
      "Wide surgical excision",
      "Sentinel lymph node biopsy and regional lymph node dissection",
      "Radiation therapy (adjuvant or definitive)",
      "Immunotherapy (avelumab, pembrolizumab — FDA-approved for advanced MCC)",
      "Chemotherapy (for patients unable to receive immunotherapy)",
    ],
    survivalRate: "5-year survival: ~65% (localized); ~25% (distant metastases)",
    incidence: "~3,000 new US cases per year",
    riskFactors: [
      "Advanced age (>70)",
      "Immunosuppression (organ transplant, HIV, CLL)",
      "Extensive UV radiation exposure",
      "Light skin tone",
    ],
    isRare: true,
    resources: [
      { label: "Merkel Cell Carcinoma Patient Registry", url: "https://www.merkelcell.org" },
    ],
  },
  {
    id: "angiosarcoma",
    name: "Angiosarcoma",
    fullName: "Angiosarcoma",
    category: "rare",
    summary: "A rare cancer of blood vessel walls, often found in the skin, breast, or liver.",
    overview:
      "Angiosarcoma is a rare and aggressive malignancy arising from the endothelial cells that line blood or lymphatic vessels. It can develop anywhere in the body but most commonly occurs in the skin (especially the scalp and face of elderly men), the breast (often after radiation), and the liver. It is notorious for being difficult to diagnose early and for its poor prognosis even with treatment.",
    howItDevelops:
      "Angiosarcoma arises from endothelial cells with mutations in KDR, TP53, MYC amplification (in radiation-induced cases), and complex genomic rearrangements. Secondary angiosarcoma — occurring after radiation therapy or in areas of chronic lymphedema — is increasingly recognized, particularly breast angiosarcoma after breast-conserving surgery and radiation.",
    symptoms: [
      "A skin lesion that looks like a bruise that won't heal",
      "Purple, red, or bluish nodule or plaque on skin",
      "Swelling in the affected area",
      "Abdominal pain (hepatic angiosarcoma)",
      "Breast mass or skin changes",
    ],
    diagnosisMethods: [
      "Biopsy with immunohistochemistry (CD31, CD34, ERG markers)",
      "MRI and CT for extent of disease",
      "PET scan for metastases",
    ],
    treatmentOptions: [
      "Wide surgical excision (often difficult to achieve clear margins)",
      "Radiation therapy",
      "Chemotherapy (paclitaxel is the most active agent)",
      "Anti-angiogenic targeted therapy (bevacizumab)",
      "Clinical trials",
    ],
    survivalRate: "5-year survival: ~30–35% (localized skin); <20% (visceral/metastatic)",
    incidence: "~300–500 new US cases per year",
    riskFactors: [
      "Prior radiation therapy",
      "Chronic lymphedema (Stewart-Treves syndrome)",
      "Chemical exposure (vinyl chloride — for hepatic angiosarcoma)",
      "Advanced age",
    ],
    isRare: true,
    resources: [
      { label: "Angiosarcoma Awareness", url: "https://www.angiosarcomaawareness.org" },
    ],
  },
  {
    id: "appendix-cancer",
    name: "Appendix Cancer",
    fullName: "Appendix Cancer (Appendiceal Neoplasms)",
    category: "rare",
    summary: "An uncommon cancer of the appendix, often discovered incidentally during appendectomy.",
    overview:
      "Appendix cancers are rare tumors of the appendix that include several distinct histologic types: appendiceal carcinoid (NET), mucinous adenocarcinoma, goblet cell carcinoid, and signet ring cell adenocarcinoma. They are often asymptomatic and discovered incidentally during appendectomy for appendicitis. Advanced cases can present with pseudomyxoma peritonei — diffuse spread of mucin through the abdominal cavity.",
    howItDevelops:
      "Appendiceal neoplasms arise from different cell types within the appendix. Carcinoid tumors originate from neuroendocrine cells; mucinous adenocarcinomas arise from glandular epithelium and can rupture, seeding the peritoneum with mucin-producing cells. The KRAS, GNAS, and SMAD4 mutations are common in mucinous adenocarcinomas.",
    symptoms: [
      "Often asymptomatic (found at appendectomy)",
      "Abdominal pain or acute appendicitis presentation",
      "Increasing abdominal girth (from pseudomyxoma peritonei)",
      "Bloating and bowel changes (advanced disease)",
    ],
    diagnosisMethods: [
      "CT scan of abdomen and pelvis",
      "MRI for peritoneal extent",
      "Pathological examination of appendix after surgery",
      "Tumor markers: CEA, CA-125, CA 19-9",
    ],
    treatmentOptions: [
      "Appendectomy or right hemicolectomy (for adenocarcinoma)",
      "Cytoreductive surgery (CRS) with heated intraperitoneal chemotherapy (HIPEC) for peritoneal disease",
      "Systemic chemotherapy (FOLFOX, FOLFIRI)",
      "Somatostatin analogs for carcinoid/NET tumors",
    ],
    survivalRate: "5-year survival varies widely: carcinoid: >95% | mucinous adenocarcinoma: ~65–90% | signet ring: ~25%",
    incidence: "~1,000–2,000 new US cases per year (estimated)",
    riskFactors: [
      "No well-established risk factors",
      "Some association with prior appendiceal inflammation",
    ],
    isRare: true,
    resources: [
      { label: "Appendix Cancer/PMP Research Foundation", url: "https://acpmp.org" },
    ],
  },
  {
    id: "adrenocortical-carcinoma",
    name: "ACC",
    fullName: "Adrenocortical Carcinoma",
    category: "rare",
    summary: "A rare and aggressive cancer of the adrenal cortex with limited treatment options.",
    overview:
      "Adrenocortical carcinoma (ACC) is a rare malignancy arising from the cortex of the adrenal gland. It can be functional (secreting excess hormones like cortisol, aldosterone, or androgens) or nonfunctional. ACC carries a poor prognosis, with many patients presenting at an advanced stage. It is one of the few adrenal tumors that poses a significant mortality risk.",
    howItDevelops:
      "ACC arises from adrenocortical cells with mutations in TP53, CTNNB1 (Wnt pathway), PRKAR1A, and copy number alterations across the genome. Li-Fraumeni syndrome (germline TP53 mutation) is associated with familial ACC, particularly in children. Genomic profiling has identified two distinct molecular subtypes with very different prognoses.",
    symptoms: [
      "Cushing's syndrome (weight gain, moon face, purple striae) from cortisol excess",
      "Virilization in women from androgen excess",
      "Abdominal pain or mass",
      "Hypertension and hypokalemia",
      "Incidental adrenal mass found on imaging",
    ],
    diagnosisMethods: [
      "CT and MRI of adrenal glands",
      "Hormonal evaluation (24-hour urinary cortisol, DHEA-S, aldosterone)",
      "PET scan",
      "Adrenal biopsy (avoided if primary surgery is planned)",
      "Germline TP53 testing",
    ],
    treatmentOptions: [
      "Adrenalectomy (primary curative intent)",
      "Mitotane (adrenolytic agent — adjuvant and palliative)",
      "Chemotherapy (EDP-M: etoposide, doxorubicin, cisplatin + mitotane)",
      "Radiation therapy (for local recurrence or bone metastases)",
      "Clinical trials (immunotherapy, targeted therapy)",
    ],
    survivalRate: "5-year survival: ~65% (localized); ~10–15% (distant metastases)",
    incidence: "~200–300 new US cases per year",
    riskFactors: [
      "Li-Fraumeni syndrome (TP53 germline mutation)",
      "Beckwith-Wiedemann syndrome",
      "MEN1 syndrome",
      "No modifiable risk factors identified",
    ],
    isRare: true,
    resources: [
      { label: "Adrenal Cancer Research", url: "https://www.cancer.gov/types/adrenocortical" },
    ],
  },
  {
    id: "chordoma",
    name: "Chordoma",
    fullName: "Chordoma",
    category: "rare",
    summary: "A slow-growing but locally destructive tumor arising from remnants of the embryonic notochord.",
    overview:
      "Chordoma is a rare, slow-growing malignant tumor that arises from remnants of the embryonic notochord — the precursor to the spine. It most commonly occurs at the skull base (35%), sacrum/coccyx (50%), and mobile spine (15%). Despite slow growth, chordoma is locally destructive, often invades critical structures, and has a high rate of local recurrence. Distant metastases occur in ~30–40% of patients over time.",
    howItDevelops:
      "Chordomas arise from notochordal remnants that persist along the axial skeleton. The transcription factor T (brachyury) is overexpressed in virtually all chordomas and is considered the master regulator. Germline duplication of the T gene is found in familial cases. CDKN2A deletion, PTEN loss, and PI3K pathway activation are common somatic alterations.",
    symptoms: [
      "Neck pain or headaches (skull base chordoma)",
      "Double vision or facial numbness (clivus chordoma)",
      "Low back, tailbone, or buttock pain (sacral chordoma)",
      "Bowel or bladder dysfunction (sacral chordoma)",
      "Neurological symptoms depending on location",
    ],
    diagnosisMethods: [
      "MRI (preferred for soft tissue extent)",
      "CT scan (for bone destruction)",
      "Biopsy with immunohistochemistry (brachyury staining)",
      "PET scan for staging",
    ],
    treatmentOptions: [
      "Surgery (en bloc resection with wide margins — key prognostic factor)",
      "Proton beam or carbon ion radiotherapy (high precision, high dose)",
      "Conventional radiation therapy",
      "No standard systemic therapy — clinical trials recommended",
      "Imatinib (some activity in PDGFR-expressing chordomas)",
    ],
    survivalRate: "10-year survival: ~40% (skull base); ~30% (sacral); median overall survival: 7–10 years",
    incidence: "~300 new US cases per year",
    riskFactors: [
      "Germline T gene duplication (familial cases)",
      "No other established risk factors",
    ],
    isRare: true,
    resources: [
      { label: "Chordoma Foundation", url: "https://www.chordomafoundation.org" },
    ],
  },
  {
    id: "dsrct",
    name: "DSRCT",
    fullName: "Desmoplastic Small Round Cell Tumor",
    category: "rare",
    summary: "An ultra-rare and highly lethal tumor driven by a specific chromosomal translocation.",
    overview:
      "Desmoplastic Small Round Cell Tumor (DSRCT) is an extremely rare and highly aggressive malignancy that primarily arises in the abdominal and pelvic cavity of adolescent males. It is characterized by a specific chromosomal translocation t(11;22)(p13;q12) producing the EWSR1-WT1 fusion protein. DSRCT typically presents at an advanced stage with widespread peritoneal involvement, and the prognosis remains dire despite aggressive treatment.",
    howItDevelops:
      "The EWSR1-WT1 fusion protein acts as an aberrant transcription factor driving expression of oncogenic targets including PDGFRA, MET, and IGF1R. This creates rapidly proliferating cells embedded in a dense fibrous stroma (desmoplastic reaction). Peritoneal seeding is almost universal at diagnosis, making complete surgical resection extremely difficult.",
    symptoms: [
      "Abdominal distension and pain",
      "Palpable abdominal mass",
      "Constipation or bowel obstruction",
      "Ascites",
      "Weight loss and fatigue",
    ],
    diagnosisMethods: [
      "CT and MRI of abdomen and pelvis",
      "Biopsy with RT-PCR or FISH for EWSR1-WT1 fusion",
      "PET scan",
      "Bone marrow biopsy",
    ],
    treatmentOptions: [
      "Multi-agent chemotherapy (EWING protocol: VAC/IE)",
      "Aggressive cytoreductive surgery (highly specialized centers only)",
      "HIPEC (heated intraperitoneal chemotherapy) in select cases",
      "Radiation therapy (whole abdominopelvic radiation at some centers)",
      "Clinical trials (there is no standard of care due to rarity)",
    ],
    survivalRate: "3-year survival: ~20–30%; fewer than 15% of patients survive 5 years",
    incidence: "<100 new US cases per year",
    riskFactors: [
      "Male sex (8:1 male-to-female ratio)",
      "Adolescent and young adult age",
      "No known environmental or hereditary risk factors",
    ],
    isRare: true,
    resources: [
      { label: "DSRCT Research Foundation", url: "https://www.dsrct.com" },
    ],
  },

  // ── BLOOD ─────────────────────────────────────────────────────────────────
  {
    id: "hodgkin-lymphoma",
    name: "Hodgkin Lymphoma",
    fullName: "Hodgkin Lymphoma",
    category: "blood",
    summary: "One of the most treatable cancers, originating in B-lymphocytes with a characteristic Reed-Sternberg cell.",
    overview:
      "Hodgkin lymphoma (HL) is a highly treatable form of lymphoma that originates in lymphocytes — white blood cells in the immune system. It is distinguished by the presence of Reed-Sternberg cells, large abnormal B cells. HL has bimodal incidence peaks: in young adults (15–35) and again after 55. With modern combination chemotherapy and radiation, cure rates exceed 85–90% even for advanced stages.",
    howItDevelops:
      "In classical HL, Reed-Sternberg cells arise from germinal center B cells that have lost their B-cell identity due to epigenetic reprogramming. Epstein-Barr virus (EBV) is found in ~30–40% of cases and may contribute to B-cell transformation. NF-κB signaling is constitutively active in Reed-Sternberg cells and drives survival and proliferation. The PD-L1/PD-L2 checkpoint pathway is often amplified, explaining why checkpoint inhibitors are highly effective.",
    symptoms: [
      "Painless swollen lymph nodes in the neck, armpit, or groin",
      "Persistent fever, night sweats, and unexplained weight loss ('B symptoms')",
      "Fatigue and weakness",
      "Itching (pruritus)",
      "Cough, chest pain, or shortness of breath (mediastinal involvement)",
    ],
    diagnosisMethods: [
      "CT of chest, abdomen, and pelvis",
      "PET scan (critical for staging and treatment response)",
      "Lymph node biopsy",
      "Bone marrow biopsy (for advanced staging)",
      "Blood counts and LDH",
    ],
    treatmentOptions: [
      "ABVD chemotherapy (doxorubicin, bleomycin, vinblastine, dacarbazine)",
      "BEACOPP (for advanced disease)",
      "Brentuximab vedotin (targeted anti-CD30 antibody-drug conjugate)",
      "Checkpoint inhibitors (nivolumab, pembrolizumab for relapsed/refractory)",
      "Autologous stem cell transplant for relapsed disease",
      "Radiation therapy (consolidation)",
    ],
    survivalRate: "5-year survival rate: ~90% (all stages); Stage I/II: 95%+",
    incidence: "~8,000 new US cases per year",
    riskFactors: [
      "EBV infection (mononucleosis history)",
      "Family history of Hodgkin lymphoma",
      "HIV infection",
      "Male sex and specific age groups (15–35, 55+)",
    ],
    isRare: false,
    resources: [
      { label: "Leukemia & Lymphoma Society", url: "https://www.lls.org" },
      { label: "Lymphoma Research Foundation", url: "https://www.lymphoma.org" },
    ],
  },
  {
    id: "multiple-myeloma",
    name: "Multiple Myeloma",
    fullName: "Multiple Myeloma",
    category: "blood",
    summary: "A cancer of plasma cells in the bone marrow that destroys bone and impairs immune function.",
    overview:
      "Multiple myeloma is a cancer of plasma cells — the immune cells that produce antibodies. Abnormal plasma cells (myeloma cells) accumulate in the bone marrow, crowding out healthy blood cells and producing a non-functional antibody protein called M-protein. Myeloma causes bone destruction, kidney damage, anemia, and immune deficiency. While not curable in most cases, treatment has dramatically improved over the past decade.",
    howItDevelops:
      "Myeloma evolves from a precursor condition called monoclonal gammopathy of undetermined significance (MGUS). Over years, plasma cells acquire additional mutations in the RAS/MAPK pathway, MYC translocations, and chromosomal abnormalities (trisomies, IGH translocations). The bone marrow microenvironment plays a key role in supporting myeloma cell survival, making it a target for therapy.",
    symptoms: [
      "Bone pain, especially in the back, hips, and skull",
      "Fractures with little or no trauma (pathologic fractures)",
      "Fatigue and weakness (anemia)",
      "Frequent infections",
      "Kidney problems (from light chain deposition)",
      "High blood calcium (hypercalcemia): nausea, confusion, thirst",
    ],
    diagnosisMethods: [
      "Serum protein electrophoresis (SPEP) and immunofixation",
      "Serum free light chains",
      "Bone marrow biopsy with flow cytometry",
      "Whole-body low-dose CT or PET",
      "MRI of spine",
      "Complete blood count and comprehensive metabolic panel",
    ],
    treatmentOptions: [
      "Proteasome inhibitors (bortezomib, carfilzomib, ixazomib)",
      "Immunomodulatory drugs (lenalidomide, pomalidomide)",
      "Monoclonal antibodies (daratumumab, isatuximab)",
      "Autologous stem cell transplant",
      "CAR-T cell therapy (ide-cel, cilta-cel)",
      "Bispecific antibodies (teclistamab, elranatamab)",
    ],
    survivalRate: "5-year survival rate: ~60% (improved dramatically with new therapies)",
    incidence: "~35,000 new US cases per year",
    riskFactors: [
      "Age over 65",
      "African American heritage (2x higher risk)",
      "Male sex",
      "Prior monoclonal gammopathy (MGUS or smoldering myeloma)",
      "Obesity",
    ],
    isRare: false,
    resources: [
      { label: "Multiple Myeloma Research Foundation", url: "https://www.themmrf.org" },
      { label: "International Myeloma Foundation", url: "https://www.myeloma.org" },
    ],
  },

  // ── GYNECOLOGIC ─────────────────────────────────────────────────────────
  {
    id: "ovarian-cancer",
    name: "Ovarian Cancer",
    fullName: "Ovarian Cancer",
    category: "gynecologic",
    summary: "The deadliest gynecologic cancer, often diagnosed at an advanced stage due to subtle symptoms.",
    overview:
      "Ovarian cancer is the fifth leading cause of cancer death in women and the deadliest of the gynecologic cancers. Over 75% of cases are diagnosed at stage III or IV, when the cancer has already spread within the abdomen — largely because early-stage disease produces few or no specific symptoms and there is no reliable screening test. High-grade serous carcinoma is the most common and lethal subtype.",
    howItDevelops:
      "Most high-grade serous ovarian cancers actually originate in the fallopian tube epithelium and spread to the ovary. TP53 mutation is universal; BRCA1/BRCA2 germline mutations drive hereditary cases (~20%). Homologous recombination deficiency (HRD) is a central molecular feature, which is why PARP inhibitors have transformed treatment.",
    symptoms: [
      "Bloating, pelvic pressure, or abdominal pain",
      "Difficulty eating or feeling full quickly",
      "Urinary urgency or frequency",
      "Changes in bowel habits",
      "Unexplained fatigue and weight changes",
    ],
    diagnosisMethods: [
      "Pelvic exam and transvaginal ultrasound",
      "CA-125 blood test (not a reliable screening tool)",
      "CT of abdomen and pelvis",
      "MRI",
      "Surgical staging and biopsy",
      "BRCA1/BRCA2 and HRD germline and somatic testing",
    ],
    treatmentOptions: [
      "Surgical debulking (cytoreduction — extent of residual disease is key prognostic factor)",
      "Platinum-based chemotherapy (carboplatin + paclitaxel)",
      "Bevacizumab (anti-VEGF)",
      "PARP inhibitors (olaparib, niraparib, rucaparib — especially for BRCA-mutated disease)",
      "Immunotherapy (clinical trials)",
    ],
    survivalRate: "5-year survival: ~93% (Stage I); ~31% (Stage IV)",
    incidence: "~19,000 new US cases per year",
    riskFactors: [
      "BRCA1/BRCA2 mutations",
      "Lynch syndrome",
      "Family history of ovarian, breast, or colorectal cancer",
      "Nulliparity and endometriosis",
      "Postmenopausal hormone therapy",
    ],
    isRare: false,
    resources: [
      { label: "Ovarian Cancer Research Alliance", url: "https://ocrahope.org" },
      { label: "Foundation for Women's Cancer", url: "https://www.foundationforwomenscancer.org" },
    ],
  },
  {
    id: "cervical-cancer",
    name: "Cervical Cancer",
    fullName: "Cervical Cancer",
    category: "gynecologic",
    summary: "A largely preventable HPV-driven cancer of the cervix — vaccine and screening save lives.",
    overview:
      "Cervical cancer is one of the most preventable cancers. Virtually all cases are caused by persistent infection with high-risk strains of human papillomavirus (HPV), primarily HPV-16 and HPV-18. The HPV vaccine and regular Pap test/HPV co-testing can prevent most cases and deaths. Despite this, cervical cancer remains the fourth most common cancer in women globally and kills about 4,000 American women per year.",
    howItDevelops:
      "HPV infects the transformation zone of the cervix and integrates viral oncoproteins E6 and E7 into the host cell genome. E6 degrades TP53 and E7 inactivates RB1, disabling the cell's two most critical tumor suppressor checkpoints. Over 10–15 years of persistent infection, normal cells progress through cervical intraepithelial neoplasia (CIN 1→2→3) to invasive carcinoma.",
    symptoms: [
      "Early: often no symptoms (detected by screening)",
      "Abnormal vaginal bleeding (after sex, between periods, after menopause)",
      "Unusual vaginal discharge",
      "Pelvic pain or pain during intercourse",
      "Advanced: leg swelling, back pain, difficulty urinating",
    ],
    diagnosisMethods: [
      "Pap smear and HPV co-testing (screening)",
      "Colposcopy with directed biopsy",
      "LEEP or cone biopsy for CIN diagnosis/treatment",
      "MRI pelvis for local staging",
      "PET-CT for lymph node and distant staging",
    ],
    treatmentOptions: [
      "Surgery: LEEP, conization (early/precancerous), radical hysterectomy (Stage I)",
      "Radiation therapy: external beam + brachytherapy (definitive for locally advanced)",
      "Concurrent cisplatin chemotherapy (radiosensitizer)",
      "Bevacizumab for metastatic disease",
      "Pembrolizumab (for PD-L1+ and recurrent/metastatic disease)",
      "HPV vaccination (prevention — Gardasil 9)",
    ],
    survivalRate: "5-year survival: ~92% (Stage I); ~17% (Stage IV)",
    incidence: "~14,000 new US cases per year",
    riskFactors: [
      "HPV infection (necessary cause in virtually all cases)",
      "Multiple sexual partners",
      "Smoking",
      "Immunosuppression (HIV, transplant)",
      "Long-term oral contraceptive use",
      "Low socioeconomic status (barriers to screening)",
    ],
    isRare: false,
    resources: [
      { label: "Cervivor", url: "https://cervivor.org" },
      { label: "Foundation for Women's Cancer", url: "https://www.foundationforwomenscancer.org" },
    ],
  },

  // ── HEAD & NECK ──────────────────────────────────────────────────────────
  {
    id: "oral-cancer",
    name: "Oral Cancer",
    fullName: "Oral Cavity Cancer",
    category: "head-neck",
    summary: "Cancer of the mouth — lips, tongue, gums, and floor of mouth — strongly linked to tobacco and alcohol.",
    overview:
      "Oral cancer encompasses malignancies of the lips, tongue, floor of the mouth, hard palate, and gingiva (gums). It is most commonly squamous cell carcinoma. Oral cancer is highly curable when detected early, but approximately 60% of cases are diagnosed at a late stage — contributing to a five-year survival rate of only about 67%. HPV-negative oral cavity cancers carry a worse prognosis than HPV-related oropharyngeal cancers.",
    howItDevelops:
      "Repeated carcinogen exposure (tobacco, alcohol, betel nut) causes cumulative DNA mutations in oral mucosal epithelium. TP53 mutations and CDKN2A deletions are early events. Chronic inflammation promotes progression from oral leukoplakia or erythroplakia (precancerous lesions) to invasive carcinoma. HPV drives a subset of oral cancers — particularly those at the tongue base.",
    symptoms: [
      "A sore or ulcer in the mouth that doesn't heal in 2–3 weeks",
      "Red or white patches in the mouth",
      "Persistent pain in the mouth or ear",
      "Difficulty swallowing or moving the jaw/tongue",
      "Unexplained tooth loss or poorly fitting dentures",
      "Lump or thickening in the cheek",
    ],
    diagnosisMethods: [
      "Oral examination and palpation",
      "Biopsy (incisional or punch)",
      "CT, MRI, and PET for staging",
      "HPV and p16 testing",
      "Panendoscopy to rule out second primary tumors",
    ],
    treatmentOptions: [
      "Surgery (wide local excision ± neck dissection)",
      "Radiation therapy",
      "Concurrent cisplatin-based chemoradiation (for advanced disease)",
      "Targeted therapy (cetuximab)",
      "Immunotherapy (pembrolizumab, nivolumab for recurrent/metastatic)",
    ],
    survivalRate: "5-year survival: ~84% (localized); ~66% (all stages)",
    incidence: "~58,000 new US oral cavity and pharynx cancer cases per year",
    riskFactors: [
      "Tobacco use (cigarettes, cigars, smokeless tobacco)",
      "Heavy alcohol consumption",
      "HPV infection (HPV-16)",
      "Betel nut chewing",
      "Sun exposure (lip cancer)",
      "Poor oral hygiene",
    ],
    isRare: false,
    resources: [
      { label: "Oral Cancer Foundation", url: "https://oralcancerfoundation.org" },
    ],
  },
  {
    id: "thyroid-cancer",
    name: "Thyroid Cancer",
    fullName: "Thyroid Cancer",
    category: "head-neck",
    summary: "The most common endocrine cancer — most types are highly treatable with excellent survival.",
    overview:
      "Thyroid cancer is the most common endocrine malignancy. It encompasses several distinct types — papillary (most common, ~85%), follicular, medullary, and anaplastic (least common but most lethal). Incidence has risen dramatically over the past decades, largely due to increased detection of small nodules through neck ultrasound. Most thyroid cancers have excellent prognoses; anaplastic thyroid cancer is one of the most lethal cancers known.",
    howItDevelops:
      "Papillary thyroid cancer is driven by BRAF V600E mutation (~45%) or RET/PTC rearrangements. These activate the MAPK signaling pathway. Medullary thyroid cancer arises from C-cells (parafollicular cells) and is associated with RET proto-oncogene mutations — germline in MEN2 syndrome. Anaplastic thyroid cancer evolves from dedifferentiated papillary or follicular cancer with catastrophic genomic instability.",
    symptoms: [
      "Lump or nodule in the neck (most common presentation)",
      "Hoarseness or voice changes",
      "Difficulty swallowing",
      "Neck pain or pressure",
      "Swollen lymph nodes in the neck",
      "Anaplastic: rapidly growing neck mass with airway compromise",
    ],
    diagnosisMethods: [
      "Neck ultrasound",
      "Fine-needle aspiration (FNA) biopsy",
      "Thyroid function tests",
      "CT or MRI for locally advanced disease",
      "Thyroglobulin (tumor marker for differentiated thyroid cancer)",
      "Calcitonin (for medullary thyroid cancer)",
      "Genetic testing (RET, BRAF, RAS)",
    ],
    treatmentOptions: [
      "Surgery (thyroidectomy with or without neck dissection)",
      "Radioactive iodine (RAI/I-131) ablation for differentiated cancer",
      "TSH suppression therapy (levothyroxine)",
      "External beam radiation (for invasive or unresectable disease)",
      "Targeted therapy (lenvatinib, sorafenib for RAI-refractory; vandetanib, cabozantinib for medullary)",
      "BRAF/MEK inhibitors + pembrolizumab for anaplastic thyroid cancer",
    ],
    survivalRate: "5-year survival: Papillary: >98% | Follicular: ~92% | Anaplastic: ~7%",
    incidence: "~44,000 new US cases per year",
    riskFactors: [
      "Radiation exposure to the neck or head (especially in childhood)",
      "Family history of thyroid cancer",
      "MEN2 syndrome (medullary thyroid cancer)",
      "Female sex (3x higher risk)",
      "Age 25–65",
    ],
    isRare: false,
    resources: [
      { label: "Thyroid Cancer Survivors' Association", url: "https://www.thyca.org" },
      { label: "American Thyroid Association", url: "https://www.thyroid.org" },
    ],
  },
];

export const CATEGORY_LABELS: Record<CancerCategory, string> = {
  common: "Common Cancers",
  childhood: "Childhood Cancers",
  rare: "Rare Cancers",
  blood: "Blood Cancers",
  gynecologic: "Gynecologic Cancers",
  "head-neck": "Head & Neck Cancers",
};

export const CATEGORY_ORDER: CancerCategory[] = [
  "common",
  "childhood",
  "rare",
  "blood",
  "gynecologic",
  "head-neck",
];
