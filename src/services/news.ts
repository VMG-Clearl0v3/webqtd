// import { News } from "@/types/news";

// const API_URL = process.env.NEXT_PUBLIC_API_URL;

// function getImageUrl(imageArr: any[]): string | null {
//   if (!imageArr || !Array.isArray(imageArr) || imageArr.length === 0) return null;
//   const img = imageArr[0];
//   const url = img.url?.startsWith("https") ? img.url : `${API_URL}${img.url}`;
//   return url;
// }

// export async function getNews(): Promise<News[]> {
//   const res = await fetch(`${API_URL}/api/news?populate=*&sort[0]=date:desc`, { cache: 'no-store' });
//   const json = await res.json();
//   return json.data.map((item: any) => ({
//     id: item.id,
//     title: item.title,
//     slug: item.slug,
//     content: item.content,
//     image: getImageUrl(item.image),
//     date: item.date,
//   }));
// }
// export async function getNewsBySlug(slug: string): Promise<News | null> {
//   const res = await fetch(`${API_URL}/api/news?filters[slug][$eq]=${slug}&populate=*`, { cache: 'no-store' });
//   const json = await res.json();
//   if (!json.data.length) return null;
//   const item = json.data[0];
//   return {
//     id: item.id,
//     title: item.title,
//     slug: item.slug,
//     content: item.content,
//     image: getImageUrl(item.image),
//     date: item.date,
//   };
// }

// export async function getNews(): Promise<News[]> {
//   return newsList;
// }

// export async function getNewsBySlug(slug: string): Promise<News | undefined> {
//   return newsList.find((item) => item.slug === slug);
// }

import { News } from "@/types/news";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

function getImageUrl(imageArr?: { url: string }[]): string | null {
  if (!imageArr || imageArr.length === 0) return null;
  const img = imageArr[0];
  return img.url.startsWith("http") ? img.url : `${API_URL}${img.url}`;
}

export async function getNews(): Promise<News[]> {
  const res = await fetch(`${API_URL}/api/news?populate=*&sort[0]=date:desc`, {
    cache: "no-store",
  });
  const json = await res.json() as {
    data: {
      id: number;
      title: string;
      slug: string;
      content: string;
      date: string;
      image?: { url: string }[];
    }[];
  };

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
  const res = await fetch(
    `${API_URL}/api/news?filters[slug][$eq]=${slug}&populate=*`,
    { cache: "no-store" }
  );
  const json = await res.json() as {
    data: {
      id: number;
      title: string;
      slug: string;
      content: string;
      date: string;
      image?: { url: string }[];
    }[];
  };

  if (json.data.length === 0) return null;

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