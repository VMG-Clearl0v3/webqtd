import { NextResponse } from "next/server";
import { getNews } from "@/services/news";
import { getProduct } from "@/services/product";
import { Product } from "@/types/product";
import { News } from "@/types/news";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const q = searchParams.get("q")?.toLowerCase() || "";

    if (!q) {
      return NextResponse.json({ products: [], news: [] });
    }

    // ✅ Lấy dữ liệu
    const [products, newsRes] = await Promise.all([
      getProduct(),
      getNews(1, 100),
    ]);

    const newsList: News[] = Array.isArray(newsRes?.news) ? newsRes.news : [];

    // ✅ Lọc sản phẩm theo từ khóa
    const productMatches: Product[] = products
      .filter((p) => p.title.toLowerCase().includes(q))
      .map((p) => ({
        id: p.id,
        title: p.title,
        slug: p.slug,
        image: p.image,
        type: p.type,
        condition: p.condition,
        feature: p.feature,
        document: p.document,
      }));

    // ✅ Lọc tin tức theo từ khóa
    const newsMatches: News[] = newsList
      .filter((n) => n.title.toLowerCase().includes(q))
      .map((n) => ({
        id: n.id,
        title: n.title,
        slug: n.slug,
        image: n.image,
        content: n.content,
        date: n.date,
      }));

    return NextResponse.json({ products: productMatches, news: newsMatches });
  } catch (error) {
    console.error("Lỗi trong /api/search:", error);
    return NextResponse.json({ products: [], news: [] });
  }
}