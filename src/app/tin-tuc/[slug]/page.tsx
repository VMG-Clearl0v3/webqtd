import { getNewsBySlug } from "@/services/news";
import NewsDetail from "@/app/component/news/NewsDetail";
import { notFound } from "next/navigation";

export default async function NewsDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>; // 👈 kiểu Promise
}) {
  const { slug } = await params; // 👈 phải await
  const news = await getNewsBySlug(slug);

  if (!news) notFound();

  return <NewsDetail news={news} />;
}