export interface Frontmatter {
  title: string;
  description: string;
  image: string;
  placeholder: string;
  categories: string[];
  featured: boolean;
  url?: string;
  draft: boolean;
  publishedAt: string;
  author: string;
  readingTime: number;
}

export interface SinglePage {
  slug: string;
  frontmatter: Frontmatter;
  content: string;
}

export type AllSinglePages = Array<SinglePage>;

type SocialList = {
  name: string;
  url: string;
};

export interface AuthorFrontmatter {
  name: string;
  slug: string;
  about: string;
  banner: string;
  socials: SocialList[];
}

export interface AuthorPage {
  slug: string;
  frontmatter: AuthorFrontmatter;
  content: string;
}

export type AllAuthorsPage = Array<AuthorPage>;
