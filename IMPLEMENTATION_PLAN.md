# Nuvia UI/UX Implementation Plan

## Goal

Implement 12 priority UI/UX improvements identified in the audit to enhance user experience, fix critical issues, and modernize the Nuvia website for 2025 web standards.

---

## Key Information

- **Phone Number**: +263 78 095 370
- **CEO Name**: Munashe Kurwaisimba
- **Created**: December 18, 2025

---

## Phase 1: Critical Fixes

### 1.1 Optimize Logo File
- Compress `assets/Logo/Nuvia_nobackground.png` from 9.7MB to <100KB
- Replace `assets/img/nuvia-logo.png` with optimized version

### 1.2 Fix Broken Images
- Fix South Court carousel image in `student-housing.html` (line 158)

### 1.3 Replace Placeholder Phone Numbers
Update `+263 XXX XXX XXX` to `+263 78 095 370` in:
- `index.html` (line 413)
- `about.html` (line 354)
- `services.html` (line 265)
- `properties.html` (line 337)
- `projects.html` (line 224)
- `contact.html` (lines 78, 228, 348)
- `student-housing.html` (line 405)

### 1.4 Update CEO Name
- Change "Tariro M." to "Munashe Kurwaisimba" in `about.html` (line 90)

### 1.5 Fix Gold Text Contrast
- Add `--gold-accessible: #b8860b` to CSS variables
- Apply to small body text using gold color

---

## Phase 2: High Priority UX Improvements

### 2.1 Increase Hamburger Menu Stroke Width
- Update CSS from 2px to 3px in `responsive.css`

### 2.2 Add Form Validation Feedback
- Create `assets/css/form-validation.css` with error/success states
- Update `form.js` with validation logic

### 2.3 Implement Lazy Loading
- Add `loading="lazy" decoding="async"` to all below-fold images

### 2.4 Add WhatsApp Floating Button
- Create floating button CSS
- Add HTML to all 7 pages with link to `wa.me/26378095370`

---

## Phase 3: Medium Priority Enhancements

### 3.1 Add Skeleton Loaders
- Create skeleton CSS classes for image loading states

### 3.2 Create Sticky CTA
- Sticky bottom bar that appears on scroll

### 3.3 Add Micro-Animations
- Button hover depth effect
- Card hover tilt/lift
- Input focus glow

### 3.4 Implement Parallax on Hero Sections
- Add parallax effect to hero background images
- Disable on mobile for performance

---

## Phase 4: Future Plans (Document Only)

- Dark mode support
- Testimonials/reviews section
- Virtual property tours
- Property comparison feature
- Project timeline visualization
- Social media links in footer
- Live chat integration

---

## Files to Modify

| File | Changes |
|------|---------|
| `assets/css/styles.css` | Gold contrast variable |
| `assets/css/responsive.css` | Hamburger menu stroke |
| `assets/img/nuvia-logo.png` | Replace with optimized |
| `assets/js/main.js` | Sticky CTA, parallax |
| `assets/js/form.js` | Validation logic |
| All 7 HTML files | Phone numbers, lazy loading, WhatsApp button |

---

## New Files to Create

- `assets/css/form-validation.css`
- `assets/css/whatsapp-button.css`
- `assets/css/enhancements.css`
