import { getNewsBySlug } from "@/services/news";
import { notFound } from "next/navigation";
import NewsDetail from "@/app/component/news/NewsDetail";

export default async function NewsDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const news = await getNewsBySlug(params.slug);
  if (!news) notFound();

  return <NewsDetail news={news} />;
}