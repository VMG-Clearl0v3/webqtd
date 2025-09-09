import { getNews } from "@/services/news";
import NewsList from "@/app/component/news/NewsList";

interface NewsPageProps {
  searchParams: Promise<{ page?: string }>;
}

export default async function NewsPage({ searchParams }: NewsPageProps) {
  const resolvedSearchParams = await searchParams;
  const currentPage = resolvedSearchParams?.page
    ? parseInt(resolvedSearchParams.page)
    : 1;

  const { news, totalPages } = await getNews(currentPage, 6);

  return (
    <NewsList
      initialNews={news}
      totalPages={totalPages}
      initialPage={currentPage}
    />
  );
}