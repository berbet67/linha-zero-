export interface Product {
  id: string;
  slug: string;
  title: string;
  description: string;
  price: number;
  category: 'ebook' | 'video' | 'course';
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  cover: string;
  features: string[];
  status: 'available' | 'coming-soon';
  checkoutUrl: string;
}

export interface Content {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: 'python' | 'frontend' | 'backend' | 'javascript' | 'git' | 'logic' | 'projects';
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  type: 'article' | 'video' | 'guide';
  tags: string[];
}
