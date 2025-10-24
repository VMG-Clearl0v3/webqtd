import { NextResponse } from "next/server";
import { getProduct } from "@/services/product";
import { getNews } from "@/services/news";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const q = searchParams.get("q")?.toLowerCase() || "";

  if (!q) return NextResponse.json({ products: [], news: [] });

  // Lấy dữ liệu sản phẩm và tin tức
  const [products, newsRes] = await Promise.all([getProduct(), getNews()]);
  const newsList = newsRes?.news || [];

  const productMatches = products
    .filter((p) => p.title?.toLowerCase().includes(q))
    .map((p) => ({
      id: p.id,
      title: p.title,
      slug: p.slug,
      image: p.image,
      type: p.type,
    }));

  const newsMatches = newsList
    .filter((n) => n.title?.toLowerCase().includes(q))
    .map((n) => ({
      id: n.id,
      title: n.title,
      slug: n.slug,
      image: n.image,
    }));

  return NextResponse.json({ products: productMatches, news: newsMatches });
}
// import { NextResponse } from "next/server";
// import { Product } from "@/types/product";
// import { News, RawNews } from "@/types/news";
// import { getImageUrl } from "@/services/news";

// const API_URL = process.env.NEXT_PUBLIC_API_URL;

// export async function GET(req: Request) {
//   const { searchParams } = new URL(req.url);
//   const q = searchParams.get("q")?.trim().toLowerCase() || "";

//   if (!q) {
//     return NextResponse.json({ products: [], news: [] });
//   }

//   try {
//     // 🔹 Gọi Strapi trực tiếp với filter
//     const [productRes, newsRes] = await Promise.all([
//       fetch(
//         `${API_URL}/api/products?filters[$or][0][title][$containsi]=${q}&filters[$or][1][content][$containsi]=${q}&populate=image&pagination[pageSize]=1000`
//       ),
//       fetch(
//         `${API_URL}/api/news?filters[$or][0][title][$containsi]=${q}&filters[$or][1][content][$containsi]=${q}&populate=image&sort[0]=date:desc&pagination[pageSize]=1000`
//       ),
//     ]);

//     if (!productRes.ok || !newsRes.ok) {
//       throw new Error("Lỗi khi gọi API Strapi");
//     }

//     const productJson = await productRes.json();
//     const newsJson = await newsRes.json();

//     // 🔹 Chuẩn hóa dữ liệu sản phẩm
//     const products: Product[] = (productJson.data ?? []).map((item) => ({
//       id: item.id,
//       title: item.title,
//       slug: item.slug,
//       image: item.image ?? null,
//       type: item.type,
//     }));

//     // 🔹 Chuẩn hóa dữ liệu tin tức
//     const rawNews: RawNews[] = newsJson.data ?? [];
//     const news: News[] = rawNews.map((n) => ({
//       id: n.id,
//       title: n.title,
//       slug: n.slug,
//       content: n.content,
//       date: n.date,
//       image: getImageUrl(n.image),
//       category: n.category ?? null,
//     }));

//     return NextResponse.json({ products, news });
//   } catch (error) {
//     console.error("❌ Lỗi tìm kiếm:", error);
//     return NextResponse.json(
//       { products: [], news: [], error: "Lỗi tải dữ liệu" },
//       { status: 500 }
//     );
//   }
// }