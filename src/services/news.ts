import { News } from "@/types/news";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

// function getImageUrl(imageArr: any[]): string | null {
//   if (!imageArr || !Array.isArray(imageArr) || imageArr.length === 0) return null;
//   const img = imageArr[0];
//   const url = img.url?.startsWith("https") ? img.url : `${API_URL}${img.url}`;
//   return url;
// }
function getImageUrl(imageArr: News["image"]): string | null {
  if (!imageArr || imageArr.length === 0) return null;
  // ví dụ lấy bản large nếu có, nếu không lấy url gốc
  const img = imageArr[0];
  const url = img.formats?.large?.url ?? img.formats?.medium?.url ?? img.formats?.small?.url ?? img.formats?.thumbnail?.url ?? "";
  return url.startsWith("http") ? url : `${API_URL}${url}`;
}

export async function getNews(): Promise<News[]> {
  const res = await fetch(`${API_URL}/api/news?populate=*&sort[0]=date:desc`, { cache: 'no-store' });
  const json = await res.json();
  return json.data.map((item) => ({
    id: item.id,
    title: item.title,
    slug: item.slug,
    content: item.content,
    image: getImageUrl(item.image),
    date: item.date,
  }));
}
export async function getNewsBySlug(slug: string): Promise<News | null> {
  const res = await fetch(`${API_URL}/api/news?filters[slug][$eq]=${slug}&populate=*`, { cache: 'no-store' });
  const json = await res.json();
  if (!json.data.length) return null;
  const item = json.data[0];
  return {
    id: item.id,
    title: item.title,
    slug: item.slug,
    content: item.content,
    image: getImageUrl(item.image),
    date: item.date,
  };
}

// export async function getNews(): Promise<News[]> {
//   return newsList;
// }

// export async function getNewsBySlug(slug: string): Promise<News | undefined> {
//   return newsList.find((item) => item.slug === slug);
// }

