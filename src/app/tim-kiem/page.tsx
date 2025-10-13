import Image from "next/image";

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const params = await searchParams; // 👈 Bắt buộc phải await ở Next.js 14.2+
  const q = params.q || "";
  let products: any[] = [];
  let news: any[] = [];

  try {
    const API_URL = process.env.NEXT_PUBLIC_API_URL;
    const res = await fetch(`${API_URL}/api/search?q=${encodeURIComponent(q)}`, {
      cache: "no-store",
    });
    const data = await res.json();
    products = data.products || [];
    news = data.news || [];
  } catch (error) {
    console.error("Lỗi khi tải dữ liệu tìm kiếm:", error);
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-semibold mb-6">
        Kết quả tìm kiếm cho “{q}”
      </h1>

      {products.length === 0 && news.length === 0 ? (
        <div className="flex flex-col items-center text-gray-500">
          <Image
            src="/image/no-search-found.png"
            alt="no results"
            width={160}
            height={160}
          />
          <p className="mt-4">Không tìm thấy kết quả phù hợp.</p>
        </div>
      ) : (
        <>
          {products.length > 0 && (
            <>
              <h2 className="text-xl font-bold mt-8 mb-3">Sản phẩm</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {products.map((p) => {
                  const typePath =
                    p.type === "loan"
                      ? "cho-vay"
                      : p.type === "deposit"
                      ? "tien-gui"
                      : "";
                  return (
                    <a
                      key={p.id}
                      href={`/san-pham/${typePath}/${p.slug}`}
                      className="border rounded-lg overflow-hidden hover:shadow-lg transition"
                    >
                      <Image
                        src={p.image || "/image/noimage.jpg"}
                        alt={p.title}
                        width={400}
                        height={200}
                        className="object-cover w-full h-40"
                      />
                      <div className="p-3 font-medium">{p.title}</div>
                    </a>
                  );
                })}
              </div>
            </>
          )}

          {news.length > 0 && (
            <>
              <h2 className="text-xl font-bold mt-8 mb-3">Tin tức</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {news.map((n) => (
                  <a
                    key={n.id}
                    href={`/tin-tuc/${n.slug}`}
                    className="border rounded-lg overflow-hidden hover:shadow-lg transition"
                  >
                    <Image
                      src={n.image || "/image/noimage.jpg"}
                      alt={n.title}
                      width={400}
                      height={200}
                      className="object-cover w-full h-40"
                    />
                    <div className="p-3 font-medium">{n.title}</div>
                  </a>
                ))}
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
}