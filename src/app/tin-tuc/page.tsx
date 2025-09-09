import { getNews } from "@/services/news";
import NewsList from "@/app/component/news/NewsList";

export default async function NewsPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>; // khai báo Promise
}) {
  // await trước khi dùng
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