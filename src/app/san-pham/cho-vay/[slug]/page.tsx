import { getNewsBySlug } from "@/services/news";
import Image from "next/image";

export default async function NewsDetailPage({ params }: { params: { slug: string } }) {
  const news = await getNewsBySlug(params.slug);

  if (!news) {
    return <p className="text-center text-gray-500">Không tìm thấy tin tức.</p>;
  }

  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      {/* Tiêu đề */}
      <h1 className="text-3xl font-bold mb-4 text-black">{news.title}</h1>

      {/* Ngày đăng */}
      <p className="text-gray-500 text-sm mb-6">
        {new Date(news.date).toLocaleDateString("vi-VN")}
      </p>
       <div className="border-t border-gray-300 pb-6"></div>
      {/* Hình ảnh */}
      {news.image && (
        <div className="w-full h-100 relative">
          <Image
            src={news.image}
            alt={news.title}
            fill
            className="object-cover rounded-lg"
          />
        </div>
      )}

      {/* Nội dung */}
      <div className="prose max-w-none text-black py-4">
        <div dangerouslySetInnerHTML={{ __html: news.content }} />
      </div>
  	</div>
  );
}
