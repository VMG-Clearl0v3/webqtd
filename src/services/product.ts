import { Product } from "@/types/product";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

// function parseDescription(desc: any): string {
//   if (!desc) return "";

//   // nếu là string thì trả về luôn
//   if (typeof desc === "string") return desc;

//   // nếu là array (Strapi rich text)
//   if (Array.isArray(desc)) {
//     return desc.map((block: any) => {
//       if (block.children) {
//         return block.children.map((c: any) => c.text || "").join(" ");
//       }
//       return "";
//     }).join("\n"); // nối các paragraph bằng xuống dòng
//   }
//   // nếu là object kiểu {type, children}
//   if (desc.children) {
//     return desc.children.map((c: any) => c.text || "").join(" ");
//   }
//   return "";
// }
// Trả về array thay vì string
function parseDescriptionBlocks(desc: any): string[] {
  if (!desc) return [];

  if (typeof desc === "string") return [desc];

  if (Array.isArray(desc)) {
    return desc.map((block: any) => {
      if (block.children) {
        return block.children.map((c: any) => c.text || "").join(" ");
      }
      return "";
    }).filter(Boolean); // bỏ block rỗng
  }

  if (desc.children) {
    return [desc.children.map((c: any) => c.text || "").join(" ")];
  }

  return [];
}
function getImageUrl(imageData: any): string | null {
  if (!imageData) return null;

  // Nếu imageData là array (v4 populate) thì lấy phần tử đầu tiên
  const imgObj = Array.isArray(imageData)
    ? imageData[0]
    : imageData;

  const realUrl = imgObj.formats?.large?.url || imgObj.url;
  return realUrl?.startsWith("http") ? realUrl : `${API_URL}${realUrl}`;
}

export async function getProduct(): Promise<Product[]> {
  const res = await fetch(`${API_URL}/api/products?populate=*`, { cache: "no-store" });
  const json = await res.json();

  return json.data.map((item: any) => ({
      id: item.id,
      title: item.title,
      slug: item.slug,
      description: parseDescriptionBlocks(item.description),
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
    description: parseDescriptionBlocks(item.description),
    image: getImageUrl(item.image),
    type: item.type,
  };
}