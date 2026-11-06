# 🌟 B.Tech IT Student Portfolio | Aspiring Data Analyst

A modern, responsive, and high-performance personal portfolio website built with **React** and **Vite**, featuring a **premium dark blue and purple glassmorphism theme**. Designed for a **3rd-year B.Tech Information Technology student** with a career interest in **Data Analytics** and **Software Development**.

---

## 🎨 Theme & Highlights
- **Palette:** Deep Midnight Blue (`#070b14`), Indigo (`#6366f1`), Electric Purple (`#8b5cf6`), and Neon Cyan (`#38bdf8`).
- **Visuals:** Ambient glowing backdrop orbs, glassmorphic blurred panels, interactive terminal simulation, dynamic typing text effect, floating badge animations.
- **Sections Included:**
  1. **Home / Hero:** Live status ("3rd Year B.Tech IT • Open for Data Analyst & IT Internships"), dynamic typewriter effect, interactive code terminal preview, quick stats, social links, and CTAs.
  2. **About Me:** Academic background, data analytics aspirations, core competencies, and IT interest tags.
  3. **Skills & Tech Stack:** Filterable skill categories (Programming & Databases, Web & Full-Stack Development, Core IT & Analytics Foundations) covering Python, SQL, Advanced Java, HTML/CSS, JavaScript, and Full-Stack development.
  4. **Education:** Interactive vertical timeline highlighting 3rd Year B.Tech in Information Technology, core coursework (DBMS, Python, Java, Web Tech), and customizable school history.
  5. **Projects:** Professional cards with category filters, tech badges, live demo and repository links, and an interactive **Architecture & Details Modal** for:
     - **SmartTour AI - AI-Based Crowd Escape Tourism Planner**
     - **Eldercare Connect**
     - **AI-Based Road Safety Awareness System**
  6. **Certifications:** Verified credentials section with customizable certification cards for data analytics, Python, and SQL credentials.
  7. **Contact:** Direct email, phone, location cards (with one-click copy) and an interactive contact form with client-side validation.
  8. **Footer:** Quick navigation links, social buttons, copyright, and smooth back-to-top button.

---

## 🚀 Quick Start Guide (Windows)

### Prerequisites
Make sure you have **Node.js** installed on your Windows machine:
1. Open PowerShell or Command Prompt.
2. Type `node -v` and press Enter. (Node.js version 18 or higher is recommended).
3. If not installed, download the LTS version from [nodejs.org](https://nodejs.org/).

---

### Step-by-Step Instructions

#### 1. Open Terminal in the Project Folder
- Navigate to `C:\MyPortfolio` in **Windows File Explorer**.
- In the address bar at the top, type `powershell` or `cmd` and press **Enter**.
*(Alternatively, open the folder in **VS Code** and press `Ctrl + ~` to open the integrated terminal).*

#### 2. Start the Local Development Server
```bash
npm run dev
```

You will see an output like:
```text
  VITE v6.4.5  ready in 180 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```

#### 3. Open in Your Browser
- Open your browser (Chrome, Edge, Firefox) and navigate to:
  ```text
  http://localhost:5173
  ```

---

## ⚡ Super Easy 1-Click Windows Launch
You can also run the website anytime without opening the terminal:
- Double-click the file named **`run-portfolio.bat`** in the `c:\MyPortfolio` folder.
- It will automatically launch the Vite dev server and open your default browser!

---

## ✏️ How to Customize Your Details (Beginner-Friendly)

All personal data, links, and placeholders are centralized in:
📁 **`src/data/portfolioData.js`**

Open `src/data/portfolioData.js` in VS Code or Notepad to fill in:
- **`personalInfo`**:
  - `name`: Replace `"[Enter your full name]"` with your real name.
  - `college`: Enter your college / university name.
  - `email`: Enter your email address.
  - `phone`: Enter your phone number.
  - `location`: Enter your city/state.
  - `socialLinks`: Paste your real LinkedIn, GitHub, and LeetCode profile links.
- **`educationData`**: Add your actual CGPA, intermediate/12th college, and 10th school marks.
- **`certificationsData`**: Replace the placeholder cards with your genuine course completions and certificates.

*Vite features Hot Module Replacement (HMR), so every time you save changes, the browser updates instantly!*

---

## 📦 How to Build for Production

```bash
npm run build
```
This generates an optimized, minified production build in the `dist/` directory ready for deployment on Vercel, Netlify, or GitHub Pages.
