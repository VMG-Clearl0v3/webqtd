// export interface Product {
//   id: number;
//   title: string;
//   slug: string;
//   description: string;
//   image: string;
//   condition: string;
//   feature: string;
//   document: string;
//   type: "loan" | "deposit"; // phân loại
// }
export interface StrapiImageFormat {
  url: string;
}

export interface StrapiImageItem {
  id: number;
  url: string;
  formats?: {
    large?: StrapiImageFormat;
    medium?: StrapiImageFormat;
    small?: StrapiImageFormat;
    thumbnail?: StrapiImageFormat;
  };
}

// Product có 1 ảnh duy nhất
export interface Product {
  id: number;
  title: string;
  slug: string;
  type: "loan" | "deposit";
  condition: string;
  feature: string;
  document: string;
  image: StrapiImageItem | null; // chỉ một object hoặc null
}
