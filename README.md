# EcoLoop — SDG 12 Web Design Coursework

This is my individual contribution to **EcoLoop**, a group front-end coursework project built for **4COSC011W Web Design & Development** at the University of Westminster / IIT. The project is based on **UN Sustainable Development Goal 12: Responsible Consumption and Production**, and aims to help students explore everyday sustainability issues through interactive and accessible web pages.

---

## My Contribution

I was responsible for three pages in this project:

### Splash Screen (`splash.html`)
The entry point of the website. Features a full-screen background image with a slow pan animation, a CSS-only spinning loader, a JavaScript countdown timer, a shrinking progress bar and a skip button. The automatic redirect is implemented using a `<meta http-equiv="refresh">` tag as required by the spec, with JavaScript handling the visible countdown and skip functionality independently.

### Action Impact Simulator (`ais.html`)
An interactive tool that lets users select from eight sustainable action cards related to SDG 12. JavaScript tracks selections, calculates a running total score and dynamically updates a results panel with feedback messages and a progress bar. Based on the score reached, the page background image switches between three levels — Low (1–6 pts), Medium (7–13 pts) and High (14–22 pts) — using a JavaScript class-switching system on a wrapper element.

### E-Waste Content Page (`content_ST2.html`)
A long-form content page covering the global e-waste crisis and what students can realistically do about it. Structured across five sections with a sticky side navigation panel, anchor-based internal links, a key statistics highlight box, a custom action checklist and an original student-led campus initiative called **CircuitCycle**.

---

## Project Overview

| Detail | Info |
|---|---|
| Module | 4COSC011W Web Design & Development |
| Institution | University of Westminster / IIT |
| SDG Theme | SDG 12 — Responsible Consumption & Production |
| Team Name | EcoLoop (G11) |
| My Role | Student 2 |

---

## Team Contributions

| Student | Pages |
|---|---|
| Chanitha Abeygunawardena (ST1) | Shared template, global CSS, components.js, Home, Gallery, Content ST1 |
| **Rajindu Amithirigala (ST2)** | **Splash Screen, Action Impact Simulator, Content ST2** |
| Rithika Wickramasinghe (ST3) | Feedback, Team, Content ST3 |
| Sahan Polwatte (ST4) | User Profile, Sitemap, Content ST4 |

---

## Key Features Across the Site

- Shared navigation and footer injected at runtime through `components.js`
- Consistent visual system and responsive layout defined in `style.css`
- Splash screen with timed redirect and skip functionality
- Video hero home page with calls to action and topic cards
- Four topic content pages covering food waste, e-waste, fast fashion and plastic waste
- Action Impact Simulator with dynamic scoring and background image feedback
- JavaScript-powered gallery with modal view and text customisation controls
- Feedback page with programme directory, reviews and client-side form validation
- Progressive user profile builder powered by JavaScript prompts
- Interactive team page and SVG sitemap
- Individual page editor and validation pages for each student

---

## Running the Project

No build tools or dependencies required.

1. Clone or download the repository
2. Open the project folder in VS Code or any editor
3. Run with a static server such as **Live Server**, or open the HTML files directly in a browser
4. Start from `splash.html` for the full intended experience
5. Open `home.html` directly to skip the splash during development

---

## Validation & Documentation

- Validation evidence for my pages is in `validation_ST2.html`
- My implementation report is in `pageEditor_ST2.html`
- Validation screenshots are stored in the `validationSnapshots/` folder

---

## Notes

- This is a front-end only submission — all interactions are handled client-side with no server or database
- The shared site chrome (header, navigation, footer) is injected at runtime through `components.js`
- All media, fonts and images are stored locally inside the repository for offline use
- Pages were validated using the W3C Nu HTML Checker with no errors or warnings
