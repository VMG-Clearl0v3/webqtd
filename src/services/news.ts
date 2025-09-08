import { News, RawNews, NewsImage } from "@/types/news";

const API_URL = process.env.NEXT_PUBLIC_API_URL;
export const getImageUrl = (imageData?: NewsImage[] | NewsImage | { data?: NewsImage[] | NewsImage }): string | null => {
  if (!imageData) return null;

  let imgObj: NewsImage | undefined;

  if (Array.isArray(imageData)) {
    imgObj = imageData[0];
  } else if ("data" in imageData && imageData.data) {
    imgObj = Array.isArray(imageData.data) ? imageData.data[0] : imageData.data;
  } else {
    imgObj = imageData as NewsImage;
  }

  if (!imgObj) return null;

  const url = imgObj.formats?.large?.url || imgObj.url;
  if (!url) return null;

  return url.startsWith("http") ? url : `${API_URL}${url}`;
}

export async function getNews(page = 1, pageSize = 6): Promise<{ news: News[]; totalPages: number }> {
  const res = await fetch( `${API_URL}/api/news?populate=image&sort[0]=date:desc&pagination[page]=${page}&pagination[pageSize]=${pageSize}`,{next:{revalidate: 60 }});
  if (!res.ok) throw new Error("Lỗi lấy tin tức");
  const json = await res.json();
  const news: News[] = json.data.map((item: RawNews) => ({
    id: item.id,
    title: item.title,
    slug: item.slug,
    content: item.content,
    image: getImageUrl(item.image),
    date: item.date,
  }));
  const totalPages = json.meta.pagination.pageCount;
  return { news, totalPages };
}
export async function getNewsBySlug(slug: string): Promise<News | null> {
  const res = await fetch(`${API_URL}/api/news?filters[slug][$eq]=${slug}&populate=image`, {next:{revalidate: 60 }});
   const json = await res.json();
  if (json.data.length === 0) return null;
  const item: RawNews = json.data[0];
  return {
    id: item.id,
    title: item.title,
    slug: item.slug,
    content: item.content,
    image: getImageUrl(item.image),
    date: item.date,
  };
}
export async function getLastNews(limit = 3): Promise<News[]> {
  const res = await fetch(
    `${API_URL}/api/news?populate=image&sort[0]=date:desc&pagination[pageSize]=${limit}`,
    { next: { revalidate: 60 } }
  );
  if (!res.ok) throw new Error("Lỗi lấy tin tức");
  const json = await res.json();
  return json.data.map((item: RawNews) => ({
    id: item.id,
    title: item.title,
    slug: item.slug,
    content: item.content,
    image: getImageUrl(item.image),
    date: item.date,
  }));
}