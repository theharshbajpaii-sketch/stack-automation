# Stack & Automation — Official Website

> **Build What’s Next.**  
> High-performance websites, conversational AI agents, and business process automation systems.

A client-generating web application for **Stack & Automation**, crafted with a matte black, deep charcoal, and silver aesthetic.

---

## 🚀 Key Features

- **Official Brand Identity & Logo Integration:**
  - Preserves the geometric `S` symbol and full circular logo without distortion or artificial recreations.
  - Compact navbar brand lockup with the `S` symbol and `Stack & Automation` typography.
  - High-resolution favicons (`favicon.ico` and `favicon.png`) generated from the official symbol.
  - Full circular logo featured in the **About** and **Footer** sections.
- **Service Offerings with Direct Brief Preselection:**
  - Website Development
  - AI Chatbots & Agents
  - Business Process Automation
  - Meta Ads & Digital Marketing
  - Custom Software & Internal Tools
  - API Integrations & Workflow Systems
  - Custom Scope / Hybrid Projects
- **Production Showcase (MediBot AI Dental Chatbot):**
  - Features real project details with a secure link to the live demo at [https://pimedi-bot.onrender.com/](https://pimedi-bot.onrender.com/).
- **4-Step Delivery Process:**
  - `01. Tell Us Your Idea` ➔ `02. Define the Scope` ➔ `03. Build & Review` ➔ `04. Launch & Handover`.
- **Interactive Project Brief Form & Modal Review:**
  - Required validation (service category, summary, detailed requirements).
  - Optional context fields (name, business, email, country, budget, timeline, reference URL).
  - Structured Review Modal to verify the formatted brief before launching WhatsApp.
  - Unconfigured WhatsApp safety fallback with a 1-click clipboard copy feature so no inquiries are lost.
  - Zero fake backend or database dependencies; all enquiries stay private and direct.
- **Performance & Accessibility:**
  - Responsive layout (desktop, tablet, mobile Safari with safe-area insets).
  - Native accessible `<dialog>` and accordion `<details>`.
  - Respects `prefers-reduced-motion` and visible `:focus-visible` indicators.

---

## 📁 Project Structure

```text
stack-automation/
├── index.html                   # Semantic HTML5 single-page application
├── netlify.toml                 # Netlify deployment configuration
├── package.json                 # Project scripts and Vite dev dependency
├── public/                      # Static public assets
│   ├── favicon.ico              # Multi-size ICO favicon
│   ├── favicon.png              # 64x64 PNG favicon
│   └── images/
│       ├── stack-automation-logo.png    # Official full circular brand logo
│       ├── stack-automation-logo.jpg    # JPEG source
│       └── stack-automation-symbol.png  # Extracted geometric S symbol
├── src/
│   ├── config/
│   │   └── site.js              # Central site & WhatsApp configuration
│   ├── js/
│   │   ├── formHandler.js       # Form validation & review modal logic
│   │   ├── main.js              # JS orchestrator
│   │   ├── navigation.js        # Responsive mobile drawer & scroll spy
│   │   └── whatsapp.js          # WhatsApp message builder & clipboard
│   └── styles/
│       ├── components.css       # Cards, hero, showcase, accordion
│       ├── form.css             # Form inputs, error states, modal dialog
│       ├── layout.css           # Grid, header, navbar, footer
│       ├── main.css             # Bundle stylesheet
│       └── variables.css        # Design tokens (matte black, charcoal, silver)
└── dist/                        # Production build output (after npm run build)
```

---

## ⚙️ Configuration: Setting Your WhatsApp Phone Number

The WhatsApp phone number is isolated in **one clearly documented file**:

👉 [src/config/site.js](file:///c:/Users/lenovo/OneDrive/Desktop/stack-automation/src/config/site.js)

```javascript
export const SITE_CONFIG = {
  // ...
  whatsapp: {
    // Replace with your international number (NO '+', NO spaces, NO dashes)
    // Example for India (+91 98765 43210): "919876543210"
    // Example for US (+1 555 123 4567): "15551234567"
    phoneNumber: '', 
    defaultGreeting: 'Hello Stack & Automation team, I would like to discuss a project.'
  },
  // ...
};
```

> **Safety Notice:** If left empty, the website safely alerts the visitor/owner that the number is in setup mode and provides a **Copy Formatted Message** button to prevent any broken links.

---

## 🛠️ Local Development & Build

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Local Development Server
```bash
npm run dev
```
Open [http://localhost:5173/](http://localhost:5173/) in your browser.

### 3. Production Build
```bash
npm run build
```
Generates an optimized static bundle in the `dist/` directory.

### 4. Local Production Preview
```bash
npm run preview
```

---

## 🌐 Netlify Deployment

The project is completely **Netlify-ready**:
- A [`netlify.toml`](file:///c:/Users/lenovo/OneDrive/Desktop/stack-automation/netlify.toml) file is included at the root.
- Build command: `npm run build`
- Publish directory: `dist`
- Security headers (X-Frame-Options, X-Content-Type-Options, etc.) are pre-configured.

To deploy:
1. Push this repository to GitHub/GitLab.
2. Link the repository in your Netlify dashboard.
3. Netlify will automatically detect `netlify.toml` and deploy the static site.

---

## 🖼️ Logo Asset Locations

- **Full Official Logo:** [`public/images/stack-automation-logo.png`](file:///c:/Users/lenovo/OneDrive/Desktop/stack-automation/public/images/stack-automation-logo.png)
- **Extracted Geometric S Symbol:** [`public/images/stack-automation-symbol.png`](file:///c:/Users/lenovo/OneDrive/Desktop/stack-automation/public/images/stack-automation-symbol.png)
- **Favicon:** [`public/favicon.ico`](file:///c:/Users/lenovo/OneDrive/Desktop/stack-automation/public/favicon.ico) and [`public/favicon.png`](file:///c:/Users/lenovo/OneDrive/Desktop/stack-automation/public/favicon.png)

If you ever receive an updated brand file, simply replace `public/images/stack-automation-logo.png` and run `npm run build`.
