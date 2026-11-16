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

# Key Relationships

Solution
<- Industries

Solution
<- Equipment Types

Project
-> Industries

Project
-> Equipment Types

Article
-> Industries

Article
-> Equipment Types

