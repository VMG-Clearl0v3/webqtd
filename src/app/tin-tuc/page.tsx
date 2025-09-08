import { getNews } from "@/services/news";
import NewsList from "@/app/component/news/NewsList";

export default async function NewsPage({ searchParams }: { searchParams: { page?: string } }) {
  const page = Number(searchParams.page) || 1;

  const { news, totalPages } = await getNews(page, 6);

  return (
    <NewsList
      news={news}
      totalPages={totalPages}
      currentPage={page}
    />
  );
}