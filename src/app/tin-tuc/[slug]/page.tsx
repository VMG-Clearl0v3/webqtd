import { getNews, getNewsBySlug } from "@/services/news";
import NewsDetail from "@/app/component/news/NewsDetail";
import { notFound } from "next/navigation";

interface PageProps {
  params: { slug: string }; // ✅ KHÔNG phải Promise
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = params;
  const news = await getNewsBySlug(slug);

  if (!news) return {};

  const description = news.content
    ?.replace(/[#_*[\]()]/g, "")
    .replace(/\n+/g, " ")
    .slice(0, 150);

  return {
    title: news.title,
    description,
    openGraph: {
      title: news.title,
      description,
      url: `https://webqtd.vercel.app/tin-tuc/${slug}`,
      siteName: "Quỹ Tín Dụng Nhân Dân Trung Sơn",
      images: [
        {
          url: news.image?.startsWith("http")
            ? news.image
            : `https://webqtd.vercel.app${news.image || "/image/noimage.jpg"}`,
          width: 1200,
          height: 630,
          alt: news.title,
        },
      ],
      locale: "vi_VN",
      type: "article",
    },
  };
}

export default async function NewsDetailPage({ params }: PageProps) {
  const { slug } = params;
  const news = await getNewsBySlug(slug);

  if (!news) notFound();

  const { news: allNews } = await getNews(1, 50);
  const relatedNews = allNews
    .filter((item) => item.slug !== news.slug)
    .slice(0, 3);

  return <NewsDetail news={news} relatedNews={relatedNews} />;
}