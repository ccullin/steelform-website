// src/lib/sanity/types/solutionPageTypes.ts

import type { SanityImageSource } from '@sanity/image-url'

export interface SlugType {
  current: string
}

export interface ChildSlugType {
  parent: {
    slug: SlugType
  }
  slug: SlugType
}

export interface ParentSlugType {
  slug: SlugType
}

export interface PortableTextChildType {
  text: string
}

export interface PortableTextBlockType {
  _key: string
  _type: string
  children?: PortableTextChildType[]
  image?: {
    asset?: {
      _ref?: string
    }
  }
}

export interface ProjectType {
  _id: string
  title: string
  slug: SlugType
  summary?: string
  heroImage?: HeroImageType
}

export interface ArticleType {
  _id: string
  title: string
  slug: SlugType
  summary?: string
  heroImage?: HeroImageType
  publishDate?: string
  mainContent?: PortableTextBlockType[]
}

export interface SolutionType {
  _id: string
  title: string
  solutionType: 'parent' | 'child'
  parent?: {
    _id: string
    title: string
    slug: SlugType
  }
  slug: SlugType
  seo: {
    title?: string
    description?: string
  }
  heroImage: HeroImageType
  summary?: string
  mainContent: PortableTextBlockType[]
}

export interface ChildSolutionType {
  _id: string
  title: string
  slug: SlugType
  summary?: string
}

export interface HeroImageType {
  image: SanityImageSource
  alt?: string
}

