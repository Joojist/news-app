export interface Article {
  title: string;
  url: string;
  urlToImage: string;
  source: {
    id: string | null;
    name: string;
  };
  publishedAt: string;
  description: string;
}
