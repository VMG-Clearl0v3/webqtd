import { getNews } from "@/services/news";
import NewsList from "@/app/component/news/NewsList";

export default async function NewsPage() {
  const news = await getNews();

  return (
    <div>
      <NewsList news={news} />
    </div>
  );
}