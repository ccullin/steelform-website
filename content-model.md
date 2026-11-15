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

- Projects[]
- Articles[]
- Industries[]
- EquipmentTypes[]

---

# Project

## Purpose

Demonstrate capability.

Provide proof of experience.

## Fields

- Title
- Slug
- SEO Title
- SEO Description
- Hero Image
- Gallery[]
- Summary
- Main Content

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
- Summary
- Main Content
- Published Date

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
- SEO Title
- SEO Description
- Hero Image
- Summary
- Main Content

## Relationships

- Solutions[]
- Projects[]

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
- SEO Title
- SEO Description
- Hero Image
- Summary
- Main Content

## Relationships

- Solutions[]
- Projects[]

---

# Taxonomy Tag

## Purpose

Flexible classification.

Examples:

- Hardox
- Wear Package
- Mud Bucket
- Rock Bucket
- Mining

## Fields

- Title
- Slug

## Relationships

- Solutions[]
- Projects[]
- Articles[]

---

# Global Settings

## Fields

- Business Name
- Phone Number
- Email Address
- Social Links
- Primary CTA Label
- Secondary CTA Label

---

# Key Relationships

Solution
↔ Projects

Solution
↔ Articles

Solution
↔ Industries

Solution
↔ Equipment Types

Project
↔ Industries

Project
↔ Equipment Types

Article
↔ Solutions

Industry
↔ Projects

Industry
↔ Solutions
