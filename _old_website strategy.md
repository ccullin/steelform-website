
# Steelform Engineering Website Strategy 2027
**Version:** 1.0 - Foundation Strategy Document  
**Client:** Steelform Engineering Pty Ltd (Melbourne, Victoria, Australia)  
**Established:** 1999 (25+ years of fabrication and welding expertise)

---

## 1. Executive Summary
The current website is structured around internal business categories (products, services, and a gallery), which does not align with how potential customers search for suppliers, evaluate capability, or make purchasing decisions.

The new website will reposition **Steelform Engineering Pty Ltd** as an Australian engineering and manufacturing partner rather than simply a fabrication shop. The site will be designed around search intent, customer problems, industry sectors, and project outcomes.

**Primary Objective:** Generate qualified inbound enquiries from mining companies, quarry operators, earthmoving contractors, procurement teams, OEM suppliers, and maintenance managers.

---

## 2. Business Goals

### Primary Goal
Generate qualified inbound enquiries that lead directly to:
* Excavator bucket projects
* Excavator attachment projects
* OEM excavator supplier relationships
* Heavy fabrication projects
* Mining equipment manufacturing contracts
* Repairs and rebuilds
* Contract manufacturing opportunities

### Secondary Goals
* **Demonstrate Capability:** Provide evidence of workshop capacity, manufacturing expertise, Australian-made value proposition, material knowledge, engineering capability, and completed projects.
* **Build Authority:** Establish Steelform as an experienced Australian manufacturer, trusted mining supplier, trusted excavator bucket provider, specialist fabrication partner, and long-term equipment solutions provider.
* **Support Sales:** Enable sales conversations through detailed project examples, capability information, industry-specific expertise, and technical content.
* **Create a Long-Term SEO Asset:** Ensure every completed project becomes a case study, searchable landing page, marketing asset, and future sales reference.

---

## 3. Target Audiences

| Persona | Core Responsibilities | Example Search Queries | Key Decision Drivers |
| :--- | :--- | :--- | :--- |
| **Mining Maintenance Manager** | Equipment availability, maintenance planning, shutdown work, bucket & wear management | `excavator bucket manufacturer australia`, `bucket rebuild specialists`, `mining fabrication contractors`, `wear package fabrication` | Reliability, durability, lead time, proven capability |
| **Procurement Manager** | Supplier evaluation, contract placement, vendor management | `mining equipment manufacturer australia`, `heavy fabrication victoria`, `fabrication contractor melbourne` | Capacity, delivery performance, quality systems, commercial confidence, value for money |
| **Earthmoving Contractor** | Fleet productivity, equipment utilisation | `rock bucket manufacturer`, `excavator attachments`, `bucket repairs`, `custom buckets` | Fast turnaround, value for money, equipment performance |
| **OEM Equipment Supplier** | Outsourced manufacturing, production support | *(Direct outreach & capability verification)* | Manufacturing quality, repeatability, confidentiality, production capacity |

---

## 4. Brand Positioning

### Core Positioning Statement
> Australian manufacturer of excavator attachments and mining equipment, and heavy fabrication solutions for the recycling, mining, quarrying, and earthmoving industries.

### Supporting Positioning Themes
* **Manufacturing Experience:** Operating since 1999 with over 25 years of steel fabrication and welding expertise.
* **Australian Manufacturing:** Locally manufactured products and components engineered for Australian operating conditions.
* **Engineering Solutions:** Providing custom-built engineering solutions rather than commodity products.
* **Proven Capability:** Demonstrated through completed projects and long-term industry relationships.

---

## 5. Content Strategy (5 Core Pillars)

### Pillar 1: Solutions (What Steelform Does)
Core solution landing pages:
1. Excavator Buckets
2. Excavator Attachments
3. Mining Equipment Manufacturing
4. Heavy Fabrication
5. Bucket Repairs & Rebuilds
6. Contract Manufacturing


### Pillar 2: Industries (Who Steelform Serves)
References to Industries appear inside solutions and projects:
1. Mining
2. Quarrying
3. Earthmoving
4. Recycling

### Pillar 3: Equipment Types (Machines Supported)
References to equipment appear inside solutions and projects includes OEM models, bucket type and weight classs:
* **Specific Models:** CAT 320, CAT 336, Komatsu PC200, Komatsu PC300, Hitachi ZX350
* **attachements Type:** Mud Bucket, claw
* **Weight Classes:** 5T, 8T, 12T, 20T, 30T Excavators

### Pillar 4: Projects (Centrepiece Portfolio)
Replaces the traditional photo gallery with a structured **Project Library**.
* **Example Projects:** CAT 336 Rock Bucket Manufacture, Komatsu Bucket Rebuild, Hardox Wear Package Upgrade, Quarry Equipment Fabrication, Plant Shutdown Fabrication, Custom Excavator Attachment.
* **Required Project Fields:**
  * **Overview:** What was required.
  * **Solution:** What was designed or manufactured.
  * **Gallery:** High-resolution images and videos.
  * **Related Solutions:** Industries and Equipment Type references.

### Pillar 5: Knowledge Centre (Educational SEO Content)
Informational articles targeting top-of-funnel search behavior:
* Australian Made Excavator Buckets
* Benefits of Australian Manufacturing
* Why Australian Steel Matters
* Supply Chain Risks of Imported Buckets
* Australian Fabrication vs Offshore Manufacturing
* Choosing an Excavator Bucket
* Hardox vs Bisalloy
* Bucket Wear Protection
* Bucket Rebuild vs Replacement
* Mining Equipment Fabrication Guide
* Selecting Excavator Attachments

---

## 6. Information Architecture & Routing

### Site Hierarchy

Home (/)
├── Solutions (/solutions)
│   ├── Excavator Buckets (/solutions/excavator-buckets)
│   ├── Excavator Attachments (/solutions/excavator-attachments)
│   ├── Heavy Fabrication (/solutions/heavy-fabrication)
│   ├── Mining Equipment Manufacturing (/solutions/mining-equipment)
│   ├── Repairs & Rebuilds (/solutions/repairs-and-rebuilds)
│   └── Contract Manufacturing (/solutions/contract-manufacturing)
├── Projects (/projects)
│   └── [Project Slug] (/projects/[slug])
├── Knowledge Centre (/blog)
│   └── [Article Slug] (/blog/[slug])
├── Why Steelform (/why-us)
└── Contact (/contact)


### Navigation & UI Rules
* Mobile first design
* **Primary Navbar:** `<Solutions> <Industries> <Projects> <Blog> <Why SteelForm> <Contact Us>`
* **Breadcrumbs:** Every page must render a clickable hierarchical breadcrumb trail.
* **Persistent CTAs:** Every page must include clear, clickable CTAs for requesting a quote or contacting the team.
* **Filtering & Rendering:** Static pages will be generated at build time using GROQ queries in Next.js (`generateStaticParams`). Dynamic client-side filtering and search are excluded from Version 1 and deferred to a future release.

---

## 7. CMS Data Models & Schemas (Sanity)

Document / Content Types:

Page (Solutions / Industries / General)
├── seoTitle: string
├── seoDescription: text
├── heroImage: image
├── textContent: portableText
├── slug: slug
├── solutions: reference[] -> Solution
├── industries: reference[] -> Industry
└── excavators: reference[] -> Excavator

Project
├── seoTitle: string
├── seoDescription: text (fallback to summary if blank)
├── featureImage: image
├── images: image[] (must highlight Australian Made build quality)
├── summary: text (50–160 words)
├── textContent: portableText (must include materials used & callout features like extra wear plate or strengthening)
├── slug: slug
├── solutions: reference[] -> Solution
├── industries: reference[] -> Industry
└── excavators: reference[] -> Excavator

Article (Knowledge Centre)
├── seoTitle: string
├── seoDescription: text (fallback to summary if blank)
├── heroImage: image
├── images: image[]
├── summary: text (50–160 words)
├── textContent: portableText
├── slug: slug
├── solutions: reference[] -> Solution
├── industries: reference[] -> Industry
└── excavators: reference[] -> Excavator

---

## 8. SEO & Conversion Strategy

Primary Target Keywords

• Bucket Manufacturing: excavator bucket manufacturer australia, rock bucket manufacturer, custom excavator buckets, heavy duty excavator buckets
• Fabrication: heavy fabrication melbourne, steel fabrication melbourne, mining fabrication victoria
• Mining Manufacturing: mining equipment manufacturer australia, mining fabrication contractor, mining equipment components
• Repair Services: bucket repairs, bucket rebuilds, excavator attachment repairs

Compounding SEO Model

1. Landing Pages (Solutions/Industries/Excavators): Target high-intent commercial searches.
2. Projects: Target long-tail, machine-specific, and material-specific searches.
3. Knowledge Articles: Capture top-of-funnel informational searches and build domain authority.

Conversion Architecture

• Primary CTA: Request a Quote
• Secondary CTA: Speak to an Engineer
• Tertiary CTA: Download Capability Statement
• Global Trust Builders: Years in business (since 1999), project portfolio metrics, workshop capability, manufacturing capacity, industry sectors served, and client testimonials.

---

## 9. Technical Stack & Ownership Model

Tech Stack

• Frontend: Next.js (App Router), TypeScript, Tailwind CSS, shadcn/ui
• CMS: Sanity
• Hosting: Vercel
• Analytics: Google Analytics 4 (GA4), Google Search Console (GSC), Vercel Analytics
• Technical SEO: JSON-LD Structured Data, automated dynamic metadata, automated XML sitemap generation, Open Graph social tags

Ownership Boundaries

• Managed in Sanity CMS: Solutions, Industries, Projects, Articles, Testimonials, Team Profiles.
• Managed in Codebase: Global navigation, layout components, design system tokens, lead capture forms, technical SEO framework, analytics scripts.

---

## 10. Automated Content & Social Workflow

AI Agent Project Publishing Pipeline

1. Input (via SMS/WhatsApp from Kevin):
├── 5 project photos
├── Brief job description
├── Materials used (e.g., Hardox 450)
├── Machine size / model
└── Customer challenge

2. AI Agent Processing:
├── Generates structured Project draft in Sanity
├── Writes SEO Title & Meta Description
├── Assigns relational tags (Solutions[], Industries[], Excavators[])
└── Drafts LinkedIn & Facebook posts

3. Human-in-the-Loop Review -> Publish to Website & Social Channels

---

## 11. Analytics, KPIs & 12-Month Targets

Tracked KPIs

• Lead Generation: Quote requests, phone call clicks (tel:), email clicks (mailto:), contact form submissions.
• SEO Performance: Organic traffic, search impressions, target keyword rankings, indexed project page growth.

---

## 12. One year Content Targets

• Solutions: 10–15 core pages
• Industries: 5–8 core pages
• Projects: 50+ published project case studies
• Articles: 20–30 educational articles

---

## 13. Definition of Success

The website evolves from a static fabrication brochure into a searchable engineering knowledge base and project portfolio that proves manufacturing capability, consistently generates qualified B2B enquiries, and compounds in organic search value with every completed project.
