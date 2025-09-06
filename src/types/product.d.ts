export interface Product {
  id: number;
  title: string;
  slug: string;
  description: string;
  image: string;
  condition: string;
  feature: string;
  document: string;
  type: "loan" | "deposit"; // phân loại
}
