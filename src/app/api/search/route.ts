// import { NextResponse } from "next/server";
// import { getNews } from "@/services/news";
// import { getProduct } from "@/services/product";

// export async function GET(req: Request) {
//   const { searchParams } = new URL(req.url);
//   const q = searchParams.get("q")?.toLowerCase() || "";

//   if (!q) return NextResponse.json({ products: [], news: [] });

//   const [productsData, newsData] = await Promise.all([
//     getProduct(),
//     getNews(),
//   ]);

//   // ✅ Kiểm tra chắc chắn là mảng
//   const products = Array.isArray(productsData)
//     ? productsData
//     : Array.isArray(productsData?.data)
//     ? productsData.data
//     : [];

//   const news = Array.isArray(newsData)
//     ? newsData
//     : Array.isArray(newsData?.data)
//     ? newsData.data
//     : [];

//   // ✅ Lọc & chuẩn hóa dữ liệu
//   const productMatches = products
//     .filter((p: any) => p.title?.toLowerCase().includes(q))
//     .map((p: any) => ({
//       id: p.id,
//       title: p.title,
//       slug: p.slug,
//       image: p.image,
//       type: p.type,
//     }));

//   const newsMatches = news
//     .filter((n: any) => n.title?.toLowerCase().includes(q))
//     .map((n: any) => ({
//       id: n.id,
//       title: n.title,
//       slug: n.slug,
//       image: n.image,
//     }));

//   return NextResponse.json({ products: productMatches, news: newsMatches });
// }
import { NextResponse } from "next/server";
import { getNews } from "@/services/news";
import { getProduct } from "@/services/product";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const q = searchParams.get("q")?.toLowerCase() || "";

    if (!q) {
      return NextResponse.json({ products: [], news: [] });
    }

    // ✅ Gọi API lấy tất cả sản phẩm và tin tức (chỉ cần 1 trang lớn để search)
    const [products, newsRes] = await Promise.all([
      getProduct(),
      getNews(1, 100), // 👈 lấy 100 tin để đảm bảo search đủ
    ]);

    const newsList = Array.isArray(newsRes?.news) ? newsRes.news : [];

    // ✅ Lọc sản phẩm theo từ khóa
    const productMatches = products
      .filter((p: any) => p.title?.toLowerCase().includes(q))
      .map((p: any) => ({
        id: p.id,
        title: p.title,
        slug: p.slug,
        image: p.image,
        type: p.type,
      }));

    // ✅ Lọc tin tức theo từ khóa
    const newsMatches = newsList
      .filter((n: any) => n.title?.toLowerCase().includes(q))
      .map((n: any) => ({
        id: n.id,
        title: n.title,
        slug: n.slug,
        image: n.image,
      }));

    return NextResponse.json({ products: productMatches, news: newsMatches });
  } catch (error) {
    console.error("Lỗi trong /api/search:", error);
    return NextResponse.json({ products: [], news: [] });
  }
}