import { getNews, getNewsBySlug } from "@/services/news";
import NewsDetail from "@/app/component/news/NewsDetail";
import { notFound } from "next/navigation";

type PageProps = {
  params: Promise<{ slug: string }>;
};

// ✅ Metadata động cho từng bài viết
export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const news = await getNewsBySlug(slug);

  if (!news) {
    return {
      title: "Tin không tồn tại",
      description: "Bài viết bạn tìm kiếm không tồn tại.",
    };
  }

  const cleanDescription = news.content
    ?.replace(/[#_*[\]()]/g, "")
    ?.replace(/\n+/g, " ")
    ?.slice(0, 150);

  return {
    title: news.title,
    description: cleanDescription,
    openGraph: {
      title: news.title,
      description: cleanDescription,
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
    twitter: {
      card: "summary_large_image",
      title: news.title,
      description: cleanDescription,
      images: [
        news.image?.startsWith("http")
          ? news.image
          : `https://webqtd.vercel.app${news.image || "/image/noimage.jpg"}`,
      ],
    },
  };
}

// ✅ Trang chi tiết tin tức
export default async function NewsDetailPage({ params }: PageProps) {
  const { slug } = await params; // ✅ phải await ở Next.js 15
  const news = await getNewsBySlug(slug);

  if (!news) notFound();

  const { news: allNews } = await getNews(1, 50);
  const relatedNews = allNews
    .filter((item) => item.slug !== news.slug)
    .slice(0, 3);

  return <NewsDetail news={news} relatedNews={relatedNews} />;
}