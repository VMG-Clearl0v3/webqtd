import { Product, RawProduct, ProductImage } from "@/types/product";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const getImageUrl = (imageData?: ProductImage[] | ProductImage): string | null => {
  if (!imageData) return null;

  // Nếu imageData là mảng thì lấy phần tử đầu tiên
  const imgObj: ProductImage | undefined = Array.isArray(imageData) ? imageData[0] : imageData;
  if (!imgObj) return null;

  // Lấy ảnh large nếu có, nếu không thì url gốc
  const realUrl = imgObj.formats?.large?.url || imgObj.url;
  if (!realUrl) return null;

  // Nếu URL bắt đầu bằng http/https → trả luôn, nếu không → nối API_URL
  return realUrl.startsWith("http") ? realUrl : `${API_URL}${realUrl}`;
}

export async function getProduct(): Promise<Product[]> {
  const res = await fetch(`${API_URL}/api/products?populate=*`, { cache: "no-store" });
  const json: { data: RawProduct[] } = await res.json();
  return json.data.map((item: RawProduct) => ({
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
  const json: { data: RawProduct[] } = await res.json();
  if (json.data.length === 0) return null;
  const item: RawProduct = json.data[0];
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