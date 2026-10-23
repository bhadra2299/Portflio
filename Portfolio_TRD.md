# Technical Requirements Document (TRD)

## Ultra-Premium Cinematic AI/Data Science Portfolio

### 1. Technical Objective

Implement the post-hero portfolio experience as a high-performance,
responsive, scroll-driven web application while keeping the existing
Hero Section untouched.

### 2. Architecture

Recommended stack: - Next.js - React - TypeScript - Tailwind CSS -
Motion / Framer Motion - GSAP only where advanced timeline control is
genuinely required

Prefer the existing project architecture. Do not introduce unnecessary
frameworks or dependencies.

### 3. Hero Isolation

The existing hero must be isolated from the redesign.

Rules: - Do not edit hero component logic. - Do not edit hero assets. -
Do not alter hero CSS. - Do not alter hero animation. - Do not change
hero DOM structure unless technically required for integration. - Build
new post-hero sections as independent components.

Suggested structure:

app/ page.tsx

components/ hero/ portfolio/ cinematic-transition.tsx profile-story.tsx
thinking-system.tsx capability-system.tsx build-system.tsx
project-experience.tsx architecture-story.tsx evolution.tsx
education.tsx knowledge-archive.tsx future.tsx contact.tsx

### 4. Component Design

Each major section should: - have isolated component logic - expose
clean props - avoid unnecessary global state - use reusable motion
primitives - use semantic HTML - support responsive layouts

Create shared primitives where useful: - GlassSurface - RevealText -
ScrollReveal - MagneticElement - SignalLine - DepthLayer -
ChapterIndicator

Do not over-abstract simple components.

### 5. Motion Architecture

#### 5.1 Scroll Animation

Use scroll progress to drive: - opacity - transform - scale - blur -
clip-path - rotation - position

Avoid layout-triggering animation where possible.

Prefer: - transform - opacity - filter when necessary

#### 5.2 Parallax

Create independent depth layers: - background - technical layer - glass
layer - foreground typography

Use bounded movement so the effect remains subtle.

#### 5.3 Text Animation

Use: - word reveal - line reveal - masked reveal - blur-to-focus -
scale-through-depth

Do not animate every character unless justified.

#### 5.4 Magnetic Interaction

Interactive controls may subtly follow pointer movement.

Constraints: - small movement range - spring-based return -
keyboard-safe - disabled on touch devices where appropriate

### 6. Glass System

Create reusable glass tokens.

Example conceptual tokens:

--glass-background: rgba(255,255,255,0.55) --glass-border:
rgba(255,255,255,0.65) --glass-shadow: subtle layered shadow
--glass-blur: 18px--30px depending on surface --glass-radius: context
dependent

Do not make every object visually identical.

Use different material levels: - Level 1: subtle translucent surface -
Level 2: frosted interface - Level 3: premium focal glass object

### 7. Color Tokens

Primary: - white - near-white - soft gray - ivory

Accent: - muted blue - cyan - gold - graphite

Color usage should be controlled through design tokens rather than
arbitrary values scattered throughout components.

### 8. Typography

Typography must create strong editorial hierarchy.

Use: - very large display typography for narrative statements -
restrained body typography - small technical metadata - wide spacing
where appropriate

Avoid excessive font weights and excessive text density.

Typography must remain responsive using fluid sizing such as clamp().

### 9. Cinematic Transition Implementation

The post-hero transition should: 1. Detect hero completion/viewport
progression. 2. Introduce the first narrative statement. 3. Reveal
subsequent statements through scroll progress. 4. Transition naturally
into the profile section.

Avoid abrupt section boundaries.

### 10. Capability System Implementation

Create a central interactive node/object with surrounding capability
nodes.

Required interaction: - hover/focus capability - active capability
state - related technologies reveal - surrounding nodes subtly
reposition - connection lines update

Example data structure:

capability: - name - category - technologies - description - accent -
relatedCapabilities

Use React state only for interaction state.

### 11. Pipeline / Architecture System

Architecture nodes should be data-driven.

Example:

nodes: - data - preprocessing - features - model - api - deployment -
user

edges: - source - target - label - animation state

Do not hardcode every visual connection separately.

### 12. Signal Animation

Signals traveling through architecture should be implemented with
performant transforms.

Preferred approaches: - SVG path animation - CSS motion paths where
appropriate - lightweight Motion animations

Avoid continuous expensive JavaScript loops.

### 13. Project Experience

Each project should support: - title - category - problem - data -
methodology - model - deployment - metric - visual asset - technology
list

Projects should share a component system while allowing each project to
have a distinct visual story.

### 14. Project Visual Modes

Crop Yield: - agricultural data visualization - metrics - model pipeline

Obstacle Detection: - scanning - sensor signal - real-time
classification

Rice Disease: - image analysis - scanning - classification

MNIST: - handwriting interaction - neural network visualization

Bank Marketing: - segmentation - probability - decision visualization

### 15. Project Chapter Navigation

Create a sticky/floating project navigator.

Requirements: - active project detection - smooth scroll - keyboard
accessible - mobile-friendly - no obstruction of primary content

### 16. Responsive Strategy

Desktop: - immersive compositions - multi-layer depth - large
typography - floating objects

Tablet: - reduce spatial complexity - preserve hierarchy

Mobile: - stack major elements - convert complex spatial systems into
vertical storytelling - reduce particle/signals if performance
requires - maintain premium glass treatment - avoid tiny interactive
targets

### 17. Performance

Targets: - smooth scrolling - avoid unnecessary re-renders - lazy-load
below-fold assets - optimize images - use responsive image formats -
animate compositor-friendly properties - minimize continuous animation -
pause offscreen animations when possible

Avoid: - huge unoptimized images - unnecessary WebGL - large animation
libraries for simple effects - multiple perpetual requestAnimationFrame
loops

### 18. Reduced Motion

Respect:

`prefers-reduced-motion: reduce`

When enabled: - remove parallax - reduce movement - remove unnecessary
looping animation - retain simple fades and state transitions

### 19. Interaction States

Every interactive component needs: - default - hover - focus - active -
disabled where applicable

Keyboard users must be able to access all meaningful interactions.

### 20. Browser Requirements

Target modern: - Chrome - Edge - Safari - Firefox

Gracefully degrade: - backdrop-filter - advanced blur - complex visual
effects

The content and hierarchy must remain usable without advanced effects.

### 21. SEO

Implement: - semantic headings - metadata - descriptive page title -
description - Open Graph metadata - structured content where useful -
meaningful image alt text

Do not sacrifice performance for decorative SEO elements.

### 22. Code Quality

Requirements: - TypeScript strictness where project permits - reusable
components - meaningful naming - no duplicated animation logic - no dead
code - no unnecessary dependencies - responsive CSS - clean separation
of content and presentation

### 23. Testing Checklist

Functional: - hero unchanged - all navigation works - project navigation
works - contact links work - no console errors - no broken images

Responsive: - desktop - laptop - tablet - mobile

Interaction: - mouse - touch - keyboard - reduced motion

Performance: - no obvious scroll jank - no excessive CPU usage - no
layout shifts caused by animation - images lazy-loaded where appropriate

### 24. Acceptance Criteria

Implementation is complete only when:

1.  Hero is visually and technically preserved.
2.  Every post-hero section is redesigned.
3.  No generic skill-card grid exists.
4.  No generic project-card grid exists.
5.  Projects behave as cinematic case studies.
6.  Capability section behaves as an interactive system.
7.  Technical architectures animate progressively.
8.  Sections transition into one another.
9.  White/light design dominates.
10. Accent color remains controlled.
11. Glass treatment feels premium and varied.
12. Motion is smooth and intentional.
13. Mobile experience is deliberately composed.
14. Accessibility requirements are respected.
15. Performance remains strong.
16. Code remains maintainable.
17. The final site feels like a premium digital product rather than a
    portfolio template.

### 25. Final Engineering Principle

Do not add technology merely because it is impressive.

Use the simplest technical solution that produces the intended visual
result.

The goal is not: "more animation."

The goal is:

**better storytelling through interaction.**
