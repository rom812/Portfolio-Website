# Plan: Portfolio Website Visual Enhancement & Content Updates

## Summary
Enhance the portfolio website with modern visual effects (glassmorphism, gradients, animations) and update content with community involvement, Twin project, and CV link fix.

## Research Findings

### Modern Portfolio Design Trends (2025)
- **Glassmorphism**: Semi-transparent cards with backdrop blur (already partially implemented)
- **Gradient Accents**: Vibrant neon gradients (blue-purple-pink) for futuristic feel
- **Smooth Animations**: GSAP or CSS keyframes with scroll triggers
- **Micro-interactions**: Enhanced hover effects, magnetic cursor interactions
- **Particle Effects**: Subtle animated backgrounds for visual interest

### Current State
- Vue 3 portfolio with dark theme
- Basic glassmorphism cards
- Simple fade-in animations
- 4 sections: Home, About, Projects, Contact
- CV file: `rom-cv.pdf` (but link points to `Rom_Sheynis_CV.pdf`)

## Implementation Steps

### 1. Visual Enhancements
- [ ] Add animated gradient background with subtle movement
- [ ] Enhance glassmorphism with stronger blur and transparency
- [ ] Add particle/starfield effect in background
- [ ] Improve card hover effects with scale and glow
- [ ] Add gradient accents to buttons and links
- [ ] Enhance navbar with better glassmorphism
- [ ] Add smooth scroll-triggered animations

### 2. Content Updates
- [ ] Add "Agents" community involvement to About section
- [ ] Add Tel Aviv meetups and conferences info
- [ ] Add Twin project card to Projects section
- [ ] Fix CV download link (rom-cv.pdf)
- [ ] Update project descriptions if needed

### 3. Twin Project Integration
- [ ] Create new project card for Twin
- [ ] Add link to GitHub repo: https://github.com/rom812/twin
- [ ] Add deployment link (AWS Bedrock)
- [ ] Style with special badge/icon for AI project

## Files to Modify
- `src/styles.css` - Visual enhancements
- `src/assets/components/AboutSection.vue` - Community info
- `src/assets/components/ProjectsSection.vue` - Twin project
- `src/assets/components/HomeSection.vue` - CV link fix
- `public/index.html` - Optional: Add meta tags

## Risk Areas
- Performance: Particle effects may impact performance on low-end devices
- Browser compatibility: Backdrop-filter support
- Mobile responsiveness: Ensure new effects work on mobile

## Validation
- [ ] Build passes (`npm run build`)
- [ ] Lint passes (`npm run lint`)
- [ ] Visual check on desktop and mobile
- [ ] All links work correctly
- [ ] CV downloads properly

---
Created by Octocode MCP https://octocode.ai 🔍🐙
