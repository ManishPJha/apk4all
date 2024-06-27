interface Frontmatter {
  title: string;
  description: string;
  image: string;
  categories: string[];
  featured: boolean;
  draft: boolean;
  publishedAt: string;
  readingTime: number;
}

export interface SinglePage {
  slug: string;
  frontmatter: Frontmatter;
  content: string;
}

export type AllSinglePages = Array<SinglePage>;
