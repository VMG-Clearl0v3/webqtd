// export interface NewsImageFormat {
//   url: string;
// }

// // Một ảnh trong Strapi
// export interface NewsImage {
//   url: string;
//   formats?: {
//     large?: NewsImageFormat;
//     medium?: NewsImageFormat;
//     small?: NewsImageFormat;
//     thumbnail?: NewsImageFormat;
//   };
// }

// // Dữ liệu thô từ Strapi
// export interface RawNews {
//   id: number;
//   title: string;
//   slug: string;
//   content: string;
//   date: string;
//   image?: {
//     data?: NewsImage[] | NewsImage;
//   };
// }

// // Dữ liệu đã chuẩn hóa để render
// export interface News {
//   id: number;
//   title: string;
//   slug: string;
//   content: string;
//   date: string;
//   image: string | null;
// }
export interface NewsImageFormat {
  url: string;
  width?: number;
  height?: number;
}

export interface NewsImage {
  id: number;
  url: string;
  alternativeText?: string | null;
  caption?: string | null;
  formats?: {
    large?: NewsImageFormat;
    medium?: NewsImageFormat;
    small?: NewsImageFormat;
    thumbnail?: NewsImageFormat;
  };
}

// ----------------------
// 🏷️ Category
// ----------------------
export interface NewsCategory {
  id: number;
  name: string;
  slug?: string;
  description?: string;
}

// ----------------------
// 📦 Dữ liệu thô từ Strapi v5
// ----------------------
export interface RawNews {
  id: number;
  documentId: string;
  title: string;
  slug: string;
  content: string;
  date: string;
  createdAt: string;
  updatedAt: string;
  publishedAt?: string;
  image?: NewsImage | null;
  category?: NewsCategory | null;
}

// ----------------------
// 🚀 Dữ liệu chuẩn hóa để render
// ----------------------
export interface News {
  id: number;
  title: string;
  slug: string;
  content: string;
  date: string;
  image: string | null; // URL của ảnh chính
  category?: NewsCategory | null;
}