export interface Solution {
  _id: string;
  title: string;
  solutionType: 'parent' | 'child';
  parent?: {
    _id: string;
    title: string;
    slug: { current: string };
  };
  slug: { current: string };
  seo: {
    title?: string;
    description?: string;
  };
  heroImage: {
    image: {
      asset: { _ref: string };
    };
    alt?: string;
  };
  summary?: string;
  mainContent: Array<{
    _key: string;
    _type: 'block' | 'image';
    style?: string;
    children?: Array<{ text: string }>;
    image?: {
      asset: { _ref: string };
    };
  }>;
}