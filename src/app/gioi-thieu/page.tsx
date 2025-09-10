"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutCompanyPage() {
  return (
    <div className="max-w-7xl mx-auto p-6">
        <h2 className="text-3xl md:text-4xl text-center pb-10 font-bold text-[#00377B] tracking-wide">
          Về chúng tôi
        </h2>
      <section className="space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative w-full h-[250px] sm:h-[250px] md:h-[350px]"
          >
            <Image
              src="/image/about1.png"
              alt="Hình ảnh công ty"
              fill
              className="object-cover rounded-2xl shadow-xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-lg md:text-2xl leading-relaxed text-justify text-[#00377B]"
          >
            Quỹ tín dụng nhân dân Trung Sơn được thành lập năm 1996 với mục tiêu
            cung cấp các dịch vụ tài chính an toàn, hiệu quả cho cộng đồng.
          </motion.div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-lg md:text-2xl leading-relaxed text-justify text-[#00377B] order-2 md:order-1"
          >
            Với sứ mệnh tương trợ thành viên trên địa bàn phường, chúng tôi luôn
            nỗ lực phát triển bền vững, nâng cao chất lượng dịch vụ để đáp ứng
            nhu cầu ngày càng đa dạng của khách hàng.
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative w-full h-[250px] sm:h-[250px] md:h-[350px] order-1 md:order-2"
          >
            <Image
              src="/image/about2.jpg"
              alt="Hình ảnh dịch vụ"
              fill
              className="object-cover rounded-2xl shadow-xl"
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
// "use client";
// import { VerticalTimeline, VerticalTimelineElement } 
//   from 'react-vertical-timeline-component';
// import 'react-vertical-timeline-component/style.min.css';
// import { Banknote, Users, Smartphone } from "lucide-react";

// export default function AboutCompanyPage() {
//   return (
//     <div className="bg-gray-50 py-16">
//       <h1 className="text-4xl font-bold text-center mb-16 text-[#00377B]">
//         Hành Trình Phát Triển
//       </h1>
//       <VerticalTimeline lineColor="#00377B">
//         <VerticalTimelineElement
//           contentStyle={{ background: '#fff', color: '#00377B' }}
//           contentArrowStyle={{ borderRight: '7px solid  #fff' }}
//           date="1996"
//           iconStyle={{ background: '#00377B', color: '#fff' }}
//           icon={<Banknote />}
//         >
//           <h3 className="text-xl font-semibold">Khởi đầu</h3>
//           <p>Quỹ tín dụng nhân dân Trung Sơn được thành lập</p>
//         </VerticalTimelineElement>

//         <VerticalTimelineElement
//           contentStyle={{ background: '#fff', color: '#00377B' }}
//           contentArrowStyle={{ borderRight: '7px solid  #fff' }}
//           date="2005"
//           iconStyle={{ background: '#0f766e', color: '#fff' }}
//           icon={<Users />}
//         >
//           <h3 className="text-xl font-semibold">Mở rộng</h3>
//           <p>Mở rộng mạng lưới phục vụ thành viên</p>
//         </VerticalTimelineElement>

//         <VerticalTimelineElement
//           contentStyle={{ background: '#fff', color: '#00377B' }}
//           contentArrowStyle={{ borderRight: '7px solid  #fff' }}
//           date="2020"
//           iconStyle={{ background: '#f97316', color: '#fff' }}
//           icon={<Smartphone />}
//         >
//           <h3 className="text-xl font-semibold">Chuyển đổi số</h3>
//           <p>Đa dạng hóa sản phẩm dịch vụ</p>
//         </VerticalTimelineElement>
//       </VerticalTimeline>
//     </div>
//   );
// }