// export interface News {
//   id: number;
//   image: string;
//   title: string;
//   slug: string;
//   content: string;
//   date: datetime;
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

// Đây là type News chuẩn cho front-end sử dụng
export interface News {
  id: number;
  title: string;
  slug: string;
  content: string;
  image: StrapiImageItem[]; // luôn là array object ảnh
  date: string;
}