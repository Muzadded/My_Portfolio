---
name: Cyber-Electric Engineering
colors:
  surface: '#0b1326'
  surface-dim: '#0b1326'
  surface-bright: '#31394d'
  surface-container-lowest: '#060e20'
  surface-container-low: '#131b2e'
  surface-container: '#171f33'
  surface-container-high: '#222a3d'
  surface-container-highest: '#2d3449'
  on-surface: '#dae2fd'
  on-surface-variant: '#c3c6d7'
  inverse-surface: '#dae2fd'
  inverse-on-surface: '#283044'
  outline: '#8d90a0'
  outline-variant: '#434655'
  surface-tint: '#b4c5ff'
  primary: '#b4c5ff'
  on-primary: '#002a78'
  primary-container: '#2563eb'
  on-primary-container: '#eeefff'
  inverse-primary: '#0053db'
  secondary: '#4cd7f6'
  on-secondary: '#003640'
  secondary-container: '#03b5d3'
  on-secondary-container: '#00424e'
  tertiary: '#4edea3'
  on-tertiary: '#003824'
  tertiary-container: '#007d55'
  on-tertiary-container: '#bdffdb'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#dbe1ff'
  primary-fixed-dim: '#b4c5ff'
  on-primary-fixed: '#00174b'
  on-primary-fixed-variant: '#003ea8'
  secondary-fixed: '#acedff'
  secondary-fixed-dim: '#4cd7f6'
  on-secondary-fixed: '#001f26'
  on-secondary-fixed-variant: '#004e5c'
  tertiary-fixed: '#6ffbbe'
  tertiary-fixed-dim: '#4edea3'
  on-tertiary-fixed: '#002113'
  on-tertiary-fixed-variant: '#005236'
  background: '#0b1326'
  on-background: '#dae2fd'
  surface-variant: '#2d3449'
typography:
  headline-xl:
    fontFamily: Lexend
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Lexend
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Lexend
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  title-md:
    fontFamily: Lexend
    fontSize: 20px
    fontWeight: '500'
    lineHeight: 28px
  body-lg:
    fontFamily: Lexend
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Lexend
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Lexend
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Lexend
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.1em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 4px
  gutter: 16px
  margin-mobile: 16px
  margin-desktop: 32px
  container-max: 1440px
---

## Brand & Style

This design system is built for high-performance engineering environments, emphasizing technical precision, speed, and clarity. The brand personality is "Calculated Intensity"—combining the raw energy of a cyberpunk aesthetic with the rigorous structure of professional CAD and IDE interfaces.

The design style is a hybrid of **Minimalism** and **High-Contrast / Bold**. It utilizes a deep, monochromatic base to eliminate visual noise, allowing vibrant primary and secondary accents to function as high-priority signals. The emotional response is one of focus, authority, and futuristic efficiency, ensuring that complex data remains the hero while the interface provides a sharp, high-tech framework.

## Colors

The palette is engineered for a dark-mode-first experience. The foundation is a very dark charcoal/off-black (`#020617`), which provides a bottomless depth that reduces eye strain during long sessions. 

- **Primary (Electric Blue):** Used for primary actions and active states. It represents stability and core functionality.
- **Secondary (Cyan):** Used for data visualization, highlights, and secondary interactive elements to provide a "glowing" tech feel.
- **Tertiary (Emerald):** Reserved for success states and valid system readings.
- **Neutral/Surface:** A tiered system of slate-grays used to create structural containment without breaking the high-contrast immersion.

All text must maintain a minimum contrast ratio of 7:1 against the background to ensure absolute legibility in high-density data environments.

## Typography

Lexend is utilized across all levels to leverage its specific design for reading proficiency and clarity. 

- **Headlines:** Use Bold and Semi-Bold weights with tight letter spacing to create a compact, "instrument panel" feel.
- **Body:** Regular weights with generous line heights ensure technical documentation and data logs are easily scannable.
- **Labels:** Uppercase styling is encouraged for small labels (`label-sm`) to mimic engineering blueprints and schematics. 

On mobile devices, headlines scale down to prevent text wrapping that breaks the structural integrity of the interface.

## Layout & Spacing

The design system employs a **Fluid Grid** based on a 4px baseline shift, ensuring all elements align to a rigorous mathematical rhythm. 

- **Desktop:** A 12-column grid with 16px gutters. Margins are generous (32px) to frame the content as a central "console."
- **Tablet:** 8-column grid with 16px gutters. 
- **Mobile:** 4-column grid. Components should stretch to full width where possible to maximize touch targets and data visibility.

Spacing should be used to group related technical parameters tightly, using larger gaps only to separate distinct functional modules.

## Elevation & Depth

Depth in this system is communicated through **Tonal Layers** and **Low-Contrast Outlines**. 

- **Surface Levels:** Instead of traditional shadows, depth is achieved by lightening the surface color. The further "forward" an object is, the lighter its Slate-Gray value becomes.
- **Outlines:** Use 1px solid borders for all containers. Active or focused elements swap their neutral border for the Primary (Electric Blue) or Secondary (Cyan) accent.
- **Glow Effects:** Critical alerts or active states may use a subtle outer glow (box-shadow) with high blur and low opacity, using the accent color to simulate an illuminated hardware display.

## Shapes

To maintain a disciplined, engineering-focused aesthetic, this design system uses **Soft** roundedness. 

- **Standard Elements:** 0.25rem (4px) corner radius. This provides a modern touch without appearing overly "bubbly" or consumer-grade.
- **Large Containers:** 0.5rem (8px) for cards and modals to clearly distinguish them from the background grid.
- **Interactive Triggers:** Buttons and inputs follow the standard 4px radius to feel like physical, machined components.

## Components

- **Buttons:** Primary buttons use a solid Electric Blue fill with white text. Secondary buttons use a transparent background with a 1px Cyan border and Cyan text.
- **Inputs:** Darker than the surface background with a 1px border. On focus, the border transitions to Cyan and the text cursor adopts the same glow.
- **Chips/Status:** Use a "Tag" style—subtle background tints of the status color (e.g., dark green for success) with high-contrast text and a left-side 2px vertical indicator bar.
- **Cards:** Defined by 1px borders (`#1e293b`). No background shadows; depth is strictly indicated by the border color and a slight background lift.
- **Data Grids:** High-density rows with subtle zebra-striping. Hover states should highlight the entire row in a translucent Electric Blue.
- **Progress Indicators:** Use the Secondary (Cyan) color for linear bars to represent "processing" or "active data stream."