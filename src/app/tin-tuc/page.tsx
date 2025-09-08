import { getNews } from "@/services/news";
import NewsList from "@/app/component/news/NewsList";
import { News } from "@/types/news";

interface NewsPageProps {
  searchParams?: { page?: string };
}

export default async function NewsPage({ searchParams }: NewsPageProps) {
  const currentPage = searchParams?.page ? parseInt(searchParams.page) : 1;

  const { news, totalPages } = await getNews(currentPage, 6);

  return (
    <NewsList
      initialNews={news as News[]}
      totalPages={totalPages}
      initialPage={currentPage}
    />
  );
}