# 🏥 MVSR Healthcare Facility — Smart Clinical & Patient Traceability Portal

An advanced medical record traceability, patient revisit tracking, first-time registration, and cashless digital fee payment portal designed for clinical faculty and healthcare administrators at **MVSR Healthcare Facility**.

![HTML5](https://img.shields.io/badge/Frontend-HTML5%20%7C%20CSS3%20%7C%20JavaScript-blue?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Active-emerald?style=for-the-badge)

---

## 🌟 Key Features

### 1. 🔍 Multi-Attribute Patient Search
- **Search by Patient Name**: Instant lookup by first name, last name, or full name (e.g. `Rajesh`, `Kumar`, `Ananya`, `Sneha`).
- **Search by Applicant Number**: Real-time matching by applicant digits (`1`, `2`, `0001`, `0002`), natural phrases (`applicant 1`, `app #2`), or full hospital ID (`MVSR-2026-0001`).
- **Live Search Dropdown**: Interactive preview displaying applicant sequence badges, demographics, contact details, latest consultation summary, and dues status.

### 2. 🗂️ Sequential Patient Index & Revisit Tracking
- Automated sequential unique patient IDs (`MVSR-2026-0001`, `MVSR-2026-0002`, ...).
- Tracks total revisits, initial admissions, and historical consultations.
- Interactive timeline organizing all past visits in reverse chronological order with vital sign monitoring (BP, Heart Rate, SpO2, Temperature, Weight).
- One-click **Log New Revisit Consultation** modal for attending doctors.

### 3. 💳 Cashless Fee Settlement (Zero-Cash Facility)
- Complete elimination of physical cash desks and manual ledger books.
- Animated UPI QR Scanner compatible with Google Pay, PhonePe, Paytm, and BHIM.
- 3D interactive payment card and Net Banking simulator.
- Instant digital stamped MVSR receipts with printable tax invoices.

### 4. ⚡ Quick Action Implementation for Patients
- **🔔 Remind to Pay for Patient**: Multi-channel notification dispatcher (SMS, WhatsApp, Email, instant UPI payment link) for pending fees.
- **👤 Account Details**: On-the-fly demographic and contact updating (name, email, phone, blood group, emergency contact).
- **⭐ Review for Users Experience**: Clinical visit quality rating system (`4.9 / 5.0 ★`) tracking consultation quality, queue times, and hygiene.
- **📞 Support Details**: 24/7 trauma care and hospital escalation lines.

### 5. 🩺 Faculty Portal & Authentication
- Clinical faculty authentication supporting official login and registration.
- Quick 1-click demo doctor selector for testing.
- Attending faculty header pill with active status and sign-out capabilities.

---

## 🚀 Getting Started

### Prerequisites
- Any modern web browser (Google Chrome, Microsoft Edge, Mozilla Firefox, Safari).
- Python 3.x (or any local HTTP static server).

### Running Locally
```bash
# Clone the repository
git clone <YOUR-REPO-URL>
cd "MEDLENS PROJECT"

# Start a local HTTP server
python -m http.server 8080
```

Open your browser and navigate to:
**[http://localhost:8080](http://localhost:8080)**

---

## 📁 Project Structure
```text
MEDLENS PROJECT/
├── index.html        # Semantic HTML5 clinical portal structure and modals
├── styles.css        # Clinical glassmorphism design system & animations
├── app.js            # Core JavaScript application logic & telemetry
├── .gitignore        # Git ignore rules
└── README.md         # Project documentation
```

---

## 📄 License
This project is licensed under the MIT License.
