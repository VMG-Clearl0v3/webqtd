import { getNews, getNewsBySlug } from "@/services/news";
import NewsDetail from "@/app/component/news/NewsDetail";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params; 
  const news = await getNewsBySlug(slug);

  if (!news) return {};

  // Làm sạch mô tả (bỏ markdown ký tự đặc biệt)
  const description = news.content
    ?.replace(/[#_*[\]()]/g, "")
    .replace(/\n+/g, " ")
    .slice(0, 150);

  // ✅ Cấu trúc metadata chuẩn SEO
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
    twitter: {
      card: "summary_large_image",
      title: news.title,
      description,
      images: [
        news.image?.startsWith("http")
          ? news.image
          : `https://webqtd.vercel.app${news.image || "/image/noimage.jpg"}`,
      ],
    },
  };
}

// ✅ Trang chi tiết tin
export default async function NewsDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const news = await getNewsBySlug(slug);

  if (!news) notFound();

  // 🔹 Lấy danh sách tin khác để làm “Tin liên quan”
  const { news: allNews } = await getNews(1, 50);
  const relatedNews = allNews
    .filter((item) => item.slug !== news.slug)
    .slice(0, 3);

  // ✅ Trả về component hiển thị chi tiết
  return <NewsDetail news={news} relatedNews={relatedNews} />;
}
