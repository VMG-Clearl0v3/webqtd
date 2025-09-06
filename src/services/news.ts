import { News, RawNews, NewsImage } from "@/types/news";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

// function getImageUrl(imageData: unknown): string {
//   if (!imageData) return "";
//   const imgObj = Array.isArray(imageData)
//     ? imageData[0]
//     : imageData;
//   const realUrl = imgObj.formats?.large?.url || imgObj.url;
//   return realUrl?.startsWith("http") ? realUrl : `${API_URL}${realUrl}`;
// }
export const getImageUrl = (imageData?: NewsImage[] | NewsImage): string | null => {
  if (!imageData) return null;

  // Nếu là mảng thì lấy phần tử đầu tiên
  const imgObj: NewsImage | undefined = Array.isArray(imageData) ? imageData[0] : imageData;
  if (!imgObj) return null;

  // Lấy URL ảnh lớn nếu có, fallback về url gốc
  const url = imgObj.formats?.large?.url || imgObj.url;
  if (!url) return null;

  // Nếu url đã full (http/https) → trả luôn
  return url.startsWith("http") ? url : `${process.env.NEXT_PUBLIC_API_URL}${url}`;
}

export async function getNews(): Promise<News[]> {
  const res = await fetch(`${API_URL}/api/news?populate=*&sort[0]=date:desc`, { cache: 'no-store' });
  const json: { data: RawNews[] } = await res.json();
  return json.data.map((item: RawNews) => ({
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
  const json: { data: RawNews[] } = await res.json();
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
