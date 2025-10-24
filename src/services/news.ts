// import { News, RawNews, NewsImage } from "@/types/news";

// const API_URL = process.env.NEXT_PUBLIC_API_URL;

// export const getImageUrl = (
//   imageData?: NewsImage[] | NewsImage | { data?: NewsImage[] | NewsImage | null } | null
// ): string | null => {
//   if (!imageData) return null;

//   let imgObj: NewsImage | undefined;

//   if (Array.isArray(imageData)) {
//     imgObj = imageData[0];
//   } else if ("data" in imageData && imageData.data) {
//     imgObj = Array.isArray(imageData.data)
//       ? imageData.data[0]
//       : imageData.data;
//   } else {
//     imgObj = imageData as NewsImage;
//   }

//   if (!imgObj) return null;

//   const url = imgObj.formats?.large?.url || imgObj.url;
//   if (!url) return null;

//   return url.startsWith("http") ? url : `${API_URL}${url}`;
// };

// export async function getNews(page = 1, pageSize = 6) {
//   const res = await fetch(
//     `${API_URL}/api/news?populate=category,image&sort[0]=date:desc&pagination[page]=${page}&pagination[pageSize]=${pageSize}`,
//     { next: { revalidate: 60 } }
//   );
//   if (!res.ok) throw new Error("Lỗi lấy tin tức");

//   const json = await res.json();

//   const news: News[] = json.data.map((item: RawNews) => ({
//     ...item,
//     image: getImageUrl(item.image),
//   }));

//   return { news, totalPages: json.meta?.pagination?.pageCount ?? 1 };
// }

// export async function getNewsBySlug(slug: string): Promise<News | null> {
//   const res = await fetch(
//     `${API_URL}/api/news?filters[slug][$eq]=${slug}&filters[publishedAt][$notNull]=true&populate=image,category`,
//     { next: { revalidate: 60 } }
//   );

//   if (!res.ok) throw new Error("Lỗi lấy tin tức theo slug");
//   const json = await res.json();

//   if (!json.data || json.data.length === 0) return null;

//   const item: RawNews = json.data[0];

//   return {
//     id: item.id,
//     title: item.title,
//     slug: item.slug,
//     content: item.content,
//     image: getImageUrl(item.image),
//     date: item.date,
//     category: item.category || null,
//   };
// }

// export async function getRelatedNews(slug: string): Promise<News[]> {
//   // 1️⃣ Lấy bài hiện tại
//   const currentRes = await fetch(
//     `${API_URL}/api/news?filters[slug][$eq]=${slug}&populate=category`,
//     { next: { revalidate: 60 } }
//   );
//   const currentJson = await currentRes.json();
//   if (!currentJson.data.length) return [];

//   const currentItem: RawNews = currentJson.data[0];
//   const categoryId = currentItem.category?.id;
//   if (!categoryId) return [];

//   // 2️⃣ Lấy tin liên quan
//   const relatedRes = await fetch(
//     `${API_URL}/api/news?filters[category][id][$eq]=${categoryId}&filters[slug][$ne]=${slug}&sort[0]=date:desc&pagination[pageSize]=3&populate=image,category`,
//     { next: { revalidate: 60 } }
//   );
//   if (!relatedRes.ok) throw new Error("Lỗi lấy tin liên quan");

//   const json = await relatedRes.json();
//   return json.data.map((item: RawNews) => ({
//     ...item,
//     image: getImageUrl(item.image),
//   }));
// }

// export async function getLastNews(limit = 3): Promise<News[]> {
//   const res = await fetch(
//     `${API_URL}/api/news?sort[0]=date:desc&pagination[page]=1&pagination[pageSize]=${limit}&populate=image,category`,
//     { next: { revalidate: 60 } }
//   );

//   if (!res.ok) throw new Error("Lỗi lấy tin tức");

//   const json = await res.json();

//   return json.data.map((item: RawNews) => ({
//     id: item.id,
//     title: item.title,
//     slug: item.slug,
//     content: item.content,
//     image: getImageUrl(item.image),
//     date: item.date,
//     category: item.category || null,
//   }));
// }
import { News, RawNews, NewsImage } from "@/types/news";

const API_URL = process.env.NEXT_PUBLIC_API_URL;
export const getImageUrl = (
  imageData?: NewsImage[] | NewsImage | { data?: NewsImage[] | NewsImage } | null
): string | null => {
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
};

export async function getNews(page = 1, pageSize = 1000): Promise<{ news: News[]; totalPages: number }> {
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
// export async function getRelatedNews(slug: string): Promise<News[]> {
//   // 1️⃣ Lấy bài hiện tại
//   const currentRes = await fetch(
//     `${API_URL}/api/news?filters[slug][$eq]=${slug}&populate[category]=true`,
//     { next: { revalidate: 60 } }
//   );

//   if (!currentRes.ok) throw new Error("Lỗi lấy bài viết hiện tại");
//   const currentJson = await currentRes.json();
//   if (!currentJson.data?.length) return [];

//   const currentItem: RawNews = currentJson.data[0];
//   const categoryId = currentItem.category?.id;
//   if (!categoryId) return [];

//   // 2️⃣ Lấy tin liên quan (populate đúng chuẩn Strapi v5)
//   const relatedRes = await fetch(
//     `${API_URL}/api/news?filters[category][id][$eq]=${categoryId}&filters[slug][$ne]=${slug}&populate[image]=true&populate[category]=true&sort[0]=date:desc&pagination[pageSize]=3`,
//     { next: { revalidate: 60 } }
//   );

//   if (!relatedRes.ok) throw new Error("Lỗi lấy tin liên quan");

//   const json = await relatedRes.json();
//   return json.data.map((item: RawNews) => ({
//     id: item.id,
//     title: item.title,
//     slug: item.slug,
//     content: item.content,
//     image: getImageUrl(item.image),
//     date: item.date,
//     category: item.category || null,
//   }));
// }
export async function getRelatedNews(slug: string): Promise<News[]> {
  // 1️⃣ Lấy bài viết hiện tại
  const currentRes = await fetch(
    `${API_URL}/api/news?filters[slug][$eq]=${slug}&populate[category]=true`,
    { next: { revalidate: 60 } }
  );

  if (!currentRes.ok) throw new Error("Lỗi lấy bài viết hiện tại");
  const currentJson = await currentRes.json();
  if (!currentJson.data?.length) return [];

  const currentItem: RawNews = currentJson.data[0];
  const categoryId = currentItem.category?.id;
  if (!categoryId) return [];

  // 2️⃣ Lấy tất cả tin cùng category, trừ tin hiện tại
  const relatedRes = await fetch(
    `${API_URL}/api/news?filters[category][id][$eq]=${categoryId}&filters[slug][$ne]=${slug}&populate[image]=true&populate[category]=true`,
    { next: { revalidate: 60 } }
  );

  if (!relatedRes.ok) throw new Error("Lỗi lấy tin liên quan");
  const json = await relatedRes.json();

  // 3️⃣ Shuffle (trộn ngẫu nhiên) và lấy 3 tin đầu
  const shuffled = json.data.sort(() => Math.random() - 0.5).slice(0, 3);

  // 4️⃣ Trả về dữ liệu
  return shuffled.map((item: RawNews) => ({
    id: item.id,
    title: item.title,
    slug: item.slug,
    content: item.content,
    image: getImageUrl(item.image),
    date: item.date,
    category: item.category || null,
  }));
}
// export async function searchNews(query: string): Promise<News[]> {
//   if (!query) return [];

//   const res = await fetch(
//     `${API_URL}/api/news?filters[$or][0][title][$containsi]=${query}&filters[$or][1][content][$containsi]=${query}&populate=image&sort[0]=date:desc&pagination[pageSize]=1000`,
//     { next: { revalidate: 30 } }
//   );

//   if (!res.ok) throw new Error("Lỗi tìm kiếm tin tức");

//   const json = await res.json();

//   return json.data.map((item: RawNews) => ({
//     id: item.id,
//     title: item.title,
//     slug: item.slug,
//     content: item.content,
//     image: getImageUrl(item.image),
//     date: item.date,
//   }));
// }