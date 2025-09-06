// export interface News {
//   id: number;
//   image: string | null;
//   title: string;
//   slug: string;
//   content: string;
//   date: datetime;
// }
export interface NewsImageFormat {
  url: string;
}

// Một ảnh trong Strapi
export interface NewsImage {
  url: string;
  formats?: {
    large?: NewsImageFormat;
    medium?: NewsImageFormat;
    small?: NewsImageFormat;
    thumbnail?: NewsImageFormat;
  };
}

// Dữ liệu thô từ Strapi
export interface RawNews {
  id: number;
  title: string;
  slug: string;
  content: string;
  date: string;
  image?: {
    data?: NewsImage[] | NewsImage;
  };
}

// Dữ liệu đã chuẩn hóa để render
export interface News {
  id: number;
  title: string;
  slug: string;
  content: string;
  date: string;
  image: string;
}