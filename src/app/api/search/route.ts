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