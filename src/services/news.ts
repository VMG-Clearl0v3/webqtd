import { News } from "@/types/news";

const newsList: News[] = [
  {
    id: 1,
    image: "/image/news_1.jpg",
    title: "Khuyến mãi tháng 8",
    slug: "khuyen-mai-thang-8",
    content: "Chi tiết chương trình khuyến mãi tháng 8...",
    date: "2025-08-01",
  },
  {
    id: 2,
    image: "/image/news_2.jpg",
    title: "Ưu đãi lãi suất cho vay",
    slug: "uu-dai-lai-suat",
    content: "Thông tin về ưu đãi lãi suất hấp dẫn...",
    date: "2025-08-10",
  },
    {
    id: 3,
    image: "/image/2_9.png",
    title: "Ưu đãi lãi suất cho vay",
    slug: "uu-dai-lai-suat",
    content: "Thông tin về ưu đãi lãi suất hấp dẫn...",
    date: "2025-08-10",
  },
   {
    id: 4,
    image: "/image/news_1.jpg",
    title: "Khuyến mãi tháng 8",
    slug: "khuyen-mai-thang-8",
    content: "Chi tiết chương trình khuyến mãi tháng 8...",
    date: "2025-08-01",
  },
  {
    id: 5,
    image: "/image/news_2.jpg",
    title: "Ưu đãi lãi suất cho vay",
    slug: "uu-dai-lai-suat",
    content: "Thông tin về ưu đãi lãi suất hấp dẫn...",
    date: "2025-08-10",
  },
    {
    id: 6,
    image: "/image/2_9.png",
    title: "Ưu đãi lãi suất cho vay",
    slug: "uu-dai-lai-suat",
    content: "Thông tin về ưu đãi lãi suất hấp dẫn...",
    date: "2025-08-10",
  },
   {
    id: 7,
    image: "/image/news_1.jpg",
    title: "Khuyến mãi tháng 8",
    slug: "khuyen-mai-thang-8",
    content: "Chi tiết chương trình khuyến mãi tháng 8...",
    date: "2025-08-01",
  },
  {
    id: 8,
    image: "/image/news_2.jpg",
    title: "Ưu đãi lãi suất cho vay",
    slug: "uu-dai-lai-suat",
    content: "Thông tin về ưu đãi lãi suất hấp dẫn...",
    date: "2025-08-10",
  },
    {
    id: 9,
    image: "/image/2_9.png",
    title: "Ưu đãi lãi suất cho vay",
    slug: "uu-dai-lai-suat",
    content: "Thông tin về ưu đãi lãi suất hấp dẫn...",
    date: "2025-08-10",
  },
  {
    id: 10,
    image: "/image/news_1.jpg",
    title: "Khuyến mãi tháng 8",
    slug: "khuyen-mai-thang-8",
    content: "Chi tiết chương trình khuyến mãi tháng 8...",
    date: "2025-08-01",
  },
  {
    id: 11,
    image: "/image/news_2.jpg",
    title: "Ưu đãi lãi suất cho vay",
    slug: "uu-dai-lai-suat",
    content: "Thông tin về ưu đãi lãi suất hấp dẫn...",
    date: "2025-08-10",
  },
    {
    id: 12,
    image: "/image/2_9.png",
    title: "Ưu đãi lãi suất cho vay",
    slug: "uu-dai-lai-suat",
    content: "Thông tin về ưu đãi lãi suất hấp dẫn...",
    date: "2025-08-10",
  },
  {
    id: 12,
    image: "/image/news_1.jpg",
    title: "Khuyến mãi tháng 8",
    slug: "khuyen-mai-thang-8",
    content: "Chi tiết chương trình khuyến mãi tháng 8...",
    date: "2025-08-01",
  },
  {
    id: 14,
    image: "/image/news_2.jpg",
    title: "Ưu đãi lãi suất cho vay",
    slug: "uu-dai-lai-suat",
    content: "Thông tin về ưu đãi lãi suất hấp dẫn...",
    date: "2025-08-10",
  },
    {
    id: 15,
    image: "/image/2_9.png",
    title: "Ưu đãi lãi suất cho vay",
    slug: "uu-dai-lai-suat",
    content: "Thông tin về ưu đãi lãi suất hấp dẫn...",
    date: "2025-08-10",
  },
  {
    id: 16,
    image: "/image/news_1.jpg",
    title: "Khuyến mãi tháng 8",
    slug: "khuyen-mai-thang-8",
    content: "Chi tiết chương trình khuyến mãi tháng 8...",
    date: "2025-08-01",
  },
  {
    id: 17,
    image: "/image/news_2.jpg",
    title: "Ưu đãi lãi suất cho vay",
    slug: "uu-dai-lai-suat",
    content: "Thông tin về ưu đãi lãi suất hấp dẫn...",
    date: "2025-08-10",
  },
    {
    id: 18,
    image: "/image/2_9.png",
    title: "Ưu đãi lãi suất cho vay",
    slug: "uu-dai-lai-suat",
    content: "Thông tin về ưu đãi lãi suất hấp dẫn...",
    date: "2025-08-10",
  },

];

export async function getNews(): Promise<News[]> {
  return newsList;
}

export async function getNewsBySlug(slug: string): Promise<News | undefined> {
  return newsList.find((item) => item.slug === slug);
}

