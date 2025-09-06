// import { Product } from "@/types/product";

// const API_URL = process.env.NEXT_PUBLIC_API_URL;

// function getImageUrl(imageData: any): string | null {
//   if (!imageData) return null;

//   // Nếu imageData là array (v4 populate) thì lấy phần tử đầu tiên
//   const imgObj = Array.isArray(imageData)
//     ? imageData[0]
//     : imageData;

//   const realUrl = imgObj.formats?.large?.url || imgObj.url;
//   return realUrl?.startsWith("http") ? realUrl : `${API_URL}${realUrl}`;
// }

// export async function getProduct(): Promise<Product[]> {
//   const res = await fetch(`${API_URL}/api/products?populate=*`, { cache: "no-store" });
//   const json = await res.json();

//   return json.data.map((item: any) => ({
//       id: item.id,
//       title: item.title,
//       slug: item.slug,
//       condition: item.condition,
//       feature: item.feature,
//       document: item.document,
//       image: getImageUrl(item.image),
//       type: item.type,
//   }));
// }

// export async function getProductBySlug(slug: string): Promise<Product | null> {
//   const res = await fetch(`${API_URL}/api/products?filters[slug][$eq]=${slug}&populate=*`, { cache: "no-store" });
//   const json = await res.json();
//   if (!json.data.length) return null;
//   const item = json.data[0];
//   return {
//     id: item.id,
//     title: item.title,
//     slug: item.slug,
//     condition: item.condition,
//     feature: item.feature,
//     document: item.document,
//     image: getImageUrl(item.image),
//     type: item.type,
//   };
// }
import { Product } from "@/types/product";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

function getImageUrl(imageData?: { url: string; formats?: { large?: { url: string } } }[] | { url: string; formats?: { large?: { url: string } } }): string | null {
  if (!imageData) return null;

  // Nếu là array thì lấy phần tử đầu tiên, nếu không thì lấy object
  const imgObj = Array.isArray(imageData) ? imageData[0] : imageData;
  if (!imgObj) return null;

  const realUrl = imgObj.formats?.large?.url || imgObj.url;
  if (!realUrl) return null;

  return realUrl.startsWith("http") ? realUrl : `${API_URL}${realUrl}`;
}

export async function getProduct(): Promise<Product[]> {
  const res = await fetch(`${API_URL}/api/products?populate=*`, {
    cache: "no-store",
  });
  const json = (await res.json()) as {
    data: {
      id: number;
      title: string;
      slug: string;
      condition: string;
      feature: string;
      document: string;
      type: string;
      image?: { url: string; formats?: { large?: { url: string } } }[] | { url: string; formats?: { large?: { url: string } } };
    }[];
  };

  return json.data.map((item) => ({
    id: item.id,
    title: item.title,
    slug: item.slug,
    condition: item.condition,
    feature: item.feature,
    document: item.document,
    image: getImageUrl(item.image),
    type: item.type,
  }));
}

export async function getProductBySlug(slug: string): Promise<Product | null> {
  const res = await fetch(
    `${API_URL}/api/products?filters[slug][$eq]=${slug}&populate=*`,
    { cache: "no-store" }
  );
  const json = (await res.json()) as {
    data: {
      id: number;
      title: string;
      slug: string;
      condition: string;
      feature: string;
      document: string;
      type: string;
      image?: { url: string; formats?: { large?: { url: string } } }[] | { url: string; formats?: { large?: { url: string } } };
    }[];
  };

  if (json.data.length === 0) return null;

  const item = json.data[0];
  return {
    id: item.id,
    title: item.title,
    slug: item.slug,
    condition: item.condition,
    feature: item.feature,
    document: item.document,
    image: getImageUrl(item.image),
    type: item.type,
  };
}