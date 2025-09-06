import { getNewsBySlug } from "@/services/news";
import { notFound } from 'next/navigation';
import Image from "next/image";
import ReactMarkdown from 'react-markdown';

export default async function NewsDetailPage({ params }: { params: Promise<{ slug: string }>}){
  const { slug } = await params;
  const news = await getNewsBySlug(slug);
    if (!news) {notFound();}
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4 text-black">{news.title}</h1>
      {news.image && <img src={news.image} alt={news.title} className="mb-4 w-full" />}
      <div className="prose prose-lg max-w-none text-black">
        <ReactMarkdown>{news.content}</ReactMarkdown>
      </div>
      <p className="text-sm italic mt-4 text-black">{`${new Date(news.date).toLocaleDateString('vi-VN', {
          timeZone: 'Asia/Ho_Chi_Minh',
          day: '2-digit',
          month: '2-digit',
          year: 'numeric'
        })} ${new Date(news.date).toLocaleTimeString('vi-VN', {
          timeZone: 'Asia/Ho_Chi_Minh',
          hour: '2-digit',
          minute: '2-digit'
        })}`}</p>
    </div>
  );
}
// import { getNewsBySlug } from "@/services/news";
// import { notFound } from "next/navigation";
// import Image from "next/image";
// import ReactMarkdown from "react-markdown";

// export default async function NewsDetailPage({
//   params,
// }: {
//   params: { slug: string };
// }) {
//   const { slug } = params; 
//   const news = await getNewsBySlug(slug);

//   if (!news) notFound();

//   return (
//     <div className="max-w-4xl mx-auto p-6">
//       <h1 className="text-3xl font-bold mb-4 text-black">{news.title}</h1>

//       {news.image && (
//         <Image
//           src={news.image}
//           alt={news.title}
//           width={1200} // width/height bắt buộc cho next/image
//           height={600}
//           className="mb-4 w-full h-auto"
//           priority
//         />
//       )}

//       <div className="prose prose-lg max-w-none text-black">
//         <ReactMarkdown>{news.content}</ReactMarkdown>
//       </div>

//       <p className="text-sm italic mt-4 text-black">
//         {`${new Date(news.date).toLocaleDateString("vi-VN", {
//           timeZone: "Asia/Ho_Chi_Minh",
//           day: "2-digit",
//           month: "2-digit",
//           year: "numeric",
//         })} ${new Date(news.date).toLocaleTimeString("vi-VN", {
//           timeZone: "Asia/Ho_Chi_Minh",
//           hour: "2-digit",
//           minute: "2-digit",
//         })}`}
//       </p>
//     </div>
//   );
// }