import { Product } from "@/types/product";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

function getImageUrl(imageData: unknown): string {
  if (!imageData) return null;
  const imgObj = Array.isArray(imageData)
    ? imageData[0]
    : imageData;
  const realUrl = imgObj.formats?.large?.url || imgObj.url;
  return realUrl?.startsWith("http") ? realUrl : `${API_URL}${realUrl}`;
}
export async function getProduct(): Promise<Product[]> {
  const res = await fetch(`${API_URL}/api/products?populate=*`, { cache: "no-store" });
  const json = await res.json();
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
  const res = await fetch(`${API_URL}/api/products?filters[slug][$eq]=${slug}&populate=*`, { cache: "no-store" });
  const json = await res.json();
  if (!json.data.length) return null;
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