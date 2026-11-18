Now I have a complete understanding of all the queries in the src/lib/sanity/queries directory. Let me create an inventory document based on what I've found:

# Sanity Queries Inventory

## 1. getArticleBySlug()
- **Inputs**: `slug: string`
- **Returns**: Article document with fields:
  - `_id`, `title`, `slug`, `seo`, `heroImage`, `mainContent`, `solutions`, `industries`, `equipmentTypes`
- **Filename**: articlesQuery.ts

## 2. getEquipmentTypeBySlug()
- **Inputs**: `slug: string`
- **Returns**: Equipment type document with fields:
  - `_id`, `title`, `slug`, `heroImage`
- **Filename**: equipmentTypesQuery.ts

## 3. getProjectsByEquipmentType()
- **Inputs**: `slug: string` 
- **Returns**: Array of project documents with fields:
  - `_id`, `title`, `slug`, `heroImage`, `summary`
- **Filename**: equipmentTypesQuery.ts

## 4. getArticlesByEquipmentType()
- **Inputs**: `slug: string`
- **Returns**: Array of article documents with fields:
  - `_id`, `title`, `slug`, `seo`, `heroImage`, `summary`
- **Filename**: equipmentTypesQuery.ts

## 5. getGlobalSettings()
- **Inputs**: None
- **Returns**: Global settings document with fields:
  - `_id`, `businessName`, `phoneNumber`, `emailAddress`, `businessAddress`, `ABN`, `socialLinks`, `primaryCtaLabel`, `secondaryCtaLabel`, `logoForLightBackground`, `logoForDarkBackground`, `faviconForLightBackground`, `faviconForDarkBackground`
- **Filename**: globalSettingsQuery.ts

## 6. getIndustryBySlug()
- **Inputs**: `slug: string`
- **Returns**: Industry document with fields:
  - `_id`, `title`, `slug`, `summary`
- **Filename**: industriesQuery.ts

## 7. getProjectsByIndustry()
- **Inputs**: `slug: string`
- **Returns**: Array of project documents with fields:
  - `_id`, `title`, `slug`, `heroImage`, `summary`
- **Filename**: industriesQuery.ts

## 8. getArticlesByIndustry()
- **Inputs**: `slug: string`
- **Returns**: Array of article documents with fields:
  - `_id`, `title`, `slug`, `seo`, `heroImage`, `summary`
- **Filename**: industriesQuery.ts

## 9. getProjectBySlug()
- **Inputs**: `slug: string`
- **Returns**: Project document with fields:
  - `_id`, `title`, `slug`, `heroImage`, `gallery`, `summary`, `solutions`, `industries`, `equipmentTypes`
- **Filename**: projectsQuery.ts

## 10. getSolutionBySlug()
- **Inputs**: `slug: string`
- **Returns**: Solution document with fields:
  - `_id`, `title`, `solutionType`, `parent` (with `_id`, `title`, `slug`), `slug`, `seo`, `heroImage`, `summary`, `mainContent`
- **Filename**: solutionsQuery.ts

## 11. getParentSolutionBySlug()
- **Inputs**: `slug: string`
- **Returns**: Parent solution document with fields:
  - `_id`, `title`, `slug`, `seo`, `heroImage`, `summary`, `mainContent`
- **Filename**: solutionsQuery.ts

## 12. getChildSolutions()
- **Inputs**: `parentId: string`
- **Returns**: Array of child solution documents with fields:
  - `_id`, `title`, `slug`, `summary`
- **Filename**: solutionsQuery.ts

## 13. getChildSolutionWithParent()
- **Inputs**: `parentSlug: string`, `childSlug: string`
- **Returns**: Child solution document with parent reference and fields:
  - `_id`, `title`, `solutionType`, `parent` (with `_id`, `title`, `slug`), `slug`, `seo`, `heroImage`, `summary`, `mainContent`
- **Filename**: solutionsQuery.ts

## 14. getRelatedProjectsBySolutionId()
- **Inputs**: `solutionId: string`
- **Returns**: Array of project documents with fields:
  - `_id`, `title`, `slug`, `heroImage`, `summary`
- **Filename**: solutionsQuery.ts

## 15. getRelatedArticlesBySolutionId()
- **Inputs**: `solutionId: string`
- **Returns**: Array of article documents with fields:
  - `_id`, `title`, `slug`, `heroImage`, `summary`
- **Filename**: solutionsQuery.ts

This inventory provides a complete overview of all the Sanity queries in this project, including their inputs, return values, and file locations. Each query is documented to help with future maintenance and understanding of how data is retrieved from Sanity.