import { getNews } from "@/services/news";
import NewsCard from "@/app/component/news/NewsCard";

export default async function NewsPage() {
  const news = await getNews();

  return (
      <div className="max-w-7xl mx-auto p-4">
        {news.map((item) => (
          <NewsCard key={item.id} item={item} />
        ))}
      </div>
  );
}