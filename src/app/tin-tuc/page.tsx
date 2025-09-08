import { getNews } from "@/services/news";
import NewsList from "@/app/component/news/NewsList";

export default async function NewsPage() {
  const { news, totalPages } = await getNews(1, 6);

  return (
    <div>
      <NewsList initialNews={news} initialTotalPages={totalPages} />
    </div>
  );
}