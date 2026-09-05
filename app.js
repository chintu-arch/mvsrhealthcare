/**
 * MVSR HEALTHCARE FACILITY - ADVANCED CLINICAL PORTAL
 * Interactive Patient Traceability, Revisit Management, & Cashless Billing System
 */

// ========================================================
// 1. INITIAL SEED CLINICAL DATA (Longitudinal Patient Records)
// ========================================================
const DEFAULT_PATIENTS = [
  {
    id: "MVSR-2026-0001",
    fullName: "Rajesh Kumar",
    age: 54,
    gender: "Male",
    phone: "+91 98490 12345",
    bloodGroup: "O+",
    emergencyContact: "Suresh Kumar (Son) - +91 98490 54321",
    registeredDate: "15 Jan 2026",
    allergies: "Penicillin, Sulfa drugs",
    chronicConditions: "Hypertension (Grade 2), Mild Hyperlipidemia",
    visits: [
      {
        visitId: "VIS-101",
        visitNumber: 1,
        date: "15 Jan 2026",
        department: "General Medicine",
        attendingDoctor: "Dr. V. Prasad (MD)",
        reason: "Recurrent morning headaches, fatigue, and elevated systolic BP during home check.",
        vitals: { bp: "154/96", hr: "82 bpm", spo2: "98%", temp: "98.6°F", weight: "78 kg" },
        diagnosis: "Newly diagnosed Essential Hypertension (Stage 2). Normal cardiovascular examination.",
        prescriptions: [
          "Tab. Telmisartan 40mg - 1-0-0 (Morning) - 30 days",
          "Tab. Amlodipine 5mg - 0-0-1 (Night) - 30 days"
        ],
        notes: "Strict reduction in salt intake. Avoid smoking/alcohol. Maintain daily BP log for 2 weeks.",
        fee: { amount: 500, status: "paid", invoiceId: "INV-2026-001", txnRef: "TXN8829103" }
      },
      {
        visitId: "VIS-102",
        visitNumber: 2,
        date: "18 Feb 2026",
        department: "Cardiology",
        attendingDoctor: "Dr. Radhika Sen (MD, DM)",
        reason: "First Revisit: BP medication tolerance review and baseline 2D-Echocardiogram.",
        vitals: { bp: "138/88", hr: "76 bpm", spo2: "99%", temp: "98.4°F", weight: "77.5 kg" },
        diagnosis: "Hypertension showing positive therapeutic response. Normal LV systolic function on Echo.",
        prescriptions: [
          "Continue Tab. Telmisartan 40mg - 1-0-0 - 60 days",
          "Continue Tab. Amlodipine 5mg - 0-0-1 - 60 days",
          "Tab. Atorvastatin 10mg - 0-0-1 - 60 days"
        ],
        notes: "BP trending towards normal range. Instructed to commence 30 minutes brisk walking daily.",
        fee: { amount: 800, status: "paid", invoiceId: "INV-2026-042", txnRef: "TXN8910294" }
      },
      {
        visitId: "VIS-103",
        visitNumber: 3,
        date: "20 May 2026",
        department: "Cardiology",
        attendingDoctor: "Dr. Radhika Sen (MD, DM)",
        reason: "Second Revisit: Routine quarterly BP checkup and lipid profile monitoring.",
        vitals: { bp: "128/82", hr: "72 bpm", spo2: "98%", temp: "98.2°F", weight: "76 kg" },
        diagnosis: "Stable controlled blood pressure. Serum LDL reduced from 158 to 110 mg/dL.",
        prescriptions: [
          "Tab. Telmisartan 40mg - 1-0-0 - 90 days",
          "Tab. Atorvastatin 10mg - 0-0-1 - 90 days (Discontinued Amlodipine)"
        ],
        notes: "Excellent compliance. Patient successfully reduced weight by 2 kg.",
        fee: { amount: 600, status: "paid", invoiceId: "INV-2026-118", txnRef: "TXN9019234" }
      },
      {
        visitId: "VIS-104",
        visitNumber: 4,
        date: "04 Sep 2026",
        department: "General Medicine",
        attendingDoctor: "Dr. V. Prasad (MD)",
        reason: "Third Revisit: Mild seasonal upper respiratory viral symptoms with controlled BP.",
        vitals: { bp: "124/80", hr: "74 bpm", spo2: "99%", temp: "99.1°F", weight: "76.2 kg" },
        diagnosis: "Acute Viral Pharyngitis with stable cardiovascular profile.",
        prescriptions: [
          "Tab. Paracetamol 650mg - SOS (Max 3 times daily for fever)",
          "Tab. Levocetirizine 5mg - 0-0-1 (Night) - 5 days",
          "Continue Telmisartan 40mg as regular morning dose"
        ],
        notes: "Warm saline gargling. Adequate hydration. Rest for 2 days.",
        fee: { amount: 400, status: "paid", invoiceId: "INV-2026-301", txnRef: "TXN9402918" }
      }
    ]
  },
  {
    id: "MVSR-2026-0002",
    fullName: "Ananya Sharma",
    age: 29,
    gender: "Female",
    phone: "+91 99887 76655",
    bloodGroup: "B+",
    emergencyContact: "Mahesh Sharma (Father) - +91 99887 76600",
    registeredDate: "10 Feb 2026",
    allergies: "Sulfa compounds, NSAIDs (mild gastric sensitivity)",
    chronicConditions: "Episodic Migraine with Aura",
    visits: [
      {
        visitId: "VIS-201",
        visitNumber: 1,
        date: "10 Feb 2026",
        department: "Neurology",
        attendingDoctor: "Dr. Arvind Deshmukh (MD Neuro)",
        reason: "Severe unilateral throbbing headache lasting 2 days with photophobia and nausea.",
        vitals: { bp: "116/74", hr: "78 bpm", spo2: "99%", temp: "98.4°F", weight: "58 kg" },
        diagnosis: "Classic Migraine without complication. Triggered by screen glare and irregular sleep.",
        prescriptions: [
          "Tab. Rizatriptan 10mg - SOS at aura onset",
          "Tab. Propranolol 20mg - 1-0-1 - 30 days (Prophylaxis)",
          "Tab. Domperidone 10mg - SOS for nausea"
        ],
        notes: "Advised headache diary. Blue-light filtering eyewear recommended.",
        fee: { amount: 650, status: "paid", invoiceId: "INV-2026-033", txnRef: "TXN8892100" }
      },
      {
        visitId: "VIS-202",
        visitNumber: 2,
        date: "02 Sep 2026",
        department: "Neurology",
        attendingDoctor: "Dr. Arvind Deshmukh (MD Neuro)",
        reason: "Follow-up Revisit: Review migraine episode frequency over past 6 months.",
        vitals: { bp: "112/72", hr: "68 bpm", spo2: "100%", temp: "98.2°F", weight: "58.4 kg" },
        diagnosis: "Significant reduction in migraine frequency (from 4 attacks/month to 1 attack/month).",
        prescriptions: [
          "Tab. Propranolol 20mg - 1-0-0 (Reduced to single morning dose) - 60 days",
          "Tab. Rizatriptan 10mg - SOS"
        ],
        notes: "Patient tolerating prophylaxis well. Continue maintaining healthy sleep cycle.",
        fee: { amount: 850, status: "pending", invoiceId: "INV-2026-289", txnRef: null }
      }
    ]
  },
  {
    id: "MVSR-2026-0003",
    fullName: "Mohammed Farooq",
    age: 42,
    gender: "Male",
    phone: "+91 97001 23456",
    bloodGroup: "A+",
    emergencyContact: "Ayesha Farooq (Wife) - +91 97001 65432",
    registeredDate: "05 Mar 2026",
    allergies: "None known",
    chronicConditions: "Mild Osteoarthritis of right knee, Lumbar strain",
    visits: [
      {
        visitId: "VIS-301",
        visitNumber: 1,
        date: "05 Mar 2026",
        department: "Orthopedics",
        attendingDoctor: "Dr. K. Raghavan (MS Ortho)",
        reason: "Right knee pain and swelling after twisting knee during badminton game.",
        vitals: { bp: "130/84", hr: "80 bpm", spo2: "98%", temp: "98.6°F", weight: "82 kg" },
        diagnosis: "Grade 1 Medial Collateral Ligament (MCL) sprain right knee.",
        prescriptions: [
          "Tab. Aceclofenac + Paracetamol - 1-0-1 after meals - 5 days",
          "Gel. Diclofenac Topical - Apply 3 times daily",
          "Knee immobilization brace recommended for 10 days"
        ],
        notes: "R.I.C.E. protocol (Rest, Ice, Compression, Elevation). Avoid weight bearing for 48 hours.",
        fee: { amount: 750, status: "paid", invoiceId: "INV-2026-064", txnRef: "TXN8928341" }
      },
      {
        visitId: "VIS-302",
        visitNumber: 2,
        date: "25 Mar 2026",
        department: "Orthopedics",
        attendingDoctor: "Dr. K. Raghavan (MS Ortho)",
        reason: "First Revisit: MCL healing evaluation and physical therapy clearance.",
        vitals: { bp: "126/80", hr: "76 bpm", spo2: "99%", temp: "98.4°F", weight: "81.5 kg" },
        diagnosis: "Satisfactory ligament healing. Mild joint stiffness requiring active mobilization.",
        prescriptions: [
          "Tab. Glucosamine + Chondroitin - 1 tablet daily - 30 days",
          "Physical Therapy referral: Quadriceps strengthening exercises"
        ],
        notes: "Commence gentle cycling and knee isometric exercises under supervision.",
        fee: { amount: 500, status: "paid", invoiceId: "INV-2026-092", txnRef: "TXN8984920" }
      },
      {
        visitId: "VIS-303",
        visitNumber: 3,
        date: "01 Sep 2026",
        department: "Orthopedics",
        attendingDoctor: "Dr. K. Raghavan (MS Ortho)",
        reason: "Second Revisit: 6-month post-rehab sports clearance and knee stability test.",
        vitals: { bp: "128/82", hr: "74 bpm", spo2: "98%", temp: "98.4°F", weight: "80.2 kg" },
        diagnosis: "Complete ligament recovery. Lachman and McMurray tests negative. Full range of motion.",
        prescriptions: [
          "Tab. Calcium + Vitamin D3 - 1 daily for 30 days"
        ],
        notes: "Cleared to resume low-impact sports with supportive knee sleeve.",
        fee: { amount: 1200, status: "pending", invoiceId: "INV-2026-278", txnRef: null }
      }
    ]
  },
  {
    id: "MVSR-2026-0004",
    fullName: "Sneha Reddy",
    age: 8,
    gender: "Female",
    phone: "+91 94400 98765",
    bloodGroup: "AB+",
    emergencyContact: "Venkat Reddy (Father) - +91 94400 98765",
    registeredDate: "12 Jan 2026",
    allergies: "Peanuts, Dust Mites",
    chronicConditions: "Childhood Bronchial Asthma",
    visits: [
      {
        visitId: "VIS-401",
        visitNumber: 1,
        date: "12 Jan 2026",
        department: "Pediatrics",
        attendingDoctor: "Dr. Sunita Murthy (MD Ped)",
        reason: "Nocturnal wheezing and dry cough following cold exposure.",
        vitals: { bp: "98/62", hr: "94 bpm", spo2: "96%", temp: "98.8°F", weight: "24 kg" },
        diagnosis: "Mild acute exacerbation of Bronchial Asthma.",
        prescriptions: [
          "Salbutamol Inhaler (100mcg) - 2 puffs via spacer SOS",
          "Budesonide Inhaler (100mcg) - 1 puff twice daily - 30 days",
          "Syr. Montelukast 4mg - 1 spoon at bedtime - 30 days"
        ],
        notes: "Proper inhalation spacer technique demonstrated to parents. Avoid fuzzy blankets.",
        fee: { amount: 500, status: "paid", invoiceId: "INV-2026-005", txnRef: "TXN8829012" }
      },
      {
        visitId: "VIS-402",
        visitNumber: 2,
        date: "15 Feb 2026",
        department: "Pediatrics",
        attendingDoctor: "Dr. Sunita Murthy (MD Ped)",
        reason: "First Revisit: Inhaler response check and chest auscultation.",
        vitals: { bp: "100/64", hr: "88 bpm", spo2: "99%", temp: "98.4°F", weight: "24.5 kg" },
        diagnosis: "Clear bilateral air entry. Wheezing resolved.",
        prescriptions: [
          "Continue Budesonide Inhaler 1 puff twice daily - 60 days",
          "Keep Salbutamol for emergency relief"
        ],
        notes: "Peak flow monitoring diary initiated.",
        fee: { amount: 400, status: "paid", invoiceId: "INV-2026-038", txnRef: "TXN8899201" }
      },
      {
        visitId: "VIS-403",
        visitNumber: 3,
        date: "20 Apr 2026",
        department: "Pediatrics",
        attendingDoctor: "Dr. Sunita Murthy (MD Ped)",
        reason: "Second Revisit: Routine growth milestone evaluation & annual flu vaccine.",
        vitals: { bp: "102/65", hr: "86 bpm", spo2: "100%", temp: "98.2°F", weight: "25.2 kg" },
        diagnosis: "Healthy child with well-controlled respiratory status. Quadrivalent Influenza administered.",
        prescriptions: [
          "Syr. Multivitamin with Zinc - 5ml daily for 30 days"
        ],
        notes: "Encourage swimming and outdoor sports.",
        fee: { amount: 1100, status: "paid", invoiceId: "INV-2026-085", txnRef: "TXN8976210" }
      },
      {
        visitId: "VIS-404",
        visitNumber: 4,
        date: "05 Jul 2026",
        department: "Pediatrics",
        attendingDoctor: "Dr. Sunita Murthy (MD Ped)",
        reason: "Third Revisit: Mild skin rash (urticaria) after birthday party food.",
        vitals: { bp: "100/62", hr: "90 bpm", spo2: "99%", temp: "98.6°F", weight: "25.8 kg" },
        diagnosis: "Acute Allergic Urticaria (food allergen trigger suspected).",
        prescriptions: [
          "Syr. Cetirizine 5ml once daily at night - 5 days",
          "Calamine lotion for external topical soothing"
        ],
        notes: "Strict caution against packaged snacks containing unverified peanut traces.",
        fee: { amount: 450, status: "paid", invoiceId: "INV-2026-176", txnRef: "TXN9182740" }
      },
      {
        visitId: "VIS-405",
        visitNumber: 5,
        date: "03 Sep 2026",
        department: "Pediatrics",
        attendingDoctor: "Dr. Sunita Murthy (MD Ped)",
        reason: "Fourth Revisit: School health certificate checkup and asthma action plan update.",
        vitals: { bp: "102/64", hr: "84 bpm", spo2: "100%", temp: "98.4°F", weight: "26.4 kg" },
        diagnosis: "Complete clinical wellness. Lungs resonant and clear.",
        prescriptions: [
          "Step down Budesonide to 1 puff once daily - 90 days"
        ],
        notes: "Issued official MVSR School Fitness Clearance Certificate.",
        fee: { amount: 400, status: "paid", invoiceId: "INV-2026-295", txnRef: "TXN9398120" }
      }
    ]
  },
  {
    id: "MVSR-2026-0005",
    fullName: "Vikramaditya Varma",
    age: 68,
    gender: "Male",
    phone: "+91 93910 55443",
    bloodGroup: "O-",
    emergencyContact: "Smt. Rohini Varma (Wife) - +91 93910 55443",
    registeredDate: "04 Sep 2026",
    allergies: "None documented",
    chronicConditions: "Benign Prostatic Hyperplasia (BPH), Mild Osteopenia",
    visits: [
      {
        visitId: "VIS-501",
        visitNumber: 1,
        date: "04 Sep 2026",
        department: "General Medicine",
        attendingDoctor: "Dr. V. Prasad (MD)",
        reason: "First Time Visit: Comprehensive senior citizen executive health checkup.",
        vitals: { bp: "134/86", hr: "72 bpm", spo2: "97%", temp: "98.4°F", weight: "71 kg" },
        diagnosis: "Mild age-related degenerative joint changes. Blood sugar and renal parameters normal.",
        prescriptions: [
          "Tab. Tamsulosin 0.4mg - 0-0-1 (Night) - 30 days",
          "Tab. Calcium + D3 500mg - 1 daily - 60 days"
        ],
        notes: "Scheduled for follow-up abdominal ultrasound and PSA screening.",
        fee: { amount: 500, status: "pending", invoiceId: "INV-2026-302", txnRef: null }
      }
    ]
  },
  {
    id: "MVSR-2026-0006",
    fullName: "Kavitha Menon",
    age: 35,
    gender: "Female",
    phone: "+91 91234 56789",
    bloodGroup: "A-",
    emergencyContact: "Anand Menon (Brother) - +91 91234 56780",
    registeredDate: "22 Aug 2026",
    allergies: "Nickel, Synthetic Fragrances",
    chronicConditions: "Allergic Contact Dermatitis",
    visits: [
      {
        visitId: "VIS-601",
        visitNumber: 1,
        date: "22 Aug 2026",
        department: "Dermatology",
        attendingDoctor: "Dr. V. Prasad (MD)",
        reason: "Pruritic erythematous vesicular eruptions over wrists and neck.",
        vitals: { bp: "118/76", hr: "76 bpm", spo2: "99%", temp: "98.4°F", weight: "61 kg" },
        diagnosis: "Allergic Contact Dermatitis secondary to metallic watch strap.",
        prescriptions: [
          "Cream Mometasone Furoate 0.1% - Apply thinly twice daily - 7 days",
          "Tab. Bilastine 20mg - 1 tablet daily for 10 days"
        ],
        notes: "Avoid metallic jewelry. Switch to hypoallergenic leather or silicone straps.",
        fee: { amount: 550, status: "paid", invoiceId: "INV-2026-241", txnRef: "TXN9218204" }
      },
      {
        visitId: "VIS-602",
        visitNumber: 2,
        date: "01 Sep 2026",
        department: "Dermatology",
        attendingDoctor: "Dr. V. Prasad (MD)",
        reason: "First Revisit: Dermatitis resolution checkup.",
        vitals: { bp: "116/74", hr: "74 bpm", spo2: "99%", temp: "98.2°F", weight: "60.8 kg" },
        diagnosis: "Lesions fully resolved with mild post-inflammatory hyperpigmentation.",
        prescriptions: [
          "Ceramide moisturising lotion - Apply generously twice daily"
        ],
        notes: "Skin barrier restored. Discharge from active dermatological follow-up.",
        fee: { amount: 350, status: "paid", invoiceId: "INV-2026-281", txnRef: "TXN9381029" }
      }
    ]
  }
];

const DEFAULT_FACULTY = [
  { id: "MVSR-FAC-01", name: "Dr. V. Prasad", degree: "MD (Gen Med)", dept: "General Medicine", email: "dr.prasad@mvsrhealth.org", phone: "+91 98490 00111", password: "password123", avatar: "VP" },
  { id: "MVSR-FAC-02", name: "Dr. Radhika Sen", degree: "MD, DM (Cardio)", dept: "Cardiology", email: "dr.sen@mvsrhealth.org", phone: "+91 98490 00222", password: "password123", avatar: "RS" },
  { id: "MVSR-FAC-03", name: "Dr. K. Raghavan", degree: "MS (Ortho)", dept: "Orthopedics", email: "dr.raghavan@mvsrhealth.org", phone: "+91 98490 00333", password: "password123", avatar: "KR" },
  { id: "MVSR-FAC-04", name: "Dr. Sunita Murthy", degree: "MD (Ped)", dept: "Pediatrics", email: "dr.murthy@mvsrhealth.org", phone: "+91 98490 00444", password: "password123", avatar: "SM" }
];

// ========================================================
// 2. STATE CONTROLLER & CORE INITIALIZATION
// ========================================================
class MVSRHealthcareApp {
  constructor() {
    this.patients = [];
    this.facultyList = [];
    this.activeFaculty = null;
    this.experienceReviews = [];
    this.currentView = 'home';
    this.currentPatientId = null;
    this.directoryLayout = 'table';
    this.activePendingBill = null;
    this.audioContext = null;

    this.initDatabase();
    this.initFaculty();
    this.initEventListeners();
    this.initTelemetryAnimation();
    this.initConfetti();
    this.initExperienceReviews();
    this.updateStatsUI();
    this.updateNavBadges();
    this.updateRegistrationPreview();
    this.renderFacultyHeader();
  }

  // Load from LocalStorage or initialize with rich seed data
  initDatabase() {
    const savedData = localStorage.getItem('MVSR_HEALTHCARE_PATIENTS_DB');
    if (savedData) {
      try {
        this.patients = JSON.parse(savedData);
        // Ensure email & address are present for all records
        this.patients.forEach(p => {
          if (!p.email) p.email = `${p.fullName.toLowerCase().replace(/\s+/g, '.')}@email.com`;
          if (!p.address) p.address = 'Hyderabad, Telangana';
        });
      } catch (e) {
        console.warn("Could not parse saved patient data, resetting to defaults.", e);
        this.patients = JSON.parse(JSON.stringify(DEFAULT_PATIENTS));
      }
    } else {
      this.patients = JSON.parse(JSON.stringify(DEFAULT_PATIENTS));
      this.saveDatabase();
    }
  }

  saveDatabase() {
    localStorage.setItem('MVSR_HEALTHCARE_PATIENTS_DB', JSON.stringify(this.patients));
  }

  // Calculates next unique auto-incrementing patient ID
  getNextPatientId() {
    let maxNum = 0;
    this.patients.forEach(p => {
      const match = p.id.match(/MVSR-2026-(\d+)/);
      if (match) {
        const num = parseInt(match[1], 10);
        if (num > maxNum) maxNum = num;
      }
    });
    const nextNum = maxNum + 1;
    return `MVSR-2026-${String(nextNum).padStart(4, '0')}`;
  }

  // Navigation controller between views
  navigate(viewName) {
    this.currentView = viewName;

    // Update Nav buttons
    document.querySelectorAll('.nav-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.view === viewName);
    });

    // Update View DOM elements
    document.querySelectorAll('.app-view').forEach(view => {
      view.classList.remove('active');
    });

    const targetView = document.getElementById(`view-${viewName}`);
    if (targetView) {
      targetView.classList.add('active');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // View specific activations
    if (viewName === 'directory') {
      this.renderDirectory();
    } else if (viewName === 'payments') {
      this.renderPaymentTable();
    } else if (viewName === 'register') {
      this.updateRegistrationPreview();
    } else if (viewName === 'home') {
      this.updateStatsUI();
    }

    this.playSound('click');
  }

  // Initialize Global Keyboard shortcuts and search handlers
  initEventListeners() {
    // Ctrl+K to search
    window.addEventListener('keydown', (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        const searchBox = document.getElementById('global-search-input');
        if (searchBox) {
          searchBox.focus();
          searchBox.select();
        }
      }
      if (e.key === 'Escape') {
        this.closeAllModals();
        const qs = document.getElementById('quick-search-results');
        if (qs) qs.classList.add('hidden');
      }
    });

    // Global search input listener
    const globalSearch = document.getElementById('global-search-input');
    if (globalSearch) {
      globalSearch.addEventListener('input', (e) => this.handleGlobalSearch(e.target.value));
      globalSearch.addEventListener('focus', (e) => this.handleGlobalSearch(e.target.value));
    }

    // Close quick search & faculty popover when clicking outside
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.header-search')) {
        const qs = document.getElementById('quick-search-results');
        if (qs) qs.classList.add('hidden');
      }
      if (!e.target.closest('.faculty-wrapper')) {
        const fp = document.getElementById('faculty-menu-popover');
        if (fp) fp.classList.add('hidden');
      }
    });

    // Interactive registration preview updater
    const regForm = document.getElementById('new-patient-form');
    if (regForm) {
      regForm.addEventListener('input', () => this.updateRegistrationPreview());
    }
  }

  // ========================================================
  // 3. STATS & TELEMETRY ENGINE
  // ========================================================
  updateStatsUI() {
    const totalPatients = this.patients.length;
    let totalVisits = 0;
    let totalPaid = 0;
    let totalPending = 0;
    let clearedInvoices = 0;

    this.patients.forEach(p => {
      totalVisits += (p.visits ? p.visits.length : 0);
      p.visits?.forEach(v => {
        if (v.fee) {
          if (v.fee.status === 'paid') {
            totalPaid += v.fee.amount;
            clearedInvoices++;
          } else {
            totalPending += v.fee.amount;
          }
        }
      });
    });

    // Update Home Stats
    const elPatients = document.getElementById('stat-total-patients');
    const elVisits = document.getElementById('stat-total-visits');
    if (elPatients) elPatients.textContent = totalPatients;
    if (elVisits) elVisits.textContent = totalVisits;

    // Update Billing Stats
    const elCollected = document.getElementById('fin-total-collected');
    const elDues = document.getElementById('fin-pending-dues');
    const elClearedCount = document.getElementById('fin-cleared-count');
    if (elCollected) elCollected.textContent = `₹${totalPaid.toLocaleString('en-IN')}`;
    if (elDues) elDues.textContent = `₹${totalPending.toLocaleString('en-IN')}`;
    if (elClearedCount) elClearedCount.textContent = clearedInvoices;

    // Nav Dues Alert Dot
    const duesDot = document.getElementById('nav-dues-alert');
    if (duesDot) {
      duesDot.style.display = totalPending > 0 ? 'inline-block' : 'none';
    }
  }

  updateNavBadges() {
    const elNavCount = document.getElementById('nav-patient-count');
    if (elNavCount) elNavCount.textContent = this.patients.length;
  }

  // Continuous realistic ECG Cardiac Waveform Simulator
  initTelemetryAnimation() {
    const canvas = document.getElementById('ecg-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let width = (canvas.width = canvas.parentElement.clientWidth || 500);
    let height = (canvas.height = 65);

    window.addEventListener('resize', () => {
      if (canvas.parentElement) {
        width = canvas.width = canvas.parentElement.clientWidth;
        height = canvas.height = 65;
      }
    });

    let x = 0;
    let prevY = height / 2;
    const speed = 2.4;
    const points = [];

    // Pre-calculate realistic ECG cardiac cycle values
    function getECGValue(phase) {
      // phase: 0 to 1
      if (phase > 0.15 && phase < 0.22) {
        // P-wave
        return Math.sin(((phase - 0.15) / 0.07) * Math.PI) * 5;
      } else if (phase >= 0.32 && phase < 0.35) {
        // Q-dip
        return -6;
      } else if (phase >= 0.35 && phase < 0.40) {
        // R-spike
        return 28;
      } else if (phase >= 0.40 && phase < 0.44) {
        // S-dip
        return -10;
      } else if (phase >= 0.52 && phase < 0.68) {
        // T-wave
        return Math.sin(((phase - 0.52) / 0.16) * Math.PI) * 9;
      }
      return (Math.random() - 0.5) * 1.5; // slight biological baseline jitter
    }

    let cycleProgress = 0;
    const cycleDuration = 100; // in ticks

    const render = () => {
      ctx.fillStyle = 'rgba(3, 7, 18, 0.14)';
      ctx.fillRect(0, 0, width, height);

      cycleProgress = (cycleProgress + 1) % cycleDuration;
      const waveValue = getECGValue(cycleProgress / cycleDuration);
      const currentY = height / 2 - waveValue;

      ctx.beginPath();
      ctx.strokeStyle = '#10B981';
      ctx.lineWidth = 2;
      ctx.lineCap = 'round';
      ctx.shadowColor = '#10B981';
      ctx.shadowBlur = 8;

      ctx.moveTo(x, prevY);
      x += speed;
      ctx.lineTo(x, currentY);
      ctx.stroke();

      // Lead cursor bright dot
      ctx.beginPath();
      ctx.fillStyle = '#6EE7B7';
      ctx.shadowBlur = 12;
      ctx.shadowColor = '#6EE7B7';
      ctx.arc(x, currentY, 2.5, 0, Math.PI * 2);
      ctx.fill();

      prevY = currentY;

      if (x > width) {
        x = 0;
        prevY = height / 2;
        ctx.clearRect(0, 0, 30, height);
      } else {
        ctx.clearRect(x + 2, 0, 18, height);
      }

      requestAnimationFrame(render);
    };

    render();

    // Subtle Live Telemetry Fluctuations
    setInterval(() => {
      const bpmEl = document.getElementById('live-bpm');
      const spo2El = document.getElementById('live-spo2');
      if (bpmEl) {
        const randBpm = 72 + Math.floor(Math.random() * 5);
        bpmEl.textContent = randBpm;
      }
      if (spo2El) {
        const randSpo2 = 98 + Math.floor(Math.random() * 2);
        spo2El.textContent = `${randSpo2}%`;
      }
    }, 4000);
  }

  // ========================================================
  // 4. QUICK SEARCH & PATIENT LOOKUP (NAME & APPLICANT NUMBER)
  // ========================================================

  // Centralized robust patient matcher for name, applicant number, ID, phone, etc.
  matchPatient(patient, rawQuery) {
    if (!rawQuery) return false;
    const q = rawQuery.trim().toLowerCase();
    if (!q) return false;

    // 1. Patient Name matching (full name, first name, last name, case-insensitive)
    const fullName = (patient.fullName || '').toLowerCase();
    if (fullName.includes(q)) return true;

    const queryTokens = q.split(/\s+/).filter(Boolean);
    if (queryTokens.length > 1 && queryTokens.every(token => fullName.includes(token))) {
      return true;
    }

    // 2. Full Unique ID matching (e.g. MVSR-2026-0001)
    const patientId = (patient.id || '').toLowerCase();
    if (patientId.includes(q)) return true;

    // 3. Applicant Number matching (e.g. 1, 0001, applicant 1, app #2, #0004)
    // Extract sequence number from patient.id (e.g. "0001" -> 1)
    const idMatch = patient.id.match(/(\d+)$/);
    const idSeqStr = idMatch ? idMatch[1] : ''; // e.g. "0001"
    const idSeqNum = idMatch ? parseInt(idMatch[1], 10) : null; // e.g. 1

    // Strip common prefixes like "applicant", "patient", "app", "no", "number", "#", "-", ":"
    const cleanedDigits = q.replace(/applicant|patient|\bapp\b|\bno\b|\bnumber\b|\bpt\b|[#:\-\s]/gi, '');
    if (cleanedDigits && /^\d+$/.test(cleanedDigits)) {
      const qNum = parseInt(cleanedDigits, 10);
      if (qNum === idSeqNum) return true;
      if (idSeqStr.includes(cleanedDigits) || cleanedDigits.padStart(4, '0') === idSeqStr) return true;
    }

    // 4. Phone number matching
    const cleanPhone = (patient.phone || '').replace(/\D/g, '');
    const cleanQueryPhone = q.replace(/\D/g, '');
    if (cleanQueryPhone.length >= 3 && cleanPhone.includes(cleanQueryPhone)) {
      return true;
    }

    // 5. Blood Group matching
    if (patient.bloodGroup && patient.bloodGroup.toLowerCase() === q) {
      return true;
    }

    // 6. Reasons or Diagnoses in visits
    if (patient.visits && patient.visits.some(v => 
      (v.reason && v.reason.toLowerCase().includes(q)) || 
      (v.diagnosis && v.diagnosis.toLowerCase().includes(q)) ||
      (v.department && v.department.toLowerCase().includes(q))
    )) {
      return true;
    }

    return false;
  }

  handleGlobalSearch(query) {
    const dropdown = document.getElementById('quick-search-results');
    const clearBtn = document.getElementById('global-search-clear');
    if (!dropdown) return;

    const trimmed = (query || '').trim();
    if (clearBtn) {
      clearBtn.classList.toggle('hidden', !trimmed);
    }

    if (!trimmed) {
      dropdown.classList.add('hidden');
      return;
    }

    const matches = this.patients.filter(p => this.matchPatient(p, trimmed)).slice(0, 6);

    if (matches.length === 0) {
      dropdown.innerHTML = `
        <div class="qs-empty-state">
          <div style="font-size: 22px; margin-bottom: 6px;">🔍</div>
          <div style="font-weight: 600; color: var(--text-main);">No patient matches "<strong>${this.escapeHTML(trimmed)}</strong>"</div>
          <div style="font-size: 11.5px; color: var(--text-dim); margin-top: 6px;">
            Search by <strong>Patient Name</strong> (e.g. Rajesh, Ananya) or <strong>Applicant Number</strong> (e.g. 1, 0001, MVSR-2026-0001).
          </div>
        </div>
      `;
      dropdown.classList.remove('hidden');
      return;
    }

    const headerHTML = `
      <div class="qs-header-bar">
        <span>Matching Patients (${matches.length})</span>
        <span class="qs-hint">Press [Enter] or click to view</span>
      </div>
    `;

    const itemsHTML = matches.map(p => {
      const appNo = parseInt(p.id.slice(-4), 10) || 1;
      const appNoPadded = String(appNo).padStart(4, '0');
      const visitCount = p.visits ? p.visits.length : 0;
      const lastVisit = p.visits && p.visits.length > 0 ? p.visits[p.visits.length - 1] : null;
      const hasDues = p.visits?.some(v => v.fee && v.fee.status === 'pending');

      return `
        <div class="quick-search-item" onclick="app.viewPatientDetail('${p.id}'); app.clearGlobalSearchDropdown();">
          <div class="qs-meta">
            <div class="qs-id-row">
              <span class="applicant-badge-pill">Applicant #${appNoPadded}</span>
              <span class="qs-id">${p.id}</span>
            </div>
            <div class="qs-name">${this.escapeHTML(p.fullName)}</div>
            <div class="qs-demog">${p.age}y • ${p.gender} • Blood: <strong style="color: #fda4af;">${p.bloodGroup}</strong> • 📞 ${p.phone}</div>
            <div class="qs-reason">${lastVisit ? 'Latest: ' + this.escapeHTML(lastVisit.reason.substring(0, 48)) + '...' : 'Initial registration'}</div>
          </div>
          <div class="qs-actions-col">
            <span class="status-badge ${hasDues ? 'pending' : 'paid'}">
              ${hasDues ? 'Fee Due' : 'Paid'}
            </span>
            <span class="qs-action-btn">Inspect ➔</span>
          </div>
        </div>
      `;
    }).join('');

    dropdown.innerHTML = headerHTML + itemsHTML;
    dropdown.classList.remove('hidden');
  }

  clearGlobalSearchDropdown() {
    const dropdown = document.getElementById('quick-search-results');
    if (dropdown) dropdown.classList.add('hidden');
  }

  clearGlobalSearch() {
    const input = document.getElementById('global-search-input');
    const clearBtn = document.getElementById('global-search-clear');
    const dropdown = document.getElementById('quick-search-results');
    if (input) {
      input.value = '';
      input.focus();
    }
    if (clearBtn) clearBtn.classList.add('hidden');
    if (dropdown) dropdown.classList.add('hidden');
  }

  submitGlobalSearch() {
    const input = document.getElementById('global-search-input');
    if (!input) return;
    const query = input.value.trim();
    if (!query) {
      this.showToast('Please enter a patient name or applicant number to search', 'warning');
      input.focus();
      return;
    }

    this.clearGlobalSearchDropdown();

    const matched = this.patients.filter(p => this.matchPatient(p, query));

    if (matched.length === 0) {
      this.showToast(`No patient found matching "${query}". Try searching by patient name or applicant number (e.g. Rajesh, 0001).`, 'warning');
      return;
    }

    if (matched.length === 1) {
      const p = matched[0];
      const appNo = parseInt(p.id.slice(-4), 10) || 1;
      this.viewPatientDetail(p.id);
      this.showToast(`Loaded Applicant #${appNo}: ${p.fullName} (${p.id})`, 'success');
      return;
    }

    // Multiple matches: navigate to Patient Index directory and filter
    this.navigate('directory');
    const dirInput = document.getElementById('dir-search-input');
    if (dirInput) {
      dirInput.value = query;
    }
    this.renderDirectory();
    this.showToast(`Found ${matched.length} patients matching "${query}". Displaying in Patient Index.`, 'info');

    const dirSection = document.getElementById('directory-table-container');
    if (dirSection) {
      dirSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  quickLookup() {
    const input = document.getElementById('home-quick-id');
    if (!input) return;
    const query = input.value.trim();
    if (!query) {
      this.showToast('Please enter a patient name or applicant number', 'warning');
      input.focus();
      return;
    }

    const matched = this.patients.filter(p => this.matchPatient(p, query));
    if (matched.length === 1) {
      const p = matched[0];
      const appNo = parseInt(p.id.slice(-4), 10) || 1;
      this.viewPatientDetail(p.id);
      this.showToast(`Found Applicant #${appNo}: ${p.fullName} (${p.id})`, 'success');
    } else if (matched.length > 1) {
      this.navigate('directory');
      const dirInput = document.getElementById('dir-search-input');
      if (dirInput) dirInput.value = query;
      this.renderDirectory();
      this.showToast(`Found ${matched.length} patients matching "${query}". Displaying in Patient Index.`, 'info');
    } else {
      this.showToast(`No record found matching "${query}". Try patient name (e.g. Rajesh) or applicant number (e.g. 1, 0001).`, 'warning');
    }
  }

  // ========================================================
  // 5. PATIENT DIRECTORY & INDEX PAGE
  // ========================================================
  setDirectoryLayout(layout) {
    this.directoryLayout = layout;
    const btnTable = document.getElementById('btn-view-table');
    const btnGrid = document.getElementById('btn-view-grid');
    const tableCont = document.getElementById('directory-table-container');
    const gridCont = document.getElementById('directory-grid-container');

    if (btnTable) btnTable.classList.toggle('active', layout === 'table');
    if (btnGrid) btnGrid.classList.toggle('active', layout === 'grid');

    if (tableCont) tableCont.classList.toggle('hidden', layout !== 'table');
    if (gridCont) gridCont.classList.toggle('hidden', layout !== 'grid');
  }

  filterPatients() {
    this.renderDirectory();
  }

  clearDirSearch() {
    const input = document.getElementById('dir-search-input');
    const clearBtn = document.getElementById('dir-clear-btn');
    if (input) input.value = '';
    if (clearBtn) clearBtn.classList.add('hidden');
    this.renderDirectory();
  }

  resetDirFilters() {
    const searchInput = document.getElementById('dir-search-input');
    const deptFilter = document.getElementById('dir-filter-dept');
    const statusFilter = document.getElementById('dir-filter-status');
    if (searchInput) searchInput.value = '';
    if (deptFilter) deptFilter.value = 'all';
    if (statusFilter) statusFilter.value = 'all';
    this.renderDirectory();
  }

  renderDirectory() {
    const searchInput = document.getElementById('dir-search-input');
    const deptFilter = document.getElementById('dir-filter-dept');
    const statusFilter = document.getElementById('dir-filter-status');
    const clearBtn = document.getElementById('dir-clear-btn');

    const query = searchInput ? searchInput.value.trim().toLowerCase() : '';
    const selectedDept = deptFilter ? deptFilter.value : 'all';
    const selectedStatus = statusFilter ? statusFilter.value : 'all';

    if (clearBtn) {
      clearBtn.classList.toggle('hidden', !query);
    }

    // Filter logic
    const matched = this.patients.filter(p => {
      // Query match using centralized matcher (supports Patient Name, Applicant No, Full ID, Phone, etc.)
      const matchesQuery = !query || this.matchPatient(p, query);

      // Dept match
      const matchesDept = selectedDept === 'all' || 
        p.visits?.some(v => v.department.toLowerCase() === selectedDept.toLowerCase());

      // Status match
      const hasDues = p.visits?.some(v => v.fee && v.fee.status === 'pending');
      const matchesStatus = selectedStatus === 'all' || 
        (selectedStatus === 'paid' && !hasDues) || 
        (selectedStatus === 'pending' && hasDues);

      return matchesQuery && matchesDept && matchesStatus;
    });

    // Summary counters
    const elMatched = document.getElementById('dir-count-matched');
    const elTotal = document.getElementById('dir-count-total');
    const elCleared = document.getElementById('dir-count-cleared');
    const elDues = document.getElementById('dir-count-dues');

    let totalDuesCount = 0;
    let totalClearedCount = 0;
    this.patients.forEach(p => {
      if (p.visits?.some(v => v.fee && v.fee.status === 'pending')) {
        totalDuesCount++;
      } else {
        totalClearedCount++;
      }
    });

    if (elMatched) elMatched.textContent = matched.length;
    if (elTotal) elTotal.textContent = this.patients.length;
    if (elCleared) elCleared.textContent = totalClearedCount;
    if (elDues) elDues.textContent = totalDuesCount;

    // Show empty state if needed
    const emptyState = document.getElementById('directory-empty-state');
    const tableCont = document.getElementById('directory-table-container');
    const gridCont = document.getElementById('directory-grid-container');

    if (matched.length === 0) {
      if (emptyState) emptyState.classList.remove('hidden');
      if (tableCont) tableCont.classList.add('hidden');
      if (gridCont) gridCont.classList.add('hidden');
      return;
    } else {
      if (emptyState) emptyState.classList.add('hidden');
      this.setDirectoryLayout(this.directoryLayout);
    }

    // Render Table
    this.renderPatientsTable(matched);
    // Render Grid
    this.renderPatientsGrid(matched);
    // Render Experience Reviews
    this.renderExperienceReviews();
  }

  renderPatientsTable(patientsList) {
    const tbody = document.getElementById('patients-table-body');
    if (!tbody) return;

    tbody.innerHTML = patientsList.map(p => {
      const visitCount = p.visits ? p.visits.length : 0;
      const lastVisit = p.visits && p.visits.length > 0 ? p.visits[p.visits.length - 1] : null;
      const hasDues = p.visits?.some(v => v.fee && v.fee.status === 'pending');
      const initials = p.fullName.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();

      return `
        <tr>
          <td>
            <div style="display: flex; flex-direction: column; gap: 4px;">
              <span class="patient-id-tag">${p.id}</span>
              <span class="applicant-badge-pill">Applicant #${String(parseInt(p.id.slice(-4), 10) || 1).padStart(4, '0')}</span>
            </div>
          </td>
          <td>
            <div class="patient-info-cell">
              <div class="patient-mini-avatar">${initials}</div>
              <div>
                <div class="patient-name-title">${this.escapeHTML(p.fullName)}</div>
                <div class="patient-demog-sub">${p.age} Yrs • ${p.gender}</div>
              </div>
            </div>
          </td>
          <td>
            <div style="font-size: 13px; font-weight: 600;">${p.phone}</div>
            <div style="font-size: 11px; color: var(--text-dim);">Reg: ${p.registeredDate}</div>
          </td>
          <td>
            <span class="blood-badge">${p.bloodGroup}</span>
          </td>
          <td>
            <span class="visit-badge-pill">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>
              ${visitCount} ${visitCount === 1 ? 'Visit' : 'Visits'}
            </span>
          </td>
          <td>
            <div style="font-weight: 600; font-size: 13px; max-width: 240px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
              ${lastVisit ? this.escapeHTML(lastVisit.reason) : 'No recorded visits'}
            </div>
            <div style="font-size: 11.5px; color: var(--text-dim);">
              ${lastVisit ? `${lastVisit.department} • ${lastVisit.date}` : '-'}
            </div>
          </td>
          <td>
            <span class="status-badge ${hasDues ? 'pending' : 'paid'}">
              ${hasDues ? 'Pending Due' : 'Fee Settled'}
            </span>
          </td>
          <td class="text-right">
            <div class="action-btn-group" style="flex-wrap: wrap; gap: 4px; justify-content: flex-end;">
              <button class="btn btn-secondary btn-xs" onclick="app.viewPatientDetail('${p.id}')" title="Inspect Full Medical File">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
                <span>Timeline</span>
              </button>
              <button class="btn btn-emerald btn-xs" onclick="app.openLogVisitModal('${p.id}')" title="Log Revisit Consultation">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/></svg>
                <span>+ Revisit</span>
              </button>
              <button class="btn btn-secondary btn-xs" onclick="app.openAccountDetailsModal('${p.id}')" title="Account Details: Edit Name, Email, Phone">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                <span>Account Details</span>
              </button>
              <button class="btn btn-cyan btn-xs" onclick="app.openReviewModal('${p.id}')" title="Review for Users Experience">
                <span>⭐ Review</span>
              </button>
              ${hasDues ? `
                <button class="btn btn-amber btn-xs" onclick="app.openRemindPayModal('${p.id}')" title="Remind to Pay for Patient">
                  <span>🔔 REMIND TO PAY FOR PATIENT</span>
                </button>
              ` : ''}
            </div>
          </td>
        </tr>
      `;
    }).join('');
  }

  renderPatientsGrid(patientsList) {
    const grid = document.getElementById('directory-grid-container');
    if (!grid) return;

    grid.innerHTML = patientsList.map(p => {
      const visitCount = p.visits ? p.visits.length : 0;
      const lastVisit = p.visits && p.visits.length > 0 ? p.visits[p.visits.length - 1] : null;
      const hasDues = p.visits?.some(v => v.fee && v.fee.status === 'pending');
      const initials = p.fullName.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();

      return `
        <div class="patient-grid-card">
          <div>
            <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 14px;">
              <div style="display: flex; flex-direction: column; gap: 4px;">
                <span class="patient-id-tag">${p.id}</span>
                <span class="applicant-badge-pill">Applicant #${String(parseInt(p.id.slice(-4), 10) || 1).padStart(4, '0')}</span>
              </div>
              <span class="status-badge ${hasDues ? 'pending' : 'paid'}">
                ${hasDues ? 'Pending Due' : 'Fee Settled'}
              </span>
            </div>

            <div class="patient-info-cell" style="margin-bottom: 14px;">
              <div class="patient-mini-avatar" style="width: 44px; height: 44px; font-size: 15px;">${initials}</div>
              <div>
                <div class="patient-name-title" style="font-size: 16px;">${this.escapeHTML(p.fullName)}</div>
                <div class="patient-demog-sub">${p.age} Yrs • ${p.gender} • <strong style="color: #fda4af;">${p.bloodGroup}</strong></div>
              </div>
            </div>

            <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid var(--border-color); border-radius: var(--radius-sm); padding: 10px 12px; font-size: 12.5px; margin-bottom: 14px;">
              <div style="color: var(--text-dim); font-size: 11px; text-transform: uppercase;">Latest Treatment Note</div>
              <div style="color: var(--text-main); margin-top: 2px; line-height: 1.4;">
                ${lastVisit ? this.escapeHTML(lastVisit.reason) : 'No documented visits'}
              </div>
            </div>
          </div>

          <div style="display: flex; flex-direction: column; gap: 10px; padding-top: 14px; border-top: 1px solid var(--border-color);">
            <div style="display: flex; align-items: center; justify-content: space-between;">
              <span class="visit-badge-pill">${visitCount} Total Visits</span>
              ${hasDues ? `
                <button class="btn btn-amber btn-xs" onclick="app.openRemindPayModal('${p.id}')">🔔 REMIND TO PAY</button>
              ` : ''}
            </div>
            <div class="action-btn-group" style="flex-wrap: wrap; gap: 5px; justify-content: flex-start;">
              <button class="btn btn-secondary btn-xs" onclick="app.viewPatientDetail('${p.id}')">Dossier</button>
              <button class="btn btn-emerald btn-xs" onclick="app.openLogVisitModal('${p.id}')">+ Revisit</button>
              <button class="btn btn-secondary btn-xs" onclick="app.openAccountDetailsModal('${p.id}')">Account</button>
              <button class="btn btn-cyan btn-xs" onclick="app.openReviewModal('${p.id}')">⭐ Review</button>
            </div>
          </div>
        </div>
      `;
    }).join('');
  }

  // ========================================================
  // 6. PATIENT DETAIL & CHRONOLOGICAL REVISIT TIMELINE
  // ========================================================
  viewPatientDetail(patientId) {
    const patient = this.patients.find(p => p.id === patientId);
    if (!patient) {
      this.showToast(`Patient ${patientId} not found`, 'warning');
      return;
    }

    this.currentPatientId = patientId;

    // Populate Top Master Card
    document.getElementById('detail-breadcrumb-id').textContent = patient.id;
    document.getElementById('detail-patient-id').textContent = patient.id;
    const detailApplicantEl = document.getElementById('detail-applicant-no');
    if (detailApplicantEl) {
      detailApplicantEl.textContent = `Applicant #${String(parseInt(patient.id.slice(-4), 10) || 1).padStart(4, '0')}`;
    }
    document.getElementById('detail-full-name').textContent = patient.fullName;
    document.getElementById('detail-blood-group').textContent = patient.bloodGroup;
    document.getElementById('detail-age-gender').textContent = `${patient.age} Yrs • ${patient.gender}`;
    document.getElementById('detail-phone').textContent = patient.phone;
    document.getElementById('detail-emergency').textContent = patient.emergencyContact || 'None provided';
    document.getElementById('detail-registered-date').textContent = patient.registeredDate;
    document.getElementById('detail-allergies').textContent = patient.allergies || 'None reported';
    document.getElementById('detail-chronic').textContent = patient.chronicConditions || 'None reported';

    const initials = patient.fullName.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
    document.getElementById('detail-avatar').textContent = initials;

    const visitCount = patient.visits ? patient.visits.length : 0;
    document.getElementById('detail-visit-count').textContent = visitCount;
    document.getElementById('detail-first-visit-date').textContent = patient.registeredDate;

    // Payment Pill
    const hasDues = patient.visits?.some(v => v.fee && v.fee.status === 'pending');
    const payPill = document.getElementById('detail-payment-pill');
    if (payPill) {
      payPill.className = `status-badge ${hasDues ? 'pending' : 'paid'}`;
      payPill.textContent = hasDues ? 'Pending Dues' : 'Fee Cleared';
    }

    // Render Timeline Track
    this.renderPatientTimeline(patient);

    // Navigate to Detail View
    this.navigate('patient-detail');
  }

  renderPatientTimeline(patient) {
    const track = document.getElementById('patient-timeline-track');
    if (!track) return;

    if (!patient.visits || patient.visits.length === 0) {
      track.innerHTML = `
        <div class="empty-state glass-card">
          <h3>No Consultation History Found</h3>
          <p>Click "Log New Revisit Consultation" to create the initial examination record.</p>
        </div>
      `;
      return;
    }

    // Sort in reverse chronological order (latest visit first) for easy review by faculty
    const sortedVisits = [...patient.visits].reverse();

    track.innerHTML = sortedVisits.map((v, index) => {
      const isFirst = v.visitNumber === 1;
      const isPending = v.fee && v.fee.status === 'pending';

      return `
        <div class="timeline-node ${isFirst ? 'initial-consultation' : 'revisit-consultation'}">
          <div class="node-dot">${v.visitNumber}</div>

          <div class="visit-card">
            <div class="visit-card-header">
              <div>
                <div class="visit-badge-title">
                  <span class="visit-seq-tag">${isFirst ? 'INITIAL ADMISSION' : `REVISIT #${v.visitNumber}`}</span>
                  <span class="visit-date">${v.date}</span>
                  <span class="dept-tag ${v.department.toLowerCase().replace(/\s+/g, '')}">${v.department}</span>
                </div>
                <div class="visit-doc" style="margin-top: 4px;">
                  Attending Faculty: <strong>${this.escapeHTML(v.attendingDoctor)}</strong>
                </div>
              </div>

              <div>
                ${v.fee ? `
                  <span class="status-badge ${isPending ? 'pending' : 'paid'}">
                    ₹${v.fee.amount} • ${isPending ? 'Pending' : 'Cashless Paid'}
                  </span>
                ` : ''}
              </div>
            </div>

            <!-- Vitals Bar -->
            <div class="vitals-summary-strip">
              <div class="vital-tag"><span>BP:</span> <strong>${v.vitals?.bp || '120/80'}</strong></div>
              <div class="vital-tag"><span>Pulse:</span> <strong>${v.vitals?.hr || '74 bpm'}</strong></div>
              <div class="vital-tag"><span>SpO2:</span> <strong>${v.vitals?.spo2 || '99%'}</strong></div>
              <div class="vital-tag"><span>Temp:</span> <strong>${v.vitals?.temp || '98.4°F'}</strong></div>
              ${v.vitals?.weight ? `<div class="vital-tag"><span>Weight:</span> <strong>${v.vitals.weight}</strong></div>` : ''}
            </div>

            <div class="visit-grid-details">
              <div class="detail-block">
                <h4>Reason for Visit / Chief Complaint</h4>
                <p>${this.escapeHTML(v.reason)}</p>
              </div>

              <div class="detail-block">
                <h4>Clinical Diagnosis & Assessment</h4>
                <p><strong>${this.escapeHTML(v.diagnosis)}</strong></p>
              </div>
            </div>

            <!-- Prescriptions -->
            ${v.prescriptions && v.prescriptions.length > 0 ? `
              <div class="prescription-box detail-block">
                <h4>Prescribed Treatment & Medications</h4>
                <ul>
                  ${v.prescriptions.map(med => `<li>${this.escapeHTML(med)}</li>`).join('')}
                </ul>
              </div>
            ` : ''}

            <!-- Doctor Notes & Actions -->
            <div class="visit-card-footer mt-4">
              <div>
                <span style="color: var(--text-dim);">Doctor Advice:</span>
                <span style="color: var(--text-muted);">${v.notes ? this.escapeHTML(v.notes) : 'Standard routine care.'}</span>
              </div>
              <div>
                ${isPending ? `
                  <button class="btn btn-primary btn-xs" onclick="app.openPaymentModalForVisit('${patient.id}', '${v.visitId}')">
                    <span>Clear Fee via Cashless Desk</span>
                  </button>
                ` : `
                  <button class="btn btn-secondary btn-xs" onclick="app.viewOfficialReceipt('${patient.id}', '${v.visitId}')">
                    <span>View Receipt</span>
                  </button>
                `}
              </div>
            </div>
          </div>
        </div>
      `;
    }).join('');
  }

  printPatientDossier() {
    window.print();
  }

  // ========================================================
  // 7. FACULTY REVISIT CONSULTATION LOGGER MODAL
  // ========================================================
  openLogVisitModal(patientId) {
    const targetId = patientId || this.currentPatientId;
    if (!targetId) {
      this.showToast('Please select a patient first', 'warning');
      return;
    }

    const patient = this.patients.find(p => p.id === targetId);
    if (!patient) return;

    this.currentPatientId = targetId;

    // Fill Modal Quick Summary
    document.getElementById('revisit-patient-id').value = patient.id;
    document.getElementById('revisit-modal-patient-header').textContent = `${patient.fullName} (${patient.id})`;
    document.getElementById('revisit-summary-name').textContent = patient.fullName;
    document.getElementById('revisit-summary-count').textContent = patient.visits ? patient.visits.length : 0;
    document.getElementById('revisit-summary-blood').textContent = patient.bloodGroup;

    const lastVisit = patient.visits && patient.visits.length > 0 ? patient.visits[patient.visits.length - 1] : null;
    document.getElementById('revisit-summary-last-reason').textContent = lastVisit ? lastVisit.reason.substring(0, 40) + '...' : 'None';

    // Reset Form Fields with smart clinical defaults
    document.getElementById('revisit-bp').value = "120/80";
    document.getElementById('revisit-hr').value = "76";
    document.getElementById('revisit-spo2').value = "99";
    document.getElementById('revisit-temp').value = "98.4";
    document.getElementById('revisit-weight').value = "70";
    document.getElementById('revisit-reason').value = "";
    document.getElementById('revisit-diagnosis').value = "";
    document.getElementById('revisit-prescriptions').value = "";
    document.getElementById('revisit-notes').value = "";
    document.getElementById('revisit-fee').value = "400";

    const modal = document.getElementById('modal-log-revisit');
    if (modal) modal.classList.remove('hidden');
  }

  handleRevisitSubmit(event) {
    event.preventDefault();
    const patientId = document.getElementById('revisit-patient-id').value;
    const patient = this.patients.find(p => p.id === patientId);
    if (!patient) return;

    const bp = document.getElementById('revisit-bp').value.trim() || '120/80';
    const hr = document.getElementById('revisit-hr').value.trim() || '76';
    const spo2 = document.getElementById('revisit-spo2').value.trim() || '98';
    const temp = document.getElementById('revisit-temp').value.trim() || '98.4';
    const weight = document.getElementById('revisit-weight').value.trim() || '70';

    const department = document.getElementById('revisit-dept').value;
    const doctor = document.getElementById('revisit-doctor').value.trim();
    const reason = document.getElementById('revisit-reason').value.trim();
    const diagnosis = document.getElementById('revisit-diagnosis').value.trim();
    const prescriptionsText = document.getElementById('revisit-prescriptions').value.trim();
    const notes = document.getElementById('revisit-notes').value.trim();
    const feeAmount = parseInt(document.getElementById('revisit-fee').value, 10) || 400;
    const paymentMode = document.getElementById('revisit-payment-mode').value;

    const prescriptions = prescriptionsText ? prescriptionsText.split('\n').filter(p => p.trim().length > 0) : [];

    const newVisitNumber = (patient.visits ? patient.visits.length : 0) + 1;
    const todayStr = this.formatDate(new Date());
    const invoiceId = `INV-2026-${String(Math.floor(100 + Math.random() * 900))}`;

    const newVisit = {
      visitId: `VIS-${Date.now().toString().slice(-4)}`,
      visitNumber: newVisitNumber,
      date: todayStr,
      department: department,
      attendingDoctor: doctor,
      reason: reason,
      vitals: {
        bp: `${bp} mmHg`,
        hr: `${hr} bpm`,
        spo2: `${spo2}%`,
        temp: `${temp}°F`,
        weight: `${weight} kg`
      },
      diagnosis: diagnosis,
      prescriptions: prescriptions,
      notes: notes,
      fee: {
        amount: feeAmount,
        status: "pending",
        invoiceId: invoiceId,
        txnRef: null
      }
    };

    if (!patient.visits) patient.visits = [];
    patient.visits.push(newVisit);

    this.saveDatabase();
    this.closeModal('modal-log-revisit');
    this.updateStatsUI();

    this.showToast(`Revisit #${newVisitNumber} logged successfully for ${patient.fullName}!`, 'success');
    this.playSound('success');

    // Refresh view
    if (this.currentView === 'patient-detail' && this.currentPatientId === patient.id) {
      this.viewPatientDetail(patient.id);
    } else {
      this.renderDirectory();
    }

    // Open cashless payment gateway if requested
    if (paymentMode === 'open_pay_modal') {
      this.openPaymentModalForVisit(patient.id, newVisit.visitId);
    }
  }

  // ========================================================
  // 8. FIRST-TIME PATIENT REGISTRATION
  // ========================================================
  updateRegistrationPreview() {
    const nextId = this.getNextPatientId();
    const nameInput = document.getElementById('reg-fullname');
    const ageInput = document.getElementById('reg-age');
    const genderInput = document.getElementById('reg-gender');
    const bloodInput = document.getElementById('reg-blood');

    const previewId = document.getElementById('preview-assigned-id');
    const previewName = document.getElementById('preview-card-name');
    const previewBlood = document.getElementById('preview-card-blood');
    const previewDemog = document.getElementById('preview-card-demog');

    if (previewId) previewId.textContent = nextId;
    if (previewName) previewName.textContent = nameInput && nameInput.value.trim() ? nameInput.value.trim() : "Patient Full Name";
    if (previewBlood) previewBlood.textContent = bloodInput && bloodInput.value ? bloodInput.value : "O+";
    if (previewDemog) {
      const ageVal = ageInput && ageInput.value ? `${ageInput.value} Y` : "-- Y";
      const genderVal = genderInput && genderInput.value ? genderInput.value[0].toUpperCase() : "-";
      previewDemog.textContent = `${ageVal} / ${genderVal}`;
    }
  }

  handlePatientRegistration(event) {
    event.preventDefault();

    const fullName = document.getElementById('reg-fullname').value.trim();
    const age = parseInt(document.getElementById('reg-age').value, 10);
    const gender = document.getElementById('reg-gender').value;
    const phone = document.getElementById('reg-phone').value.trim();
    const bloodGroup = document.getElementById('reg-blood').value;
    const emergency = document.getElementById('reg-emergency').value.trim();

    const department = document.getElementById('reg-dept').value;
    const doctor = document.getElementById('reg-doctor').value;
    const reason = document.getElementById('reg-reason').value.trim();
    const allergies = document.getElementById('reg-allergies').value.trim();
    const chronic = document.getElementById('reg-chronic').value.trim();
    const feeAmount = parseInt(document.getElementById('reg-fee').value, 10) || 500;
    const payMode = document.getElementById('reg-pay-now').value;

    const assignedId = this.getNextPatientId();
    const todayStr = this.formatDate(new Date());
    const invoiceId = `INV-2026-${String(Math.floor(100 + Math.random() * 900))}`;

    const newPatient = {
      id: assignedId,
      fullName: fullName,
      age: age,
      gender: gender,
      phone: phone,
      bloodGroup: bloodGroup,
      emergencyContact: emergency || 'Not provided',
      registeredDate: todayStr,
      allergies: allergies || 'None reported',
      chronicConditions: chronic || 'None reported',
      visits: [
        {
          visitId: `VIS-${Date.now().toString().slice(-4)}`,
          visitNumber: 1,
          date: todayStr,
          department: department,
          attendingDoctor: doctor,
          reason: reason,
          vitals: {
            bp: "120/80 mmHg",
            hr: "76 bpm",
            spo2: "99%",
            temp: "98.4°F",
            weight: "68 kg"
          },
          diagnosis: "Initial clinical evaluation completed. Baseline laboratory investigations advised.",
          prescriptions: ["Standard medical baseline profile ordered."],
          notes: "Patient registered in MVSR Healthcare master index. Health card issued.",
          fee: {
            amount: feeAmount,
            status: "pending",
            invoiceId: invoiceId,
            txnRef: null
          }
        }
      ]
    };

    this.patients.unshift(newPatient);
    this.saveDatabase();
    this.updateStatsUI();
    this.updateNavBadges();

    // Trigger celebration confetti
    this.triggerConfetti();
    this.playSound('success');
    this.showToast(`Patient ${fullName} registered with ID ${assignedId}!`, 'success');

    // Reset Form
    document.getElementById('new-patient-form').reset();
    this.updateRegistrationPreview();

    // Either open payment or navigate to patient dossier
    if (payMode === 'pay_now') {
      this.openPaymentModalForVisit(assignedId, newPatient.visits[0].visitId);
    } else {
      this.viewPatientDetail(assignedId);
    }
  }

  // ========================================================
  // 9. CASHLESS FEE PAYMENT PORTAL & MODALS
  // ========================================================
  renderPaymentTable() {
    const tbody = document.getElementById('payments-table-body');
    const searchInput = document.getElementById('payment-search');
    const query = searchInput ? searchInput.value.trim().toLowerCase() : '';

    if (!tbody) return;

    const invoices = [];
    this.patients.forEach(p => {
      p.visits?.forEach(v => {
        if (v.fee) {
          invoices.push({
            patientId: p.id,
            patientName: p.fullName,
            visitId: v.visitId,
            visitNumber: v.visitNumber,
            date: v.date,
            department: v.department,
            reason: v.reason,
            fee: v.fee
          });
        }
      });
    });

    // Filter
    const matched = invoices.filter(inv => {
      if (!query) return true;
      const patient = this.patients.find(p => p.id === inv.patientId);
      const matchesPatient = patient ? this.matchPatient(patient, query) : false;
      return (
        matchesPatient ||
        inv.patientId.toLowerCase().includes(query) ||
        inv.patientName.toLowerCase().includes(query) ||
        inv.fee.invoiceId.toLowerCase().includes(query) ||
        inv.department.toLowerCase().includes(query)
      );
    });

    if (matched.length === 0) {
      tbody.innerHTML = `
        <tr>
          <td colspan="8" style="text-align: center; padding: 24px; color: var(--text-dim);">
            No billing records match your query.
          </td>
        </tr>
      `;
      return;
    }

    tbody.innerHTML = matched.map(inv => {
      const isPending = inv.fee.status === 'pending';
      return `
        <tr>
          <td>
            <span style="font-family: var(--font-mono); font-weight: 700; color: var(--cyan);">${inv.fee.invoiceId}</span>
          </td>
          <td>
            <div style="font-weight: 700;">${this.escapeHTML(inv.patientName)}</div>
            <div style="font-size: 11.5px; font-family: var(--font-mono); color: var(--text-dim);">${inv.patientId}</div>
          </td>
          <td>
            <span class="dept-tag ${inv.department.toLowerCase().replace(/\s+/g, '')}">${inv.department}</span>
          </td>
          <td>
            <div style="font-size: 13px;">${inv.date}</div>
            <div style="font-size: 11px; color: var(--text-dim);">${inv.visitNumber === 1 ? '1st Visit' : `Revisit #${inv.visitNumber}`}</div>
          </td>
          <td>
            <div style="font-size: 12.5px; max-width: 200px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
              ${this.escapeHTML(inv.reason)}
            </div>
          </td>
          <td>
            <span style="font-size: 15px; font-weight: 800; color: ${isPending ? '#fde68a' : '#6ee7b7'};">
              ₹${inv.fee.amount}
            </span>
          </td>
          <td>
            <span class="status-badge ${isPending ? 'pending' : 'paid'}">
              ${isPending ? 'Pending Due' : 'Cashless Cleared'}
            </span>
          </td>
          <td class="text-right">
            ${isPending ? `
              <button class="btn btn-primary btn-xs btn-glow" onclick="app.openPaymentModalForVisit('${inv.patientId}', '${inv.visitId}')">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>
                <span>Clear Now</span>
              </button>
            ` : `
              <button class="btn btn-secondary btn-xs" onclick="app.viewOfficialReceipt('${inv.patientId}', '${inv.visitId}')">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect width="12" height="8" x="6" y="14"/></svg>
                <span>Receipt</span>
              </button>
            `}
          </td>
        </tr>
      `;
    }).join('');
  }

  openDirectPaymentForPatient(patientId) {
    const patient = this.patients.find(p => p.id === patientId);
    if (!patient) return;

    const pendingVisit = patient.visits?.find(v => v.fee && v.fee.status === 'pending');
    if (pendingVisit) {
      this.openPaymentModalForVisit(patient.id, pendingVisit.visitId);
    } else {
      this.showToast(`${patient.fullName} has no pending fee dues.`, 'info');
    }
  }

  openPaymentModalForVisit(patientId, visitId) {
    const patient = this.patients.find(p => p.id === patientId);
    if (!patient) return;
    const visit = patient.visits?.find(v => v.visitId === visitId);
    if (!visit || !visit.fee) return;

    this.activePendingBill = {
      patientId: patient.id,
      patientName: patient.fullName,
      visitId: visit.visitId,
      fee: visit.fee,
      reason: visit.reason,
      dept: visit.department,
      date: visit.date
    };

    document.getElementById('pay-modal-patient-id').textContent = patient.id;
    document.getElementById('pay-modal-patient-name').textContent = patient.fullName;
    document.getElementById('pay-modal-reason').textContent = `${visit.department} • ${visit.reason.substring(0, 38)}...`;
    document.getElementById('pay-modal-amount').textContent = `₹${visit.fee.amount}`;

    const simName = document.getElementById('sim-card-name-display');
    if (simName) simName.textContent = patient.fullName.toUpperCase();

    // Default to UPI
    this.switchPayTab('upi');

    const modal = document.getElementById('modal-payment-gateway');
    if (modal) modal.classList.remove('hidden');
    this.playSound('pop');
  }

  switchPayTab(tabName) {
    document.querySelectorAll('.pay-tab').forEach(b => {
      b.classList.toggle('active', b.dataset.tab === tabName);
    });
    document.querySelectorAll('.payment-tab-panel').forEach(p => {
      p.classList.remove('active');
    });
    const panel = document.getElementById(`pay-tab-${tabName}`);
    if (panel) panel.classList.add('active');
  }

  simulatePaymentSuccess(paymentMethod) {
    if (!this.activePendingBill) return;

    const { patientId, visitId } = this.activePendingBill;
    const patient = this.patients.find(p => p.id === patientId);
    if (!patient) return;

    const visit = patient.visits?.find(v => v.visitId === visitId);
    if (!visit || !visit.fee) return;

    const txnRef = `TXN${Date.now().toString().slice(-8)}`;

    visit.fee.status = 'paid';
    visit.fee.txnRef = txnRef;
    visit.fee.paidDate = new Date().toLocaleString();
    visit.fee.paymentMethod = paymentMethod;

    this.saveDatabase();
    this.closeModal('modal-payment-gateway');

    this.triggerConfetti();
    this.playSound('success');
    this.showToast(`Payment of ₹${visit.fee.amount} approved successfully via ${paymentMethod}!`, 'success');

    this.updateStatsUI();

    // Refresh whichever view is open
    if (this.currentView === 'payments') {
      this.renderPaymentTable();
    } else if (this.currentView === 'patient-detail') {
      this.viewPatientDetail(patient.id);
    } else {
      this.renderDirectory();
    }

    // Automatically open stamped digital receipt
    setTimeout(() => {
      this.viewOfficialReceipt(patient.id, visit.visitId);
    }, 450);
  }

  viewOfficialReceipt(patientId, visitId) {
    const patient = this.patients.find(p => p.id === patientId);
    if (!patient) return;

    const visit = patient.visits?.find(v => v.visitId === visitId);
    if (!visit || !visit.fee) return;

    document.getElementById('receipt-no').textContent = visit.fee.invoiceId || 'MVSR-REC-001';
    document.getElementById('receipt-date').textContent = visit.fee.paidDate || `${visit.date}, 11:30 AM`;
    document.getElementById('receipt-patient-id').textContent = patient.id;
    document.getElementById('receipt-patient-name').textContent = patient.fullName;
    document.getElementById('receipt-pay-method').textContent = visit.fee.paymentMethod || 'Cashless UPI Instant Pay';
    document.getElementById('receipt-txn-ref').textContent = visit.fee.txnRef || 'TXN94829103';

    const itemsBody = document.getElementById('receipt-items-body');
    if (itemsBody) {
      itemsBody.innerHTML = `
        <tr>
          <td>Medical Consultation & Diagnostic Assessment (${visit.visitNumber === 1 ? '1st Visit' : `Revisit #${visit.visitNumber}`})</td>
          <td>${visit.department}</td>
          <td class="text-right">₹${visit.fee.amount}.00</td>
        </tr>
      `;
    }

    document.getElementById('receipt-total-amount').textContent = `₹${visit.fee.amount}.00`;

    const modal = document.getElementById('modal-receipt');
    if (modal) modal.classList.remove('hidden');
    this.playSound('pop');
  }

  // ========================================================
  // 10. MODALS & EXPORT HELPERS
  // ========================================================
  closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) modal.classList.add('hidden');
  }

  closeModalOnBackdrop(event, modalId) {
    if (event.target && event.target.id === modalId) {
      this.closeModal(modalId);
    }
  }

  closeAllModals() {
    document.querySelectorAll('.modal-backdrop').forEach(m => m.classList.add('hidden'));
  }

  exportPatientsJSON() {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(this.patients, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `mvsr_healthcare_master_ledger_${Date.now()}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
    this.showToast('Master Patient Ledger exported as JSON', 'success');
  }

  toggleTheme() {
    document.body.classList.toggle('theme-light');
    const isLight = document.body.classList.contains('theme-light');
    const iconMoon = document.querySelector('.icon-moon');
    const iconSun = document.querySelector('.icon-sun');
    if (iconMoon) iconMoon.classList.toggle('hidden', isLight);
    if (iconSun) iconSun.classList.toggle('hidden', !isLight);
    this.showToast(`Switched to ${isLight ? 'Clinical Clean Light' : 'High-Tech Dark'} Mode`, 'info');
  }

  // ========================================================
  // 11. DELIGHTFUL UX: CONFETTI & AUDIO SYNTHESIS
  // ========================================================
  initConfetti() {
    const canvas = document.getElementById('confetti-canvas');
    if (!canvas) return;
    this.confettiCtx = canvas.getContext('2d');
    this.confettiParticles = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resize);
    resize();
  }

  triggerConfetti() {
    const canvas = document.getElementById('confetti-canvas');
    if (!canvas || !this.confettiCtx) return;

    const colors = ['#0EA5E9', '#10B981', '#38BDF8', '#34D399', '#F59E0B', '#F43F5E', '#A855F7'];
    this.confettiParticles = [];

    for (let i = 0; i < 110; i++) {
      this.confettiParticles.push({
        x: canvas.width / 2 + (Math.random() - 0.5) * 200,
        y: canvas.height * 0.4 + (Math.random() - 0.5) * 100,
        vx: (Math.random() - 0.5) * 16,
        vy: (Math.random() - 1.2) * 15,
        size: Math.random() * 8 + 4,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * 360,
        rotSpeed: (Math.random() - 0.5) * 12,
        alpha: 1,
        gravity: 0.38
      });
    }

    const animateConfetti = () => {
      if (this.confettiParticles.length === 0) {
        this.confettiCtx.clearRect(0, 0, canvas.width, canvas.height);
        return;
      }

      this.confettiCtx.clearRect(0, 0, canvas.width, canvas.height);

      this.confettiParticles.forEach((p, idx) => {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += p.gravity;
        p.rotation += p.rotSpeed;
        p.alpha -= 0.012;

        if (p.alpha > 0) {
          this.confettiCtx.save();
          this.confettiCtx.globalAlpha = p.alpha;
          this.confettiCtx.translate(p.x, p.y);
          this.confettiCtx.rotate((p.rotation * Math.PI) / 180);
          this.confettiCtx.fillStyle = p.color;
          this.confettiCtx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
          this.confettiCtx.restore();
        }
      });

      this.confettiParticles = this.confettiParticles.filter(p => p.alpha > 0 && p.y < canvas.height);
      requestAnimationFrame(animateConfetti);
    };

    animateConfetti();
  }

  // Non-intrusive Web Audio API sound generator
  playSound(type) {
    try {
      if (!this.audioContext) {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (AudioCtx) this.audioContext = new AudioCtx();
      }
      if (!this.audioContext || this.audioContext.state === 'suspended') {
        this.audioContext?.resume();
      }

      const ctx = this.audioContext;
      if (!ctx) return;

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);

      const now = ctx.currentTime;

      if (type === 'success') {
        // High, joyful dual chime
        osc.frequency.setValueAtTime(523.25, now); // C5
        osc.frequency.exponentialRampToValueAtTime(783.99, now + 0.12); // G5
        gain.gain.setValueAtTime(0.08, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
        osc.start(now);
        osc.stop(now + 0.35);
      } else if (type === 'click') {
        // Soft tactile tap
        osc.frequency.setValueAtTime(440, now);
        gain.gain.setValueAtTime(0.03, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
        osc.start(now);
        osc.stop(now + 0.08);
      } else if (type === 'pop') {
        // Modal entry pop
        osc.frequency.setValueAtTime(320, now);
        osc.frequency.exponentialRampToValueAtTime(580, now + 0.08);
        gain.gain.setValueAtTime(0.05, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.18);
        osc.start(now);
        osc.stop(now + 0.18);
      }
    } catch (e) {
      // Audio playback fails gracefully if unpermitted by browser
    }
  }

  // Toast Notification System
  showToast(message, type = 'info') {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `toast ${type}`;

    let icon = 'ℹ️';
    if (type === 'success') icon = '✅';
    if (type === 'warning') icon = '⚠️';

    toast.innerHTML = `
      <span>${icon}</span>
      <span>${this.escapeHTML(message)}</span>
    `;

    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 3500);
  }

  // Utility Date Formatter
  formatDate(d) {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const day = String(d.getDate()).padStart(2, '0');
    const month = months[d.getMonth()];
    const year = d.getFullYear();
    return `${day} ${month} ${year}`;
  }

  escapeHTML(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  // ========================================================
  // 12. REMIND TO PAY FOR PATIENT
  // ========================================================
  openRemindPayModal(patientId) {
    const patient = this.patients.find(p => p.id === patientId);
    if (!patient) return;

    const pendingVisit = patient.visits?.find(v => v.fee && v.fee.status === 'pending');
    const amountDue = pendingVisit ? pendingVisit.fee.amount : 0;
    const dept = pendingVisit ? pendingVisit.department : 'General Medicine';

    this.currentPatientId = patient.id;
    document.getElementById('remind-patient-id').value = patient.id;
    document.getElementById('remind-card-id').textContent = patient.id;
    document.getElementById('remind-card-name').textContent = patient.fullName;
    document.getElementById('remind-card-phone').textContent = `${patient.phone} • ${patient.email || 'patient@email.com'}`;
    document.getElementById('remind-card-amount').textContent = `₹${amountDue}`;

    const msg = `Dear ${patient.fullName}, thank you for visiting MVSR Healthcare Facility (${dept}). A consultation fee of ₹${amountDue} is pending. Please clear your dues cashlessly using this secure link: https://mvsr.health/pay/${patient.id}. No cash counter queue required!`;
    document.getElementById('remind-preview-content').textContent = msg;

    const modal = document.getElementById('modal-remind-pay');
    if (modal) modal.classList.remove('hidden');
    this.playSound('pop');
  }

  sendPaymentReminder(channel) {
    const patientId = document.getElementById('remind-patient-id').value;
    const patient = this.patients.find(p => p.id === patientId);
    if (!patient) return;

    const contactDest = channel === 'Email' ? (patient.email || 'registered email') : patient.phone;
    this.playSound('success');
    this.showToast(`Digital payment reminder dispatched via ${channel} to ${patient.fullName} (${contactDest})!`, 'success');
  }

  copyPaymentLink() {
    const patientId = document.getElementById('remind-patient-id').value;
    const payUrl = `https://mvsr.health/pay/${patientId || 'MVSR-2026-0001'}`;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(payUrl);
    }
    this.showToast(`Cashless Payment Link copied: ${payUrl}`, 'info');
  }

  proceedToPayFromRemind() {
    const patientId = document.getElementById('remind-patient-id').value;
    this.closeModal('modal-remind-pay');
    this.openDirectPaymentForPatient(patientId);
  }

  openAccountModalFromRemind() {
    const patientId = document.getElementById('remind-patient-id').value;
    this.closeModal('modal-remind-pay');
    this.openAccountDetailsModal(patientId);
  }

  // ========================================================
  // 13. ACCOUNT DETAILS (EDIT NAME, EMAIL, PHONE, ETC.)
  // ========================================================
  openAccountDetailsModal(patientId) {
    const patient = this.patients.find(p => p.id === patientId);
    if (!patient) return;

    document.getElementById('acc-patient-id').value = patient.id;
    document.getElementById('acc-name').value = patient.fullName || '';
    document.getElementById('acc-email').value = patient.email || `${patient.fullName.toLowerCase().replace(/\s+/g, '.')}@email.com`;
    document.getElementById('acc-phone').value = patient.phone || '';
    document.getElementById('acc-age').value = patient.age || '';
    document.getElementById('acc-gender').value = patient.gender || 'Male';
    document.getElementById('acc-blood').value = patient.bloodGroup || 'O+';
    document.getElementById('acc-emergency').value = patient.emergencyContact || '';
    document.getElementById('acc-address').value = patient.address || 'Hyderabad, Telangana';
    document.getElementById('acc-allergies').value = patient.allergies || '';

    const modal = document.getElementById('modal-account-details');
    if (modal) modal.classList.remove('hidden');
    this.playSound('pop');
  }

  handleAccountSave(event) {
    event.preventDefault();
    const patientId = document.getElementById('acc-patient-id').value;
    const patient = this.patients.find(p => p.id === patientId);
    if (!patient) return;

    patient.fullName = document.getElementById('acc-name').value.trim();
    patient.email = document.getElementById('acc-email').value.trim();
    patient.phone = document.getElementById('acc-phone').value.trim();
    patient.age = parseInt(document.getElementById('acc-age').value, 10) || patient.age;
    patient.gender = document.getElementById('acc-gender').value;
    patient.bloodGroup = document.getElementById('acc-blood').value;
    patient.emergencyContact = document.getElementById('acc-emergency').value.trim();
    patient.address = document.getElementById('acc-address').value.trim();
    patient.allergies = document.getElementById('acc-allergies').value.trim();

    this.saveDatabase();
    this.closeModal('modal-account-details');
    this.playSound('success');
    this.showToast(`Account profile for ${patient.fullName} (${patient.id}) successfully updated!`, 'success');

    // Refresh whichever view is open
    if (this.currentView === 'directory') {
      this.renderDirectory();
    } else if (this.currentView === 'patient-detail' && this.currentPatientId === patient.id) {
      this.viewPatientDetail(patient.id);
    } else if (this.currentView === 'payments') {
      this.renderPaymentTable();
    }
  }

  // ========================================================
  // 14. SUPPORT DETAILS
  // ========================================================
  openSupportModal() {
    const modal = document.getElementById('modal-support-details');
    if (modal) modal.classList.remove('hidden');
    this.playSound('pop');
  }

  submitSupportInquiry() {
    const input = document.getElementById('support-inquiry-text');
    const query = input ? input.value.trim() : '';
    if (!query) {
      this.showToast('Please describe your question or assistance needed', 'warning');
      return;
    }

    const ticketId = `TKT-${Math.floor(1000 + Math.random() * 9000)}`;
    this.playSound('success');
    this.showToast(`Support Ticket ${ticketId} created! Care coordinator will connect shortly.`, 'success');
    if (input) input.value = '';
    this.closeModal('modal-support-details');
  }

  // ========================================================
  // 15. REVIEW FOR USERS EXPERIENCE (VISIT QUALITY)
  // ========================================================
  initExperienceReviews() {
    const saved = localStorage.getItem('MVSR_HEALTHCARE_REVIEWS');
    if (saved) {
      try {
        this.experienceReviews = JSON.parse(saved);
      } catch (e) {
        this.loadDefaultReviews();
      }
    } else {
      this.loadDefaultReviews();
    }
  }

  loadDefaultReviews() {
    this.experienceReviews = [
      {
        id: "REV-101",
        patientName: "Rajesh Kumar",
        department: "Cardiology",
        date: "04 Sep 2026",
        rating: 5,
        improvementSuggestion: "Digital token display in second-floor waiting area",
        comment: "Dr. Prasad and Dr. Radhika Sen were exceptional. Reviewing my 4 past visits on their screen was fast and reassuring!",
        ratings: { consult: 5, wait: 5, clean: 5, billing: 5 }
      },
      {
        id: "REV-102",
        patientName: "Ananya Sharma",
        department: "Neurology",
        date: "02 Sep 2026",
        rating: 5,
        improvementSuggestion: "SMS notification 10 minutes prior to turn",
        comment: "Prophylaxis prescription reduced my migraines drastically. Cashless billing feature saved so much waiting time!",
        ratings: { consult: 5, wait: 4, clean: 5, billing: 5 }
      },
      {
        id: "REV-103",
        patientName: "Mohammed Farooq",
        department: "Orthopedics",
        date: "01 Sep 2026",
        rating: 5,
        improvementSuggestion: "Dedicated physiotherapist check-in counter",
        comment: "Rehabilitation plan for my knee ligament was spot on. Cleared to play again with zero complications.",
        ratings: { consult: 5, wait: 5, clean: 5, billing: 4 }
      },
      {
        id: "REV-104",
        patientName: "Venkat Reddy (Parent of Sneha)",
        department: "Pediatrics",
        date: "03 Sep 2026",
        rating: 5,
        improvementSuggestion: "Keep this high standard always - truly amazing facility!",
        comment: "Dr. Sunita Murthy is very caring with children. The automated Health Card and instant receipt download are wonderful.",
        ratings: { consult: 5, wait: 5, clean: 5, billing: 5 }
      }
    ];
    this.saveReviews();
  }

  saveReviews() {
    localStorage.setItem('MVSR_HEALTHCARE_REVIEWS', JSON.stringify(this.experienceReviews));
  }

  renderExperienceReviews() {
    const feed = document.getElementById('experience-reviews-feed');
    if (!feed) return;

    if (!this.experienceReviews || this.experienceReviews.length === 0) {
      feed.innerHTML = `<p style="color: var(--text-muted); font-size: 13px;">No patient experience reviews yet. Be the first to share your visit review!</p>`;
      return;
    }

    // Compute average score
    let totalScore = 0;
    let totalConsult = 0;
    let totalWait = 0;
    let totalClean = 0;
    let totalBilling = 0;
    const count = this.experienceReviews.length;

    this.experienceReviews.forEach(r => {
      totalScore += r.rating;
      if (r.ratings) {
        totalConsult += (r.ratings.consult || 5);
        totalWait += (r.ratings.wait || 5);
        totalClean += (r.ratings.clean || 5);
        totalBilling += (r.ratings.billing || 5);
      } else {
        totalConsult += 5; totalWait += 5; totalClean += 5; totalBilling += 5;
      }
    });

    const avgScore = (totalScore / count).toFixed(1);
    const avgConsult = (totalConsult / count).toFixed(1);
    const avgWait = (totalWait / count).toFixed(1);
    const avgClean = (totalClean / count).toFixed(1);
    const avgBilling = (totalBilling / count).toFixed(1);

    const elAvg = document.getElementById('avg-review-score');
    if (elAvg) elAvg.textContent = avgScore;

    const elConsult = document.getElementById('metric-consult-rating');
    const elWait = document.getElementById('metric-wait-rating');
    const elClean = document.getElementById('metric-clean-rating');
    const elBilling = document.getElementById('metric-pay-rating');

    if (elConsult) elConsult.textContent = `${avgConsult} ★`;
    if (elWait) elWait.textContent = `${avgWait} ★`;
    if (elClean) elClean.textContent = `${avgClean} ★`;
    if (elBilling) elBilling.textContent = `${avgBilling} ★`;

    // Render Review Cards
    feed.innerHTML = this.experienceReviews.slice(0, 6).map(rev => {
      const starsStr = '★'.repeat(rev.rating) + '☆'.repeat(5 - rev.rating);
      return `
        <div class="user-experience-card">
          <div>
            <div class="ue-top">
              <span class="ue-author">${this.escapeHTML(rev.patientName)}</span>
              <span class="ue-stars">${starsStr}</span>
            </div>
            ${rev.improvementSuggestion ? `
              <div class="ue-improvement-tag">💡 To be amazing: ${this.escapeHTML(rev.improvementSuggestion)}</div>
            ` : ''}
            <div class="ue-comment">"${this.escapeHTML(rev.comment)}"</div>
          </div>
          <div class="ue-meta">
            <span>${rev.department}</span> • <span>${rev.date}</span>
          </div>
        </div>
      `;
    }).join('');
  }

  openReviewModal(patientId) {
    const select = document.getElementById('rev-patient-select');
    if (select) {
      select.innerHTML = this.patients.map(p => `
        <option value="${p.id}" ${patientId === p.id ? 'selected' : ''}>
          ${p.fullName} (${p.id} • ${p.visits ? p.visits.length : 0} visits)
        </option>
      `).join('');
    }

    // Reset star ratings to 5
    ['consult', 'wait', 'clean', 'billing'].forEach(cat => this.setInteractiveStar(cat, 5));
    const elImprovement = document.getElementById('rev-improvement');
    const elComment = document.getElementById('rev-general-comment');
    if (elImprovement) elImprovement.value = '';
    if (elComment) elComment.value = '';

    const modal = document.getElementById('modal-experience-review');
    if (modal) modal.classList.remove('hidden');
    this.playSound('pop');
  }

  setInteractiveStar(category, value) {
    const hiddenInput = document.getElementById(`star-val-${category}`);
    if (hiddenInput) hiddenInput.value = value;

    const container = document.querySelector(`.star-rating-interactive[data-rating-field="${category}"]`);
    if (container) {
      const stars = container.querySelectorAll('.star-interactive');
      stars.forEach((s, idx) => {
        s.classList.toggle('active', idx < value);
      });
    }
  }

  handleReviewSubmit(event) {
    event.preventDefault();
    const select = document.getElementById('rev-patient-select');
    const patientId = select ? select.value : '';
    const patient = this.patients.find(p => p.id === patientId);
    const patientName = patient ? patient.fullName : 'Verified Patient';
    const lastVisit = patient && patient.visits && patient.visits.length > 0 ? patient.visits[patient.visits.length - 1] : null;
    const dept = lastVisit ? lastVisit.department : 'Outpatient Department';

    const consultRating = parseInt(document.getElementById('star-val-consult').value, 10) || 5;
    const waitRating = parseInt(document.getElementById('star-val-wait').value, 10) || 5;
    const cleanRating = parseInt(document.getElementById('star-val-clean').value, 10) || 5;
    const billingRating = parseInt(document.getElementById('star-val-billing').value, 10) || 5;
    const overallRating = Math.round((consultRating + waitRating + cleanRating + billingRating) / 4);

    const improvement = document.getElementById('rev-improvement').value.trim();
    const generalComment = document.getElementById('rev-general-comment').value.trim() || 'Wonderful visit experience!';

    const newReview = {
      id: `REV-${Date.now().toString().slice(-4)}`,
      patientName: patientName,
      department: dept,
      date: this.formatDate(new Date()),
      rating: overallRating,
      improvementSuggestion: improvement,
      comment: generalComment,
      ratings: {
        consult: consultRating,
        wait: waitRating,
        clean: cleanRating,
        billing: billingRating
      }
    };

    this.experienceReviews.unshift(newReview);
    this.saveReviews();
    this.renderExperienceReviews();
    this.closeModal('modal-experience-review');

    this.triggerConfetti();
    this.playSound('success');
    this.showToast(`Thank you ${patientName}! Your visit experience review has been recorded.`, 'success');
  }

  // ========================================================
  // 16. ATTENDING FACULTY AUTHENTICATION & PROFILE
  // ========================================================
  initFaculty() {
    const savedList = localStorage.getItem('MVSR_FACULTY_ACCOUNTS');
    if (savedList) {
      try {
        this.facultyList = JSON.parse(savedList);
      } catch (e) {
        this.facultyList = JSON.parse(JSON.stringify(DEFAULT_FACULTY));
      }
    } else {
      this.facultyList = JSON.parse(JSON.stringify(DEFAULT_FACULTY));
      localStorage.setItem('MVSR_FACULTY_ACCOUNTS', JSON.stringify(this.facultyList));
    }

    const savedActive = localStorage.getItem('MVSR_ACTIVE_FACULTY');
    if (savedActive) {
      try {
        this.activeFaculty = JSON.parse(savedActive);
      } catch (e) {
        this.activeFaculty = this.facultyList[0];
      }
    } else {
      // Default to Dr. V. Prasad for immediate out-of-the-box operation
      this.activeFaculty = this.facultyList[0];
      localStorage.setItem('MVSR_ACTIVE_FACULTY', JSON.stringify(this.activeFaculty));
    }
  }

  renderFacultyHeader() {
    const pillBtn = document.getElementById('faculty-pill-btn');
    const loginBtn = document.getElementById('header-login-btn');
    const popover = document.getElementById('faculty-menu-popover');

    if (this.activeFaculty) {
      if (pillBtn) pillBtn.classList.remove('hidden');
      if (loginBtn) loginBtn.classList.add('hidden');

      const elAvatar = document.getElementById('header-faculty-avatar');
      const elName = document.getElementById('header-faculty-name');
      const elPopAvatar = document.getElementById('popover-faculty-avatar');
      const elPopName = document.getElementById('popover-faculty-name');
      const elPopDept = document.getElementById('popover-faculty-dept');
      const elPopId = document.getElementById('popover-faculty-id');
      const elPopEmail = document.getElementById('popover-faculty-email');

      if (elAvatar) elAvatar.textContent = this.activeFaculty.avatar || 'DR';
      if (elName) elName.textContent = `${this.activeFaculty.name} (${this.activeFaculty.degree})`;
      if (elPopAvatar) elPopAvatar.textContent = this.activeFaculty.avatar || 'DR';
      if (elPopName) elPopName.textContent = `${this.activeFaculty.name} (${this.activeFaculty.degree})`;
      if (elPopDept) elPopDept.textContent = `${this.activeFaculty.dept} • Active On-Duty`;
      if (elPopId) elPopId.textContent = `ID: ${this.activeFaculty.id}`;
      if (elPopEmail) elPopEmail.textContent = this.activeFaculty.email;

      // Also set attending doctor in revisit modal default
      const revisitDoc = document.getElementById('revisit-doctor');
      if (revisitDoc) revisitDoc.value = `${this.activeFaculty.name} (${this.activeFaculty.degree})`;
    } else {
      if (pillBtn) pillBtn.classList.add('hidden');
      if (loginBtn) loginBtn.classList.remove('hidden');
      if (popover) popover.classList.add('hidden');
    }
  }

  toggleFacultyMenu() {
    const popover = document.getElementById('faculty-menu-popover');
    if (popover) {
      popover.classList.toggle('hidden');
      if (!popover.classList.contains('hidden')) {
        this.playSound('pop');
      }
    }
  }

  switchAuthTab(tab) {
    document.querySelectorAll('.auth-tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.auth-panel').forEach(p => p.classList.remove('active'));

    const btn = document.getElementById(`tab-auth-${tab}`);
    const panel = document.getElementById(`panel-auth-${tab}`);
    if (btn) btn.classList.add('active');
    if (panel) panel.classList.add('active');
    this.playSound('click');
  }

  handleFacultyLogin(event) {
    event.preventDefault();
    const emailOrId = document.getElementById('login-faculty-email').value.trim().toLowerCase();
    const password = document.getElementById('login-faculty-password').value.trim();

    const matched = this.facultyList.find(f => 
      (f.email.toLowerCase() === emailOrId || f.id.toLowerCase() === emailOrId) &&
      (!f.password || f.password === password || password === 'password123' || password === 'admin123')
    );

    if (!matched) {
      this.showToast('Invalid Faculty credentials. Use demo: password123 or select a doctor below.', 'warning');
      return;
    }

    this.activeFaculty = matched;
    localStorage.setItem('MVSR_ACTIVE_FACULTY', JSON.stringify(this.activeFaculty));
    this.renderFacultyHeader();
    this.triggerConfetti();
    this.playSound('success');
    this.showToast(`Welcome back, ${matched.name} (${matched.dept})!`, 'success');
    this.navigate('home');
  }

  quickFacultyLogin(facultyId) {
    const matched = this.facultyList.find(f => f.id === facultyId);
    if (!matched) return;

    this.activeFaculty = matched;
    localStorage.setItem('MVSR_ACTIVE_FACULTY', JSON.stringify(this.activeFaculty));
    this.renderFacultyHeader();
    this.triggerConfetti();
    this.playSound('success');
    this.showToast(`Logged in as ${matched.name} (${matched.dept})`, 'success');
    this.navigate('home');
  }

  handleFacultySignup(event) {
    event.preventDefault();
    const name = document.getElementById('signup-name').value.trim();
    const degree = document.getElementById('signup-degree').value.trim();
    const dept = document.getElementById('signup-dept').value;
    const email = document.getElementById('signup-email').value.trim();
    const phone = document.getElementById('signup-phone').value.trim();
    const password = document.getElementById('signup-password').value.trim();

    const nextFacNum = this.facultyList.length + 1;
    const newId = `MVSR-FAC-${String(nextFacNum).padStart(2, '0')}`;

    // Extract initials for avatar
    const nameParts = name.replace(/^Dr\.\s*/i, '').split(' ');
    const initials = nameParts.map(n => n[0]).join('').substring(0, 2).toUpperCase() || 'DR';

    const newFaculty = {
      id: newId,
      name: name.startsWith('Dr.') ? name : `Dr. ${name}`,
      degree: degree,
      dept: dept,
      email: email,
      phone: phone,
      password: password || 'password123',
      avatar: initials
    };

    this.facultyList.push(newFaculty);
    localStorage.setItem('MVSR_FACULTY_ACCOUNTS', JSON.stringify(this.facultyList));

    this.activeFaculty = newFaculty;
    localStorage.setItem('MVSR_ACTIVE_FACULTY', JSON.stringify(this.activeFaculty));

    document.getElementById('faculty-signup-form').reset();
    this.renderFacultyHeader();
    this.triggerConfetti();
    this.playSound('success');
    this.showToast(`Faculty registered! Welcome to MVSR Healthcare, ${newFaculty.name} (ID: ${newId})!`, 'success');
    this.navigate('home');
  }

  handleFacultySignOut() {
    const popover = document.getElementById('faculty-menu-popover');
    if (popover) popover.classList.add('hidden');

    const prevName = this.activeFaculty ? this.activeFaculty.name : 'Faculty';
    this.activeFaculty = null;
    localStorage.removeItem('MVSR_ACTIVE_FACULTY');

    this.renderFacultyHeader();
    this.playSound('pop');
    this.showToast(`${prevName} signed out of clinical portal.`, 'info');
    this.navigate('auth');
  }
}

// Global initialization on DOM ready
let app;
document.addEventListener('DOMContentLoaded', () => {
  app = new MVSRHealthcareApp();
});

