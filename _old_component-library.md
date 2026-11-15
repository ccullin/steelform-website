# web page layouts 2027
**Version:** 1.0 - Foundation Strategy Document  

## Hero section
name: Hero

purpose:
  Introduce page topic

fields:
  eyebrow
  heading
  summary
  image
  primaryCTA
  secondaryCTA

layouts:
  split
  centered

## Solution page grid
name: SolutionGrid

purpose:
  Display solutions

source:
  solution

fields:
  image
  title
  summary
  slug

layout:
  cardGrid

## Industry layout
name: IndustryGrid

purpose:
  Showcase experience within the Industry

source:
  solution
  projects

fields:
  Hero

layout:
  cardGrid

## Project laytout
name: ProjectGrid

purpose:
  Showcase capability

source:
  project

fields:
  image
  title
  summary
  slug