// export interface Product {
//   id: number;
//   title: string;
//   slug: string;
//   description: string;
//   image: string | null;
//   condition: string;
//   feature: string;
//   document: string;
//   type: "loan" | "deposit"; // phân loại
// }
// Image format
export interface ProductImageFormat {
  url: string;
}

// Một ảnh trong Strapi
export interface ProductImage {
  url: string;
  formats?: {
    large?: ProductImageFormat;
    medium?: ProductImageFormat;
    small?: ProductImageFormat;
    thumbnail?: ProductImageFormat;
  };
}

// Dữ liệu thô từ API Strapi (không có attributes)
export interface RawProduct {
  id: number;
  title: string;
  slug: string;
  description: string;
  condition: string;
  feature: string;
  document: string;
  type: "loan" | "deposit";
  image?: {
    data?: ProductImage[] | ProductImage;
  };
}

// Dữ liệu đã chuẩn hóa để dùng trong UI
export interface Product {
  id: number;
  title: string;
  slug: string;
  description: string;
  condition: string;
  feature: string;
  document: string;
  type: "loan" | "deposit";
  image: string | null; // URL hoặc null
}