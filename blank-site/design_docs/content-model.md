# Content Model

## Philosophy

Content is the foundation of the website.

Pages are generated from relationships between content.

---

# Solution

## Purpose
Primary SEO and conversion content.

Examples:

- Excavator Buckets
- Bucket Repairs
- Heavy Fabrication
- Mining Equipment

## Fields
- Title
- Slug
- SEO Title
- SEO Description
- Hero Image
- Summary
- Main Content

## Relationships
- none

---

# Project

## Purpose
Demonstrate capability.
Provide proof of experience.

## Fields
- Title
- Slug
- Hero Image
- Gallery[]
- Summary

## Relationships
- Solutions[]
- Industries[]
- EquipmentTypes[]

---

# Article

## Purpose
Capture informational searches.
Build topical authority.

## Fields
- Title
- Slug
- SEO Title
- SEO Description
- Hero Image
- Main Content

## Relationships
- Solutions[]
- Industries[]
- EquipmentTypes[]

---

# Industry

## Purpose
Provide industry-specific context.

Improve internal linking.

## Fields
- Title
- Slug
- Summary

## Relationships
- none

---

# Equipment Type

## Purpose
Capture equipment-specific searches.

Examples:

- CAT 336
- CAT 390
- Komatsu PC450

## Fields
- Title
- Slug
- Hero Image

## Relationships
- none

---

# Global Settings

## Fields
- Business Name
- Phone Number
- Email Address
- Address
- Australian Business Number (ABN)
- Social Links
- Primary CTA Label
- Secondary CTA Label
- logo Light
- Logo Dark
- Favicon Light
- Favicon Dark

---

# Relationship Ownership
Project
-> Solutions
-> Industries
-> Equipment Types

Article
-> Solutions
-> Industries
-> Equipment Types

---

# Content Discovery

## Solution Pages Discover:
- Related Projects
- Related Articles

via GROQ queries.

## Industry Pages Discover:
- Related Projects
- Related Articles

via GROQ queries.

### Equipment Pages Discover:
- Related Projects
- Related Articles

via GROQ queries.