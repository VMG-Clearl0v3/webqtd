import { getNewsBySlug } from "@/services/news";
import NewsDetail from "@/app/component/news/NewsDetail";
import { notFound } from "next/navigation";
import Head from "next/head";
export default async function NewsDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params; 
  const news = await getNewsBySlug(slug);

  if (!news) notFound();
  const shareUrl = `https://webqtd.vercel.app/tin-tuc/${slug}`;
  return (
    <>
      {/* OG meta tags nằm trực tiếp trong Server Component */}
      <Head>
        <title>{news.title}</title>
        <meta property="og:title" content={news.title} />
        <meta
          property="og:description"
          content={news.content.slice(0, 150)}
        />
        <meta property="og:image" content={news.image} />
        <meta property="og:url" content={shareUrl} />
        <meta property="og:type" content="new" />
        {/*<meta name="twitter:card" content="summary_large_image" />*/}
      </Head>

      <NewsDetail news={news} />
    </>
  );
}