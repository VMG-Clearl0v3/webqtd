import { getNewsBySlug } from "@/services/news";
import NewsDetail from "@/app/component/news/NewsDetail";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params; 
  const news = await getNewsBySlug(slug);
  if (!news) return {};

  return {
    title: news.title,
    description: news.content.slice(0, 150),
    openGraph: {
      title: news.title,
      description: news.content.slice(0, 150),
      images: [
        {
          url: news.image || "/image/noimage.jpg",
        },
      ],
      url: `https://webqtd.vercel.app/tin-tuc/${slug}`,
      type: "article",
    },
  };
}
export default async function NewsDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params; 
  const news = await getNewsBySlug(slug);

  if (!news) notFound();
  return <NewsDetail news={news} />;
}