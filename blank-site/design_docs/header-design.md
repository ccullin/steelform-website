# Steelform Header Specification v1

## Purpose

The Header is the primary navigation and conversion component of the website.

It must:

- Establish the Steelform brand
- Provide clear navigation
- Provide immediate contact options
- Present a consistent experience across all pages
- Support mobile and desktop devices
- Drive Request for Quote conversions

The header should feel:

- Professional
- Industrial
- Practical
- Trustworthy

The header should not feel:

- Corporate
- Sales focused
- Overly modern
- Startup-like

---

# Desktop Layout

The desktop header consists of two horizontal sections:

```text
+------------------------------------------------------------------+
| Phone | Email                              Social Icons          |
+------------------------------------------------------------------+

+------------------------------------------------------------------+
| Logo | Navigation                          Request Quote Button  |
+------------------------------------------------------------------+
```

---

# Section 1 - Utility Bar

## Purpose

Provides immediate contact information and social links.

## Height

```text
40px
```

## Background Colour

```text
Primary Dark
#22333D
```

## Text Colour

```text
White
```

---

## Left Side

Display:

```text
Phone Number
Email Address
```

Values sourced from Global Settings.

Example:

(03) 9580 8009

info@steelformengineering.com.au

---

## Right Side

Display social icons only where profiles exist.

Supported platforms:

- LinkedIn
- Facebook
- Instagram
- YouTube

Open in new tab.

Icons should be subtle and consistent.

---

## Mobile Behaviour

Utility bar is hidden on mobile devices.

---

# Section 2 - Primary Header

## Purpose

Primary branding and navigation area.

## Height

```text
90px
```

## Background

```text
White
```

## Border

Optional subtle bottom border.

Example:

```text
border-b
border-slate-200
```

---

# Logo Area

## Position

Left aligned.

## Source

Use:

```text
Logo Light
```

from Global Settings.

## Behaviour

Logo links to:

```text
/
```

## Size

Maximum logo height:

```text
60px
```

Maintain aspect ratio.

Do not crop.

---

# Navigation Area

## Desktop Navigation

Display:

```text
Home
Solutions
Projects
Articles
Why Steelform
Contact Us
```

## Style

Navigation should:

- Be simple
- Be horizontally aligned
- Use consistent spacing
- Not include icons

---

## Navigation Behaviour

Current page should be visually highlighted.

Hover state should be subtle.

Do not use animations beyond simple colour transitions.

---

## Dropdown Menus

Not included in Version 1.

Do not implement:

- Mega menus
- Dropdown navigation
- Flyout menus

---

# Primary CTA

## Purpose

Primary website conversion action.

## Label

```text
Request a Quote
```

## Destination

```text
/contact-us
```

## Style

Background:

```text
Safety Orange
#F27224
```

Text:

```text
White
```

Shape:

```text
Rounded corners
```

Behaviour:

```text
Subtle hover state
```

No animation beyond colour or shadow transition.

---

# Mobile Layout

## Mobile Header

Single row layout.

```text
+--------------------------------+
| Logo                Menu Icon |
+--------------------------------+
```

## Menu Icon

Standard hamburger icon.

Right aligned.

---

# Mobile Navigation

When opened:

```text
Home
Solutions
Projects
Articles
Why Steelform
Contact Us

Request a Quote
```

## Behaviour

Menu should:

- Expand below header
- Be touch friendly
- Be keyboard accessible

---

# Responsiveness

Desktop:

```text
1024px and above
```

Tablet:

```text
768px to 1023px
```

Mobile:

```text
Below 768px
```

Navigation should collapse into mobile menu below desktop breakpoint.

---

# Accessibility

Requirements:

- Keyboard navigable
- Visible focus states
- Sufficient colour contrast
- Semantic navigation element
- Appropriate aria labels for menu controls
- Appropriate aria labels for social links

---

# Technical Requirements

Create:

```text
src/components/Header.tsx
```

Use:

- Next.js Link
- TailwindCSS
- Responsive design

Do not:

- Modify page layouts
- Modify page content
- Modify routes
- Modify CTA components

Header.tsx should be self-contained and reusable.

---

# Out of Scope

Version 1 does NOT include:

- Search functionality
- Sticky header
- Mega menus
- Breadcrumb integration
- Dynamic navigation generation
- User login areas
- Dark mode support

These may be considered in future iterations.

---

# Success Criteria

The Header is considered complete when:

- Logo appears on all pages
- Navigation appears on all pages
- Request a Quote CTA appears on all pages
- Mobile navigation functions correctly
- Utility bar displays contact information
- Utility bar displays social links
- Header aligns with the Steelform Design System v2
- No existing page functionality is changed