# Steelform Engineering Design System v2

## Purpose

This document defines the visual direction and implementation standards for the Steelform Engineering website.

The objective is not to create a highly designed marketing website.

The objective is to create a professional, trustworthy industrial website that:

- Generates enquiries
- Demonstrates capability
- Supports SEO
- Presents technical information clearly
- Highlights real project work

The website should feel like a credible engineering company, not a technology startup.

---

# Brand Position

## Personality

The website should feel:

- Technical
- Experienced
- Professional
- Practical
- Industrial
- Trusted
- Australian

## It Should Not Feel Like

- A startup
- A software company
- A marketing agency
- A consumer ecommerce store
- An overly corporate enterprise site

---

# Core Design Principle

## Consistency Beats Creativity

A consistent experience builds trust.

The same visual rules should be applied across:

- Solutions
- Projects
- Articles
- Contact Us
- Why Steelform

Avoid creating unique styling patterns for individual pages unless there is a clear business reason.

---

# Visual References

## Engineering & Manufacturing

Reference websites:

- Austin Engineering
- H-E Parts
- Ground Force Worldwide
- WesTrac
- Komatsu Australia
- Bisalloy Steel

Focus on:

- Clean layouts
- Strong imagery
- Straightforward messaging
- Technical credibility

Avoid copying designs directly.

---

# Design Principles

## Content First

Content should be the primary focus.

Pages should be easy to scan.

Information should be structured clearly.

---

## Real Work Sells

Real projects are more valuable than marketing claims.

Prioritise:

- Project photography
- Workshop photography
- Equipment photography
- Equipment in operation
- Before-and-after project imagery

Avoid:

- Generic stock photography
- Corporate office photography
- Marketing-style imagery

---

## Mobile First

Many users will first access the website from a mobile device.

Every page must function correctly on:

- Mobile
- Tablet
- Desktop

---

## Fast Loading

Performance is a feature.

Pages should:

- Optimise images
- Minimise unnecessary JavaScript
- Avoid excessive animations
- Prioritise content over decorative effects

---

# Colour Palette

## Primary

### Industrial Blue Grey

```text
#2F4350
```

Used for:

- Main navigation
- Headings
- Primary interface elements
- Footer
- Section headings

---

## Primary Dark

```text
#22333D
```

Used for:

- Hover states
- Dark sections
- Footer elements
- Emphasis areas

---

## Secondary

### Slate Grey

```text
#34424A
```

Used for:

- Supporting text
- Metadata
- Secondary interface elements

---

## Accent

### Safety Orange

```text
#F27224
```

Used for:

- Call to action buttons
- Interactive elements
- Links
- Highlights
- Key conversion actions

### Accent Usage Rule

Orange is a conversion colour.

Do not use orange as a major background colour.

Do not use orange unnecessarily.

Reserve orange for elements requiring attention.

---

## Background

```text
#FFFFFF
```

---

## Primary Text

```text
#111827
```

---

# Dark Mode

Dark mode is not a priority for Version 1.

The website should provide a consistent and polished light-theme experience.

Avoid introducing new dark-mode implementations unless there is a project decision to fully support and test dark mode across all page templates.

---

# Typography

## Typography Characteristics

Typography should be:

- Strong
- Readable
- Professional
- Technical
- Easy to scan

Preferred fonts:

- Geist
- Inter
- Source Sans Pro

---

## Typography Scale

### H1

Used for:

- Page titles
- Hero headings

```text
text-4xl md:text-5xl font-bold
```

One H1 per page.

---

### H2

Used for:

- Major page sections

```text
text-3xl font-bold
```

---

### H3

Used for:

- Cards
- Subsections
- Related content headings

```text
text-2xl font-semibold
```

---

### Body Text

Used for:

- Page summaries
- Main content
- Descriptive text

```text
text-base md:text-lg
```

---

### Metadata

Used for:

- Dates
- Supporting information
- Tags

```text
text-sm
```

---

# Layout

## Page Types

The website uses three primary page layouts.

---

### Homepage

Purpose:

- Introduce Steelform
- Demonstrate capability
- Provide a clear conversion path

Structure:

```text
Hero
Why Steelform
Featured Solutions
Featured Projects
Call To Action
```

The homepage is section-based and should not be constrained by content-page widths.

---

### Content Pages

Examples:

- Why Steelform
- Contact Us
- Article Detail
- Solution Detail

Container:

```text
max-w-4xl mx-auto
```

Purpose:

- Comfortable reading width
- Technical content consumption
- Reduced line lengths

---

### Listing Pages

Examples:

- Projects Landing
- Articles Landing
- Solutions Landing

Container:

```text
max-w-6xl mx-auto
```

Purpose:

- Card layouts
- Image presentation
- Browsing content collections

---

## Site Container

Standard section container:

```text
max-w-7xl mx-auto px-4 md:px-6 lg:px-8
```

---

# Spacing

Consistency is more important than variation.

---

## Hero Sections

```text
py-20
```

---

## Major Sections

```text
py-16
```

---

## Compact Sections

```text
py-8
```

---

## Two Column Layouts

Grid spacing:

```text
gap-6
```

---

## Three Column Layouts

Grid spacing:

```text
gap-8
```

---

# Images

## General Principles

Images should prioritise:

- Completed projects
- Workshop operations
- Equipment repairs
- Fabrication processes
- Equipment in service

Avoid:

- Stock photography
- Abstract imagery
- Generic corporate imagery

---

## Hero Images

Standard ratio:

```text
16:9
```

Behaviour:

```text
object-cover
```

---

## Card Images

Standard ratio:

```text
4:3
```

Behaviour:

```text
object-cover
```

All card images should present consistently regardless of source image dimensions.

---

## Gallery Images

Gallery ratios may vary depending on project photography.

Requirements:

```text
rounded-xl
object-cover
```

Maintain consistency within individual galleries.

---

# Cards

Cards are used to display:

- Projects
- Solutions
- Articles

Avoid maintaining separate visual card systems.

---

## Standard Card

```text
bg-white
rounded-xl
shadow-sm
overflow-hidden
transition-all
duration-300
```

---

## Hover State

```text
hover:shadow-lg
```

Animations should remain subtle.

Avoid large movements or excessive visual effects.

---

## Card Content

Standard padding:

```text
p-6
```

---

## Card Titles

```text
text-xl font-semibold
```

---

# Buttons

## Primary Button

Purpose:

Primary conversion action.

Examples:

- Request a Quote
- Contact Us

Style:

```text
Safety Orange Background
White Text
Rounded Corners
```

---

## Secondary Button

Purpose:

Supporting actions.

Examples:

- View Project
- Learn More
- Read Article

Style:

```text
Outlined Button
Primary Colour Border
Primary Colour Text
```

---

# Call To Action Strategy

## Primary Conversion

```text
Request a Quote
```

---

## Secondary Conversion

```text
Contact Us
```

Every page must contain a clear conversion action.

---

# Breadcrumbs

Breadcrumbs are required on all pages.

Examples:

```text
Home
Home / Contact Us
Home / Why Steelform
Home / Articles
Home / Articles / Article Title
Home / Projects
Home / Projects / Project Title
Home / Solutions
Home / Solutions / Parent Solution
Home / Solutions / Parent Solution / Child Solution
```

All parent levels must be clickable.

---

# Accessibility

Target WCAG AA compliance.

Minimum requirements:

- Keyboard navigation
- Appropriate colour contrast
- Semantic heading hierarchy
- Descriptive image alt text
- Responsive layouts

---

# Development Rules

Before introducing a new visual pattern ask:

> Can an existing component be reused?

Before creating a new styling approach ask:

> Does a standard already exist?

Priority order:

1. Reuse existing component
2. Extend existing component
3. Create new component

Consistency should take priority over page-specific customisation.

---

# Sprint 1 Objectives

Theme & Style Standardisation should focus on:

- Container standardisation
- Typography standardisation
- Colour consistency
- CTA consistency
- Button standardisation
- Card standardisation
- Image ratio standardisation
- Section spacing consistency

No new functionality is required as part of this sprint.

The objective is visual consistency and a stronger professional presentation across the entire website.