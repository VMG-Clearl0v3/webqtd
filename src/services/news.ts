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
];

export async function getNews(): Promise<News[]> {
  return newsList;
}

export async function getNewsBySlug(slug: string): Promise<News | undefined> {
  return newsList.find((item) => item.slug === slug);
}


// // export async function getNews() {
// //   return await prisma.news.findMany({
// //     orderBy: { date: "desc" },
// //     take: 6, // giới hạn 6 tin
// //   });
// // }

// // export async function getNewsBySlug(slug: string) {
// //   return await prisma.news.findUnique({
// //     where: { slug },
// //   });
// // }