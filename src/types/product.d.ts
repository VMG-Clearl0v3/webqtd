export interface Product {
  id: number;
  title: string;
  slug: string;
  description: string;
  image: string;
  type: "loan" | "deposit"; // phân loại
}
