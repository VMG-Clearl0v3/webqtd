import { Product, RawProduct, ProductImage } from "@/types/product";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const getImageUrl = (imageData?: ProductImage[] | ProductImage | { data?: ProductImage[] | ProductImage}): string | null => {
  if (!imageData) return null;

  let imgObj: ProductImage | undefined;

  if (Array.isArray(imageData)) {
    imgObj = imageData[0];
  } else if ("data" in imageData && imageData.data) {
    imgObj = Array.isArray(imageData.data) ? imageData.data[0] : imageData.data;
  } else {
    imgObj = imageData as ProductImage;
  }

  if (!imgObj) return null;

  const url = imgObj.formats?.large?.url || imgObj.url;
  if (!url) return null;

  return url.startsWith("http") ? url : `${API_URL}${url}`;
}

export async function getProduct(): Promise<Product[]> {
  const res = await fetch(`${API_URL}/api/products?populate=*`, {next:{revalidate: 60 }});
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
  const res = await fetch(`${API_URL}/api/products?filters[slug][$eq]=${slug}&populate=*`, {next:{revalidate: 60 }});
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