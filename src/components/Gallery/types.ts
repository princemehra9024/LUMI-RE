export type Category =
  | 'all'
  | 'signature'
  | 'interior'
  | "chef"
  | 'wine'
  | 'events'
  | 'behind';

export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: Exclude<Category, 'all'>;
  title?: string;
  priority?: boolean;
}
